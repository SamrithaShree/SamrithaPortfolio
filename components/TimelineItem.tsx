import React from 'react';
// Removed motion from 'framer-motion';

interface TimelineItemProps {
  title: string;
  date: string;
  description: string;
  isLeft?: boolean; // For alternating layout
}

const TimelineItem: React.FC<TimelineItemProps> = ({ title, date, description, isLeft = false }) => {
  const containerClasses = `relative w-full py-8 ${isLeft ? 'md:pr-16 text-right' : 'md:pl-16 text-left'}`;
  const cardClasses = `bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-700
                       ${isLeft ? 'md:mr-auto' : 'md:ml-auto'} max-w-md w-full`;
  const dotClasses = `absolute top-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-green-400 border-2 border-green-600 shadow-md
                      ${isLeft ? 'md:right-0 -right-2' : 'md:left-0 -left-2'}`;
  const lineClasses = `absolute hidden md:block top-0 bottom-0 w-0.5 bg-gray-700
                       ${isLeft ? 'md:right-0 mr-[7px]' : 'md:left-0 ml-[7px]'}`;

  return (
    <div
      className={containerClasses}
      // Removed Framer Motion initial, whileInView, viewport, transition props
    >
      <div className={cardClasses}>
        <h3 className="text-2xl font-bold text-green-400 mb-2">{title}</h3>
        <p className="text-blue-400 text-sm mb-3">{date}</p>
        <p className="text-gray-300 text-base">{description}</p>
      </div>
      <div className={lineClasses}></div>
      <div className={dotClasses}></div>
    </div>
  );
};

export default TimelineItem;