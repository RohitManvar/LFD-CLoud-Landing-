import React from 'react';
import { ChevronRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { useTheme } from '../context/ThemeContext';

export const TryLfdCloudBanner = ({ onOpenTrial }) => {
  const { theme } = useTheme();

  return (
    <section className="py-12 sm:py-16 bg-white dark:bg-[#0D0D0D] text-black dark:text-white transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Footnote note directly above banner */}
        <p className="text-center text-[11px] sm:text-xs text-neutral-500 dark:text-neutral-400 font-mono mb-8 sm:mb-10 max-w-3xl mx-auto">
          *Available to all plans on web and cloud browsers, and to Professional, Consultant, and Enterprise tiers with multi-user concurrent editing.
        </p>

        <ScrollReveal direction="up" duration={600}>
          {/* Rounded "Try LFD Cloud today" Card */}
          <div className="rounded-3xl bg-[#F9F9FB] dark:bg-[#151515] border border-neutral-200/80 dark:border-neutral-800/80 py-12 sm:py-16 px-8 sm:px-14 flex flex-col sm:flex-row sm:items-center justify-between gap-6 transition-all duration-200 text-left">
            
            {/* Left Headline */}
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] text-black dark:text-white">
                Try LFD Cloud today
              </h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2 font-normal">
                Start your lean facility design journey. Full access to digital PPQ, cellular layout studio, and pull supermarket sizing.
              </p>
            </div>

            {/* Right Action Button */}
            <div className="shrink-0">
              <button
                onClick={() => onOpenTrial({ mode: 'trial', plan: 'Professional' })}
                className="px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold inline-flex items-center gap-2 transition-all duration-150 cursor-pointer shadow-xs active:scale-98 bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
              >
                <span>Start free trial</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
