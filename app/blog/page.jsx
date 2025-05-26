'use client';

import { FaCalendar, FaUser, FaTags, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import blogPosts from '@/data/blog-posts.json';

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-20 bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Neural Network Background */}
        <div className="absolute inset-0">
          {/* Dark gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a0a] to-[#121212]" />
          
          {/* Neural Network Container */}
          <div className="absolute inset-0">
            <div className="neural-network">
              {/* Large Glowing Nodes */}
              <div className="absolute top-[15%] left-[20%] w-24 h-24 rounded-full bg-[#ff6700]/60 blur-[50px] animate-pulse-slow" />
              <div className="absolute top-[35%] right-[25%] w-32 h-32 rounded-full bg-[#3a6ea5]/50 blur-[60px] animate-float-slow" />
              <div className="absolute bottom-[25%] left-[35%] w-28 h-28 rounded-full bg-[#004e98]/55 blur-[55px] animate-pulse-delayed" />
              
              {/* Medium Nodes */}
              <div className="absolute top-[45%] left-[15%] w-16 h-16 rounded-full bg-[#ebebeb]/45 blur-[40px] animate-float-delayed" />
              <div className="absolute top-[25%] right-[15%] w-20 h-20 rounded-full bg-[#ff6700]/50 blur-[45px] animate-pulse-slow" />
              <div className="absolute bottom-[35%] right-[30%] w-16 h-16 rounded-full bg-[#3a6ea5]/45 blur-[40px] animate-float-slow" />
              
              {/* Small Nodes */}
              <div className="absolute top-[55%] left-[45%] w-12 h-12 rounded-full bg-[#004e98]/40 blur-[30px] animate-pulse-delayed" />
              <div className="absolute top-[30%] left-[40%] w-8 h-8 rounded-full bg-[#ebebeb]/40 blur-[25px] animate-float-delayed" />
              <div className="absolute bottom-[40%] right-[45%] w-12 h-12 rounded-full bg-[#ff6700]/40 blur-[30px] animate-pulse-slow" />
              
              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full opacity-50">
                <defs>
                  <linearGradient id="line-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ff6700" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#3a6ea5" stopOpacity="0.5" />
                  </linearGradient>
                  <linearGradient id="line-gradient-2" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#004e98" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#ebebeb" stopOpacity="0.4" />
                  </linearGradient>
                </defs>
                
                {/* Primary Connections */}
                <path 
                  className="neural-path" 
                  d="M 20% 15% L 45% 55% L 75% 35%" 
                  stroke="url(#line-gradient-1)" 
                  strokeWidth="3"
                  fill="none"
                />
                <path 
                  className="neural-path" 
                  d="M 80% 25% L 55% 45% L 35% 85%" 
                  stroke="url(#line-gradient-2)" 
                  strokeWidth="3"
                  fill="none"
                />
                
                {/* Secondary Connections */}
                <path 
                  className="neural-path" 
                  d="M 15% 45% Q 45% 25% 85% 35%" 
                  stroke="url(#line-gradient-1)" 
                  strokeWidth="2"
                  fill="none"
                />
                <path 
                  className="neural-path" 
                  d="M 25% 75% Q 55% 85% 75% 65%" 
                  stroke="url(#line-gradient-2)" 
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </div>
          </div>

          {/* Subtle overlay for text contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/10 to-black/30" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl mx-auto text-center">
            {/* Content */}
            <div className="space-y-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              <span className="bg-gradient-to-r from-[#ff6700] to-white bg-clip-text text-transparent">
                  AI Insights & Trends
              </span>
                <br />
                <span className="text-white">Stay Ahead with Our Latest Updates</span>
            </h1>
              <p className="text-xl text-gray-300">
                Explore our collection of articles, insights, and updates about AI technologies, including LLM, RAG, and MCP solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#blog-posts">
                  <Button
                    className="bg-gradient-to-r from-[#ff6700] to-white text-black hover:opacity-90 transition-opacity"
                    size="lg"
                  >
                    Read Latest Posts
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gradient Separator */}
      <div className="h-1 bg-gradient-to-r from-[#ff6700] via-white to-[#ff6700]" />

      {/* Blog Posts Grid */}
      <section id="blog-posts" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-[#ff6700]/50 transition-all duration-300"
              >
                <div className="relative h-64 mb-6 rounded-xl overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-60" />
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <FaCalendar className="h-5 w-5 text-[#ff6700]" />
                  <span className="text-[#ff6700]">{post.date}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{post.title}</h3>
                <p className="text-gray-400 mb-6">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full text-sm bg-gray-800 text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-400">
                    <FaUser className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center text-[#ff6700] group-hover:translate-x-2 transition-transform">
                    Read More
                    <FaArrowRight className="ml-2" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] border-t border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how AI can revolutionize your business operations. Schedule a free 1-hour consultation to explore custom AI solutions tailored to your needs.
          </p>
          <div className="flex justify-center">
            <Link href="/contact">
              <Button
                variant="gradient"
                size="lg"
              >
                Schedule Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 