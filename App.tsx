import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';
import PortfolioManager from './components/PortfolioManager';
import type { Project } from './types';

const INITIAL_PROJECTS: Project[] = [
  { id: 1, imageUrl: '/assets/image1.jpg' },
  { id: 2, imageUrl: '/assets/image2.jpg' },
  { id: 3, imageUrl: '/assets/image3.jpg' },
  { id: 4, imageUrl: '/assets/image4.jpg' },
  { id: 5, imageUrl: '/assets/image5.jpg' },
  { id: 6, imageUrl: '/assets/image6.jpg' },
  { id: 7, imageUrl: '/assets/image7.jpg' },
  { id: 8, imageUrl: '/assets/image8.jpg' },
  { id: 9, imageUrl: '/assets/image9.jpg' },
  { id: 10, imageUrl: '/assets/image10.jpg' },
  { id: 11, imageUrl: '/assets/image11.jpg' },
  { id: 12, imageUrl: '/assets/image12.jpg' },
  { id: 13, imageUrl: '/assets/image13.jpg' },
  { id: 14, imageUrl: '/assets/image14.jpg' },
  { id: 15, imageUrl: '/assets/image15.jpg' },
  { id: 16, imageUrl: '/assets/image16.jpg' },
  { id: 17, imageUrl: '/assets/image17.jpg' },
  { id: 18, imageUrl: '/assets/image18.jpg' },
  { id: 19, imageUrl: '/assets/image19.jpg' },
  { id: 20, imageUrl: '/assets/image20.jpg' },
  { id: 21, imageUrl: '/assets/image21.jpg' },
  { id: 22, imageUrl: '/assets/image22.jpg' },
  { id: 23, imageUrl: '/assets/image23.jpg' },
  { id: 24, imageUrl: '/assets/image24.jpg' }
];

const App: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isManagerOpen, setIsManagerOpen] = useState(false);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    try {
      const storedProjects = localStorage.getItem('portfolio_projects');
      if (storedProjects) {
        setProjects(JSON.parse(storedProjects));
      } else {
        setProjects(INITIAL_PROJECTS);
      }
    } catch (error) {
      console.error("Failed to parse projects from localStorage", error);
      setProjects(INITIAL_PROJECTS);
    }
    setIsDataLoaded(true);
  }, []);

  useEffect(() => {
    if (isDataLoaded) {
      try {
        localStorage.setItem('portfolio_projects', JSON.stringify(projects));
      } catch (error) {
        console.error("Failed to save projects to localStorage. Data might be too large.", error);
        alert("Could not save new images. The browser's local storage might be full.");
      }
    }
  }, [projects, isDataLoaded]);

  useEffect(() => {
    if (isManagerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isManagerOpen]);

  return (
    <div className="bg-[#F4F4F4] text-[#111111] antialiased">
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
