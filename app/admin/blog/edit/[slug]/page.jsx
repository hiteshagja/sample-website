'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { use } from 'react';

export default function EditBlogPostPage({ params }) {
  const resolvedParams = use(params);
  const [post, setPost] = useState({
    title: '',
    excerpt: '',
    content: '',
    author: '',
    tags: '',
    image: '',
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('adminAuthenticated') === 'true';
    if (!isAuthenticated) {
      router.push('/admin/login');
      return;
    }

    const loadPost = async () => {
      try {
        const response = await fetch(`/api/blog-posts/${resolvedParams.slug}`);
        if (!response.ok) throw new Error('Failed to load post');
        const data = await response.json();
        setPost({
          ...data,
          tags: data.tags.join(', '),
        });
      } catch (error) {
        console.error('Error loading post:', error);
        setError('Failed to load post');
      } finally {
        setIsLoading(false);
      }
    };

    loadPost();
  }, [resolvedParams.slug, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch(`/api/blog-posts/${resolvedParams.slug}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...post,
          tags: post.tags.split(',').map(tag => tag.trim()),
        }),
      });

      if (!response.ok) throw new Error('Failed to update post');

      router.push('/admin/blog');
    } catch (error) {
      console.error('Error updating post:', error);
      setError('Failed to update post');
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#ff6700] mx-auto"></div>
          <p className="mt-4">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">
          <span className="bg-gradient-to-r from-[#ff6700] to-white bg-clip-text text-transparent">
            Edit Blog Post
          </span>
        </h1>

        {error && (
          <div className="bg-red-500/10 border border-red-500 text-red-500 px-4 py-3 rounded mb-6">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              value={post.title}
              onChange={(e) => setPost({ ...post, title: e.target.value })}
              className="mt-2 bg-gray-900 border-gray-800 text-white"
              required
            />
          </div>

          <div>
            <Label htmlFor="excerpt">Excerpt</Label>
            <Textarea
              id="excerpt"
              value={post.excerpt}
              onChange={(e) => setPost({ ...post, excerpt: e.target.value })}
              className="mt-2 bg-gray-900 border-gray-800 text-white"
              required
            />
          </div>

          <div>
            <Label htmlFor="content">Content</Label>
            <Textarea
              id="content"
              value={post.content}
              onChange={(e) => setPost({ ...post, content: e.target.value })}
              className="mt-2 bg-gray-900 border-gray-800 text-white min-h-[300px]"
              required
            />
          </div>

          <div>
            <Label htmlFor="author">Author</Label>
            <Input
              id="author"
              value={post.author}
              onChange={(e) => setPost({ ...post, author: e.target.value })}
              className="mt-2 bg-gray-900 border-gray-800 text-white"
              required
            />
          </div>

          <div>
            <Label htmlFor="tags">Tags (comma-separated)</Label>
            <Input
              id="tags"
              value={post.tags}
              onChange={(e) => setPost({ ...post, tags: e.target.value })}
              className="mt-2 bg-gray-900 border-gray-800 text-white"
              required
            />
          </div>

          <div>
            <Label htmlFor="image">Image URL</Label>
            <Input
              id="image"
              value={post.image}
              onChange={(e) => setPost({ ...post, image: e.target.value })}
              className="mt-2 bg-gray-900 border-gray-800 text-white"
              required
            />
          </div>

          <div className="flex gap-4">
            <Button
              type="submit"
              className="bg-[#ff6700] hover:bg-[#ff8533]"
            >
              Update Post
            </Button>
            <Button
              type="button"
              variant="outline"
              className="border-gray-800 text-gray-300"
              onClick={() => router.push('/admin/blog')}
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
} 