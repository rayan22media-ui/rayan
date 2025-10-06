import React from 'react';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

export const ProductCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center group">
      {/* Project Image */}
      <div className="md:col-span-7 rounded-lg overflow-hidden">
         <a href={project.liveUrl || project.repoUrl || '#'} target="_blank" rel="noopener noreferrer" className="block relative">
            <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover rounded-lg transition-all duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-cyan-600/50 mix-blend-multiply group-hover:bg-transparent transition-all duration-300"></div>
         </a>
      </div>

      {/* Project Details */}
      <div className="md:col-span-5 text-right">
        <p className="text-sm font-mono text-cyan-400 mb-2">مشروع مميز</p>
        <h3 className="text-2xl font-bold text-slate-100 hover:text-cyan-400 transition-colors duration-300 mb-4">
           <a href={project.liveUrl || project.repoUrl || '#'} target="_blank" rel="noopener noreferrer">
             {project.title}
           </a>
        </h3>
        <div className="bg-slate-800 p-6 rounded-md shadow-lg my-4">
          <p className="text-slate-400">{project.description}</p>
        </div>
        <ul className="flex flex-wrap justify-end gap-x-4 gap-y-2 font-mono text-slate-400 text-sm">
          {project.tags.map(tag => <li key={tag}>{tag}</li>)}
        </ul>
        <div className="mt-4 flex justify-end space-x-4 space-x-reverse">
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
          )}
          {project.liveUrl && (
             <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
               <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
