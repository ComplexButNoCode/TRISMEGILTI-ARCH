
import React, { useRef, useState } from 'react';
import type { Project } from '../types';
import { useLocalization } from '../contexts/LocalizationContext';

interface PortfolioManagerProps {
  projects: Project[];
  setProjects: React.Dispatch<React.SetStateAction<Project[]>>;
  onClose: () => void;
}

const ManagerImageItem: React.FC<{ project: Project; onRemove: (id: number) => void }> = ({ project, onRemove }) => {
  const [imageError, setImageError] = useState(false);
  const { t } = useLocalization();

  return (
    <div className="relative group aspect-square">
      {imageError ? (
        <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-500 text-center text-xs">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="mt-1">{t.manager_image_error}</p>
          </div>
        </div>
      ) : (
        <img
          src={project.imageUrl}
          alt={`${t.manager_remove_image_alt} ${project.id}`}
          className="object-cover w-full h-full"
          loading="lazy"
          onError={() => setImageError(true)}
        />
      )}
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <button
          onClick={() => onRemove(project.id)}
          className="text-white bg-red-600 hover:bg-red-700 rounded-full w-9 h-9 flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform"
          aria-label={`${t.manager_remove_aria} ${project.id}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

const PortfolioManager: React.FC<PortfolioManagerProps> = ({ projects, setProjects, onClose }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { t } = useLocalization();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    for (const file of files) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target?.result as string;
        if (imageUrl) {
          const newProject: Project = {
            id: Date.now() + Math.random(),
            imageUrl,
          };
          setProjects(prev => [...prev, newProject]);
        }
      };
      reader.readAsDataURL(file);
    }

    event.target.value = '';
  };

  const handleAddClick = () => {
    fileInputRef.current?.click();
  };

  const handleRemoveImage = (idToRemove: number) => {
    setProjects(prev => prev.filter(p => p.id !== idToRemove));
  };

  return (
    <div className="fixed inset-0 bg-[#F4F4F4] z-[100] flex flex-col animate-fade-in overflow-y-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-grow flex flex-col">
        <header className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light">{t.manager_title}</h2>
          <button
            onClick={onClose}
            className="text-sm font-medium tracking-widest text-gray-700 hover:text-black transition-colors uppercase"
            aria-label={t.close}
          >
            {t.manager_done}
          </button>
        </header>

        <main className="flex-grow">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
            {projects.map(project => (
              <ManagerImageItem key={project.id} project={project} onRemove={handleRemoveImage} />
            ))}

            <button
              onClick={handleAddClick}
              className="aspect-square flex flex-col items-center justify-center text-gray-400 hover:bg-gray-200/50 hover:text-gray-600 transition-colors"
              aria-label={t.manager_add_aria}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
              <span className="mt-2 text-sm font-medium">{t.manager_add}</span>
            </button>
          </div>
        </main>

        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          multiple
          accept="image/png, image/jpeg, image/gif, image/webp"
          className="hidden"
          aria-hidden="true"
        />
      </div>
    </div>
  );
};

export default PortfolioManager;
