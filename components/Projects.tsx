import React from 'react';
import type { Project } from '../types';

interface ProjectsProps {
  projects: Project[];
}

const PurposeBlock = () => (
  <div className="col-span-2 flex flex-col justify-center animate-image-reveal" style={{ animationDelay: '200ms' }}>
    <h3 className="text-sm font-medium tracking-widest uppercase text-gray-500 mb-4">Nosso Propósito</h3>
    <p className="text-lg md:text-xl font-light text-gray-800 leading-relaxed">
      Criar espaços que transcendem o construído, focando em como a forma, a luz e a composição evocam sentimento e atmosfera.
    </p>
  </div>
);

const ValuesBlock = () => (
  <div className="col-span-2 flex flex-col justify-center animate-image-reveal" style={{ animationDelay: '200ms' }}>
    <h3 className="text-sm font-medium tracking-widest uppercase text-gray-500 mb-4">Nossos Valores</h3>
    <ul className="text-lg md:text-xl font-light text-gray-800 leading-relaxed space-y-1 list-disc list-inside">
      <li>Minimalismo Essencial</li>
      <li>Luz como Material</li>
      <li>Composição Ponderada</li>
      <li>Atmosfera e Emoção</li>
    </ul>
  </div>
);

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  if (!projects || projects.length === 0) return null;

  const getLayoutClass = (index: number) => {
    const layouts = [
      'col-span-1 aspect-[3/4]',    // Tall
      'col-span-1 aspect-square',   // Square
      'col-span-2 aspect-video',    // Wide
      'col-span-1 aspect-square',   // Square
      'col-span-1 aspect-square',   // Square
      'col-span-2 aspect-video',    // Wide
    ];
    return layouts[index % layouts.length];
  };

  const projectElements = projects.map((project, index) => (
    <div
      key={project.id}
      className={`${getLayoutClass(index)} w-full overflow-hidden group animate-image-reveal`}
      style={{ animationDelay: `${(index % 6) * 100}ms` }}
    >
      <img
        src={project.imageUrl}
        alt={`Imagem do projeto ${project.id}`}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        onError={(e) => {
          const target = e.currentTarget as HTMLImageElement;
          target.style.display = 'none';
          const parent = target.parentElement;
          if (parent) {
            parent.classList.add('flex', 'items-center', 'justify-center', 'bg-gray-100');
            const errorDiv = document.createElement('div');
            errorDiv.className = "text-xs text-gray-500 text-center p-2";
            errorDiv.innerText = "Imagem não carregada";
            parent.appendChild(errorDiv);
          }
        }}
      />
    </div>
  ));

  // Inserindo blocos de propósito e valores
  projectElements.splice(2, 0, <PurposeBlock key="purpose-block" />);
  projectElements.splice(7, 0, <ValuesBlock key="values-block" />);

  return (
    <section id="projects" className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {projectElements}
      </div>
    </section>
  );
};

export default Projects;