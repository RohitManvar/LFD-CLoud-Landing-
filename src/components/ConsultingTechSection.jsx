import React from 'react';
import { Laptop, Users, ShieldCheck, ArrowRight, ArrowUpRight } from 'lucide-react';
import { SITE_DATA } from '../config/siteData';
import { ScrollReveal } from './ScrollReveal';

const PILLAR_ICONS = [
  Laptop,
  Users,
  ShieldCheck
];

export const ConsultingTechSection = ({ onOpenDemo }) => {
  const s7 = SITE_DATA.section7;

  return (
    <section id="consulting" className="py-20 md:py-32 bg-white dark:bg-[#0D0D0D] text-black dark:text-white border-t border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-200 select-none">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <ScrollReveal direction="up" duration={700}>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 text-xs font-mono font-medium mb-4">
              <span>{s7.eyebrow}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.035em] text-black dark:text-white leading-[1.12]">
              {s7.title}
            </h2>
            <p className="mt-5 text-base sm:text-lg text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed">
              {s7.description}
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Pillars Grid (NexVSM Clean Style) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {s7.pillars.map((pillar, idx) => {
            const Icon = PILLAR_ICONS[idx] || Laptop;
            return (
              <ScrollReveal key={idx} direction="up" delay={idx * 80} duration={600}>
                <div className="h-full rounded-3xl bg-[#F9F9FB] dark:bg-[#151515] border border-neutral-200/80 dark:border-neutral-800/80 p-8 sm:p-10 flex flex-col justify-between hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-200 shadow-2xs hover:shadow-xs group">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-white dark:bg-[#202020] border border-neutral-200/80 dark:border-neutral-700 flex items-center justify-center text-teal-600 dark:text-teal-400 mb-6 group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6 stroke-[1.8]" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-black dark:text-white mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="pt-8">
                    <span className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-wider">
                      Pillar 0{idx + 1}
                    </span>
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
              onClick={() => onOpenDemo({ mode: 'demo', plan: 'Enterprise' })}
              className="px-8 py-3.5 rounded-full font-semibold text-sm transition-all shadow-md active:scale-98 cursor-pointer inline-flex items-center gap-2 bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
            >
              <span>{s7.cta}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
