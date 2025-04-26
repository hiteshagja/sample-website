'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function MobileMenu({ isOpen, setIsOpen, currentPath, navigation }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="md:hidden">
      <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setIsOpen(false)} />
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-[#0a0a0a] z-50 transform transition-transform duration-300 ease-in-out">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-gray-800">
            <h2 className="text-xl font-semibold text-white">Menu</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="flex-1 p-4 space-y-4">
            {navigation.map((item) => {
              const isActive = currentPath.startsWith(item.href) && 
                (item.href === '/' ? currentPath === '/' : true);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-4 py-2 text-base font-medium transition-colors ${
                    isActive
                      ? 'text-[#ff6700]'
                      : 'text-gray-300 hover:text-white'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
          <div className="p-4 border-t border-gray-800">
            <Link
              href="/contact"
              className="block w-full text-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-[#ff6700] hover:bg-[#ff6700]/90 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 