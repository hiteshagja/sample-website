'use client';

import { FaCalendar, FaUser, FaTags, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const blogPosts = [
  {
    slug: 'ai-trends-2024',
    title: 'Top AI Trends to Watch in 2024',
    excerpt: 'Explore the most significant AI trends that will shape the future of technology and business.',
    image: '/blog/ai-trends.jpg',
    author: 'John Doe',
    date: '2024-03-15',
    tags: ['AI Trends', 'Technology', 'Innovation'],
    readTime: '5 min read',
  },
  {
    slug: 'machine-learning-business',
    title: 'Machine Learning in Business: A Practical Guide',
    excerpt: 'Learn how businesses are leveraging machine learning to drive growth and efficiency.',
    image: '/blog/ml-business.jpg',
    author: 'Jane Smith',
    date: '2024-03-10',
    tags: ['Machine Learning', 'Business', 'AI'],
    readTime: '7 min read',
  },
  {
    slug: 'ai-ethics',
    title: 'The Ethics of AI: Balancing Innovation and Responsibility',
    excerpt: 'A deep dive into the ethical considerations surrounding AI development and deployment.',
    image: '/blog/ai-ethics.jpg',
    author: 'Alex Johnson',
    date: '2024-03-05',
    tags: ['AI Ethics', 'Responsibility', 'Technology'],
    readTime: '6 min read',
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-[#0a0a0a] to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#ff6700] to-white bg-clip-text text-transparent">
                AI Insights & Trends
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay updated with the latest developments in artificial intelligence and machine learning.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
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
      <section className="py-24 bg-gradient-to-r from-[#ff6700] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
            Need Help with Similar Challenges?
          </h2>
          <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
            If you're facing similar challenges and looking for solutions, we're happy to help. Schedule a free 1-hour consultation with our experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                className="bg-black text-white hover:bg-gray-900 transition-colors cursor-pointer"
                size="lg"
              >
                Schedule Free Consultation
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                className="border-black text-black hover:bg-black/10 cursor-pointer"
                size="lg"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 