import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  href,
  target,
  rel,
  className = '',
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center px-8 py-3 rounded-full font-space font-semibold tracking-wide transition-all duration-500 active:scale-95 disabled:opacity-50 shadow-lg cursor-pointer';
  
  const primaryClasses = 'bg-cyan-500 text-midnight hover:bg-white hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]';
  const secondaryClasses = 'bg-white/5 text-white border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20';

  const classes = `${baseClasses} ${variant === 'primary' ? primaryClasses : secondaryClasses} ${className}`;

  const motionProps = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
  };

  if (href) {
    return (
      <motion.a 
        {...motionProps}
        href={href} 
        target={target} 
        rel={rel} 
        className={classes} 
        aria-label={typeof children === 'string' ? children : 'Action button'}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button 
      {...motionProps}
      className={classes} 
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;