"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/Tekcify-logo.png"
              alt="Tekcify"
              width={120}
              height={30}
              className="h-8 w-auto"
            />
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/products" className="text-gray-600 hover:text-gray-900">
              Products
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900">
              About
            </Link>
            <Link href="/privacy" className="text-gray-600 hover:text-gray-900">
              Privacy
            </Link>
          </nav>
          
          <div className="flex items-center">
            <div className="hidden md:block">
                <Link
                  href="/get-started"
                  className="bg-[var(--purple-primary)] text-whit text-white px-4 py-2  rounded-full  flex items-center justify-center transition-transform duration-200 hover:scale-105"
                >
                  Get Started
                </Link>
                
            </div>
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-gray-700">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-3">
                <Link href="/products" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md font-medium">
                Products
                </Link>
                <Link href="/about" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md font-medium">
                About
                </Link>
                <Link href="/privacy" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md font-medium">
                Privacy
                </Link>
                <Link href="/get-started" className="bg-[var(--purple-primary)] text-white px-4 py-2.5 rounded-full font-semiboldtransition-transform duration-200 hover:scale-105 transition-colors text-center mt-2">
                    Get Started
                </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;