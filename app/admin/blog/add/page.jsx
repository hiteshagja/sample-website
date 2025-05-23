'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function AddBlogPostPage() {
  const [post, setPost] = useState({
    title: '',
    excerpt: '',
    content: '',
    author: '',
    tags: '',
    image: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    // Check if user is authenticated
    const isAuthenticated = localStorage.getItem('adminAuthenticated') === 'true';
    if (!isAuthenticated) {
      router.push('/admin/login');
    }
  }, [router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      // Generate slug from title
      const slug = post.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');

      const response = await fetch('/api/blog-posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...post,
          slug,
          tags: post.tags.split(',').map(tag => tag.trim()),
          date: new Date().toISOString().split('T')[0],
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create post');
      }

      router.push('/admin/blog');
    } catch (error) {
      console.error('Error creating post:', error);
      setError('Failed to create post. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">
          <span className="bg-gradient-to-r from-[#ff6700] to-white bg-clip-text text-transparent">
            Add New Blog Post
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
              placeholder="Enter a descriptive title for your blog post"
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
              placeholder="Write a brief summary of your blog post"
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
              placeholder="Write your blog post content here"
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
              placeholder="Enter the author's name"
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
              placeholder="Enter tags separated by commas (e.g., AI, Technology, Innovation)"
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
              placeholder="Enter the URL of the featured image"
              className="mt-2 bg-gray-900 border-gray-800 text-white"
              required
            />
          </div>

          <div className="flex gap-4">
            <Button
              type="submit"
              className="bg-[#ff6700] hover:bg-[#ff8533]"
              disabled={isLoading}
            >
              {isLoading ? 'Creating...' : 'Create Post'}
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