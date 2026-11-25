import React from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { SITE_DATA } from '../config/siteData';
import { ScrollReveal } from './ScrollReveal';

export const FinalCtaSection = ({ onOpenTrial, onOpenDemo }) => {
  const s10 = SITE_DATA.section10;

  return (
    <section className="py-24 sm:py-32 bg-white dark:bg-[#0D0D0D] text-black dark:text-white border-t border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-200 select-none relative overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-teal-500/10 via-emerald-500/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Top Badge */}
        <ScrollReveal direction="up" duration={500}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 text-xs font-mono font-medium mb-6">
            <span>{s10.badge}</span>
          </div>
        </ScrollReveal>

        {/* Editorial Heading */}
        <ScrollReveal direction="up" duration={700}>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.035em] text-black dark:text-white leading-[1.1] mb-6">
            {s10.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed max-w-2xl mx-auto mb-10">
            {s10.description}
          </p>
        </ScrollReveal>

        {/* CTAs */}
        <ScrollReveal direction="up" delay={150} duration={600}>
          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6 mb-10">
            <button
              onClick={() => onOpenTrial({ mode: 'trial', plan: 'LFD Core' })}
              className="px-8 py-3.5 rounded-full font-semibold text-sm transition-all shadow-md active:scale-98 cursor-pointer flex items-center gap-2 bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
            >
              <span>{s10.primaryCta}</span>
            </button>

            <button
              onClick={() => onOpenDemo({ mode: 'demo', plan: 'LFD Enterprise' })}
              className="text-sm font-semibold transition-colors flex items-center gap-1 group py-1 text-black hover:text-neutral-700 dark:text-white dark:hover:text-neutral-300 cursor-pointer"
            >
              <span>{s10.secondaryCta}</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </ScrollReveal>

        {/* 3 Highlights */}
        <ScrollReveal direction="up" delay={250} duration={600}>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-[13px] font-medium text-neutral-600 dark:text-neutral-400">
            {s10.highlights.map((h, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                <span>{h}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
