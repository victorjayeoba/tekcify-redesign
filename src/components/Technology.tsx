"use client";

import Image from 'next/image';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div
      className="rounded-xl p-6 border border-[#1D1D1D] flex flex-col md:flex-row items-center md:items-start w-full min-h-[120px]"
      style={{
        background: "linear-gradient(to right, #1D1D1D 0%, #1D1D1D 2%, rgba(29,29,29,0) 100%)"
      }}
    >
      <div className="flex-shrink-0 w-12 h-12 bg-[#343434] rounded-lg flex items-center justify-center text-white mb-4 md:mb-0 md:mr-6">
        {icon}
      </div>
      <div className="flex-1 text-center md:text-left">
        <h3 className="text-white font-base text-lg mb-2">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const Technology = () => {
  return (
    <section className="py-20 md:py-32 bg-black relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center bg-[#a78bfa21] rounded-full px-4 py-1 mb-6">
            <span className="text-sm text-[#7C3AED]">● Why Choose Tekcify?</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-medium mb-6 text-white">
            Experience the future<br />
            of <span className="text-[#A78BFA]">intelligent</span><br />
            <span className="text-[#A78BFA]">technology</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Feature cards */}
          <div className="flex flex-col space-y-6">
            <FeatureCard
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              }
              title="Unified Digital Experience"
              description="Access all our AI-powered tools through a single, seamless platform"
            />
            
            <FeatureCard
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              }
              title="Advanced AI Technology"
              description="Cutting-edge machine learning models that continuously evolve and improve"
            />
            
            <FeatureCard
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              }
              title="Enterprise-Grade Security"
              description="Your data is protected with state-of-the-art encryption and security measures"
            />
            
            <FeatureCard
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              }
              title="Innovation-Driven"
              description="Constantly evolving features and capabilities to meet your needs"
            />
            {/* Bottom section */}
            <div className="mt-16 text-start">
              <p className="text-[#A1A1AA] text-lg max-w-2xl mb-8 font-normal leading-relaxed">
                <span className="text-[#A1A1AA]">At Tekcify, we do not just build products; we </span>
                <span className="font-bold text-white">redefine</span>
                <span className="text-[#A1A1AA]"> how people experience digital solutions.</span>
              </p>
              <button className="bg-white text-black px-7 py-3 rounded-xl font-medium shadow-md hover:bg-gray-100 transition-colors flex items-center gap-2">
                Get Started
                <span className="inline-block text-lg">→</span>
              </button>
            </div>
          </div>
          
          {/* Right side - Image cards */}
          <div className="grid grid-cols-1 gap-6">
            {/* Top row */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1 rounded-2xl h-48 md:h-[250px] relative overflow-hidden min-w-[220px] group">
                <div className="absolute inset-0 transition-transform duration-300 ease-out group-hover:scale-105">
                  <Image 
                    src="/images/technology/ai-solution.webp" 
                    alt="AI Solutions"
                    fill
                    className="object-cover"
                    style={{ objectPosition: 'center' }}
                  />
                </div>
                <div className="absolute inset-0 bg-[#00000086] bg-opacity-20"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="text-sm font-medium">AI Solutions</span>
                </div>
              </div>
              <div className="flex-1 rounded-2xl h-48 md:h-[250px] relative overflow-hidden min-w-[220px] group">
                <div className="absolute inset-0 transition-transform duration-300 ease-out group-hover:scale-105">
                  <Image 
                    src="/images/technology/digital-girl.webp" 
                    alt="Simplified digital presence"
                    fill
                    className="object-cover"
                    style={{ objectPosition: 'center' }}
                  />
                </div>
                <div className="absolute inset-0 bg-[#00000086] bg-opacity-20"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="text-sm font-medium">Simplified digital presence</span>
                </div>
              </div>
            </div>
            {/* Bottom row */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1 rounded-2xl h-48 md:h-[250px] relative overflow-hidden min-w-[220px] group">
                <div className="absolute inset-0 transition-transform duration-300 ease-out group-hover:scale-105">
                  <Image 
                    src="/images/technology/friendly-community.webp" 
                    alt="Future Technology"
                    fill
                    className="object-cover"
                    style={{ objectPosition: 'center' }}
                  />
                </div>
                <div className="absolute inset-0 bg-[#00000086] bg-opacity-20"></div>
              </div>
              <div className="flex-1 rounded-2xl h-48 md:h-[250px] relative overflow-hidden min-w-[220px] group">
                <div className="absolute inset-0 transition-transform duration-300 ease-out group-hover:scale-105">
                  <Image 
                    src="/images/technology/future-tech.webp" 
                    alt="Community"
                    fill
                    className="object-cover"
                    style={{ objectPosition: 'center' }}
                  />
                </div>
                <div className="absolute inset-0 bg-[#00000086] bg-opacity-40"></div>
              </div>
            </div>
            {/* Join Our Growing Community Tag */}
            <div className="-mt-10 z-5">
              <div className="flex items-center bg-[#18181b] rounded-2xl px-6 py-4 shadow-lg">
                <span className="flex items-center text-white font-medium text-base mr-4">
                  <span className="w-3 h-3 rounded-full bg-purple-500 inline-block mr-2"></span>
                  Join Our Growing Community
                </span>
                <div className="flex -space-x-2 mr-4">
                  <span className="inline-block w-8 h-8 rounded-full border-2 border-black overflow-hidden">
                    <Image
                      src="https://tekcify.com/assets/henry.svg"
                      alt="Community member"
                      width={32}
                      height={32}
                      className="w-full h-full object-cover"
                    />
                  </span>
                  <span className="inline-block w-8 h-8 rounded-full border-2 border-black overflow-hidden">
                    <Image
                      src="https://tekcify.com/assets/muniz.svg"
                      alt="Community member"
                      width={32}
                      height={32}
                      className="w-full h-full object-cover"
                    />
                  </span>
                  <span className="inline-block w-8 h-8 rounded-full border-2 border-black overflow-hidden">
                    <Image
                      src="https://tekcify.com/assets/sarah.svg"
                      alt="Community member"
                      width={32}
                      height={32}
                      className="w-full h-full object-cover"
                    />
                  </span>
                 
                </div>
                <a
                  href="#"
                  className="ml-auto text-purple-400 font-semibold hover:underline transition-colors text-base"
                >
                  Join Now &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology; 