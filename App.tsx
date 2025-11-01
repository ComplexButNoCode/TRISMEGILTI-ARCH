
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';
import PortfolioManager from './components/PortfolioManager';
import type { Project } from './types';

const INITIAL_PROJECTS: Project[] = [
    { id: 1, imageUrl: 'https://raw.githubusercontent.com/ComplexButNoCode/TRISMEGILTI-ARCH/main/public/assets/image1.jpg' },
    { id: 2, imageUrl: 'https://raw.githubusercontent.com/ComplexButNoCode/TRISMEGILTI-ARCH/main/public/assets/image2.jpg' },
    { id: 3, imageUrl: 'https://raw.githubusercontent.com/ComplexButNoCode/TRISMEGILTI-ARCH/main/public/assets/image3.jpg' },
    { id: 4, imageUrl: 'https://raw.githubusercontent.com/ComplexButNoCode/TRISMEGILTI-ARCH/main/public/assets/image4.jpg' },
    { id: 5, imageUrl: 'https://raw.githubusercontent.com/ComplexButNoCode/TRISMEGILTI-ARCH/main/public/assets/image5.jpg' },
    { id: 6, imageUrl: 'https://raw.githubusercontent.com/ComplexButNoCode/TRISMEGILTI-ARCH/main/public/assets/image6.jpg' },
    { id: 7, imageUrl: 'https://raw.githubusercontent.com/ComplexButNoCode/TRISMEGILTI-ARCH/main/public/assets/image7.jpg' },
    { id: 8, imageUrl: 'https://raw.githubusercontent.com/ComplexButNoCode/TRISMEGILTI-ARCH/main/public/assets/image8.jpg' },
    { id: 9, imageUrl: 'https://raw.githubusercontent.com/ComplexButNoCode/TRISMEGILTI-ARCH/main/public/assets/image9.jpg' },
    { id: 10, imageUrl: 'https://raw.githubusercontent.com/ComplexButNoCode/TRISMEGILTI-ARCH/main/public/assets/image10.jpg' },
];


const App: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isManagerOpen, setIsManagerOpen] = useState(false);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  // Carregar projetos do localStorage + iniciais
  useEffect(() => {
    try {
      const storedProjects = localStorage.getItem('portfolio_projects');
      const parsedProjects = storedProjects ? JSON.parse(storedProjects) : [];
      
      // Prevent duplicate initial projects if they were somehow saved to local storage
      const initialIds = new Set(INITIAL_PROJECTS.map(p => p.id));
      const filteredParsedProjects = parsedProjects.filter(p => !initialIds.has(p.id));

      setProjects([...INITIAL_PROJECTS, ...filteredParsedProjects]);
    } catch (error) {
      console.error('Failed to parse projects from localStorage', error);
      setProjects(INITIAL_PROJECTS);
    }
    setIsDataLoaded(true);
  }, []);

  // Salvar apenas imagens do usuário (base64) no localStorage
  useEffect(() => {
    if (!isDataLoaded) return;

    try {
      const userAddedProjects = projects.filter(p => p.imageUrl.startsWith('data:image'));
      localStorage.setItem('portfolio_projects', JSON.stringify(userAddedProjects));
    } catch (error) {
      console.error('Failed to save projects to localStorage', error);
      alert("Could not save new images. The browser's local storage might be full.");
    }
  }, [projects, isDataLoaded]);

  // Bloquear scroll quando o PortfolioManager estiver aberto
  useEffect(() => {
    document.body.style.overflow = isManagerOpen ? 'hidden' : 'unset';
  }, [isManagerOpen]);

  return (
    <div className="bg-[#F4F4F4] text-[#111111] antialiased min-h-screen">
      <Header />
      <main>
        <Hero />
        <Projects projects={projects} />
      </main>
      <Footer onManageClick={() => setIsManagerOpen(true)} />
      {isManagerOpen && (
        <PortfolioManager
          projects={projects}
          setProjects={setProjects}
          onClose={() => setIsManagerOpen(false)}
        />
      )}
    </div>
  );
};

export default App;
