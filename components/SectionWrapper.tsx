import React from 'react';
import { motion } from 'framer-motion';

interface SectionWrapperProps {
  id: string;
  title: string;
  children: React.ReactNode;
  isFirstSection?: boolean;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, title, children, isFirstSection = false }) => {
  const baseClasses = `px-6 md:px-12 max-w-7xl mx-auto`;
  const sectionSpecificClasses = isFirstSection
    ? `pt-32 pb-20`
    : `py-24 min-h-[80vh] flex flex-col justify-center`;

  return (
    <section id={id} className={`${baseClasses} ${sectionSpecificClasses} relative z-10`}>
      {!isFirstSection && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-space font-bold text-white inline-block relative">
            {title}
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-gradient-to-r from-cyan-500 to-violet-600 rounded-full" />
          </h2>
        </motion.div>
      )}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default SectionWrapper;