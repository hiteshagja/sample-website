'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  const pathname = usePathname();

  const isActive = (href) => {
    return pathname.startsWith(href) && (href === '/' ? pathname === '/' : true);
  };

  return (
    <footer className="bg-[#0a0a0a] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Social Media Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Connect With Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaFacebook className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaTwitter className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaInstagram className="h-6 w-6" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaYoutube className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li className="hidden">
                <Link 
                  href="/" 
                  className={`transition-colors ${
                    isActive('/')
                      ? 'text-[#ff6700]'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Home
                </Link>
              </li>
              <li className="hidden">
                <Link 
                  href="/services" 
                  className={`transition-colors ${
                    isActive('/services')
                      ? 'text-[#ff6700]'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className={`transition-colors ${
                    isActive('/about')
                      ? 'text-[#ff6700]'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  About
                </Link>
              </li>
              <li className="hidden">
                <Link 
                  href="/case-studies" 
                  className={`transition-colors ${
                    isActive('/case-studies')
                      ? 'text-[#ff6700]'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link 
                  href="/blog" 
                  className={`transition-colors ${
                    isActive('/blog')
                      ? 'text-[#ff6700]'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Blog
                </Link>
              </li>
              <li className="hidden">
                <Link 
                  href="/contact" 
                  className={`transition-colors ${
                    isActive('/contact')
                      ? 'text-[#ff6700]'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Contact Us</h3>
            <address className="not-italic">
              <p className="mb-2">123 AI Street</p>
              <p className="mb-2">Tech City, TC 12345</p>
              <p className="mb-2">Email: info@aiagency.com</p>
              <p>Phone: (123) 456-7890</p>
            </address>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} AI Agency. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link 
                href="/privacy" 
                className={`transition-colors ${
                  isActive('/privacy')
                    ? 'text-[#ff6700]'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms" 
                className={`transition-colors ${
                  isActive('/terms')
                    ? 'text-[#ff6700]'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 