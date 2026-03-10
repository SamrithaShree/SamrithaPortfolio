import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, MoveRight } from 'lucide-react';

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
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative h-[450px] w-full [perspective:1000px] group cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative h-full w-full rounded-2xl transition-all duration-500 [transform-style:preserve-3d]"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
      >
        {/* Front Side */}
        <div className="absolute inset-0 h-full w-full rounded-2xl [backface-visibility:hidden] overflow-hidden glass-card border-white/10">
          <div className="relative h-full w-full flex flex-col">
            <div className="relative h-2/3 w-full overflow-hidden">
              <img 
                src={image} 
                alt={title} 
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </div>
            <div className="p-6 flex-grow flex flex-col justify-end">
              <h3 className="text-2xl font-space font-bold text-white mb-2 leading-tight">
                {title}
              </h3>
              <div className="flex items-center gap-2 text-cyan-400 font-medium text-sm">
                <span>View Details</span>
                <MoveRight size={16} className="group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          </div>
          {/* Animated Glow Border */}
          <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-500/50 rounded-2xl transition-colors duration-500" />
        </div>

        {/* Back Side (Details) */}
        <div className="absolute inset-0 h-full w-full rounded-2xl bg-slate-900/95 [backface-visibility:hidden] [transform:rotateY(180deg)] p-8 flex flex-col border border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.1)]">
          <div className="flex-grow">
            <h3 className="text-xl font-space font-bold text-cyan-400 mb-4">{title}</h3>
            <p className="text-white/70 text-sm leading-relaxed mb-6 font-sans">
              {description}
            </p>
            
            <div className="space-y-3">
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/30">Technologies Used</p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-[10px] font-medium tracking-wider uppercase rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-auto pt-6 border-t border-white/10">
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-violet-600 text-white font-bold text-sm hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all active:scale-95"
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={20} />
              <span>Explore Codebase</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;