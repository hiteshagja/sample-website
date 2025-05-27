import { NextResponse } from 'next/server';
import blogPosts from '@/data/blog-posts.json';
import fs from 'fs/promises';
import path from 'path';

// Helper function to get blog posts
function getBlogPosts() {
  return blogPosts.posts || [];
}

// Helper function to format image URL
function formatImageUrl(url) {
  if (!url) return '/images/blog-placeholder.jpg';
  
  // If it's already a local path, return as is
  if (url.startsWith('/')) return url;
  
  try {
    // If it's a URL without protocol, add https://
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      url = 'https://' + url;
    }
    
    // Validate URL
    new URL(url);
    return url;
  } catch (error) {
    console.error('Invalid image URL:', error);
    return '/images/blog-placeholder.jpg';
  }
}

// Helper function to create MDX file
async function createMdxFile(slug, content) {
  const mdxPath = path.join(process.cwd(), 'content', 'blog', slug, 'index.mdx');
  const mdxDir = path.dirname(mdxPath);
  
  // Create directory if it doesn't exist
  await fs.mkdir(mdxDir, { recursive: true });
  
  // Create MDX file with frontmatter
  const mdxContent = `---
title: '${content.title}'
date: '${content.date}'
author: '${content.author}'
tags: ${JSON.stringify(content.tags)}
readTime: '${content.readTime || '5 min read'}'
image: '${formatImageUrl(content.image)}'
---

${content.content}`;

  await fs.writeFile(mdxPath, mdxContent, 'utf8');
}

export async function GET() {
  try {
    const posts = getBlogPosts();
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

    // Get existing posts
    const posts = getBlogPosts();

    // Check if slug already exists
    const slugExists = posts.some(post => post.slug === newPost.slug);
    if (slugExists) {
      return NextResponse.json(
        { error: 'A post with this title already exists' },
        { status: 400 }
      );
    }

    // Create MDX file with full content
    await createMdxFile(newPost.slug, {
      ...newPost,
      date: new Date().toISOString().split('T')[0],
      readTime: '5 min read'
    });

    // Add only metadata to blog-posts.json
    const postMetadata = {
      slug: newPost.slug,
      title: newPost.title,
      excerpt: newPost.excerpt,
      author: newPost.author,
      date: new Date().toISOString().split('T')[0],
      tags: newPost.tags,
      readTime: '5 min read',
      image: formatImageUrl(newPost.image)
    };

    posts.push(postMetadata);

    // Save updated metadata to blog-posts.json
    const blogPostsPath = path.join(process.cwd(), 'data', 'blog-posts.json');
    await fs.writeFile(
      blogPostsPath,
      JSON.stringify({ posts }, null, 2),
      'utf8'
    );

    return NextResponse.json({ post: postMetadata }, { status: 201 });
  } catch (error) {
    console.error('Error creating blog post:', error);
    return NextResponse.json(
      { error: 'Failed to create blog post' },
      { status: 500 }
    );
  }
} 