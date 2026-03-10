import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import SkillCard from './SkillCard';
import { SKILLS } from '../constants';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const Skills: React.FC = () => {
  return (
    <SectionWrapper id="skills" title="Technical Arsenal">
      <div className="space-y-16 py-10">
        {Object.entries(SKILLS).map(([category, skills]) => (
          <div key={category} className="flex flex-col items-center">
            <h3 className="text-xl font-space font-semibold tracking-widest text-cyan-400 uppercase mb-8 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-gradient-to-r from-transparent to-cyan-500/50"></span>
              {category}
              <span className="w-8 h-[1px] bg-gradient-to-l from-transparent to-cyan-500/50"></span>
            </h3>
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full max-w-6xl"
            >
              {skills.map((skill) => (
                <motion.div key={skill.name} variants={itemVariants}>
                  <SkillCard name={skill.name} icon={skill.icon} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;