import React from 'react';
import { 
  Network, 
  Warehouse, 
  Truck, 
  PanelsTopLeft, 
  Eye, 
  ShieldAlert, 
  CalendarRange, 
  ArrowRight 
} from 'lucide-react';
import { SITE_DATA } from '../config/siteData';
import { ScrollReveal } from './ScrollReveal';

const ICONS = [
  Network,
  Warehouse,
  Truck,
  PanelsTopLeft,
  Eye,
  ShieldAlert,
  CalendarRange
];

export const ManufacturingPlanningSection = ({ onOpenTrial }) => {
  const s3 = SITE_DATA.section3;

  return (
    <section id="planning" className="py-20 md:py-32 bg-white dark:bg-[#0D0D0D] text-black dark:text-white border-t border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-200 select-none">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <ScrollReveal direction="up" duration={700}>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 text-xs font-mono font-medium mb-4">
              <span>{s3.eyebrow}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.035em] text-black dark:text-white leading-[1.12]">
              {s3.title}
            </h2>
            <p className="mt-5 text-base sm:text-lg text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed">
              {s3.description}
            </p>
          </div>
        </ScrollReveal>

        {/* 7 Connected Module Cards Grid (NexVSM Clean Style) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {s3.modules.map((m, idx) => {
            const Icon = ICONS[idx] || PanelsTopLeft;
            return (
              <ScrollReveal key={idx} direction="up" delay={idx * 50} duration={500}>
                <div className="h-full rounded-2xl bg-[#F9F9FB] dark:bg-[#151515] border border-neutral-200/80 dark:border-neutral-800/80 p-6 sm:p-7 flex flex-col justify-between hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-200 shadow-2xs hover:shadow-xs group">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-white dark:bg-[#202020] border border-neutral-200/70 dark:border-neutral-700 flex items-center justify-center text-black dark:text-white mb-4 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5 text-teal-600 dark:text-teal-400 stroke-[1.8]" />
                    </div>
                    <h3 className="text-lg font-bold text-black dark:text-white mb-2 leading-snug">
                      {m.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
                      {m.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-neutral-200/50 dark:border-neutral-800/60 mt-4 text-[11px] font-mono text-neutral-400">
                    Software-Enabled &bull; LFD Suite
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
              onClick={() => onOpenTrial({ mode: 'trial', plan: 'Small Business' })}
              className="px-8 py-3.5 rounded-full font-semibold text-sm transition-all shadow-md active:scale-98 cursor-pointer inline-flex items-center gap-2 bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
            >
              <span>{s3.cta}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
