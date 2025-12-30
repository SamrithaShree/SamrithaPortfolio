import React from 'react';
import SectionWrapper from './SectionWrapper';
import TimelineItem from './TimelineItem';
import { EXPERIENCE_TIMELINE } from '../constants';
// Removed motion from 'framer-motion';

const Experience: React.FC = () => {
  return (
    <SectionWrapper id="experience" title="Work Experience">
      <p className="text-lg text-gray-300 text-center mb-12 max-w-2xl mx-auto">
        Here's a look at my key experiences and learning milestones,
        focusing on the skills I've gained and the projects I've tackled along the way.
      </p>
      <div className="relative mx-auto max-w-3xl">
        {/* Central timeline line for desktop */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-0.5 bg-gray-700 h-full"></div>

        <div className="flex flex-col items-center md:items-stretch">
          {EXPERIENCE_TIMELINE.map((item, index) => (
            <TimelineItem
              key={index}
              {...item}
              isLeft={index % 2 === 0} // Alternate left/right for visual appeal on desktop
            />
          ))}
        </div>
      </div>
      <p
        className="text-lg text-gray-400 text-center mt-12 max-w-2xl mx-auto"
        // Removed Framer Motion initial, whileInView, viewport, transition props
      >
        Each experience, whether a hackathon or self-study, contributes to my evolving skill set and deepens my understanding of computer science principles.
      </p>
    </SectionWrapper>
  );
};

export default Experience;