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
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 200, damping: 20 } },
};

const Skills: React.FC = () => {
  return (
    <SectionWrapper id="skills" title="Technical Arsenal">
      <div className="relative space-y-24 py-10">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent" />
          <div className="absolute top-3/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-violet-500/10 to-transparent" />
          <div className="absolute top-0 left-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />
        </div>

        {Object.entries(SKILLS).map(([category, skills], idx) => (
          <motion.div 
            key={category} 
            className="flex flex-col"
            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className={`flex items-center gap-4 mb-10 ${idx % 2 === 0 ? 'justify-start' : 'justify-end md:flex-row-reverse'}`}>
              <div className="h-10 w-10 rounded-xl bg-slate-900 border border-cyan-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                <span className="text-cyan-400 font-bold font-space">{idx + 1}</span>
              </div>
              <h3 className="text-2xl font-space font-bold tracking-widest text-white uppercase relative">
                {category}
                <motion.span 
                  className="absolute -bottom-2 left-0 h-1 bg-cyan-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
              </h3>
            </div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 w-full`}
            >
              {skills.map((skill) => (
                <motion.div key={skill.name} variants={itemVariants}>
                  <SkillCard name={skill.name} icon={skill.icon} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
      
      {/* Bottom CTA or Quote */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-20 p-8 glass-card border-white/5 text-center relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-violet-500/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
        <p className="text-white/40 italic font-space text-sm">
          "Continuously expanding this arsenal with emerging technologies and engineering best practices."
        </p>
      </motion.div>
    </SectionWrapper>
  );
};

export default Skills;