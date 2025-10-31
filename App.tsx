
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';
import type { Project } from './types';

const App: React.FC = () => {

  const projects: Project[] = [
    { id: 1, imageUrl: 'https://raw.githubusercontent.com/ComplexButNoCode/TRISMEGILTI-ARCH/main/PORTFOLIO/image.jpg' },
    { id: 2, imageUrl: 'https://raw.githubusercontent.com/ComplexButNoCode/TRISMEGILTI-ARCH/main/PORTFOLIO/image-1.jpg' },
    { id: 3, imageUrl: 'https://raw.githubusercontent.com/ComplexButNoCode/TRISMEGILTI-ARCH/main/PORTFOLIO/image-2.jpg' },
    { id: 4, imageUrl: 'https://raw.githubusercontent.com/ComplexButNoCode/TRISMEGILTI-ARCH/main/PORTFOLIO/image-3.jpg' },
    { id: 5, imageUrl: 'https://raw.githubusercontent.com/ComplexButNoCode/TRISMEGILTI-ARCH/main/PORTFOLIO/image-4.jpg' },
    { id: 6, imageUrl: 'https://raw.githubusercontent.com/ComplexButNoCode/TRISMEGILTI-ARCH/main/PORTFOLIO/image-5.jpg' },
    { id: 7, imageUrl: 'https://raw.githubusercontent.com/ComplexButNoCode/TRISMEGILTI-ARCH/main/PORTFOLIO/image-6.jpg' },
    { id: 8, imageUrl: 'https://raw.githubusercontent.com/ComplexButNoCode/TRISMEGILTI-ARCH/main/PORTFOLIO/image-7.jpg' },
    { id: 9, imageUrl: 'https://raw.githubusercontent.com/ComplexButNoCode/TRISMEGILTI-ARCH/main/PORTFOLIO/image-8.jpg' },
    { id: 10, imageUrl: 'https://raw.githubusercontent.com/ComplexButNoCode/TRISMEGILTI-ARCH/main/PORTFOLIO/image-9.jpg' },
    { id: 11, imageUrl: 'https://raw.githubusercontent.com/ComplexButNoCode/TRISMEGILTI-ARCH/main/PORTFOLIO/image-10.jpg' },
    { id: 12, imageUrl: 'https://raw.githubusercontent.com/ComplexButNoCode/TRISMEGILTI-ARCH/main/PORTFOLIO/image-11.jpg' },
    { id: 13, imageUrl: 'https://raw.githubusercontent.com/ComplexButNoCode/TRISMEGILTI-ARCH/main/PORTFOLIO/image-12.jpg' },
    { id: 14, imageUrl: 'https://raw.githubusercontent.com/ComplexButNoCode/TRISMEGILTI-ARCH/main/PORTFOLIO/image-13.jpg' },
    { id: 15, imageUrl: 'https://raw.githubusercontent.com/ComplexButNoCode/TRISMEGILTI-ARCH/main/PORTFOLIO/image-14.jpg' }
  ];

  return (
    <div className="bg-white text-gray-900 antialiased">
      <Header />
      <main>
        <Hero />
        <Projects projects={projects} />
      </main>
      <Footer />
    </div>
  );
};

export default App;