
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { LocalizationProvider } from './contexts/LocalizationContext';
import type { Project } from './types';

const INITIAL_PROJECTS: Project[] = [
    { id: 1, imageUrl: 'https://cdn.jsdelivr.net/gh/ComplexButNoCode/TRISMEGILTI-ARCH@main/Public/assets/image1.jpg' },
    { id: 2, imageUrl: 'https://cdn.jsdelivr.net/gh/ComplexButNoCode/TRISMEGILTI-ARCH@main/Public/assets/image2.jpg' },
    { id: 3, imageUrl: 'https://cdn.jsdelivr.net/gh/ComplexButNoCode/TRISMEGILTI-ARCH@main/Public/assets/image3.jpg' },
    { id: 4, imageUrl: 'https://cdn.jsdelivr.net/gh/ComplexButNoCode/TRISMEGILTI-ARCH@main/Public/assets/image4.jpg' },
    { id: 5, imageUrl: 'https://cdn.jsdelivr.net/gh/ComplexButNoCode/TRISMEGILTI-ARCH@main/Public/assets/image5.jpg' },
    { id: 6, imageUrl: 'https://cdn.jsdelivr.net/gh/ComplexButNoCode/TRISMEGILTI-ARCH@main/Public/assets/image6.jpg' },
    { id: 7, imageUrl: 'https://cdn.jsdelivr.net/gh/ComplexButNoCode/TRISMEGILTI-ARCH@main/Public/assets/image7.jpg' },
    { id: 8, imageUrl: 'https://cdn.jsdelivr.net/gh/ComplexButNoCode/TRISMEGILTI-ARCH@main/Public/assets/image8.jpg' },
    { id: 9, imageUrl: 'https://cdn.jsdelivr.net/gh/ComplexButNoCode/TRISMEGILTI-ARCH@main/Public/assets/image9.jpg' },
    { id: 10, imageUrl: 'https://cdn.jsdelivr.net/gh/ComplexButNoCode/TRISMEGILTI-ARCH@main/Public/assets/image10.jpg' },
];

const App: React.FC = () => {
  const [projects] = useState<Project[]>(INITIAL_PROJECTS);

  return (
    <LocalizationProvider>
      <div className="bg-[#F4F4F4] text-[#111111] antialiased min-h-screen">
        <Header />
        <main>
          <Hero />
          <Projects projects={projects} />
        </main>
        <Footer />
      </div>
    </LocalizationProvider>
  );
};

export default App;