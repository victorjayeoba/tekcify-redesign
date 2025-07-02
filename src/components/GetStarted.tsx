"use client";

import React from 'react';

interface StepCardProps {
  stepNumber: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const StepCard = ({ stepNumber, icon, title, description }: StepCardProps) => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 relative overflow-hidden h-full">
      <div className="absolute -top-2 -right-2 text-8xl font-bold text-purple-500/10 z-0 select-none">
        {stepNumber}
      </div>
      <div className="relative z-10 flex flex-col h-full">
        <div className="bg-purple-100 rounded-full w-14 h-14 flex items-center justify-center mb-6 flex-shrink-0">
          <div className="text-purple-600">
            {icon}
          </div>
        </div>
        <div className="flex-grow">
            <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

const GetStarted = () => {
  return (
    <section className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get Started in 3 Steps
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            With Tekcify, you don&apos;t need multiple logins or complex setups. We make digital interactions effortless with our unified platform.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StepCard
            stepNumber="01"
            icon={
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="8.5" cy="7.5" r="4" />
                <line x1="20" y1="8" x2="20" y2="14" />
                <line x1="17" y1="11" x2="23" y2="11" />
              </svg>
            }
            title="Create Your Account"
            description="One simple registration gives you access to all Tekcify products."
          />
          <StepCard
            stepNumber="02"
            icon={
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L9.5 9.5 2 12l7.5 2.5L12 22l2.5-7.5L22 12l-7.5-2.5z" />
                </svg>
            }
            title="Explore Our AI-Powered Tools"
            description="Use Binx for instant WhatsApp conversations, PDFX for smart document management, and Campux for AI-enhanced student networking."
          />
          <StepCard
            stepNumber="03"
            icon={
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
            }
            title="Transform Your Digital Experience"
            description="Work smarter, not harder with AI-driven automation."
          />
        </div>
      </div>
    </section>
  );
};

export default GetStarted; 