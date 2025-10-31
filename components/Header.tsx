
import React, { useState, useEffect } from 'react';

const FullScreenNav = ({ links, onClose }: { links: { name: string; href: string }[]; onClose: () => void; }) => (
  <div className="fixed inset-0 bg-white/95 backdrop-blur-md z-[100] flex flex-col items-center justify-center animate-fade-in">
    <button
      onClick={onClose}
      className="absolute top-8 right-8 text-gray-600 hover:text-gray-900"
      aria-label="Close menu"
    >
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
    </button>
    <nav className="flex flex-col items-center space-y-8">
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          onClick={onClose}
          className="text-3xl md:text-4xl font-light text-gray-700 hover:text-gray-900 transition-colors tracking-wider"
        >
          {link.name}
        </a>
      ))}
    </nav>
  </div>
);

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          isScrolled ? 'bg-white/80 backdrop-blur-sm' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            <a href="#" className="text-xl font-bold tracking-[0.2em] text-gray-900 uppercase">
              Trismegilti
            </a>
            <button
              onClick={() => setIsOpen(true)}
              className="text-sm font-medium tracking-widest text-gray-600 hover:text-gray-900 transition-colors uppercase"
            >
              Menu
            </button>
          </div>
        </div>
      </header>
      {isOpen && <FullScreenNav links={navLinks} onClose={() => setIsOpen(false)} />}
    </>
  );
};

export default Header;
