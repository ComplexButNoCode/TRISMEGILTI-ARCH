import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-end justify-center text-left overflow-hidden">
      <div className="absolute inset-0">
         <div 
            className="absolute inset-0 bg-cover bg-center animate-hero-bg" 
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585152225-358945c58953?q=80&w=2070&auto=format&fit=crop')" }}
          ></div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
      <div className="relative z-10 p-8 md:p-16 w-full max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <h1 className="text-sm md:text-base font-normal tracking-[0.3em] uppercase text-gray-600 mb-6">
            Trismegilti Studio
          </h1>
          <p className="text-2xl md:text-4xl lg:text-5xl font-light text-gray-800 leading-snug md:leading-snug">
            Transmuting atmospheric environments through <span className="block mt-2">minimalist form, expressive light and selected composition.</span>
          </p>
        </div>
      </div>
       <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <a href="#projects" aria-label="Scroll to projects">
          <div className="w-px h-16 bg-gray-400">
             <div className="w-px h-6 bg-gray-800 animate-scroll-indicator"></div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;