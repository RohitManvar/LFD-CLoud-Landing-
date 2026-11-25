import React from 'react';
import { FlaskConical, Compass, Workflow, Waves, ArrowRight, ArrowUpRight } from 'lucide-react';
import { SITE_DATA } from '../config/siteData';
import { ScrollReveal } from './ScrollReveal';

const ICON_MAP = {
  ppq: FlaskConical,
  vsi: Compass,
  vsm: Workflow,
  flow: Waves
};

export const PlatformApplicationsSection = ({ onOpenTrial }) => {
  const s2 = SITE_DATA.section2;

  return (
    <section id="applications" className="py-20 md:py-32 bg-[#FAFAF9] dark:bg-[#0D0D0D] text-black dark:text-white border-t border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-200 select-none">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <ScrollReveal direction="up" duration={700}>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 text-xs font-mono font-medium mb-4">
              <span>{s2.eyebrow}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.035em] text-black dark:text-white leading-[1.12]">
              {s2.title}
            </h2>
            <p className="mt-5 text-base sm:text-lg text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed">
              {s2.description}
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Connected Application Cards Grid (NexVSM Rounded Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {s2.applications.map((app) => {
            const Icon = ICON_MAP[app.id] || Workflow;
            return (
              <ScrollReveal key={app.id} direction="up" duration={600}>
                <div className="h-full rounded-3xl bg-white dark:bg-[#151515] border border-neutral-200/80 dark:border-neutral-800/80 p-8 sm:p-10 flex flex-col justify-between hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-200 shadow-xs hover:shadow-md group">
                  <div>
                    {/* Icon Bubble */}
                    <div className="w-12 h-12 rounded-2xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-black dark:text-white mb-6 group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6 stroke-[1.8]" />
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-black dark:text-white mb-3">
                      {app.title}
                    </h3>
                    <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
                      {app.description}
                    </p>
                  </div>

                  <div className="pt-8">
                    <button
                      onClick={() => onOpenTrial({ mode: 'trial', plan: 'LFD Core' })}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-black dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors cursor-pointer"
                    >
                      <span>{app.cta}</span>
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal direction="up" delay={200} duration={600}>
          <div className="mt-14 text-center">
            <button
              onClick={() => onOpenTrial({ mode: 'trial', plan: 'LFD Signature' })}
              className="px-8 py-3.5 rounded-full font-semibold text-sm transition-all shadow-md active:scale-98 cursor-pointer inline-flex items-center gap-2 bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
            >
              <span>{s2.cta}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
