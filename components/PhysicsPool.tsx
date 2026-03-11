import React, { useEffect, useRef, useState } from 'react';
import Matter from 'matter-js';
import PhysicsNode from './PhysicsNode';
import { useReducedMotion } from 'framer-motion';

interface PhysicsPoolProps {
  skills: Array<{ name: string; icon: any }>;
}

const PhysicsPool: React.FC<PhysicsPoolProps> = ({ skills }) => {
  const sceneRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef(Matter.Engine.create({ gravity: { x: 0, y: 0, scale: 0 } }));
  const [bodies, setBodies] = useState<Matter.Body[]>([]);
  const prefersReducedMotion = useReducedMotion();

  // Handle Matter.js initialization
  useEffect(() => {
    if (!sceneRef.current) return;
    
    const engine = engineRef.current;
    const world = engine.world;
    Matter.World.clear(world, false);
    
    const width = sceneRef.current.clientWidth;
    const height = sceneRef.current.clientHeight;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) / 2 - 10;

    // Create bodies for skills
    const newBodies = skills.map((_, i) => {
      // Start them in a VERY tight cluster at the center for a dramatic expansion
      const angle = (i / skills.length) * Math.PI * 2;
      const r = 5 + Math.random() * 10; // Very close to center
      const x = centerX + Math.cos(angle) * r;
      const y = centerY + Math.sin(angle) * r;
      
      return Matter.Bodies.circle(x, y, 45, { 
        restitution: 0.9, 
        friction: 0.05,
        frictionAir: 0.018, // Balanced for a smooth initial slide
        density: 0.05,
      });
    });

    Matter.World.add(world, newBodies);
    setBodies(newBodies);

    // Initial High-Power Burst Animation
    newBodies.forEach((body, i) => {
      const dx = body.position.x - centerX;
      const dy = body.position.y - centerY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      // Powerful outward kick
      const burstStrength = 0.25; 
      Matter.Body.applyForce(body, body.position, {
        x: (dx / (dist || 1)) * burstStrength,
        y: (dy / (dist || 1)) * burstStrength
      });
    });

    const runner = Matter.Runner.create();
    Matter.Runner.run(runner, engine);

    // Custom update loop for constraints and continuous forces
    const updateEvent = () => {
      newBodies.forEach(body => {
        if (!prefersReducedMotion) {
           // Subtle random drift (Buoyancy) - Increased to 0.0009 (2x of current)
           const forceMagnitude = 0.0009;
           Matter.Body.applyForce(body, body.position, {
             x: (Math.random() - 0.5) * forceMagnitude,
             y: (Math.random() - 0.5) * forceMagnitude
           });
        }

        // Circular boundary constraint logic
        const dx = body.position.x - centerX;
        const dy = body.position.y - centerY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        // If outside the pool radius, push it back in smoothly
        if (dist > radius - 45) {
           const pushStrength = 0.0016 * (dist - (radius - 45)); // Doubled push
           Matter.Body.applyForce(body, body.position, {
             x: -(dx / dist) * pushStrength,
             y: -(dy / dist) * pushStrength
           });
        }
      });
    };

    Matter.Events.on(engine, 'beforeUpdate', updateEvent);

    return () => {
      Matter.Runner.stop(runner);
      Matter.Events.off(engine, 'beforeUpdate', updateEvent);
      Matter.Engine.clear(engine);
    };
  }, [skills, prefersReducedMotion]);

  // Handle Mouse Repulsion
  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (prefersReducedMotion) return;
      
      const rect = scene.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      bodies.forEach(body => {
        const dx = body.position.x - mouseX;
        const dy = body.position.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Repel distance - Increased force to 0.0006 (2x of current)
        if (dist < 150) {
           const force = (150 - dist) * 0.0006;
           Matter.Body.applyForce(body, body.position, {
             x: (dx / dist) * force,
             y: (dy / dist) * force
           });
        }
      });
    };

    scene.addEventListener('mousemove', handleMouseMove);
    return () => scene.removeEventListener('mousemove', handleMouseMove);
  }, [bodies, prefersReducedMotion]);

  return (
    <div 
      ref={sceneRef} 
      className="relative w-full aspect-square max-w-[600px] md:max-w-[700px] mx-auto rounded-full border border-white/5 bg-midnight/30 shadow-[inset_0_0_100px_rgba(6,182,212,0.05)] overflow-hidden"
      aria-label="Interactive Technical Skills Pool"
    >
      {bodies.map((body, idx) => (
        <PhysicsNode 
          key={skills[idx].name} 
          name={skills[idx].name} 
          icon={skills[idx].icon} 
          body={body} 
        />
      ))}
    </div>
  );
};

export default PhysicsPool;
