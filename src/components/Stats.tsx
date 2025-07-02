"use client";

interface StatCardProps {
  number: string;
  label: string;
  description: string;
  color?: string;
}

const StatCard = ({ number, label, description, color = "text-[#7C3AED]" }: StatCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-md md:shadow-lg px-6 py-8 md:px-8 md:py-10 flex flex-col items-start md:items-start min-h-[170px] transition-shadow duration-200 hover:shadow-xl">
      <div className={`text-4xl md:text-5xl font-bold ${color} mb-2`}>
        {number}
      </div>
      <div className="text-gray-900 font-semibold text-lg mb-1">
        {label}
      </div>
      <div className="text-gray-500 text-sm">
        {description}
      </div>
    </div>
  );
};

const Stats = () => {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Global <span className="bg-gradient-to-r from-[#302260] via-purple-primary to-[#562EA7] inline-block text-transparent bg-clip-text">Impact &</span><br />
              <span className="bg-gradient-to-r from-[#302260] via-purple-primary to-[#562EA7] inline-block text-transparent bg-clip-text">
              Growth
              </span>
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-lg">
              Tekcify&apos;s AI solutions are transforming digital experiences worldwide. 
              Our products are trusted by students, professionals, and businesses across the globe.
            </p>
            
            <button className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors flex items-center gap-2">
              Join WhatsApp Community
              <span className="text-lg">→</span>
            </button>
          </div>
          
          {/* Right side - Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            <StatCard 
              number="12K+"
              label="Active Users"
              description="Across all platforms"
              color="text-purple-600"
            />
            
            <StatCard 
              number="98%"
              label="Satisfaction Rate"
              description="User happiness score"
              color="text-purple-600"
            />
            
            <StatCard 
              number="15"
              label="Community Members"
              description="Engaged Community"
              color="text-purple-600"
            />
            
            <StatCard 
              number="120+"
              label="Countries Reached"
              description="Global presence"
              color="text-purple-600"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats; 