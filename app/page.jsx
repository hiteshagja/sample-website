'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const services = [
  {
    title: 'Large Language Models (LLM)',
    description: 'Harness the power of advanced language models for natural language processing, content generation, and intelligent automation.',
    icon: '🤖',
  },
  {
    title: 'Retrieval-Augmented Generation (RAG)',
    description: 'Combine the power of language models with your own data to create context-aware, accurate, and up-to-date AI solutions.',
    icon: '🔍',
  },
  {
    title: 'Multi-Cloud Platform (MCP)',
    description: 'Leverage the best of multiple cloud providers to build scalable, resilient, and cost-effective AI infrastructure.',
    icon: '☁️',
  },
];

const caseStudies = [
  {
    title: 'Enterprise LLM Integration',
    description: 'Implemented a custom LLM solution for a Fortune 500 company, resulting in 40% increase in customer service efficiency.',
    image: '/case-study-1.jpg',
    tags: ['LLM', 'Enterprise', 'Automation'],
  },
  {
    title: 'RAG-Powered Knowledge Base',
    description: 'Developed a context-aware knowledge base system that reduced research time by 60% for a leading research institution.',
    image: '/case-study-2.jpg',
    tags: ['RAG', 'Knowledge Base', 'Research'],
  },
  {
    title: 'Multi-Cloud AI Platform',
    description: 'Built a scalable AI platform across multiple cloud providers, achieving 99.99% uptime and 30% cost reduction.',
    image: '/case-study-3.jpg',
    tags: ['MCP', 'Cloud', 'Scalability'],
  },
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CTO, TechCorp',
    content: 'The AI solutions provided by this team transformed our business operations. Their expertise in LLM and RAG technologies is unmatched.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Director of AI, InnovateX',
    content: 'Working with this team on our multi-cloud platform was a game-changer. Their approach to AI infrastructure is both innovative and practical.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Head of Digital, Global Solutions',
    content: 'The custom AI solutions delivered exceptional results. Their team\'s understanding of business needs and technical expertise is impressive.',
    rating: 5,
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Enhanced Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1a1a1a] to-black" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#ff6700]/20 to-white/20 mix-blend-overlay" />
          {/* Animated Circles */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#ff6700]/10 rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                <span className="bg-gradient-to-r from-[#ff6700] to-white bg-clip-text text-transparent">
                  Transform Your Business
                </span>
                <br />
                <span className="text-white">with Advanced AI Solutions</span>
              </h1>
              <p className="text-xl text-gray-300">
                Leverage cutting-edge AI technologies including LLM, RAG, and MCP to drive innovation, efficiency, and growth across your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  className="bg-gradient-to-r from-[#ff6700] to-white text-black hover:opacity-90 transition-opacity"
                  size="lg"
                >
                  Get Started
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                  size="lg"
                >
                  Learn More
                </Button>
              </div>
            </div>

            {/* Right Column - Visual */}
            <div className="relative">
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff6700]/20 to-white/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-8xl animate-pulse">🤖</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gradient Separator */}
      <div className="h-1 bg-gradient-to-r from-[#ff6700] via-white to-[#ff6700]" />

      {/* Services Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">
              <span className="bg-gradient-to-r from-[#ff6700] to-white bg-clip-text text-transparent">
                Our AI Services
              </span>
            </h2>
            <p className="mt-4 text-xl text-gray-300">
              Comprehensive AI solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-[#ff6700]/50 transition-colors duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">
              <span className="bg-gradient-to-r from-[#ff6700] to-white bg-clip-text text-transparent">
                Case Studies
              </span>
            </h2>
            <p className="mt-4 text-xl text-gray-300">
              Real-world applications of our AI solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-[#ff6700]/50 transition-all duration-300"
              >
                <div className="aspect-video bg-gray-800 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ff6700]/20 to-white/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl">{study.tags[0] === 'LLM' ? '🤖' : study.tags[0] === 'RAG' ? '🔍' : '☁️'}</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{study.title}</h3>
                  <p className="text-gray-400 mb-4">{study.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-sm rounded-full bg-[#ff6700]/10 text-[#ff6700] border border-[#ff6700]/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">
              <span className="bg-gradient-to-r from-[#ff6700] to-white bg-clip-text text-transparent">
                Client Testimonials
              </span>
            </h2>
            <p className="mt-4 text-xl text-gray-300">
              What our clients say about our AI solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-[#ff6700]/50 transition-colors duration-300"
              >
                <FaQuoteLeft className="text-[#ff6700] text-4xl mb-4" />
                <p className="text-gray-300 mb-6">{testimonial.content}</p>
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-[#ff6700]" />
                  ))}
                </div>
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-400">{testimonial.role}</p>
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
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
            Join the growing number of businesses leveraging our AI solutions to drive innovation and growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-black text-white hover:bg-gray-900 transition-colors"
              size="lg"
            >
              Schedule a Demo
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