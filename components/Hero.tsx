import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import Button from './Button';
import SocialIcons from './SocialIcons';
import { SOCIAL_LINKS } from '../constants';
import SectionWrapper from './SectionWrapper';
import profileImage from '/images/Profile.jpeg';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <SectionWrapper id="home" title="" isFirstSection={true}>
      <div className="relative flex flex-col md:flex-row items-center justify-between min-h-[90vh] pt-10 pb-10 gap-16">
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] left-[10%] w-[40vw] h-[40vw] rounded-full bg-cyan-500/10 blur-[120px] animate-pulse-slow" />
          <div className="absolute bottom-[10%] right-[10%] w-[30vw] h-[30vw] rounded-full bg-violet-600/10 blur-[100px] animate-pulse-slow delay-700" />
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        </div>

        {/* Left Column: Introduction Text */}
        <motion.div 
          className="flex-1 text-center md:text-left z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="inline-block">
            <div className="glass-card px-4 py-1.5 flex items-center gap-2 border-cyan-500/30 mb-8 w-fit mx-auto md:mx-0">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-[10px] font-space font-bold text-cyan-100/80 tracking-widest uppercase">Open for Internships</span>
            </div>
          </motion.div>

          <motion.p variants={itemVariants} className="text-cyan-400 font-space font-medium tracking-[0.3em] uppercase text-xs mb-4">
            Software Engineering Student
          </motion.p>
          
          <motion.h1 variants={itemVariants} className="text-6xl lg:text-9xl font-space font-bold text-white mb-6 leading-[0.9] tracking-tighter">
            Samritha <span className="bg-gradient-to-r from-cyan-400 via-violet-500 to-cyan-400 bg-[size:200%] bg-clip-text text-transparent animate-gradient-shift">Shree</span>
          </motion.h1>

          <motion.div variants={itemVariants} className="h-12 mb-8">
            <TypeAnimation
              sequence={[
                'CSE Undergraduate',
                2000,
                'Cloud & DevOps Enthusiast',
                2000,
                'Full Stack Developer',
                2000,
                'Problem Solver @ Core',
                2000,
              ]}
              wrapper="h2"
              speed={50}
              repeat={Infinity}
              className="text-2xl md:text-3xl font-medium text-white/60 font-space"
            />
          </motion.div>

          <motion.p variants={itemVariants} className="text-lg text-white/40 mb-12 max-w-lg leading-relaxed">
            Focused on building efficient cloud-native applications and exploring the integration of AI in modern software lifecycles.
            <span className="block mt-4 text-white/20 text-sm font-space">
              Previously at Caplin Point Labs & Valeo India.
            </span>
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 mb-12 justify-center md:justify-start">
            <Button href="#projects" variant="primary" className="px-8 py-4 text-base">
              Explore Projects
            </Button>
            <Button href="https://leetcode.com/samrithashree/" target="_blank" rel="noopener noreferrer" variant="secondary" className="px-8 py-4 text-base">
              LeetCode Profile
            </Button>
          </motion.div>

          <motion.div variants={itemVariants}>
            <SocialIcons links={SOCIAL_LINKS} className="justify-center md:justify-start opacity-40 hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
        </motion.div>

        {/* Right Column: Stylized Profile Image */}
        <motion.div 
          className="flex-1 flex justify-center md:justify-end z-10 w-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        >
          <div className="relative group p-4 md:p-8">
            {/* Orbital Rings - Adjusted insets to avoid clipping */}
            <div className="absolute -inset-2 md:-inset-6 border border-white/5 rounded-full animate-spin-slow pointer-events-none" />
            <div className="absolute -inset-6 md:-inset-12 border border-white/5 rounded-full animate-reverse-spin-slow pointer-events-none" />
            
            {/* Background Glows */}
            <div className="absolute -inset-1 bg-gradient-to-tr from-cyan-500 to-violet-600 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-1000" />
            
            {/* Profile Container with Responsive Size */}
            <motion.div 
              className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[450px] rounded-full p-1 border border-white/10 shadow-[0_0_50px_rgba(6,182,212,0.15)] bg-white/5 backdrop-blur-sm overflow-hidden"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="relative w-full h-full rounded-full overflow-hidden grayscale-[30%] group-hover:grayscale-0 transition-all duration-700">
                <img
                  src={profileImage}
                  alt="Samritha Shree"
                  className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 opacity-60" />
                
                {/* Tech Particles/Dots */}
                <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-cyan-400 blur-[1px] animate-pulse" />
                <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 rounded-full bg-violet-400 blur-[1px] animate-pulse delay-700" />
              </div>
            </motion.div>

            {/* Floating Badges */}
            <motion.div 
              className="absolute -top-4 -right-4 glass-card px-4 py-2 border-white/10 shadow-xl"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <span className="text-[10px] font-space font-bold text-white/60 tracking-widest">Creative Engineer</span>
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-6 -left-6 glass-card px-4 py-2 border-white/10 shadow-xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            >
              <span className="text-[10px] font-space font-bold text-white/60 tracking-widest">SNUC'28</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Hero;

