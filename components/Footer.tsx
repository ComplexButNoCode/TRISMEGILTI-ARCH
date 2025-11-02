import React from 'react';
import { useLocalization } from '../contexts/LocalizationContext';

const Footer: React.FC = () => {
  const { t } = useLocalization();

  return (
    <footer className="bg-[#F4F4F4]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        
        <div id="dialogue" className="text-left md:text-center mb-20 md:mb-32">
          <h2 className="text-sm font-medium tracking-widest uppercase text-gray-500 mb-6">{t.cta_title}</h2>
          <a 
            href="https://instagram.com/trismegilti"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl text-black font-light hover:underline underline-offset-8 decoration-1 break-all"
          >
            {t.cta_email}
          </a>
        </div>

        <div className="w-full flex flex-col md:flex-row justify-between items-start gap-12 border-t border-gray-300 pt-12">
          
          <div id="principle" className="md:w-1/3">
             <h3 className="text-sm font-medium tracking-widest uppercase text-gray-500 mb-3">{t.about_title}</h3>
             <p className="text-base font-light text-gray-800 leading-relaxed max-w-xs">
              {t.about_text}
            </p>
          </div>

          <div className="md:w-1/3 flex flex-col items-start md:items-end">
             <p className="text-sm text-gray-500 text-left md:text-right">{t.copyright}</p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;