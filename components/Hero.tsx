import React from 'react';

const AnimatedLine = ({ text, delay }: { text: string, delay: number }) => (
  <div className="overflow-hidden">
    <div className="animate-slide-in-up" style={{ animationDelay: `${delay}ms` }}>
      {text}
    </div>
  </div>
);

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex flex-col justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-black leading-tight md:leading-tight">
            <AnimatedLine text="Transmuting atmospheric" delay={200} />
            <AnimatedLine text="environments through minimalist" delay={350} />
            <AnimatedLine text="form, light and composition." delay={500} />
          </h1>
        </div>
      </div>
       <a href="#projects" aria-label="Scroll to projects" className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 group">
          <div className="w-px h-20 bg-gray-300 transition-colors duration-300 group-hover:bg-black">
             <div className="w-px h-8 bg-black transition-transform duration-1000 group-hover:translate-y-12" style={{ animation: 'scroll-indicator 2.5s infinite ease-in-out' }}></div>
          </div>
          <style>{`
            @keyframes scroll-indicator {
              0% { transform: translateY(0); }
              50% { transform: translateY(48px); }
              100% { transform: translateY(0); }
            }
          `}</style>
        </a>
    </section>
  );
};

export default Hero;