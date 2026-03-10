import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  githubLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  techStack,
  githubLink,
}) => {
  return (
    <div className="group relative glass-card h-full flex flex-col overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(6,182,212,0.15)]">
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Image Container */}
      <div className="relative h-52 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className="relative p-6 flex flex-col flex-grow z-10">
        <h3 className="text-xl font-space font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
          {title}
        </h3>
        <p className="text-white/50 text-sm leading-relaxed mb-6 flex-grow">
          {description}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-[10px] font-medium tracking-wider uppercase rounded-full bg-white/5 border border-white/10 text-cyan-200/70"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Link */}
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-cyan-400 transition-colors group/link"
        >
          <Github size={18} className="group-hover/link:scale-110 transition-transform" />
          <span>View Source</span>
          <ExternalLink size={14} className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;