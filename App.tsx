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
];

const App: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isManagerOpen, setIsManagerOpen] = useState(false);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    try {
      const storedProjects = localStorage.getItem('portfolio_projects');
      if (storedProjects) {
        const parsedProjects = JSON.parse(storedProjects);
        // User-added projects are stored with data: URL, they won't start with '/assets/'
        // This logic remains correct for separating default vs user-added.
        setProjects([...INITIAL_PROJECTS, ...parsedProjects]);
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
        // Only save user-added projects (which are base64 strings) to localStorage.
        const userAddedProjects = projects.filter(p => p.imageUrl.startsWith('data:image'));
        localStorage.setItem('portfolio_projects', JSON.stringify(userAddedProjects));
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