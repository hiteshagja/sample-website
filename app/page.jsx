'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import { useState, useEffect } from 'react';

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
  {
    name: 'David Kim',
    role: 'CEO, FutureTech',
    content: 'The implementation of their AI solutions helped us achieve a 40% increase in operational efficiency. Truly transformative!',
    rating: 5,
  },
  {
    name: 'Lisa Wang',
    role: 'Head of Innovation, TechStart',
    content: 'Their RAG implementation revolutionized our knowledge management system. The results exceeded our expectations.',
    rating: 5,
  },
  {
    name: 'James Wilson',
    role: 'CTO, DigitalFirst',
    content: 'The multi-cloud AI platform they built for us is both scalable and cost-effective. A perfect solution for our growing needs.',
    rating: 5,
  },
  {
    name: 'Maria Garcia',
    role: 'Director of Technology, GlobalCorp',
    content: 'Their team\'s expertise in LLM integration helped us automate complex processes, saving us thousands of hours annually.',
    rating: 5,
  },
  {
    name: 'Robert Smith',
    role: 'Head of AI, TechInnovate',
    content: 'The AI solutions they delivered have given us a significant competitive advantage in our market. Highly recommended!',
    rating: 5,
  },
];

export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <div className="min-h-screen">
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
                <Link href="/contact">
                  <Button
                    className="bg-gradient-to-r from-[#ff6700] to-white text-black hover:opacity-90 transition-opacity"
                    size="lg"
                  >
                    Free Consultation
                  </Button>
                </Link>
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
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">
              <span className="bg-gradient-to-r from-[#ff6700] to-white bg-clip-text text-transparent">
                Our AI Services
              </span>
            </h2>
            <Link
              href="/services"
              className="text-[#ff6700] hover:text-white transition-colors flex items-center"
            >
              View All Services
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
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
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">
              <span className="bg-gradient-to-r from-[#ff6700] to-white bg-clip-text text-transparent">
                Case Studies
              </span>
            </h2>
            <Link
              href="/case-studies"
              className="text-[#ff6700] hover:text-white transition-colors flex items-center"
            >
              View All Case Studies
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
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
              Hear what our clients have to say about our AI solutions
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="bg-gray-900 rounded-2xl p-8">
                      <div className="flex items-center mb-6">
                        <div className="flex text-[#ff6700]">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <FaStar key={i} className="w-5 h-5" />
                          ))}
                        </div>
                      </div>
                      <FaQuoteLeft className="text-[#ff6700] text-4xl mb-6" />
                      <p className="text-xl text-gray-300 mb-6">{testimonial.content}</p>
                      <div>
                        <p className="text-white font-semibold">{testimonial.name}</p>
                        <p className="text-gray-400">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-[#ff6700] text-white p-2 rounded-full hover:bg-[#ff6700]/90 transition-colors"
              aria-label="Previous testimonial"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-[#ff6700] text-white p-2 rounded-full hover:bg-[#ff6700]/90 transition-colors"
              aria-label="Next testimonial"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
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
            <Link href="/contact">
              <Button
                className="bg-black text-white hover:bg-gray-900 transition-colors"
                size="lg"
              >
                Inquire Now
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                className="border-black text-black hover:bg-black/10"
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