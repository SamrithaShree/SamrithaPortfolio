import React from 'react';
import { IconType } from 'react-icons';
// Removed motion from 'framer-motion';

interface SkillCardProps {
  name: string;
  icon: IconType | string; // Can be a React Icon component or an emoji string
}

const SkillCard: React.FC<SkillCardProps> = ({ name, icon }) => {
  return (
    <div
      className="bg-gray-800 rounded-lg p-6 flex flex-col items-center text-center shadow-md border border-gray-700
                 hover:bg-gray-700 hover:border-green-400 transition-all duration-300 ease-in-out transform hover:scale-105"
      // Removed whileHover prop
    >
      <div className="text-4xl mb-3 text-green-400">
        {/* Fix: Correctly render IconType component or string/emoji */}
        {typeof icon === 'string' ? (
          <span className="text-5xl">{icon}</span>
        ) : (
          React.createElement(icon)
        )}
      </div>
      <p className="text-lg font-semibold text-gray-100">{name}</p>
    </div>
  );
};

export default SkillCard;