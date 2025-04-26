'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { FaArrowLeft, FaCheck, FaLightbulb, FaRocket, FaChartLine } from 'react-icons/fa';

const services = {
  'large-language-models': {
    title: 'Large Language Models (LLM)',
    description: 'Advanced language models for natural language processing and generation',
    image: '/services/llm.jpg',
    features: [
      'Custom LLM Development',
      'Fine-tuning & Optimization',
      'Context Window Management',
      'Prompt Engineering',
      'Model Evaluation',
      'Deployment & Scaling'
    ],
    benefits: [
      'Enhanced Natural Language Understanding',
      'Improved Text Generation',
      'Better Context Awareness',
      'Customizable Solutions',
      'Scalable Architecture',
      'Continuous Learning'
    ],
    process: [
      {
        title: 'Analysis',
        description: 'We analyze your requirements and data to determine the best approach.'
      },
      {
        title: 'Model Selection',
        description: 'Choose the most suitable LLM architecture for your needs.'
      },
      {
        title: 'Training',
        description: 'Train and fine-tune the model with your specific data.'
      },
      {
        title: 'Testing',
        description: 'Rigorous testing to ensure optimal performance.'
      },
      {
        title: 'Deployment',
        description: 'Deploy the model and provide ongoing support.'
      }
    ]
  },
  'natural-language-processing': {
    title: 'Natural Language Processing',
    description: 'Text analysis, sentiment analysis, and language understanding',
    image: '/services/nlp.jpg',
    features: [
      'Text Classification',
      'Sentiment Analysis',
      'Entity Recognition',
      'Language Translation',
      'Text Summarization',
      'Topic Modeling'
    ],
    benefits: [
      'Automated Text Processing',
      'Improved Customer Insights',
      'Enhanced Search Capabilities',
      'Better Content Organization',
      'Real-time Analysis',
      'Multilingual Support'
    ],
    process: [
      {
        title: 'Data Collection',
        description: 'Gather and preprocess relevant text data.'
      },
      {
        title: 'Model Development',
        description: 'Develop custom NLP models for your specific needs.'
      },
      {
        title: 'Training',
        description: 'Train models with your domain-specific data.'
      },
      {
        title: 'Integration',
        description: 'Integrate NLP capabilities into your systems.'
      },
      {
        title: 'Monitoring',
        description: 'Monitor and optimize performance.'
      }
    ]
  },
  'speech-recognition': {
    title: 'Speech Recognition',
    description: 'Convert speech to text with high accuracy and real-time processing',
    image: '/services/speech.jpg',
    features: [
      'Real-time Transcription',
      'Multi-language Support',
      'Noise Reduction',
      'Speaker Diarization',
      'Custom Vocabulary',
      'API Integration'
    ],
    benefits: [
      'Improved Accessibility',
      'Enhanced Productivity',
      'Better Customer Service',
      'Automated Documentation',
      'Real-time Analysis',
      'Seamless Integration'
    ],
    process: [
      {
        title: 'Audio Processing',
        description: 'Process and clean audio data.'
      },
      {
        title: 'Model Training',
        description: 'Train models for accurate speech recognition.'
      },
      {
        title: 'Testing',
        description: 'Test in various environments and conditions.'
      },
      {
        title: 'Deployment',
        description: 'Deploy the solution with necessary integrations.'
      },
      {
        title: 'Optimization',
        description: 'Continuously optimize for better performance.'
      }
    ]
  },
  'image-recognition': {
    title: 'Image Recognition',
    description: 'Object detection, classification, and image analysis',
    image: '/services/image.jpg',
    features: [
      'Object Detection',
      'Image Classification',
      'Facial Recognition',
      'Scene Understanding',
      'Custom Model Training',
      'Real-time Processing'
    ],
    benefits: [
      'Automated Image Analysis',
      'Improved Security',
      'Enhanced User Experience',
      'Better Content Organization',
      'Real-time Processing',
      'Custom Solutions'
    ],
    process: [
      {
        title: 'Data Collection',
        description: 'Gather and preprocess image data.'
      },
      {
        title: 'Model Development',
        description: 'Develop custom image recognition models.'
      },
      {
        title: 'Training',
        description: 'Train models with your specific images.'
      },
      {
        title: 'Testing',
        description: 'Test in various conditions and scenarios.'
      },
      {
        title: 'Deployment',
        description: 'Deploy and monitor the solution.'
      }
    ]
  },
  'video-analysis': {
    title: 'Video Analysis',
    description: 'Video processing, motion detection, and activity recognition',
    image: '/services/video.jpg',
    features: [
      'Motion Detection',
      'Activity Recognition',
      'Object Tracking',
      'Scene Analysis',
      'Real-time Processing',
      'Custom Analytics'
    ],
    benefits: [
      'Automated Video Analysis',
      'Enhanced Security',
      'Improved Monitoring',
      'Better Insights',
      'Real-time Alerts',
      'Custom Solutions'
    ],
    process: [
      {
        title: 'Video Processing',
        description: 'Process and analyze video data.'
      },
      {
        title: 'Model Development',
        description: 'Develop custom video analysis models.'
      },
      {
        title: 'Training',
        description: 'Train models with your specific videos.'
      },
      {
        title: 'Testing',
        description: 'Test in various scenarios.'
      },
      {
        title: 'Deployment',
        description: 'Deploy and monitor the solution.'
      }
    ]
  },
  'predictive-analytics': {
    title: 'Predictive Analytics',
    description: 'Forecast trends and patterns using machine learning',
    image: '/services/analytics.jpg',
    features: [
      'Trend Analysis',
      'Pattern Recognition',
      'Forecasting Models',
      'Risk Assessment',
      'Custom Algorithms',
      'Real-time Predictions'
    ],
    benefits: [
      'Better Decision Making',
      'Improved Planning',
      'Reduced Risks',
      'Enhanced Efficiency',
      'Real-time Insights',
      'Custom Solutions'
    ],
    process: [
      {
        title: 'Data Analysis',
        description: 'Analyze historical data and patterns.'
      },
      {
        title: 'Model Development',
        description: 'Develop predictive models.'
      },
      {
        title: 'Training',
        description: 'Train models with your data.'
      },
      {
        title: 'Testing',
        description: 'Test and validate predictions.'
      },
      {
        title: 'Deployment',
        description: 'Deploy and monitor the solution.'
      }
    ]
  },
  'data-mining': {
    title: 'Data Mining',
    description: 'Extract valuable insights from large datasets',
    image: '/services/mining.jpg',
    features: [
      'Pattern Discovery',
      'Association Analysis',
      'Clustering',
      'Classification',
      'Anomaly Detection',
      'Custom Analytics'
    ],
    benefits: [
      'Valuable Insights',
      'Better Decision Making',
      'Improved Efficiency',
      'Enhanced Understanding',
      'Custom Solutions',
      'Scalable Analysis'
    ],
    process: [
      {
        title: 'Data Collection',
        description: 'Gather and preprocess data.'
      },
      {
        title: 'Analysis',
        description: 'Analyze patterns and relationships.'
      },
      {
        title: 'Model Development',
        description: 'Develop data mining models.'
      },
      {
        title: 'Testing',
        description: 'Test and validate results.'
      },
      {
        title: 'Deployment',
        description: 'Deploy and monitor the solution.'
      }
    ]
  },
  'multi-cloud-platform': {
    title: 'Multi-Cloud Platform (MCP)',
    description: 'Scalable AI infrastructure across multiple cloud providers',
    image: '/services/cloud.jpg',
    features: [
      'Multi-Cloud Management',
      'Scalable Infrastructure',
      'Load Balancing',
      'High Availability',
      'Security Management',
      'Cost Optimization'
    ],
    benefits: [
      'Improved Scalability',
      'Better Reliability',
      'Enhanced Security',
      'Cost Efficiency',
      'Flexible Deployment',
      'Custom Solutions'
    ],
    process: [
      {
        title: 'Assessment',
        description: 'Assess infrastructure needs.'
      },
      {
        title: 'Planning',
        description: 'Plan multi-cloud architecture.'
      },
      {
        title: 'Implementation',
        description: 'Implement and configure services.'
      },
      {
        title: 'Testing',
        description: 'Test performance and reliability.'
      },
      {
        title: 'Deployment',
        description: 'Deploy and monitor the platform.'
      }
    ]
  },
  'ai-security': {
    title: 'AI Security',
    description: 'Protect AI systems from attacks and ensure data privacy',
    image: '/services/security.jpg',
    features: [
      'Threat Detection',
      'Data Protection',
      'Access Control',
      'Encryption',
      'Compliance',
      'Monitoring'
    ],
    benefits: [
      'Enhanced Security',
      'Data Privacy',
      'Compliance',
      'Risk Reduction',
      'Trust Building',
      'Custom Solutions'
    ],
    process: [
      {
        title: 'Assessment',
        description: 'Assess security needs and risks.'
      },
      {
        title: 'Planning',
        description: 'Plan security measures.'
      },
      {
        title: 'Implementation',
        description: 'Implement security solutions.'
      },
      {
        title: 'Testing',
        description: 'Test security measures.'
      },
      {
        title: 'Monitoring',
        description: 'Monitor and update security.'
      }
    ]
  },
  'retrieval-augmented-generation': {
    title: 'Retrieval-Augmented Generation (RAG)',
    description: 'Combine language models with custom knowledge bases',
    image: '/services/rag.jpg',
    features: [
      'Knowledge Integration',
      'Custom Retrieval',
      'Context Management',
      'Response Generation',
      'Fine-tuning',
      'API Integration'
    ],
    benefits: [
      'Enhanced Accuracy',
      'Domain Expertise',
      'Better Context',
      'Custom Solutions',
      'Scalable Knowledge',
      'Improved Responses'
    ],
    process: [
      {
        title: 'Knowledge Base',
        description: 'Build and organize knowledge base.'
      },
      {
        title: 'Model Integration',
        description: 'Integrate with language models.'
      },
      {
        title: 'Training',
        description: 'Train the RAG system.'
      },
      {
        title: 'Testing',
        description: 'Test and validate responses.'
      },
      {
        title: 'Deployment',
        description: 'Deploy and monitor the system.'
      }
    ]
  },
  'ai-automation': {
    title: 'AI Automation',
    description: 'Automate complex tasks and workflows using AI',
    image: '/services/automation.jpg',
    features: [
      'Workflow Automation',
      'Task Optimization',
      'Process Integration',
      'Custom Solutions',
      'Monitoring',
      'Reporting'
    ],
    benefits: [
      'Improved Efficiency',
      'Cost Reduction',
      'Better Accuracy',
      'Enhanced Productivity',
      'Scalable Solutions',
      'Custom Automation'
    ],
    process: [
      {
        title: 'Analysis',
        description: 'Analyze processes for automation.'
      },
      {
        title: 'Design',
        description: 'Design automation solutions.'
      },
      {
        title: 'Implementation',
        description: 'Implement automation systems.'
      },
      {
        title: 'Testing',
        description: 'Test and optimize automation.'
      },
      {
        title: 'Deployment',
        description: 'Deploy and monitor automation.'
      }
    ]
  },
  'ai-development': {
    title: 'AI Development',
    description: 'Custom AI solutions and model development',
    image: '/services/development.jpg',
    features: [
      'Custom Model Development',
      'Algorithm Design',
      'System Integration',
      'Performance Optimization',
      'Testing & Validation',
      'Deployment'
    ],
    benefits: [
      'Custom Solutions',
      'Improved Performance',
      'Better Integration',
      'Enhanced Capabilities',
      'Scalable Systems',
      'Ongoing Support'
    ],
    process: [
      {
        title: 'Requirements',
        description: 'Gather and analyze requirements.'
      },
      {
        title: 'Design',
        description: 'Design AI solutions.'
      },
      {
        title: 'Development',
        description: 'Develop and test solutions.'
      },
      {
        title: 'Integration',
        description: 'Integrate with existing systems.'
      },
      {
        title: 'Deployment',
        description: 'Deploy and support solutions.'
      }
    ]
  }
};

