import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import Button from './Button';
import SocialIcons from './SocialIcons';
import { SOCIAL_LINKS } from '../constants';
import SectionWrapper from './SectionWrapper';
import profileImage from '/images/Profile.jpeg';

const Hero: React.FC = () => {
  return (
    <SectionWrapper id="home" title="" isFirstSection={true}>
      <div className="relative flex flex-col md:flex-row items-center justify-between min-h-[80vh] pt-20 pb-10 gap-12">
        
        {/* Status Pill */}
        <div className="absolute top-0 right-0 md:right-4 animate-bounce-subtle">
          <div className="glass-card px-4 py-1.5 flex items-center gap-2 border-cyan-500/30">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-xs font-medium text-cyan-100/80 tracking-wide uppercase">Open for Internships</span>
          </div>
        </div>

        {/* Left Column: Introduction Text */}
        <div className="flex-1 text-center md:text-left z-10">
          <p className="text-cyan-400 font-space font-medium tracking-widest uppercase text-sm mb-4">Software Engineer</p>
          <h1 className="text-5xl md:text-8xl font-space font-bold text-white mb-6 leading-tight tracking-tighter">
            Samritha <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">Shree</span>
          </h1>

          <div className="h-12 mb-6">
            <TypeAnimation
              sequence={[
                'CSE Student',
                2000,
                'Cloud & DevOps Explorer',
                2000,
                'Learning AI/ML',
                2000,
                'Problem Solver',
                2000,
              ]}
              wrapper="h2"
              speed={50}
              repeat={Infinity}
              className="text-2xl md:text-3xl font-medium text-white/70"
            />
          </div>

          <p className="text-lg text-white/50 mb-10 max-w-lg leading-relaxed">
            CS Undergraduate with a passion for building scalable cloud solutions and exploring the frontiers of AI. 
            <span className="block mt-2 text-white/30 text-sm italic">Ex-Intern @ Caplin Point & Valeo</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10 justify-center md:justify-start">
            <Button href="#projects" variant="primary">
              View Projects
            </Button>
            <Button href="https://leetcode.com/samrithashree/" target="_blank" rel="noopener noreferrer" variant="secondary">
              LeetCode Profile
            </Button>
          </div>

          <SocialIcons links={SOCIAL_LINKS} className="justify-center md:justify-start opacity-60 hover:opacity-100 transition-opacity" />
        </div>

        {/* Right Column: Profile Image */}
        <div className="flex-1 flex justify-center md:justify-end z-10">
          <div className="relative group">
            {/* Background Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-violet-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            
            <div className="relative w-64 h-64 md:w-85 md:h-85 rounded-full overflow-hidden border border-white/10 glass-card p-2 shadow-2xl">
              <img
                src={profileImage}
                alt="Samritha Shree"
                className="w-full h-full object-cover rounded-full grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/60 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Hero;
