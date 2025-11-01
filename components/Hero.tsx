import React from 'react';
import { useLocalization } from '../contexts/LocalizationContext';

const DeconstructedWord = ({ word, delay, positionClasses }: { word: string, delay: number, positionClasses: string }) => (
    <div className={`absolute animate-place-word ${positionClasses}`} style={{ animationDelay: `${delay}ms` }}>
        {word}
    </div>
);

const Hero: React.FC = () => {
  const { t } = useLocalization();
  const words = t.hero_line1.split(' ');

  const positions = [
      'top-[20%] left-[10%] md:top-[25%] md:left-[20%]',
      'top-[35%] right-[5%] md:top-[30%] md:right-[15%]',
      'top-[50%] left-[25%] md:top-[48%] md:left-[35%]',
      'bottom-[25%] right-[20%] md:bottom-[30%] md:right-[30%]',
      'bottom-[10%] left-[5%] md:bottom-[15%] md:left-[10%]',
      'top-[60%] right-[5%] md:top-[65%] md:right-[15%]', // Fallback for more words
  ];

  return (
    <section className="relative h-screen flex flex-col justify-center overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative w-full h-[60vh] max-h-[500px] md:h-[70vh] md:max-h-[600px]">
          <h1 className="sr-only">{t.hero_line1}</h1>
          <div className="font-mono text-xl md:text-2xl lg:text-3xl uppercase tracking-wider text-black">
              {words.map((word, index) => (
                  <DeconstructedWord
                      key={index}
                      word={word}
                      delay={200 + index * 150}
                      positionClasses={positions[index] || ''}
                  />
              ))}
          </div>
        </div>
      </div>
       <a href="#works" aria-label="Scroll to projects" className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 group">
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