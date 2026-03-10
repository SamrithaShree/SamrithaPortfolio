import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import ProjectCard from './ProjectCard';
import { PROJECTS } from '../constants';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Projects: React.FC = () => {
  return (
    <SectionWrapper id="projects" title="Featured Work">
      <p className="text-white/40 text-center mb-16 max-w-2xl mx-auto italic">
        "Each project represents a milestone in my engineering journey, focusing on clean architecture and scalable cloud solutions."
      </p>
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {PROJECTS.map((project, index) => (
          <motion.div key={index} variants={itemVariants}>
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
};

export default Projects;