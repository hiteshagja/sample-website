import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { FaCalendar, FaUser, FaTags, FaArrowLeft } from 'react-icons/fa';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { compileMDX } from 'next-mdx-remote/rsc';

export default async function BlogPostPage({ params }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  try {
    // Read the MDX file
    const filePath = path.join(process.cwd(), 'content/blog', slug, 'index.mdx');
    const fileContent = fs.readFileSync(filePath, 'utf8');
    
    // Parse the frontmatter and content
    const { data: frontmatter, content } = matter(fileContent);
    
    // Compile MDX content
    const { content: compiledContent } = await compileMDX({
      source: content,
      options: { parseFrontmatter: true }
    });

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
                <span className="text-[#ff6700]">{frontmatter.date}</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-[#ff6700] to-white bg-clip-text text-transparent">
                  {frontmatter.title}
                </span>
              </h1>
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-2 text-gray-400">
                  <FaUser className="h-4 w-4" />
                  <span>{frontmatter.author}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <FaTags className="h-4 w-4" />
                  <div className="flex gap-2">
                    {frontmatter.tags.map((tag, index) => (
                      <span key={index} className="text-sm">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden mb-12">
                <Image
                  src={frontmatter.image}
                  alt={frontmatter.title}
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
              {compiledContent}
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
  } catch (error) {
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
} 