'use client';

import { FaLightbulb, FaUsers, FaRocket, FaShieldAlt, FaBrain, FaChartLine } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const values = [
  {
    title: 'Innovation',
    description: 'Pushing the boundaries of AI technology to create groundbreaking solutions.',
    icon: FaLightbulb,
  },
  {
    title: 'Collaboration',
    description: 'Working together with clients and partners to achieve shared success.',
    icon: FaUsers,
  },
  {
    title: 'Excellence',
    description: 'Delivering exceptional quality in every aspect of our work.',
    icon: FaRocket,
  },
  {
    title: 'Integrity',
    description: 'Maintaining the highest standards of ethics and transparency.',
    icon: FaShieldAlt,
  },
];

const teamMembers = [
  {
    name: 'Sarah Chen',
    role: 'CEO & Founder',
    bio: 'Visionary leader with 15+ years of experience in AI and technology innovation.',
    image: '/team/sarah.jpg',
  },
  {
    name: 'Michael Rodriguez',
    role: 'CTO',
    bio: 'Technical expert specializing in machine learning and cloud architecture.',
    image: '/team/michael.jpg',
  },
  {
    name: 'Emily Johnson',
    role: 'Head of AI Research',
    bio: 'Leading researcher in natural language processing and computer vision.',
    image: '/team/emily.jpg',
  },
  {
    name: 'David Kim',
    role: 'Head of Product',
    bio: 'Product strategist focused on delivering exceptional user experiences.',
    image: '/team/david.jpg',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-[#0a0a0a] to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#ff6700] to-white bg-clip-text text-transparent">
                About Us
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We are a team of passionate AI experts dedicated to transforming businesses through innovative technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-8">
                Our Story
              </h2>
              <div className="space-y-6 text-gray-300">
                <p>
                  Founded in 2020, we set out with a bold vision: to make advanced AI accessible and beneficial for businesses of all sizes. What started as a small team of passionate AI researchers has grown into a leading force in artificial intelligence solutions.
                </p>
                <p>
                  Our journey has been marked by continuous innovation and a deep commitment to solving real-world problems. From developing cutting-edge language models to implementing sophisticated computer vision systems, we've consistently pushed the boundaries of what's possible with AI.
                </p>
                <p>
                  Today, we serve clients across industries, helping them harness the power of AI to transform their operations, enhance customer experiences, and drive growth. Our success is built on a foundation of technical excellence, ethical AI practices, and a relentless focus on delivering value to our clients.
                </p>
              </div>
            </div>
            <div className="relative h-[500px] rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff6700] to-[#ff8533] opacity-20" />
              <Image
                src="/about-story.jpg"
                alt="Our Story"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-[#1a1a1a] p-8 rounded-xl border border-gray-800 hover:border-[#ff6700] transition-all duration-300"
              >
                <value.icon className="h-12 w-12 text-[#ff6700] mb-6" />
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-[#0a0a0a] p-6 rounded-xl border border-gray-800 hover:border-[#ff6700] transition-all duration-300"
              >
                <div className="relative h-64 w-full mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-[#ff6700] mb-4">{member.role}</p>
                <p className="text-gray-400">{member.bio}</p>
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
            Contact our team to discuss how we can help you implement AI solutions for your organization.
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