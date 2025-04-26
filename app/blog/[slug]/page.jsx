'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { FaCalendar, FaUser, FaTags, FaArrowLeft, FaShare, FaBookmark } from 'react-icons/fa';

const blogPosts = {
  'top-ai-trends-2024': {
    title: 'Top AI Trends to Watch in 2024',
    content: `
      <p class="lead">Artificial Intelligence continues to evolve at a rapid pace, transforming industries and reshaping the way we live and work. As we move through 2024, several key trends are emerging that will have significant implications for businesses and society.</p>
      
      <h2>1. Generative AI Maturation</h2>
      <p>Generative AI has moved beyond the hype phase and is now being integrated into practical business applications. Companies are finding innovative ways to leverage these tools for content creation, design, and problem-solving.</p>
      
      <h2>2. AI-Powered Automation</h2>
      <p>The automation landscape is being revolutionized by AI, with more sophisticated systems capable of handling complex tasks that previously required human intervention.</p>
      
      <h2>3. Ethical AI Development</h2>
      <p>As AI becomes more prevalent, there's an increasing focus on developing ethical frameworks and responsible AI practices to ensure technology serves humanity's best interests.</p>
    `,
    image: '/blog/ai-trends.jpg',
    author: 'John Doe',
    date: '2024-03-15',
    tags: ['AI Trends', 'Technology', 'Innovation'],
    readTime: '5 min read',
    benefits: [
      'Stay ahead of industry developments',
      'Make informed business decisions',
      'Identify new opportunities',
      'Understand potential challenges',
      'Prepare for future changes',
      'Gain competitive advantage'
    ]
  },
  'future-of-web-development': {
    title: 'The Future of Web Development in 2024',
    content: `
      <p class="lead">Web development continues to evolve at a breakneck pace, with new technologies and frameworks emerging to meet the demands of modern web applications.</p>
      
      <h2>1. Server Components Revolution</h2>
      <p>Server Components are changing how we think about web development, offering better performance and reduced client-side JavaScript.</p>
      
      <h2>2. Edge Computing</h2>
      <p>Edge computing is bringing computation closer to users, reducing latency and improving performance for global applications.</p>
      
      <h2>3. WebAssembly</h2>
      <p>WebAssembly continues to gain traction, enabling high-performance applications to run in the browser.</p>
    `,
    image: '/blog/web-dev.jpg',
    author: 'Jane Smith',
    date: '2024-03-10',
    tags: ['Web Development', 'Technology', 'Programming'],
    readTime: '4 min read',
    benefits: [
      'Learn about cutting-edge technologies',
      'Improve application performance',
      'Reduce development complexity',
      'Enhance user experience',
      'Stay competitive in the market',
      'Future-proof your skills'
    ]
  }
};

export default function BlogPostPage() {
  const params = useParams();
  const post = blogPosts[params.slug];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a]">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Post Not Found</h1>
          <p className="text-gray-400 mb-8">The requested blog post could not be found.</p>
          <Link href="/blog">
            <Button variant="outline" className="bg-transparent border-[#ff6700] text-[#ff6700] hover:bg-[#ff6700] hover:text-white">
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-[#0a0a0a] to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center text-[#ff6700] hover:text-white transition-colors mb-8"
            >
              <FaArrowLeft className="mr-2" />
              Back to Blog
            </Link>
            <div className="flex items-center gap-4 mb-6">
              <FaCalendar className="h-5 w-5 text-[#ff6700]" />
              <span className="text-[#ff6700]">{post.date}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#ff6700] to-white bg-clip-text text-transparent">
                {post.title}
              </span>
            </h1>
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-gray-400">
                <FaUser className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <FaTags className="h-4 w-4" />
                <div className="flex gap-2">
                  {post.tags.map((tag, index) => (
                    <span key={index} className="text-sm">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden mb-12">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-60" />
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert max-w-none prose-lg">
            <style jsx global>{`
              .prose {
                color: #ebebeb;
              }
              .prose h2 {
                color: #ff6700;
                font-size: 2rem;
                font-weight: 700;
                margin-top: 2.5rem;
                margin-bottom: 1.5rem;
              }
              .prose p {
                font-size: 1.125rem;
                line-height: 1.75;
                margin-bottom: 1.5rem;
              }
              .prose .lead {
                font-size: 1.25rem;
                line-height: 1.75;
                color: #c0c0c0;
                margin-bottom: 2rem;
              }
              .prose a {
                color: #ff6700;
                text-decoration: none;
                border-bottom: 1px solid #ff6700;
                transition: all 0.3s ease;
              }
              .prose a:hover {
                color: #ebebeb;
                border-bottom-color: #ebebeb;
              }
              .prose ul, .prose ol {
                margin-bottom: 1.5rem;
              }
              .prose li {
                margin-bottom: 0.5rem;
              }
              .prose blockquote {
                border-left: 4px solid #ff6700;
                padding-left: 1.5rem;
                margin-left: 0;
                margin-right: 0;
                margin-bottom: 1.5rem;
                color: #c0c0c0;
              }
              .prose code {
                background-color: #1a1a1a;
                padding: 0.2rem 0.4rem;
                border-radius: 0.25rem;
                font-size: 0.875rem;
              }
              .prose pre {
                background-color: #1a1a1a;
                padding: 1rem;
                border-radius: 0.5rem;
                overflow-x: auto;
                margin-bottom: 1.5rem;
              }
            `}</style>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-[#ff6700] to-white bg-clip-text text-transparent">
              Key Takeaways
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {post.benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-[#ff6700]/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-[#ff6700]/10 flex items-center justify-center">
                    <span className="text-[#ff6700] font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">{benefit}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#ff6700] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
            Want to Learn More?
          </h2>
          <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest insights and updates in technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-black text-white hover:bg-gray-900 transition-colors"
              size="lg"
            >
              Subscribe Now
            </Button>
            <Button
              variant="outline"
              className="border-black text-black hover:bg-black/10"
              size="lg"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 