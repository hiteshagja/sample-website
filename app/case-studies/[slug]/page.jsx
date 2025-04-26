'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { FaArrowLeft, FaChartLine, FaLightbulb, FaUsers, FaCheck, FaQuoteLeft } from 'react-icons/fa';

const caseStudies = {
  'healthcare-ai': {
    title: 'Healthcare AI Implementation',
    client: 'HealthCare Plus',
    industry: 'Healthcare',
    challenge: 'A healthcare provider needed to implement AI-powered diagnostics and treatment planning to improve patient care and reduce diagnostic time.',
    solution: 'We developed a comprehensive AI system that integrated with existing healthcare infrastructure, providing real-time diagnostic assistance and treatment recommendations.',
    results: [
      {
        metric: '95%',
        description: 'Diagnostic Accuracy'
      },
      {
        metric: '40%',
        description: 'Time Saved'
      },
      {
        metric: '90%',
        description: 'Patient Satisfaction'
      },
      {
        metric: '60%',
        description: 'Reduction in Diagnostic Errors'
      }
    ],
    image: '/case-studies/healthcare.jpg',
    features: [
      'AI-Powered Diagnostics',
      'Treatment Planning',
      'Real-time Analysis',
      'Integration with EHR',
      'Automated Reporting',
      'Clinical Decision Support'
    ],
    testimonial: {
      quote: 'The AI implementation has transformed our diagnostic process, improving accuracy and efficiency while maintaining the highest standards of patient care.',
      author: 'Dr. Sarah Johnson',
      position: 'Medical Director, HealthCare Plus'
    }
  },
  'manufacturing-automation': {
    title: 'Smart Manufacturing',
    client: 'Industrial Solutions Inc.',
    industry: 'Manufacturing',
    challenge: 'A manufacturing company needed to modernize their production lines with AI-driven quality control and predictive maintenance.',
    solution: 'We implemented a comprehensive AI system that automated quality control, predicted maintenance needs, and optimized production schedules.',
    results: [
      {
        metric: '80%',
        description: 'Defect Reduction'
      },
      {
        metric: '35%',
        description: 'Production Increase'
      },
      {
        metric: '50%',
        description: 'Cost Savings'
      },
      {
        metric: '99%',
        description: 'Quality Assurance'
      }
    ],
    image: '/case-studies/manufacturing.jpg',
    features: [
      'Quality Control Automation',
      'Predictive Maintenance',
      'Production Optimization',
      'Real-time Monitoring',
      'Data Analytics',
      'Supply Chain Integration'
    ],
    testimonial: {
      quote: 'The AI implementation has revolutionized our manufacturing process, significantly reducing defects and improving overall efficiency.',
      author: 'Michael Chen',
      position: 'Operations Director, Industrial Solutions Inc.'
    }
  },
  'retail-analytics': {
    title: 'Retail Intelligence',
    client: 'Retail Giant Inc.',
    industry: 'Retail',
    challenge: 'A retail company needed to enhance customer experience with AI-powered analytics and personalized recommendations.',
    solution: 'We developed a sophisticated AI system that analyzed customer behavior, optimized inventory, and provided personalized shopping experiences.',
    results: [
      {
        metric: '45%',
        description: 'Sales Growth'
      },
      {
        metric: '60%',
        description: 'Customer Retention'
      },
      {
        metric: '300%',
        description: 'ROI'
      },
      {
        metric: '40%',
        description: 'Inventory Optimization'
      }
    ],
    image: '/case-studies/retail.jpg',
    features: [
      'Customer Analytics',
      'Personalized Recommendations',
      'Inventory Management',
      'Price Optimization',
      'Demand Forecasting',
      'Customer Segmentation'
    ],
    testimonial: {
      quote: 'The AI implementation has transformed our retail operations, leading to significant growth in sales and customer satisfaction.',
      author: 'Emily Rodriguez',
      position: 'CEO, Retail Giant Inc.'
    }
  },
  'financial-services': {
    title: 'Financial Services AI',
    client: 'Global Finance Corp',
    industry: 'Finance',
    challenge: 'A financial services company needed to improve risk assessment and fraud detection using AI.',
    solution: 'We implemented an advanced AI system that enhanced risk assessment, automated fraud detection, and improved financial decision-making.',
    results: [
      {
        metric: '99%',
        description: 'Fraud Detection'
      },
      {
        metric: '70%',
        description: 'Faster Processing'
      },
      {
        metric: '60%',
        description: 'Cost Reduction'
      },
      {
        metric: '85%',
        description: 'Risk Assessment Accuracy'
      }
    ],
    image: '/case-studies/finance.jpg',
    features: [
      'Risk Assessment',
      'Fraud Detection',
      'Transaction Monitoring',
      'Credit Scoring',
      'Compliance Automation',
      'Financial Analytics'
    ],
    testimonial: {
      quote: 'The AI implementation has significantly improved our fraud detection capabilities while reducing operational costs.',
      author: 'David Wilson',
      position: 'Chief Risk Officer, Global Finance Corp'
    }
  },
  'cloud-optimization': {
    title: 'Cloud Infrastructure',
    client: 'Tech Solutions Ltd',
    industry: 'Technology',
    challenge: 'A technology company needed to optimize their cloud infrastructure for better performance and cost efficiency.',
    solution: 'We implemented an AI-driven cloud optimization system that automated resource allocation and improved cost management.',
    results: [
      {
        metric: '40%',
        description: 'Cost Savings'
      },
      {
        metric: '50%',
        description: 'Better Performance'
      },
      {
        metric: '99.99%',
        description: 'Uptime'
      },
      {
        metric: '30%',
        description: 'Resource Optimization'
      }
    ],
    image: '/case-studies/cloud.jpg',
    features: [
      'Resource Management',
      'Cost Optimization',
      'Performance Monitoring',
      'Automated Scaling',
      'Security Enhancement',
      'Disaster Recovery'
    ],
    testimonial: {
      quote: 'The AI implementation has transformed our cloud infrastructure, delivering significant cost savings and improved performance.',
      author: 'Alex Thompson',
      position: 'CTO, Tech Solutions Ltd'
    }
  },
  'cybersecurity': {
    title: 'AI-Powered Security',
    client: 'Secure Systems Inc',
    industry: 'Security',
    challenge: 'A security company needed to enhance their threat detection and response capabilities.',
    solution: 'We developed an advanced AI security system that provided real-time threat detection and automated response mechanisms.',
    results: [
      {
        metric: '99.9%',
        description: 'Threat Detection'
      },
      {
        metric: 'Real-time',
        description: 'Response Time'
      },
      {
        metric: '< 1%',
        description: 'False Positives'
      },
      {
        metric: '90%',
        description: 'Automated Response'
      }
    ],
    image: '/case-studies/security.jpg',
    features: [
      'Threat Detection',
      'Automated Response',
      'Behavioral Analysis',
      'Vulnerability Assessment',
      'Security Analytics',
      'Incident Management'
    ],
    testimonial: {
      quote: 'The AI implementation has revolutionized our security operations, providing unprecedented threat detection capabilities.',
      author: 'Sarah Miller',
      position: 'Chief Security Officer, Secure Systems Inc'
    }
  },
  'customer-service': {
    title: 'Intelligent Customer Service',
    client: 'Service Excellence Corp',
    industry: 'Customer Service',
    challenge: 'A customer service company needed to improve response times and customer satisfaction.',
    solution: 'We implemented an AI-powered customer service system that automated responses and provided intelligent assistance.',
    results: [
      {
        metric: '80%',
        description: 'Faster Response'
      },
      {
        metric: '85%',
        description: 'Customer Satisfaction'
      },
      {
        metric: '70%',
        description: 'Cost Reduction'
      },
      {
        metric: '24/7',
        description: 'Service Availability'
      }
    ],
    image: '/case-studies/customer-service.jpg',
    features: [
      'Chatbot Integration',
      'Sentiment Analysis',
      'Automated Responses',
      'Knowledge Base',
      'Customer Analytics',
      'Service Optimization'
    ],
    testimonial: {
      quote: 'The AI implementation has transformed our customer service, providing faster responses and higher satisfaction rates.',
      author: 'James Wilson',
      position: 'Customer Service Director, Service Excellence Corp'
    }
  },
  'supply-chain': {
    title: 'Supply Chain Optimization',
    client: 'Global Logistics Inc',
    industry: 'Logistics',
    challenge: 'A logistics company needed to optimize their supply chain operations.',
    solution: 'We implemented an AI-driven supply chain optimization system that improved efficiency and reduced costs.',
    results: [
      {
        metric: '60%',
        description: 'Efficiency Increase'
      },
      {
        metric: '45%',
        description: 'Cost Reduction'
      },
      {
        metric: '30%',
        description: 'Faster Delivery'
      },
      {
        metric: '95%',
        description: 'Inventory Accuracy'
      }
    ],
    image: '/case-studies/supply-chain.jpg',
    features: [
      'Demand Forecasting',
      'Inventory Management',
      'Route Optimization',
      'Supplier Management',
      'Real-time Tracking',
      'Analytics Dashboard'
    ],
    testimonial: {
      quote: 'The AI implementation has revolutionized our supply chain, delivering significant improvements in efficiency and cost savings.',
      author: 'Robert Chen',
      position: 'Supply Chain Director, Global Logistics Inc'
    }
  }
};

