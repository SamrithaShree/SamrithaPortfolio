import React from 'react';
import SectionWrapper from './SectionWrapper';
import TimelineItem from './TimelineItem';
import { EXPERIENCE_TIMELINE } from '../constants';
// Removed motion from 'framer-motion';

const Experience: React.FC = () => {
  return (
    <SectionWrapper id="experience" title="Career Odyssey">
      <div className="relative mx-auto max-w-4xl py-20">
        {/* Central timeline line */}
        <div className="absolute left-[8px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>

        <div className="flex flex-col space-y-4">
          {EXPERIENCE_TIMELINE.map((item, index) => (
            <TimelineItem
              key={index}
              {...item}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>
      </div>
      
      <div className="text-center mt-20 max-w-2xl mx-auto glass-card p-6 border-white/5">
        <p className="text-white/40 italic text-sm leading-relaxed">
          "Each experience, whether a corporate internship or a personal project, contributes to my evolving technical arsenal."
        </p>
      </div>
    </SectionWrapper>
  );
};

export default Experience;