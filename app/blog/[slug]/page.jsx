'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { FaCalendar, FaUser, FaTags, FaArrowLeft, FaShare, FaBookmark } from 'react-icons/fa';

const blogPosts = {
  'ai-trends-2024': {
    title: 'Top AI Trends to Watch in 2024',
    content: `
      <p class="lead">Artificial Intelligence continues to evolve at a rapid pace, transforming industries and reshaping the way we live and work. As we move through 2024, several key trends are emerging that will have significant implications for businesses and society.</p>
      
      <h2>1. Generative AI Maturation</h2>
      <p>Generative AI has moved beyond the hype phase and is now being integrated into practical business applications. Companies are finding innovative ways to leverage these tools for content creation, design, and problem-solving.</p>
      <p>Key developments include:</p>
      <ul>
        <li>Improved accuracy and reliability of AI-generated content</li>
        <li>Integration with existing business workflows</li>
        <li>Customization for specific industry needs</li>
        <li>Enhanced ethical considerations and safeguards</li>
      </ul>
      
      <h2>2. AI-Powered Automation</h2>
      <p>The automation landscape is being revolutionized by AI, with more sophisticated systems capable of handling complex tasks that previously required human intervention.</p>
      <p>Notable advancements:</p>
      <ul>
        <li>Intelligent process automation (IPA) systems</li>
        <li>Self-learning algorithms for continuous improvement</li>
        <li>Integration with IoT devices</li>
        <li>Predictive maintenance capabilities</li>
      </ul>
      
      <h2>3. Ethical AI Development</h2>
      <p>As AI becomes more prevalent, there's an increasing focus on developing ethical frameworks and responsible AI practices to ensure technology serves humanity's best interests.</p>
      <p>Key considerations include:</p>
      <ul>
        <li>Transparency in AI decision-making</li>
        <li>Bias detection and mitigation</li>
        <li>Privacy protection</li>
        <li>Accountability mechanisms</li>
      </ul>
      
      <h2>4. Edge AI Computing</h2>
      <p>Edge AI is bringing intelligence closer to where data is generated, enabling real-time processing and decision-making without constant cloud connectivity.</p>
      <p>Benefits include:</p>
      <ul>
        <li>Reduced latency</li>
        <li>Enhanced privacy</li>
        <li>Lower bandwidth requirements</li>
        <li>Improved reliability</li>
      </ul>
      
      <h2>5. AI in Healthcare</h2>
      <p>The healthcare industry is experiencing a transformation through AI applications, from diagnostics to personalized treatment plans.</p>
      <p>Key applications:</p>
      <ul>
        <li>Medical image analysis</li>
        <li>Drug discovery and development</li>
        <li>Patient monitoring systems</li>
        <li>Predictive analytics for disease prevention</li>
      </ul>
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
  'machine-learning-business': {
    title: 'Machine Learning in Business: A Practical Guide',
    content: `
      <p class="lead">Machine Learning is transforming how businesses operate, offering unprecedented opportunities for growth and efficiency. This guide explores practical applications and implementation strategies.</p>
      
      <h2>1. Understanding Machine Learning Basics</h2>
      <p>Machine Learning is a subset of AI that enables systems to learn from data and improve over time without explicit programming.</p>
      <p>Key concepts include:</p>
      <ul>
        <li>Supervised vs. Unsupervised Learning</li>
        <li>Neural Networks and Deep Learning</li>
        <li>Feature Engineering</li>
        <li>Model Evaluation</li>
      </ul>
      
      <h2>2. Business Applications</h2>
      <p>Machine Learning can be applied across various business functions to drive value and efficiency.</p>
      <p>Common applications include:</p>
      <ul>
        <li>Customer segmentation and targeting</li>
        <li>Predictive analytics for sales forecasting</li>
        <li>Fraud detection and prevention</li>
        <li>Supply chain optimization</li>
        <li>Quality control and maintenance</li>
      </ul>
      
      <h2>3. Implementation Strategy</h2>
      <p>Successful ML implementation requires careful planning and execution.</p>
      <p>Key steps include:</p>
      <ul>
        <li>Data collection and preparation</li>
        <li>Model selection and training</li>
        <li>Integration with existing systems</li>
        <li>Performance monitoring and optimization</li>
      </ul>
      
      <h2>4. Challenges and Solutions</h2>
      <p>While ML offers significant benefits, implementation comes with challenges.</p>
      <p>Common challenges and solutions:</p>
      <ul>
        <li>Data quality and availability</li>
        <li>Model interpretability</li>
        <li>Scalability concerns</li>
        <li>Resource requirements</li>
      </ul>
      
      <h2>5. Future Outlook</h2>
      <p>The future of ML in business looks promising, with continuous advancements and new applications emerging.</p>
      <p>Key trends to watch:</p>
      <ul>
        <li>Automated Machine Learning (AutoML)</li>
        <li>Edge computing integration</li>
        <li>Explainable AI</li>
        <li>Federated learning</li>
      </ul>
    `,
    image: '/blog/ml-business.jpg',
    author: 'Jane Smith',
    date: '2024-03-10',
    tags: ['Machine Learning', 'Business', 'AI'],
    readTime: '7 min read',
    benefits: [
      'Understand ML fundamentals',
      'Identify business applications',
      'Learn implementation strategies',
      'Overcome common challenges',
      'Prepare for future developments',
      'Make informed decisions'
    ]
  },
  'ai-ethics': {
    title: 'The Ethics of AI: Balancing Innovation and Responsibility',
    content: `
      <p class="lead">As AI systems become more powerful and pervasive, ethical considerations are increasingly important. This article explores the key ethical challenges and frameworks for responsible AI development.</p>
      
      <h2>1. Understanding AI Ethics</h2>
      <p>AI ethics involves ensuring that artificial intelligence systems are developed and used in ways that are fair, transparent, and beneficial to society.</p>
      <p>Core principles include:</p>
      <ul>
        <li>Fairness and non-discrimination</li>
        <li>Transparency and explainability</li>
        <li>Privacy and data protection</li>
        <li>Accountability and responsibility</li>
      </ul>
      
      <h2>2. Bias in AI Systems</h2>
      <p>AI systems can inherit and amplify biases present in training data or development processes.</p>
      <p>Key considerations:</p>
      <ul>
        <li>Data collection and preprocessing</li>
        <li>Algorithm design and testing</li>
        <li>Diverse development teams</li>
        <li>Continuous monitoring</li>
      </ul>
      
      <h2>3. Privacy Concerns</h2>
      <p>AI systems often require large amounts of data, raising important privacy considerations.</p>
      <p>Important aspects include:</p>
      <ul>
        <li>Data minimization</li>
        <li>Consent and control</li>
        <li>Secure data handling</li>
        <li>Compliance with regulations</li>
      </ul>
      
      <h2>4. Accountability Frameworks</h2>
      <p>Establishing clear accountability is crucial for responsible AI development and deployment.</p>
      <p>Key elements:</p>
      <ul>
        <li>Clear governance structures</li>
        <li>Documentation and auditing</li>
        <li>Incident response plans</li>
        <li>Stakeholder engagement</li>
      </ul>
      
      <h2>5. Future Directions</h2>
      <p>The field of AI ethics is evolving rapidly, with new challenges and solutions emerging.</p>
      <p>Areas of focus:</p>
      <ul>
        <li>International standards and regulations</li>
        <li>Ethical AI certification</li>
        <li>Public education and awareness</li>
        <li>Cross-disciplinary collaboration</li>
      </ul>
    `,
    image: '/blog/ai-ethics.jpg',
    author: 'Alex Johnson',
    date: '2024-03-05',
    tags: ['AI Ethics', 'Responsibility', 'Technology'],
    readTime: '6 min read',
    benefits: [
      'Understand ethical principles',
      'Identify potential biases',
      'Protect user privacy',
      'Establish accountability',
      'Navigate regulations',
      'Promote responsible AI'
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