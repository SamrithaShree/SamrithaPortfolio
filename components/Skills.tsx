import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import PhysicsPool from './PhysicsPool';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  const categories = Object.keys(SKILLS);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <SectionWrapper id="skills" title="Technical Arsenal">
      <div 
        className="relative flex flex-col items-center py-20 min-h-[850px]"
      >
        {/* Background Ambient Glows & Grid - Matched to Theme */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[150px] opacity-30" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-[120px] opacity-20 animate-pulse" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        {/* Floating Category Dock - Matched to Theme */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="sticky top-24 z-30 mb-10 p-2 glass-navbar border-white/10 rounded-3xl flex flex-wrap justify-center gap-1.5 shadow-2xl backdrop-blur-3xl md:rounded-full"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative px-5 py-2.5 md:px-8 md:py-3.5 rounded-2xl md:rounded-full text-[10px] md:text-xs font-space font-bold tracking-[0.25em] transition-all duration-500 outline-none uppercase
                ${activeCategory === category ? 'text-cyan-400' : 'text-white/40 hover:text-white/70'}`}
            >
              {activeCategory === category && (
                <motion.div 
                  layoutId="activeCategoryDock"
                  className="absolute inset-0 bg-white/5 border border-cyan-500/30 rounded-2xl md:rounded-full -z-10 shadow-[0_0_15px_rgba(6,182,212,0.15)]"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{category}</span>
            </button>
          ))}
        </motion.div>

        {/* Interactive Physics Stage */}
        <div className="relative w-full max-w-6xl px-4 flex flex-col items-center">
          <div className="w-full flex items-center justify-center py-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, scale: 0.95, filter: "blur(20px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.05, filter: "blur(20px)" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="w-full"
              >
                <PhysicsPool skills={SKILLS[activeCategory as keyof typeof SKILLS]} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Interaction Hint - Matched to Theme */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="mt-16 flex items-center gap-4 text-cyan-400/30 animate-pulse"
        >
          <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-cyan-400/20" />
          <span className="text-[9px] font-space font-bold uppercase tracking-[0.4em] text-center">
            Interact to disturb the physics field
          </span>
          <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-cyan-400/20" />
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Skills;
