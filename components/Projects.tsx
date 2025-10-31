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

const ProjectItem: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const isReversed = index % 2 !== 0;
  const [ref, isVisible] = useOnScreen({ threshold: 0.2 });

  return (
    <div ref={ref} className={`opacity-0 ${isVisible ? 'animate-fade-in-up' : ''}`}>
      <div className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${isReversed ? 'md:flex-row-reverse' : ''}`}>
        <div className="w-full md:w-3/5 lg:w-1/2 overflow-hidden">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="object-cover w-full h-full aspect-[4/5] md:aspect-[5/4] lg:aspect-[6/5] transition-transform duration-700 ease-in-out hover:scale-105"
          />
        </div>
        <div className="w-full md:w-2/5 lg:w-1/2 p-4">
          <p className="text-sm tracking-widest text-gray-500 uppercase mb-4">{project.category} / {project.year}</p>
          <h3 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">{project.title}</h3>
          <p className="text-base font-light text-gray-600 leading-relaxed max-w-md mb-8">{project.description}</p>
          <a href="#" className="inline-block group" aria-label={`View project ${project.title}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-400 group-hover:text-gray-900 transition-all duration-300 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};


const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section id="projects" className="py-24 md:py-40 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-24 md:space-y-40">
        {projects.map((project, index) => (
          <ProjectItem key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;