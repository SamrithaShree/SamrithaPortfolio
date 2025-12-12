import React from 'react';
import { FaGithub } from 'react-icons/fa';
// Removed motion from 'framer-motion';
import Button from './Button';

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
    <div
      className="bg-gray-800 rounded-lg shadow-xl overflow-hidden border border-gray-700
                 flex flex-col h-full transform hover:scale-[1.02] transition-all duration-300 ease-in-out"
      // Removed whileHover prop
    >
      <img src={image} alt={title} className="w-full h-48 object-cover object-center" />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-green-400 mb-3">{title}</h3>
        <p className="text-gray-300 text-base mb-4 flex-grow">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-auto"> {/* Pushes the button to the bottom */}
          <Button href={githubLink} target="_blank" rel="noopener noreferrer" variant="secondary">
            <FaGithub className="inline-block mr-2" /> GitHub
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;