import React from 'react';

/**
 * Official LFD Cloud Brand Logo Component
 * Shows ONLY the black logo icon and black "LFD Cloud" text,
 * adapting seamlessly to white in dark mode just like VSM Landing.
 */
export const LfdLogo = ({ 
  size = 'md', // 'sm' | 'md' | 'lg'
  iconOnly = false,
  className = '' 
}) => {
  const heights = {
    sm: 'h-[20px] sm:h-[22px]',
    md: 'h-[25px] sm:h-[28px]',
    lg: 'h-[32px] sm:h-[36px]'
  };

  const textSizes = {
    sm: 'text-[15px]',
    md: 'text-[18px]',
    lg: 'text-[22px]'
  };

  const hClass = heights[size] || heights.md;
  const tClass = textSizes[size] || textSizes.md;

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Light Mode: Black Icon */}
      <img
        src="/assets/lfd-icon-black.png"
        alt="LFD Cloud"
        className={`${hClass} w-auto object-contain block dark:hidden transition-transform duration-200 hover:scale-105`}
      />
      {/* Dark Mode: White Icon */}
      <img
        src="/assets/lfd-icon-white.png"
        alt="LFD Cloud"
        className={`${hClass} w-auto object-contain hidden dark:block transition-transform duration-200 hover:scale-105`}
      />

      {!iconOnly && (
        <span className={`font-extrabold ${tClass} tracking-tight font-sans text-black dark:text-white transition-colors duration-200`}>
          LFD Cloud
        </span>
      )}
    </div>
  );
};

export default LfdLogo;
