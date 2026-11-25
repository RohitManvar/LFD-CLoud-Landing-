import React from 'react';
import { useTheme } from '../context/ThemeContext';

/**
 * Official LFD Cloud Brand Logo Component
 * Shows the black logo icon and black "LFD Cloud" text in light mode,
 * and seamlessly adapts to white logo icon and white text in dark mode.
 */
export const LfdLogo = ({ 
  size = 'md', // 'sm' | 'md' | 'lg'
  iconOnly = false,
  forceBlack = false,
  className = '' 
}) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark' && !forceBlack;

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
        src="/assets/lfd-icon-black.svg"
        alt="LFD Cloud"
        className={`${hClass} w-auto object-contain transition-transform duration-200 hover:scale-105 ${
          isDark ? 'hidden' : 'block'
        } dark:hidden`}
      />
      {/* Dark Mode: White Icon */}
      <img
        src="/assets/lfd-icon-white.svg"
        alt="LFD Cloud"
        className={`${hClass} w-auto object-contain transition-transform duration-200 hover:scale-105 ${
          isDark ? 'block' : 'hidden'
        } hidden dark:block`}
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
