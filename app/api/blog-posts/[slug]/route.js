import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const BLOG_POSTS_FILE = path.join(process.cwd(), 'data', 'blog-posts.json');

export async function GET(request, { params }) {
  try {
    const { slug } = params;
    const data = await fs.readFile(BLOG_POSTS_FILE, 'utf-8');
    const { posts } = JSON.parse(data);
    const post = posts.find(p => p.slug === slug);

    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    return NextResponse.json(post);
  } catch (error) {
    console.error('Error reading blog post:', error);
    return NextResponse.json({ error: 'Failed to read blog post' }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  try {
    const { slug } = params;
    const updatedPost = await request.json();
    const data = await fs.readFile(BLOG_POSTS_FILE, 'utf-8');
    const { posts } = JSON.parse(data);

    const index = posts.findIndex(p => p.slug === slug);
    if (index === -1) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    posts[index] = { ...posts[index], ...updatedPost };

    await fs.writeFile(BLOG_POSTS_FILE, JSON.stringify({ posts }, null, 2));

    return NextResponse.json(posts[index]);
  } catch (error) {
    console.error('Error updating blog post:', error);
    return NextResponse.json({ error: 'Failed to update blog post' }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    const { slug } = params;
    const data = await fs.readFile(BLOG_POSTS_FILE, 'utf-8');
    const { posts } = JSON.parse(data);

    const filteredPosts = posts.filter(p => p.slug !== slug);

    if (filteredPosts.length === posts.length) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    await fs.writeFile(BLOG_POSTS_FILE, JSON.stringify({ posts: filteredPosts }, null, 2));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting blog post:', error);
    return NextResponse.json({ error: 'Failed to delete blog post' }, { status: 500 });
  }
} 