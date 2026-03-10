import React from 'react';
import { IconType } from 'react-icons';

interface SkillCardProps {
  name: string;
  icon: IconType | string;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, icon }) => {
  return (
    <div className="group relative glass-card p-6 flex flex-col items-center justify-center transition-all duration-500 hover:-translate-y-1 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)]">
      {/* Icon */}
      <div className="text-3xl mb-4 text-white/70 group-hover:text-cyan-400 group-hover:scale-110 transition-all duration-500">
        {typeof icon === 'string' ? (
          <span className="text-4xl">{icon}</span>
        ) : (
          React.createElement(icon)
        )}
      </div>
      
      {/* Name */}
      <p className="text-sm font-space font-medium tracking-wide text-white/50 group-hover:text-white transition-colors">
        {name}
      </p>
    </div>
  );
};

export default SkillCard;