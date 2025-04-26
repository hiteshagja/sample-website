'use client';

import { FaChartLine, FaIndustry, FaRobot, FaBrain, FaCloud, FaShieldAlt, FaUsers, FaCogs } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const caseStudies = [
  {
    slug: 'healthcare-ai',
    title: 'Healthcare AI Implementation',
    industry: 'Healthcare',
    description: 'Revolutionizing patient care with AI-powered diagnostics and treatment planning.',
    image: '/case-studies/healthcare.jpg',
    icon: FaChartLine,
    metrics: [
      { label: 'Diagnostic Accuracy', value: '95%' },
      { label: 'Time Saved', value: '40%' },
      { label: 'Patient Satisfaction', value: '90%' },
    ],
  },
  {
    slug: 'manufacturing-automation',
    title: 'Smart Manufacturing',
    industry: 'Manufacturing',
    description: 'Transforming production lines with AI-driven quality control and predictive maintenance.',
    image: '/case-studies/manufacturing.jpg',
    icon: FaIndustry,
    metrics: [
      { label: 'Defect Reduction', value: '80%' },
      { label: 'Production Increase', value: '35%' },
      { label: 'Cost Savings', value: '50%' },
    ],
  },
  {
    slug: 'retail-analytics',
    title: 'Retail Intelligence',
    industry: 'Retail',
    description: 'Enhancing customer experience with AI-powered analytics and personalized recommendations.',
    image: '/case-studies/retail.jpg',
    icon: FaRobot,
    metrics: [
      { label: 'Sales Growth', value: '45%' },
      { label: 'Customer Retention', value: '60%' },
      { label: 'ROI', value: '300%' },
    ],
  },
  {
    slug: 'financial-services',
    title: 'Financial Services AI',
    industry: 'Finance',
    description: 'Revolutionizing financial services with AI-driven risk assessment and fraud detection.',
    image: '/case-studies/finance.jpg',
    icon: FaBrain,
    metrics: [
      { label: 'Fraud Detection', value: '99%' },
      { label: 'Processing Time', value: '70% faster' },
      { label: 'Cost Reduction', value: '60%' },
    ],
  },
  {
    slug: 'cloud-optimization',
    title: 'Cloud Infrastructure',
    industry: 'Technology',
    description: 'Optimizing cloud infrastructure with AI-powered resource management and cost optimization.',
    image: '/case-studies/cloud.jpg',
    icon: FaCloud,
    metrics: [
      { label: 'Cost Savings', value: '40%' },
      { label: 'Performance', value: '50% better' },
      { label: 'Uptime', value: '99.99%' },
    ],
  },
  {
    slug: 'cybersecurity',
    title: 'AI-Powered Security',
    industry: 'Security',
    description: 'Enhancing cybersecurity with advanced threat detection and automated response systems.',
    image: '/case-studies/security.jpg',
    icon: FaShieldAlt,
    metrics: [
      { label: 'Threat Detection', value: '99.9%' },
      { label: 'Response Time', value: 'Real-time' },
      { label: 'False Positives', value: '< 1%' },
    ],
  },
  {
    slug: 'customer-service',
    title: 'Intelligent Customer Service',
    industry: 'Customer Service',
    description: 'Transforming customer support with AI-powered chatbots and sentiment analysis.',
    image: '/case-studies/customer-service.jpg',
    icon: FaUsers,
    metrics: [
      { label: 'Response Time', value: '80% faster' },
      { label: 'Customer Satisfaction', value: '85%' },
      { label: 'Cost Reduction', value: '70%' },
    ],
  },
  {
    slug: 'supply-chain',
    title: 'Supply Chain Optimization',
    industry: 'Logistics',
    description: 'Revolutionizing supply chain management with AI-driven forecasting and optimization.',
    image: '/case-studies/supply-chain.jpg',
    icon: FaCogs,
    metrics: [
      { label: 'Efficiency', value: '60% increase' },
      { label: 'Cost Reduction', value: '45%' },
      { label: 'Delivery Time', value: '30% faster' },
    ],
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-[#0a0a0a] to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#ff6700] to-white bg-clip-text text-transparent">
                Case Studies
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore how we've helped businesses across industries transform their operations with AI.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((caseStudy) => (
              <Link
                key={caseStudy.slug}
                href={`/case-studies/${caseStudy.slug}`}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-[#ff6700]/50 transition-all duration-300"
              >
                <div className="relative h-64 mb-6 rounded-xl overflow-hidden">
                  <Image
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-60" />
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <caseStudy.icon className="h-8 w-8 text-[#ff6700]" />
                  <span className="text-[#ff6700] font-semibold">{caseStudy.industry}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{caseStudy.title}</h3>
                <p className="text-gray-400 mb-6">{caseStudy.description}</p>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {caseStudy.metrics.map((metric, index) => (
                    <div key={index} className="text-center">
                      <p className="text-2xl font-bold text-[#ff6700]">{metric.value}</p>
                      <p className="text-sm text-gray-400">{metric.label}</p>
                    </div>
                  ))}
                </div>
                <div className="flex items-center text-[#ff6700] group-hover:translate-x-2 transition-transform">
                  View Case Study
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
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#ff6700] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
            Schedule a consultation with our team to discuss how we can help you implement similar solutions for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                className="bg-black text-white hover:bg-gray-900 transition-colors cursor-pointer"
                size="lg"
              >
                Inquire Now
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