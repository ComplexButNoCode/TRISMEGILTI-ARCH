import React, { useRef } from 'react';
import type { Project } from '../types';

interface PortfolioManagerProps {
  projects: Project[];
  setProjects: React.Dispatch<React.SetStateAction<Project[]>>;
  onClose: () => void;
}

const PortfolioManager: React.FC<PortfolioManagerProps> = ({ projects, setProjects, onClose }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    Array.from(files).forEach(file => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target?.result as string;
        if (imageUrl) {
          const newProject: Project = {
            id: Date.now() + Math.random(), // Simple unique ID
            imageUrl,
          };
          // Use functional update to get the latest state
          setProjects(prevProjects => [...prevProjects, newProject]);
        }
      };
      reader.readAsDataURL(file);
    });
    // Reset file input to allow selecting the same file again
    event.target.value = '';
  };

  const handleAddClick = () => {
    fileInputRef.current?.click();
  };

  const handleRemoveImage = (idToRemove: number) => {
    setProjects(prevProjects => prevProjects.filter(p => p.id !== idToRemove));
  };

  return (
    <div className="fixed inset-0 bg-[#F4F4F4] z-[100] flex flex-col animate-fade-in overflow-y-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-grow flex flex-col">
        <header className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light">Manage Portfolio</h2>
          <button
            onClick={onClose}
            className="text-sm font-medium tracking-widest text-gray-700 hover:text-black transition-colors uppercase"
            aria-label="Close manager"
          >
            Done
          </button>
        </header>
        
        <main className="flex-grow">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
            {projects.map(project => (
              <div key={project.id} className="relative group aspect-square">
                <img src={project.imageUrl} alt="Project thumbnail" className="object-cover w-full h-full rounded-md"/>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-md">
                  <button 
                    onClick={() => handleRemoveImage(project.id)} 
                    className="text-white bg-red-600 hover:bg-red-700 rounded-full w-9 h-9 flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform"
                    aria-label="Remove image"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}

            <button
              onClick={handleAddClick}
              className="aspect-square border-2 border-dashed border-gray-300 rounded-md flex flex-col items-center justify-center text-gray-500 hover:bg-gray-200/50 hover:border-gray-400 transition-colors"
              aria-label="Add new images"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
              <span className="mt-2 text-sm font-medium">Add Images</span>
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
