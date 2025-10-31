
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';
import type { Project } from './types';

const App: React.FC = () => {

  const projects: Project[] = [
    {
      id: 1,
      title: 'Casa Atemporal',
      category: 'Residencial',
      description: 'A study in concrete and glass, blurring the lines between interior and exterior spaces. The design prioritizes natural light and seamless integration with the surrounding landscape.',
      imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop',
      year: 2023,
    },
    {
      id: 2,
      title: 'Pavilhão da Luz',
      category: 'Cultural',
      description: 'An open-air pavilion designed to capture and manipulate natural light throughout the day, creating an ever-changing series of shadows and illuminations.',
      imageUrl: 'https://images.unsplash.com/photo-1580202175948-46a335435a24?q=80&w=1887&auto=format&fit=crop',
      year: 2022,
    },
    {
      id: 3,
      title: 'Refúgio Minimalista',
      category: 'Residencial',
      description: 'A secluded retreat focusing on raw materials and serene, uncluttered living. Its monolithic form stands in quiet dialogue with the rugged nature it inhabits.',
      imageUrl: 'https://images.unsplash.com/photo-1617103987923-5858045996f5?q=80&w=1887&auto=format&fit=crop',
      year: 2024,
    },
    {
      id: 4,
      title: 'Galeria Vertical',
      category: 'Comercial',
      description: 'Transforming a narrow urban lot into a multi-level art gallery with a striking facade that acts as a canvas for the city itself.',
      imageUrl: 'https://images.unsplash.com/photo-1613262512128-3b45a27011d6?q=80&w=1887&auto=format&fit=crop',
      year: 2023,
    },
    {
        id: 5,
        title: 'Espaço Contemplativo',
        category: 'Institucional',
        description: 'A quiet space for reflection, characterized by its powerful monolithic form and a profound connection to the sky and surrounding nature.',
        imageUrl: 'https://images.unsplash.com/photo-1563223946-4c4f52445b5c?q=80&w=1887&auto=format&fit=crop',
        year: 2021,
    },
    {
        id: 6,
        title: 'Loft Urbano',
        category: 'Residencial',
        description: 'Industrial elements meet warm, natural textures in this adaptive reuse of a historic warehouse, creating a spacious and light-filled home.',
        imageUrl: 'https://images.unsplash.com/photo-1615875605825-5eb9bb5c689a?q=80&w=1964&auto=format&fit=crop',
        year: 2024,
    }
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
