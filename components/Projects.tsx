import React from 'react';
import type { Project } from '../types';

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  if (!projects || projects.length === 0) return null;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
      {projects.map((project) => (
        <div
          key={project.id}
          className="w-full h-48 bg-gray-100 flex items-center justify-center overflow-hidden rounded-lg shadow"
        >
          <img
            src={project.imageUrl}
            alt={`Project ${project.id}`}
            className="w-full h-full object-cover"
            onError={(e) => {
              // Se a imagem falhar, apenas oculta o <img> sem placeholder
              (e.currentTarget as HTMLImageElement).style.display = 'none';
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default Projects;
