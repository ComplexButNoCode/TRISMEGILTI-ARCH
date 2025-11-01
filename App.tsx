import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';
import PortfolioManager from './components/PortfolioManager';
import type { Project } from './types';

// Programmatically generate the initial projects list.
// This will look for images named image1.jpg, image2.jpg, etc., in the assets folder.
// If you add a new image like 'image25.jpg' to the folder, it will automatically appear.
const MAX_IMAGES_TO_CHECK = 50; // We'll check for up to 50 images.
const INITIAL_PROJECTS: Project[] = Array.from({ length: MAX_IMAGES_TO_CHECK }, (_, i) => {
  const id = i + 1;
  return {
    id: id,
    imageUrl: `components/assets/image${id}.jpg`, // Corrected: Path does NOT include a hyphen.
  };
});


const App: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isManagerOpen, setIsManagerOpen] = useState(false);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    try {
      const storedProjects = localStorage.getItem('portfolio_projects');
      if (storedProjects) {
        const parsedProjects = JSON.parse(storedProjects);
        // We filter out the default projects that might have been saved before.
        // This check is robust and works with the correct non-hyphenated path.
        const userAddedProjects = parsedProjects.filter((p: Project) => !p.imageUrl.startsWith('components/assets/'));
        setProjects([...INITIAL_PROJECTS, ...userAddedProjects]);
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
        // Only save user-added projects to localStorage to avoid storing the default list.
        const userAddedProjects = projects.filter(p => !p.imageUrl.startsWith('components/assets/'));
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