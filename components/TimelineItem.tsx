import React from 'react';
// Removed motion from 'framer-motion';

interface TimelineItemProps {
  title: string;
  date: string;
  description: string;
  isLeft?: boolean; // For alternating layout
}

const TimelineItem: React.FC<TimelineItemProps> = ({ title, date, description, isLeft = false }) => {
  const containerClasses = `relative w-full py-12 ${isLeft ? 'md:pr-16 text-right' : 'md:pl-16 text-left'}`;
  const cardClasses = `glass-card p-8 border-white/10 relative group hover:border-cyan-500/30 transition-all duration-500
                       ${isLeft ? 'md:mr-auto' : 'md:ml-auto'} max-w-md w-full`;
  const dotClasses = `absolute top-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.5)] z-20
                      ${isLeft ? 'md:right-[-8px] right-[-8px]' : 'md:left-[-8px] left-[-8px]'}`;
  const lineClasses = `absolute hidden md:block top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent
                       ${isLeft ? 'md:right-0' : 'md:left-0'}`;

  return (
    <div className={containerClasses}>
      <div className={cardClasses}>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-violet-600 opacity-0 group-hover:opacity-30 transition-opacity" />
        <h3 className="text-xl font-space font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{title}</h3>
        <p className="text-cyan-500/70 text-xs font-space font-bold uppercase tracking-widest mb-4">{date}</p>
        <p className="text-white/50 text-sm leading-relaxed">{description}</p>
      </div>
      <div className={lineClasses}></div>
      <div className={dotClasses}></div>
    </div>
  );
};

export default TimelineItem;