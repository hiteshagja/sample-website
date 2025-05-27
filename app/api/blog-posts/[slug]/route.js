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

// Helper function to read MDX file
async function readMdxFile(slug) {
  try {
    const mdxPath = path.join(process.cwd(), 'content', 'blog', slug, 'index.mdx');
    const content = await fs.readFile(mdxPath, 'utf8');
    
    // Extract frontmatter and content
    const parts = content.split('---');
    if (parts.length < 3) {
      console.error('Invalid MDX format: missing frontmatter or content');
      return null;
    }

    // parts[0] is empty, parts[1] is frontmatter, parts[2] is content
    const frontmatter = parts[1].trim();
    const mdxContent = parts[2].trim();

    // Parse frontmatter
    const frontmatterObj = {};
    frontmatter.split('\n').forEach(line => {
      const [key, ...valueParts] = line.split(':');
      if (key && valueParts.length) {
        const value = valueParts.join(':').trim();
        try {
          frontmatterObj[key.trim()] = JSON.parse(value);
        } catch {
          frontmatterObj[key.trim()] = value.replace(/^['"]|['"]$/g, '');
        }
      }
    });

    return {
      ...frontmatterObj,
      content: mdxContent
    };
  } catch (error) {
    console.error('Error reading MDX file:', error);
    return null;
  }
}

// Helper function to create/update MDX file
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

// Helper function to delete MDX file
async function deleteMdxFile(slug) {
  const mdxPath = path.join(process.cwd(), 'content', 'blog', slug, 'index.mdx');
  const mdxDir = path.dirname(mdxPath);
  
  try {
    await fs.unlink(mdxPath);
    await fs.rmdir(mdxDir);
  } catch (error) {
    console.error('Error deleting MDX file:', error);
  }
}

export async function GET(request, context) {
  try {
    const { slug } = await context.params;
    const posts = getBlogPosts();
    const post = posts.find(p => p.slug === slug);

    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    // Read MDX content
    const mdxData = await readMdxFile(slug);
    if (mdxData) {
      const response = {
        ...post,
        content: mdxData.content || '' // Ensure content is never undefined
      };
      return NextResponse.json(response);
    }

    return NextResponse.json(post);
  } catch (error) {
    console.error('Error reading blog post:', error);
    return NextResponse.json({ error: 'Failed to read blog post' }, { status: 500 });
  }
}

export async function PUT(request, context) {
  try {
    const { slug } = await context.params;
    const updatedPost = await request.json();

    // Validate required fields
    if (!updatedPost.title || !updatedPost.content || !updatedPost.excerpt || !updatedPost.author) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const posts = getBlogPosts();
    const index = posts.findIndex(p => p.slug === slug);
    if (index === -1) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    // Prepare the post data for MDX
    const postData = {
      ...posts[index],
      ...updatedPost,
      slug, // Keep the original slug
      date: updatedPost.date || posts[index].date,
      readTime: updatedPost.readTime || posts[index].readTime || '5 min read',
      tags: Array.isArray(updatedPost.tags) ? updatedPost.tags : updatedPost.tags.split(',').map(tag => tag.trim()),
      image: formatImageUrl(updatedPost.image)
    };

    // Update MDX file with full content
    await createMdxFile(slug, postData);

    // Update only metadata in blog-posts.json
    const postMetadata = {
      slug: postData.slug,
      title: postData.title,
      excerpt: postData.excerpt,
      author: postData.author,
      date: postData.date,
      tags: postData.tags,
      readTime: postData.readTime,
      image: postData.image
    };

    posts[index] = postMetadata;

    // Save updated metadata to blog-posts.json
    const blogPostsPath = path.join(process.cwd(), 'data', 'blog-posts.json');
    await fs.writeFile(
      blogPostsPath,
      JSON.stringify({ posts }, null, 2),
      'utf8'
    );

    return NextResponse.json(postMetadata);
  } catch (error) {
    console.error('Error updating blog post:', error);
    return NextResponse.json({ error: 'Failed to update blog post' }, { status: 500 });
  }
}

export async function DELETE(request, context) {
  try {
    const { slug } = await context.params;
    const posts = getBlogPosts();
    const filteredPosts = posts.filter(p => p.slug !== slug);

    if (filteredPosts.length === posts.length) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    // Delete MDX file
    await deleteMdxFile(slug);

    // Save updated metadata to blog-posts.json
    const blogPostsPath = path.join(process.cwd(), 'data', 'blog-posts.json');
    await fs.writeFile(
      blogPostsPath,
      JSON.stringify({ posts: filteredPosts }, null, 2),
      'utf8'
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting blog post:', error);
    return NextResponse.json({ error: 'Failed to delete blog post' }, { status: 500 });
  }
} 