
import React, { useState, useEffect, useRef } from 'react';
import type { Project } from '../types';

interface ProjectsProps {
  projects: Project[];
}

const useOnScreen = (options: IntersectionObserverInit) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        // We can unobserve after it's visible if we don't need to re-trigger the animation
        if(ref.current) {
          observer.unobserve(ref.current);
        }
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return [ref, isVisible] as const;
};

const ProjectItem: React.FC<{ project: Project }> = ({ project }) => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

  return (
    <div ref={ref} className={`opacity-0 ${isVisible ? 'animate-fade-in-up' : ''}`}>
      <div className="overflow-hidden aspect-[4/5] bg-gray-100">
        <img
          src={project.imageUrl}
          alt={`Architectural project ${project.id}`}
          className="object-cover w-full h-full transition-transform duration-700 ease-in-out hover:scale-105"
        />
      </div>
    </div>
  );
};


const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section id="projects" className="py-24 md:py-40 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;