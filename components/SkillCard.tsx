import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { IconType } from 'react-icons';

interface SkillCardProps {
  name: string;
  icon: IconType | string;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, icon }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Motion values for 3D tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative group w-full h-32"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-violet-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div 
        className="relative h-full w-full glass-card flex flex-col items-center justify-center p-4 border-white/10 transition-colors duration-500 group-hover:border-cyan-500/50"
        style={{ transform: "translateZ(50px)" }}
      >
        {/* Animated Border */}
        <div className="absolute inset-0 rounded-xl border border-white/5 group-hover:border-none overflow-hidden">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent w-[200%] -translate-x-full group-hover:animate-shimmer"
            initial={{ x: "-100%" }}
            animate={isHovered ? { x: "100%" } : { x: "-100%" }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Icon with Magnetic effect */}
        <motion.div
          animate={isHovered ? { scale: 1.2, y: -5 } : { scale: 1, y: 0 }}
          className="text-4xl mb-3 text-white/50 group-hover:text-cyan-400 drop-shadow-[0_0_10px_rgba(6,182,212,0.3)] transition-colors duration-500"
        >
          {typeof icon === 'string' ? (
            <span>{icon}</span>
          ) : (
            React.createElement(icon)
          )}
        </motion.div>

        {/* Skill Name */}
        <motion.p 
          animate={isHovered ? { opacity: 1 } : { opacity: 0.5 }}
          className="text-[10px] md:text-xs font-space font-bold uppercase tracking-widest text-white transition-all duration-500 text-center"
        >
          {name}
        </motion.p>
        
        {/* Glow point */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-cyan-500/0 group-hover:bg-cyan-500/50 rounded-full blur-sm transition-all duration-500" />
      </div>
    </motion.div>
  );
};

export default SkillCard;