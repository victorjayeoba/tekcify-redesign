"use client";

interface ProductCardProps {
  title: string;
  description: string;
  logoSrc: string;
}

const ProductCard = ({ title, description, logoSrc }: ProductCardProps) => {
  return (
    <div
      className={`rounded-2xl p-10 relative overflow-hidden h-[380px] flex flex-col group`}
      style={{
        backgroundImage: `url(${logoSrc})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0000005d] bg-opacity-40 transition-opacity duration-300 pointer-events-none group-hover:opacity-0"></div>
      <div className="absolute top-5 right-5 z-10">
        <button className="bg-[#ffffff1f] bg-opacity-20 rounded-full p-2 text-white hover:bg-opacity-30 transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
      <div className="mt-auto z-10">
        <h3 className="text-2xl font-bold text-white mb-1">{title}</h3>
        <p className="text-white text-opacity-90">{description}</p>
      </div>
    </div>
  );
};

const Products = () => {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center bg-[#F7F5FF] rounded-full px-4 py-2 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600 mr-2">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="text-sm text-[#7C3AED]">Our Solutions</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Discover Our Products</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Explore our suite of AI-powered tools designed to transform your digital experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <ProductCard 
            title="Binx AI" 
            description="WhatsApp AI assistant for for daily tasks." 
            logoSrc="/images/logos/binx-logo.webp" 
          />
          
          <ProductCard 
            title="PDFX" 
            description="AI-powered document analysis and extraction" 
            logoSrc="/images/logos/pdfx-logo.webp" 
          />
          
          <ProductCard 
            title="Campux" 
            description="Smart social platform for students" 
            logoSrc="/images/logos/campux-logo.webp" 
          />
        </div>
      </div>
    </section>
  );
};

export default Products; 