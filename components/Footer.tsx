import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F4F4F4]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        
        {/* Contact CTA */}
        <div id="contact" className="text-center mb-20 md:mb-32">
          <h2 className="text-sm font-medium tracking-widest uppercase text-gray-500 mb-6">Let's create</h2>
          <a 
            href="mailto:studio@trismegilti.com" 
            className="text-4xl md:text-7xl lg:text-8xl text-black font-light hover:underline underline-offset-8 decoration-1"
          >
            studio@trismegilti.com
          </a>
        </div>

        <div className="w-full flex flex-col md:flex-row justify-between items-start gap-12 border-t border-gray-300 pt-12">
          
          {/* About Section */}
          <div id="about" className="md:w-1/3">
             <h3 className="text-sm font-medium tracking-widest uppercase text-gray-500 mb-3">About</h3>
             <p className="text-base font-light text-gray-800 leading-relaxed max-w-xs">
              A Brazil-based studio crafting atmospheric environments through minimalist design.
            </p>
          </div>

          {/* Social and Copyright */}
          <div className="md:w-1/3 flex flex-col items-start md:items-end">
             <div className="flex justify-center space-x-6 mb-6">
                <a href="#" className="text-gray-500 hover:text-black transition-colors" aria-label="Instagram">
                    <span className="sr-only">Instagram</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.343 2.525c.636-.247 1.363.416 2.427-.465C9.793 2.013 10.148 2 12.315 2zm-1.115 6.547a4.443 4.443 0 100 8.885 4.443 4.443 0 000-8.885zM12 15.54a3.443 3.443 0 110-6.885 3.443 3.443 0 010 6.885z" clipRule="evenodd" /></svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-black transition-colors" aria-label="Pinterest">
                    <span className="sr-only">Pinterest</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zM9.31 16.51c-.63 0-1.14-.51-1.14-1.14 0-.63.51-1.14 1.14-1.14.63 0 1.14.51 1.14 1.14 0 .63-.51 1.14-1.14 1.14zm-2.09-4.22c0-1.79 1.18-3.24 2.65-3.24.8 0 1.48.39 1.48.39l.21-1.02c.2-1 .92-1.22.92-1.22.38-.13.88.29.68.79l-1.39 3.51s-.33.66.08 1.1c.41.44 1.05.15 1.05.15s.29-1.29.4-1.52c.11-.23.41-.44.75-.31.5.18.59.88.35 1.36-.24.48-.9 1.18-.9 1.18s-.68 2.08.21 2.58c.89.5 2.15-.31 2.15-.31s2.11.88 2.33 1c.22.12.35.29.35.51 0 .22-.08.43-.24.59-.16.16-1.03.88-2.61.88-3.08 0-4.63-2.63-4.63-5.02z" /></svg>
                </a>
             </div>
             <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Trismegilti Studio.</p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;