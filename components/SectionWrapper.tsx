import React from 'react';
// Removed motion, MotionProps from 'framer-motion';

interface SectionWrapperProps {
  id: string;
  title: string;
  children: React.ReactNode;
  isFirstSection?: boolean; // New prop to identify the Hero section
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, title, children, isFirstSection = false }) => {
  // Removed Framer Motion props logic

  const baseClasses = `px-4 md:px-8 lg:px-12 max-w-7xl mx-auto`;

  // Specific classes for the first section to handle fixed navbar offset
  // and other sections for general styling and scroll-in animation
  const sectionSpecificClasses = isFirstSection
    ? `pt-[var(--navbar-height)] scroll-mt-[var(--navbar-height)]` // Add padding-top and scroll-margin-top
    : `py-16 min-h-screen flex flex-col justify-center`; // Default for other sections

  return (
    <section
      id={id}
      className={`${baseClasses} ${sectionSpecificClasses}`}
    >
      {!isFirstSection && ( // Only render title for non-hero sections
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-green-400">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
};

export default SectionWrapper;