import React from 'react';
import { IconType } from 'react-icons';

interface SocialIconLink {
  icon: IconType;
  href: string;
  ariaLabel: string;
}

interface SocialIconsProps {
  links: SocialIconLink[];
  iconSize?: string;
  className?: string;
}

const SocialIcons: React.FC<SocialIconsProps> = ({ links, iconSize = '2em', className = '' }) => {
  return (
    <div className={`flex gap-4 ${className}`}>
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-green-400 transition-colors duration-300"
          aria-label={link.ariaLabel}
        >
          <link.icon size={iconSize} />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;