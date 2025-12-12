import React from 'react';
import SectionWrapper from './SectionWrapper';
import ProjectCard from './ProjectCard';
import { PROJECTS } from '../constants';
// Removed motion from 'framer-motion';

const Projects: React.FC = () => {
  return (
    <SectionWrapper id="projects" title="My Projects">
      <p className="text-lg text-gray-300 text-center mb-10 max-w-2xl mx-auto">
        Here are some of my academic and learning projects. Each project represents a step in my growth,
        emphasizing the learning process and application of new technologies.
        <span className="text-green-400 font-semibold block mt-2">Building and deploying my first projects!</span>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            // Removed Framer Motion initial, whileInView, viewport, transition props
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;