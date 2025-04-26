import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const blogPostsPath = path.join(process.cwd(), 'data', 'blog-posts.json');

// Helper function to read blog posts
function readBlogPosts() {
  try {
    const data = fs.readFileSync(blogPostsPath, 'utf8');
    const jsonData = JSON.parse(data);
    return jsonData.posts || [];
  } catch (error) {
    console.error('Error reading blog posts:', error);
    return [];
  }
}

// Helper function to write blog posts
function writeBlogPosts(posts) {
  try {
    const data = { posts };
    fs.writeFileSync(blogPostsPath, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Error writing blog posts:', error);
    throw error;
  }
}

export async function GET() {
  try {
    const posts = readBlogPosts();
    return NextResponse.json({ posts });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch blog posts' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const newPost = await request.json();
    
    // Validate required fields
    if (!newPost.title || !newPost.content || !newPost.excerpt || !newPost.author) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Read existing posts
    const posts = readBlogPosts();

    // Check if slug already exists
    const slugExists = posts.some(post => post.slug === newPost.slug);
    if (slugExists) {
      return NextResponse.json(
        { error: 'A post with this title already exists' },
        { status: 400 }
      );
    }

    // Add new post
    posts.push(newPost);

    // Write updated posts
    writeBlogPosts(posts);

    return NextResponse.json({ post: newPost }, { status: 201 });
  } catch (error) {
    console.error('Error creating blog post:', error);
    return NextResponse.json(
      { error: 'Failed to create blog post' },
      { status: 500 }
    );
  }
} 