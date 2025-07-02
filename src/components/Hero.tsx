"use client"
import Link from 'next/link';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import { useState, useEffect, useRef } from 'react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [delayedPosition, setDelayedPosition] = useState({ x: 0, y: 0 });
  const cursorRef = useRef(null);
  const delayedCursorRef = useRef(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  // Add animation effect for the delayed cursor
  useEffect(() => {
    const animateDelayedCursor = () => {
      setDelayedPosition(prev => ({
        x: prev.x + (mousePosition.x - prev.x) * 0.08,
        y: prev.y + (mousePosition.y - prev.y) * 0.08
      }));
      
      requestAnimationFrame(animateDelayedCursor);
    };
    
    const animationId = requestAnimationFrame(animateDelayedCursor);
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [mousePosition]);

  return (
    <div className="relative overflow-hidden bg-white">
      {/* Cross Pattern Background */}
      <div className="absolute inset-0 bg-transparent">
        <div 
          className="absolute inset-0 opacity-30"
          style={{ 
            backgroundImage: 'url(/images/cross-pattern.svg)',
            backgroundRepeat: 'repeat',
            backgroundSize: '20px 20px'
          }}
        ></div>
      </div>
      
      {/* Delayed larger cursor follower effect */}
      <div
        ref={delayedCursorRef}
        className="pointer-events-none fixed z-50 h-[25px] w-[25px] l_cursor rounded-full bg-[#7c3aedc4]"
        style={{
          transform: `translate(calc(${mousePosition.x}px - 50%), calc(${mousePosition.y}px - 50%))`,
        }}
      ></div>
      
      {/* Immediate cursor follower effect */}
      <div
        ref={cursorRef}
        className="pointer-events-none s_cursor fixed z-50 h-[8px] w-[8px] rounded-full bg-[#a78bfabd]"
        style={{
          transform: `translate(calc(${mousePosition.x}px - 50%), calc(${mousePosition.y}px - 50%))`,
        }}
      ></div>
      
      {/* Main content */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 max-sm:pt-16 pt-24 pb-16 md:py-24 relative z-10">
        {/* "New" badge with WhatsApp announcement */}
        <div className="flex justify-center mb-8">
          <div className="bg-[#F7F5FF] rounded-full px-4 py-3 flex items-center space-x-2">
            <span className="bg-[#7C3AED] text-white text-xs font-semibold px-2 py-1 rounded-full">New</span>
            <span className="text-sm font-medium ">Binx AI is now live on WhatsApp</span>
          </div>
        </div>
        
        {/* Main heading */}
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-3.5 mb-4 font-satoshi">
            <span className="text-gray-700 ">Elevate Your Digital<br className="hidden h-6 sm:block" />
            Experience with</span> <span className="text-[var(--purple-primary)]">AI</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto pt-4 text-base md:text-[20px]">
            Experience the power of AI-driven solutions that streamline your workflow, 
            enhance communication, and revolutionize document management. 
            Join the future of intelligent technology.
          </p>
        </div>
        
        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-10">
          <Link href="/explore" className="w-full sm:w-auto bg-black text-white px-8 py-4  rounded-full  flex items-center justify-center transition-transform duration-200 hover:scale-105">
            Explore Tekcify
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
          <Link href="/learn-more" className="w-full sm:w-auto border border-gray-300 rounded-full  text-gray-700 px-8 py-4  hover:bg-gray-50 transition-transform duration-200 hover:scale-105 text-center">
            Learn More
          </Link>
        </div>
        
        {/* Second section heading */}
        <div className="mt-24 md:mt-36 text-center">
          <h2 className="text-xl md:text-3xl font-bold mb-3 text-gray-700">Empowering Innovation Together</h2>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">Collaborating with industry leaders to shape the future of AI</p>
        </div>
        
        {/* Partner logos with Marquee */}
        <div className="mt-10">
          <Marquee
            gradient={false}
            speed={60}
            pauseOnHover={true}
            className="py-6 px-12 bg-[#FEFEFE] border-[1px] border-[#E2E2E2] bg-opacity-50 rounded-xl"
          >
            <div className="flex items-center gap-48 mx-12">
              <div className="h-8 w-auto flex items-center justify-center">
                <Image src="/images/microsoft.webp" alt="Microsoft" width={100} height={30} className="object-contain" />
              </div>
              <div className="h-8 w-auto flex items-center justify-center">
                <Image src="/images/google.webp" alt="Google" width={100} height={30} className="object-contain" />
              </div>
              <div className="h-8 w-auto flex items-center justify-center">
                <Image src="/images/aws.webp" alt="AWS" width={60} height={30} className="object-contain" />
              </div>
              <div className="h-8 w-auto flex items-center justify-center">
                <Image src="/images/meta.webp" alt="Meta" width={100} height={30} className="object-contain" />
              </div>
              <div className="h-8 w-auto flex items-center justify-center">
                <Image src="/images/ms-azure.webp" alt="Microsoft Azure" width={100} height={30} className="object-contain" />
              </div>
              <div className="h-8 w-auto flex items-center justify-center">
                <Image src="/images/cardri.webp" alt="Cardri" width={100} height={30} className="object-contain" />
              </div>
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Hero; 