'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function AddBlogPostPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [author, setAuthor] = useState('');
  const [tags, setTags] = useState('');
  const [image, setImage] = useState('');
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

    // TODO: Implement actual blog post creation
    try {
      // Here you would typically make an API call to create the blog post
      console.log('Creating blog post:', {
        title,
        content,
        excerpt,
        author,
        tags: tags.split(',').map(tag => tag.trim()),
        image,
      });

      // Redirect to blog listing page after successful creation
      router.push('/blog');
    } catch (err) {
      setError('Failed to create blog post. Please try again.');
    }
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-24 bg-gradient-to-b from-[#0a0a0a] to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#ff6700] to-white bg-clip-text text-transparent">
                Create New Blog Post
              </span>
            </h1>
            <p className="text-gray-400">Fill in the details below to create a new blog post</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-2">
              <Label htmlFor="title" className="text-gray-300">Title</Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="bg-gray-900 border-gray-800 text-white"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="excerpt" className="text-gray-300">Excerpt</Label>
              <Textarea
                id="excerpt"
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                className="bg-gray-900 border-gray-800 text-white min-h-[100px]"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="content" className="text-gray-300">Content</Label>
              <Textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="bg-gray-900 border-gray-800 text-white min-h-[300px]"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="author" className="text-gray-300">Author</Label>
                <Input
                  id="author"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  className="bg-gray-900 border-gray-800 text-white"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="tags" className="text-gray-300">Tags (comma-separated)</Label>
                <Input
                  id="tags"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  className="bg-gray-900 border-gray-800 text-white"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="image" className="text-gray-300">Featured Image URL</Label>
              <Input
                id="image"
                type="url"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className="bg-gray-900 border-gray-800 text-white"
                required
              />
            </div>

            {error && (
              <div className="text-red-500 text-sm">{error}</div>
            )}

            <div className="flex justify-end gap-4">
              <Button
                type="button"
                variant="outline"
                className="border-gray-800 text-gray-400 hover:bg-gray-800"
                onClick={() => router.push('/blog')}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="bg-[#ff6700] hover:bg-[#ff6700]/90 text-white"
              >
                Create Post
              </Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
} 