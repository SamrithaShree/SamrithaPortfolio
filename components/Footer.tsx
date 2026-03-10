import React from 'react';
import SocialIcons from './SocialIcons';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="glass-navbar py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <p className="font-space font-bold text-lg bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
            Sam.dev
          </p>
          <p className="text-white/30 text-xs tracking-widest uppercase">
            &copy; {currentYear} Samritha Shree R.
          </p>
        </div>
        
        <SocialIcons links={SOCIAL_LINKS} className="md:order-none" />
        
        <div className="text-center md:text-right">
          <p className="text-white/40 text-sm font-medium">
            Engineered with <span className="text-cyan-400/80">React 19</span> & <span className="text-violet-400/80">Tailwind v4</span>
          </p>
          <p className="text-[10px] text-white/20 uppercase tracking-widest mt-1">
            Midnight Nebula Edition
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;