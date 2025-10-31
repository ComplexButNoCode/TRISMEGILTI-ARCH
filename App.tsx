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
    { id: 15, imageUrl: 'https://raw.githubusercontent.com/ComplexButNoCode/TRISMEGILTI-ARCH/main/PORTFOLIO/image-14.jpg' },
    { id: 16, imageUrl: 'https://raw.githubusercontent.com/ComplexButNoCode/TRISMEGILTI-ARCH/main/PORTFOLIO/image-15.jpg' },
    { id: 17, imageUrl: 'https://raw.githubusercontent.com/ComplexButNoCode/TRISMEGILTI-ARCH/main/PORTFOLIO/image-16.jpg' },
    { id: 18, imageUrl: 'https://raw.githubusercontent.com/ComplexButNoCode/TRISMEGILTI-ARCH/main/PORTFOLIO/image-17.jpg' },
    { id: 19, imageUrl: 'https://raw.githubusercontent.com/ComplexButNoCode/TRISMEGILTI-ARCH/main/PORTFOLIO/image-18.jpg' },
    { id: 20, imageUrl: 'https://raw.githubusercontent.com/ComplexButNoCode/TRISMEGILTI-ARCH/main/PORTFOLIO/image-19.jpg' },
    { id: 21, imageUrl: 'https://raw.githubusercontent.com/ComplexButNoCode/TRISMEGILTI-ARCH/main/PORTFOLIO/image-20.jpg' },
    { id: 22, imageUrl: 'https://raw.githubusercontent.com/ComplexButNoCode/TRISMEGILTI-ARCH/main/PORTFOLIO/image-21.jpg' },
    { id: 23, imageUrl: 'https://raw.githubusercontent.com/ComplexButNoCode/TRISMEGILTI-ARCH/main/PORTFOLIO/image-22.jpg' },
    { id: 24, imageUrl: 'https://raw.githubusercontent.com/ComplexButNoCode/TRISMEGILTI-ARCH/main/PORTFOLIO/image-23.jpg' },
    { id: 25, imageUrl: 'https://raw.githubusercontent.com/ComplexButNoCode/TRISMEGILTI-ARCH/main/PORTFOLIO/image-24.jpg' }
  ];

  return (
    <div className="bg-[#F4F4F4] text-[#111111] antialiased">
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