import React, { useEffect, useRef, useState } from 'react';
import Matter from 'matter-js';
import { motion, useReducedMotion } from 'framer-motion';
import { IconType } from 'react-icons';

interface PhysicsNodeProps {
  name: string;
  icon: IconType | string;
  body: Matter.Body;
}

const PhysicsNode: React.FC<PhysicsNodeProps> = ({ name, icon, body }) => {
  const nodeRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let animationFrameId: number;
    
    const updatePosition = () => {
      if (nodeRef.current && body) {
        // Apply position and rotation from Matter.js
        const { x, y } = body.position;
        const angle = body.angle;
        
        nodeRef.current.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${angle}rad)`;
      }
      animationFrameId = requestAnimationFrame(updatePosition);
    };

    updatePosition();
    return () => cancelAnimationFrame(animationFrameId);
  }, [body]);

  return (
    <motion.div
      ref={nodeRef}
      className="absolute top-0 left-0 cursor-pointer outline-none"
      // Handle Accessibility / Focus
      tabIndex={0}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.5, zIndex: 50 }}
      whileFocus={{ scale: 1.5, zIndex: 50 }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1, zIndex: isHovered ? 50 : 10 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      aria-label={`Skill: ${name}`}
    >
      <div className="flex flex-col items-center">
        <div 
          className={`relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl transition-all duration-300 ${isHovered ? 'border-cyan-500/50 bg-cyan-500/10' : ''}`}
        >
          <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-600/10 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
          
          <div className={`text-2xl md:text-3xl text-white/50 transition-colors duration-300 drop-shadow-[0_0_12px_rgba(6,182,212,0.3)] ${isHovered ? 'text-cyan-400' : ''}`}>
            {typeof icon === 'string' ? (
              <span>{icon}</span>
            ) : (
              React.createElement(icon)
            )}
          </div>
          
          <div className={`absolute -inset-2 bg-cyan-500/20 rounded-full blur-xl transition-opacity duration-500 -z-10 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
        </div>

        <p className={`mt-3 text-[10px] md:text-xs font-space font-bold uppercase tracking-widest transition-colors duration-300 text-center whitespace-nowrap px-2 py-1 rounded bg-midnight/80 border border-white/5 ${isHovered ? 'text-cyan-400 border-cyan-500/30' : 'text-white/40'}`}>
          {name}
        </p>
      </div>
    </motion.div>
  );
};

export default PhysicsNode;