export default function CaseStudyDetailPage() {
  const params = useParams();
  const caseStudy = caseStudies[params.slug];

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a]">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Case Study Not Found</h1>
          <p className="text-gray-400 mb-8">The requested case study could not be found.</p>
          <Link href="/case-studies">
            <Button variant="outline" className="bg-transparent border-[#ff6700] text-[#ff6700] hover:bg-[#ff6700] hover:text-white">
              Back to Case Studies
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
              href="/case-studies"
              className="inline-flex items-center text-[#ff6700] hover:text-white transition-colors mb-8"
            >
              <FaArrowLeft className="mr-2" />
              Back to Case Studies
            </Link>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[#ff6700]">{caseStudy.industry}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#ff6700] to-white bg-clip-text text-transparent">
                {caseStudy.title}
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-12">Client: {caseStudy.client}</p>
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src={caseStudy.image}
                alt={caseStudy.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-60" />
            </div>
          </div>
        </div>
      </section>

      {/* Challenge & Solution Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                <span className="bg-gradient-to-r from-[#ff6700] to-white bg-clip-text text-transparent">
                  The Challenge
                </span>
              </h2>
              <p className="text-gray-400 text-lg">{caseStudy.challenge}</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">
                <span className="bg-gradient-to-r from-[#ff6700] to-white bg-clip-text text-transparent">
                  Our Solution
                </span>
              </h2>
              <p className="text-gray-400 text-lg">{caseStudy.solution}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-[#ff6700] to-white bg-clip-text text-transparent">
              Results
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {caseStudy.results.map((result, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-[#ff6700]/50 transition-all duration-300"
              >
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#ff6700] mb-4">{result.metric}</div>
                  <p className="text-gray-400">{result.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-[#ff6700] to-white bg-clip-text text-transparent">
              Key Features
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudy.features.map((feature, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-[#ff6700]/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-[#ff6700]/10 flex items-center justify-center">
                    <FaCheck className="h-5 w-5 text-[#ff6700]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{feature}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800">
            <div className="text-center">
              <FaQuoteLeft className="h-8 w-8 text-[#ff6700] mx-auto mb-8" />
              <p className="text-xl text-gray-400 mb-8">{caseStudy.testimonial.quote}</p>
              <div>
                <p className="text-white font-semibold">{caseStudy.testimonial.author}</p>
                <p className="text-gray-400">{caseStudy.testimonial.position}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#ff6700] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve similar results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-black text-white hover:bg-gray-900 transition-colors"
              size="lg"
            >
              Get Started
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