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
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return [ref, isVisible] as const;
};

const ProjectItem: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1, rootMargin: '0px 0px -100px 0px' });
  const [imageError, setImageError] = useState(false);

  const layouts = [
    'md:col-span-2 md:row-span-2', // Tall
    'md:col-span-1', // Small
    'md:col-span-1', // Small
    'md:col-span-2', // Wide
    'md:col-span-1', // Small
    'md:col-span-2', // Wide
    'md:col-span-2 md:row-span-2', // Tall
  ];

  const layoutClass = layouts[index % layouts.length];

  return (
    <div ref={ref} className={`relative group ${layoutClass} ${isVisible ? 'animate-image-reveal' : 'opacity-0'}`}>
      <div className="overflow-hidden bg-gray-200 h-full">
        {imageError ? (
          <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-500">
            <div className="text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="mt-2 text-sm">Image not found</p>
            </div>
          </div>
        ) : (
          <img
            src={project.imageUrl}
            alt={`Architectural project ${project.id}`}
            className="object-cover w-full h-full transition-transform duration-700 ease-in-out group-hover:scale-105"
            onError={() => setImageError(true)}
          />
        )}
      </div>
      <div className="absolute top-0 left-0 p-4 md:p-6 pointer-events-none">
        <span className="text-sm font-mono text-white mix-blend-difference">
          {(index + 1).toString().padStart(2, '0')}
        </span>
      </div>
    </div>
  );
};


const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section id="projects" className="py-24 md:py-40 bg-[#F4F4F4]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[30rem] gap-4 md:gap-8">
            {projects.map((project, index) => (
            <ProjectItem key={project.id} project={project} index={index} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;