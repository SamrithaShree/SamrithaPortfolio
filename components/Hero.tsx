import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import Button from './Button';
import SocialIcons from './SocialIcons';
import { SOCIAL_LINKS } from '../constants';
import SectionWrapper from './SectionWrapper';
import profileImage from '../assets/images/Profile.jpeg';

const Hero: React.FC = () => {
  return (
    <SectionWrapper id="home" title="" isFirstSection={true}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-center min-h-[calc(100vh - var(--navbar-height))]">
        {/* Left Column: Introduction Text */}
        <div className="text-center md:text-left">
          <p className="text-xl md:text-2xl text-gray-400 mb-4">Hello, I'm</p>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 leading-tight">
            Samritha Shree R
          </h1>
          
          <TypeAnimation
            sequence={[
              'CS Student',
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
            className="text-2xl md:text-3xl font-semibold text-blue-400 mb-6"
          />
          
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            CSE Undergraduate | Caplin Point Laboratories Intern | Ex - Valeo Intern
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center md:justify-start">
            <Button href="#projects" variant="primary">
              View Projects
            </Button>
            <Button href="https://leetcode.com/samrithashree/" target="_blank" rel="noopener noreferrer" variant="secondary">
              LeetCode Profile
            </Button>
          </div>

          <SocialIcons links={SOCIAL_LINKS} className="justify-center md:justify-start" />
        </div>

        {/* Right Column: Profile Image Placeholder */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-green-400 shadow-2xl">
            <img
              src={profileImage}
              alt="Profile Picture"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-50"></div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Hero;
