import React from 'react';
import SectionWrapper from './SectionWrapper';
import SkillCard from './SkillCard';
import { SKILLS } from '../constants';
// Removed motion from 'framer-motion';

const Skills: React.FC = () => {
  return (
    <SectionWrapper id="skills" title="My Skills">
      <div className="space-y-12">
        {Object.entries(SKILLS).map(([category, skills], categoryIndex) => (
          <div
            key={category}
            className="flex flex-col items-center"
            // Removed Framer Motion initial, whileInView, viewport, transition props
          >
            <h3 className="text-3xl font-bold text-blue-400 mb-6 border-b-2 border-blue-600 pb-2">
              {category}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-5xl">
              {skills.map((skill, skillIndex) => (
                <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;