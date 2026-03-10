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

const SocialIcons: React.FC<SocialIconsProps> = ({ links, iconSize = '1.5em', className = '' }) => {
  return (
    <div className={`flex gap-5 ${className}`}>
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/40 hover:text-cyan-400 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.4)] transition-all duration-300"
          aria-label={link.ariaLabel}
        >
          <link.icon size={iconSize} />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;