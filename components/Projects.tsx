
import React from 'react';
import type { Project } from '../types';
import { useLocalization } from '../contexts/LocalizationContext';

interface ProjectsProps {
  projects: Project[];
}

const PrincipleBlock = () => {
  const { t } = useLocalization();
  return (
    <div className="md:col-span-2 flex flex-col justify-center py-8 animate-image-reveal" style={{ animationDelay: '200ms' }}>
      <h3 className="text-sm font-medium tracking-widest uppercase text-gray-500 mb-4">{t.principle_title}</h3>
      <p className="text-lg md:text-xl font-light text-gray-800 leading-relaxed">
        {t.principle_text}
      </p>
    </div>
  );
};

const AxiomsBlock = () => {
    const { t } = useLocalization();
    return (
        <div className="md:col-span-2 flex flex-col justify-center py-8 animate-image-reveal" style={{ animationDelay: '200ms' }}>
            <h3 className="text-sm font-medium tracking-widest uppercase text-gray-500 mb-4">{t.axioms_title}</h3>
            <ul className="text-lg md:text-xl font-light text-gray-800 leading-relaxed space-y-2">
            <li>{t.axiom_1}</li>
            <li>{t.axiom_2}</li>
            <li>{t.axiom_3}</li>
            <li>{t.axiom_4}</li>
            </ul>
        </div>
    );
};

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const { t } = useLocalization();
  if (!projects || projects.length === 0) return null;

  const getLayoutClass = (index: number) => {
    const layouts = [
      'col-span-4 md:col-span-3 md:row-span-2', // Large Portrait-ish
      'col-span-4 md:col-span-2',             // Square
      'col-span-4 md:col-span-2 md:row-span-2', // Large Square
      'col-span-4 md:col-span-3 aspect-[16/9]',// Wide
      'col-span-4 md:col-span-2',             // Square
      'col-span-4 md:col-span-3 aspect-[16/9]',// Wide
      'col-span-4 md:col-span-2 md:row-span-2', // Large Square
      'col-span-4 md:col-span-3',             // Portrait-ish
      'col-span-4 md:col-span-2',             // Square
      'col-span-4 md:col-span-5 aspect-[21/9]',// Super Wide
    ];
    return layouts[index % layouts.length] || 'col-span-4 md:col-span-2';
  };

  const projectElements = projects.map((project, index) => (
    <div
      key={project.id}
      className={`${getLayoutClass(index)} w-full overflow-hidden group animate-image-reveal aspect-square`}
      style={{ animationDelay: `${(index % 8) * 80}ms` }}
    >
      <img
        src={project.imageUrl}
        alt={`${t.manager_remove_image_alt} ${project.id}`}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        onError={(e) => {
          const target = e.currentTarget as HTMLImageElement;
          target.style.display = 'none';
          const parent = target.parentElement;
          if (parent && !parent.querySelector('.error-message')) {
            parent.classList.add('flex', 'items-center', 'justify-center', 'bg-gray-100');
            const errorDiv = document.createElement('div');
            errorDiv.className = "text-xs text-gray-500 text-center p-2 error-message";
            errorDiv.innerText = t.image_load_error;
            parent.appendChild(errorDiv);
          }
        }}
      />
    </div>
  ));

  // Inserting text blocks into the grid
  projectElements.splice(2, 0, <PrincipleBlock key="principle-block" />);
  projectElements.splice(7, 0, <AxiomsBlock key="axioms-block" />);

  return (
    <section id="works" className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
      <div className="grid grid-cols-4 md:grid-cols-5 gap-4 md:gap-6 grid-flow-row-dense">
        {projectElements}
      </div>
    </section>
  );
};

export default Projects;
