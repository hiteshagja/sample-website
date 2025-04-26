'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FaRobot, FaBrain, FaCloud, FaChartLine, FaShieldAlt, FaLanguage, FaSearch, FaImage, FaVideo, FaMicrophone, FaCode, FaDatabase } from 'react-icons/fa';

const serviceCategories = [
  {
    name: 'Language & Communication',
    services: [
      {
        title: 'Large Language Models (LLM)',
        description: 'Advanced language models for natural language processing and generation',
        icon: <FaLanguage className="text-4xl" />,
        slug: 'large-language-models',
      },
      {
        title: 'Natural Language Processing',
        description: 'Text analysis, sentiment analysis, and language understanding',
        icon: <FaSearch className="text-4xl" />,
        slug: 'natural-language-processing',
      },
      {
        title: 'Speech Recognition',
        description: 'Convert speech to text with high accuracy and real-time processing',
        icon: <FaMicrophone className="text-4xl" />,
        slug: 'speech-recognition',
      },
    ],
  },
  {
    name: 'Computer Vision',
    services: [
      {
        title: 'Image Recognition',
        description: 'Object detection, classification, and image analysis',
        icon: <FaImage className="text-4xl" />,
        slug: 'image-recognition',
      },
      {
        title: 'Video Analysis',
        description: 'Video processing, motion detection, and activity recognition',
        icon: <FaVideo className="text-4xl" />,
        slug: 'video-analysis',
      },
    ],
  },
  {
    name: 'Data & Analytics',
    services: [
      {
        title: 'Predictive Analytics',
        description: 'Forecast trends and patterns using machine learning',
        icon: <FaChartLine className="text-4xl" />,
        slug: 'predictive-analytics',
      },
      {
        title: 'Data Mining',
        description: 'Extract valuable insights from large datasets',
        icon: <FaDatabase className="text-4xl" />,
        slug: 'data-mining',
      },
    ],
  },
  {
    name: 'Infrastructure & Security',
    services: [
      {
        title: 'Multi-Cloud Platform (MCP)',
        description: 'Scalable AI infrastructure across multiple cloud providers',
        icon: <FaCloud className="text-4xl" />,
        slug: 'multi-cloud-platform',
      },
      {
        title: 'AI Security',
        description: 'Protect AI systems from attacks and ensure data privacy',
        icon: <FaShieldAlt className="text-4xl" />,
        slug: 'ai-security',
      },
    ],
  },
  {
    name: 'Advanced AI Solutions',
    services: [
      {
        title: 'Retrieval-Augmented Generation (RAG)',
        description: 'Combine language models with custom knowledge bases',
        icon: <FaBrain className="text-4xl" />,
        slug: 'retrieval-augmented-generation',
      },
      {
        title: 'AI Automation',
        description: 'Automate complex tasks and workflows using AI',
        icon: <FaRobot className="text-4xl" />,
        slug: 'ai-automation',
      },
      {
        title: 'AI Development',
        description: 'Custom AI solutions and model development',
        icon: <FaCode className="text-4xl" />,
        slug: 'ai-development',
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-[#0a0a0a] to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#ff6700] to-white bg-clip-text text-transparent">
                AI Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI solutions to transform your business. From language models to computer vision,
              we provide cutting-edge AI services tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {serviceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <h2 className="text-3xl font-bold mb-8">
                <span className="bg-gradient-to-r from-[#ff6700] to-white bg-clip-text text-transparent">
                  {category.name}
                </span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <Link
                    key={serviceIndex}
                    href={`/services/${service.slug}`}
                    className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-[#ff6700]/50 transition-all duration-300"
                  >
                    <div className="text-[#ff6700] mb-4">{service.icon}</div>
                    <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-400 mb-6">{service.description}</p>
                    <div className="flex items-center text-[#ff6700] group-hover:translate-x-2 transition-transform">
                      Learn More
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
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#ff6700] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
            Schedule a consultation with our AI experts to discuss your specific needs and discover how our services can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-black text-white hover:bg-gray-900 transition-colors"
              size="lg"
            >
              Schedule Consultation
            </Button>
            <Button
              variant="outline"
              className="border-black text-black hover:bg-black/10"
              size="lg"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 