import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  href?: string;
  target?: string;
  rel?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  href,
  target,
  rel,
  ...props
}) => {
  const baseClasses = 'px-6 py-3 rounded-md text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 shadow-lg';
  const primaryClasses = 'bg-green-500 text-gray-900 hover:bg-green-600';
  const secondaryClasses = 'bg-blue-600 text-white hover:bg-blue-700 border border-blue-600';

  const classes = `${baseClasses} ${variant === 'primary' ? primaryClasses : secondaryClasses}`;

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={classes} aria-label={typeof children === 'string' ? children : 'Action button'}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;