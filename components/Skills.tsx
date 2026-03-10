import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import SkillCard from './SkillCard';
import { SKILLS } from '../constants';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const Skills: React.FC = () => {
  return (
    <SectionWrapper id="skills" title="Technical Arsenal">
      <div className="relative space-y-32 py-10">
        {/* Ambient background particles/beams */}
        <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent animate-pulse" />
          <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-violet-500/5 to-transparent animate-pulse delay-1000" />
        </div>

        {Object.entries(SKILLS).map(([category, skills], idx) => (
          <motion.div 
            key={category} 
            className="flex flex-col space-y-10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Category Header with Glow */}
            <div className={`flex items-center gap-6 ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
              <div className="flex flex-col">
                <h3 className={`text-xl md:text-2xl font-space font-bold tracking-[0.2em] text-white uppercase relative ${idx % 2 === 0 ? 'text-left' : 'text-right'}`}>
                  {category}
                  <span className={`absolute -bottom-2 h-[2px] bg-gradient-to-r from-cyan-500 to-violet-500 ${idx % 2 === 0 ? 'left-0 w-2/3' : 'right-0 w-2/3'}`} />
                </h3>
                <span className={`text-[10px] font-space font-bold text-white/20 mt-3 tracking-widest ${idx % 2 === 0 ? 'text-left' : 'text-right'}`}>
                  {skills.length} MODULES DETECTED
                </span>
              </div>
              <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>

            {/* The 'Pool' - Flex wrap with organic gaps */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`flex flex-wrap gap-4 md:gap-6 ${idx % 2 === 0 ? 'justify-start' : 'justify-end'}`}
            >
              {skills.map((skill) => (
                <motion.div 
                  key={skill.name} 
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 }
                  }}
                  className="flex-shrink-0"
                >
                  <SkillCard name={skill.name} icon={skill.icon} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
      
      {/* Bottom Experience Quote */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-32 p-10 glass-card border-white/5 text-center relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
        <p className="text-white/40 italic font-space text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
          "Architecture is the art of organizing complexity. My technical arsenal is a curated collection of tools chosen to build resilient, scalable, and human-centric systems."
        </p>
      </motion.div>
    </SectionWrapper>
  );
};

export default Skills;