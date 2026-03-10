import React, { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { EXPERIENCE_TIMELINE } from '../constants';

const Experience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (timelineRef.current) {
        const rect = timelineRef.current.getBoundingClientRect();
        setHeight(rect.height);
      }
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, [timelineRef]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <SectionWrapper id="experience" title="Career Odyssey">
      <div ref={containerRef} className="w-full font-sans md:px-10">
        <div ref={timelineRef} className="relative max-w-7xl mx-auto pb-20">
          {EXPERIENCE_TIMELINE.map((item, index) => (
            <div
              key={index}
              className="flex justify-start pt-10 md:pt-40 md:gap-10"
            >
              <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-slate-900 flex items-center justify-center border border-white/10">
                  <div className="h-4 w-4 rounded-full bg-cyan-500 border border-cyan-400 p-2 shadow-[0_0_15px_rgba(6,182,212,0.5)]" />
                </div>
                <h3 className="hidden md:block text-xl md:pl-20 md:text-3xl lg:text-4xl font-bold text-white/50 ">
                  {item.title}
                </h3>
              </div>

              <div className="relative pl-20 pr-4 md:pl-4 w-full">
                <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-white/50">
                  {item.title}
                </h3>
                <div className="glass-card p-8 border-white/10 relative group hover:border-cyan-500/30 transition-all duration-500">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-violet-600 opacity-0 group-hover:opacity-30 transition-opacity" />
                  <p className="text-cyan-500/70 text-sm font-space font-bold uppercase tracking-widest mb-2">
                    {item.date}
                  </p>
                  {item.mode && (
                    <span className="inline-block px-3 py-1 rounded-full text-[10px] font-space font-bold uppercase tracking-widest bg-white/5 text-white/40 mb-4 border border-white/10">
                      {item.mode}
                    </span>
                  )}
                  <p className="text-white/50 text-sm md:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
          <div
            style={{
              height: height + "px",
            }}
            className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-from),var(--tw-gradient-to))] from-transparent via-neutral-700 to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
          >
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-violet-600 via-cyan-500 to-transparent from-[0%] via-[50%] rounded-full"
            />
          </div>
        </div>
      </div>
      
      <div className="text-center mt-20 max-w-2xl mx-auto glass-card p-6 border-white/5">
        <p className="text-white/40 italic text-sm leading-relaxed">
          "Each experience, whether a corporate internship or a personal project, contributes to my evolving technical arsenal."
        </p>
      </div>
    </SectionWrapper>
  );
};

export default Experience;