export default function ServiceDetailPage() {
  const params = useParams();
  const service = services[params.slug];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a]">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Service Not Found</h1>
          <p className="text-gray-400 mb-8">The requested service could not be found.</p>
          <Link href="/services">
            <Button variant="outline" className="bg-transparent border-[#ff6700] text-[#ff6700] hover:bg-[#ff6700] hover:text-white">
              Back to Services
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
              href="/services"
              className="inline-flex items-center text-[#ff6700] hover:text-white transition-colors mb-8"
            >
              <FaArrowLeft className="mr-2" />
              Back to Services
            </Link>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#ff6700] to-white bg-clip-text text-transparent">
                {service.title}
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-12">{service.description}</p>
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-60" />
            </div>
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
            {service.features.map((feature, index) => (
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

      {/* Benefits Section */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-[#ff6700] to-white bg-clip-text text-transparent">
              Benefits
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-[#ff6700]/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-[#ff6700]/10 flex items-center justify-center">
                    <FaLightbulb className="h-5 w-5 text-[#ff6700]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{benefit}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-[#ff6700] to-white bg-clip-text text-transparent">
              Our Process
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {service.process.map((step, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-[#ff6700]/50 transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="h-16 w-16 rounded-full bg-[#ff6700]/10 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-[#ff6700]">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
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
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
            Contact our team to discuss how we can help you implement this solution for your organization.
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