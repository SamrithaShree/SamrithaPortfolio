import React from 'react';
import SocialIcons from './SocialIcons';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 py-8 px-4 md:px-8 lg:px-12 text-gray-400 text-center">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p>&copy; {currentYear} Samritha Shree R. All rights reserved.</p>
        <SocialIcons links={SOCIAL_LINKS} iconSize="1.8em" className="order-first md:order-none" />
        <p className="text-sm">
          My First Deployed Project - Built with <span className="text-green-400">React</span> &amp;{' '}
          <span className="text-blue-400">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;