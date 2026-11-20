import React, { useState } from 'react';
import { 
  Workflow, 
  Sparkles, 
  UserCheck, 
  Laptop, 
  ArrowRight, 
  CheckCircle2 
} from 'lucide-react';
import { SITE_DATA } from '../config/siteData';
import { ScrollReveal } from './ScrollReveal';

export const FrameworkSection = ({ onOpenTrial }) => {
  const [filter, setFilter] = useState('all'); // 'all' | 'software' | 'consultant'
  const s6 = SITE_DATA.section6;
  const steps = s6.frameworkSteps;

  const filteredSteps = steps.filter((s) => {
    if (filter === 'software') return s.type === 'software';
    if (filter === 'consultant') return s.type === 'consultant';
    return true;
  });

  return (
    <section id="framework" className="py-20 md:py-32 bg-[#FAFAF9] dark:bg-[#0D0D0D] text-black dark:text-white border-t border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-200 select-none">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <ScrollReveal direction="up" duration={700}>
          <div className="max-w-4xl mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 text-xs font-mono font-medium mb-4">
              <span>{s6.eyebrow}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.035em] text-black dark:text-white leading-[1.12]">
              {s6.title}
            </h2>
            <p className="mt-5 text-base sm:text-lg text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed">
              {s6.description}
            </p>

            {/* Delivery Model Summary Pills */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-3 max-w-4xl mx-auto text-left">
              <div className="p-3.5 rounded-2xl bg-white dark:bg-[#151515] border border-neutral-200/80 dark:border-neutral-800/80 flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-teal-50 dark:bg-teal-950/80 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0">
                  <Laptop className="w-4 h-4" />
                </div>
                <div className="text-xs font-medium text-neutral-800 dark:text-neutral-200">
                  {s6.deliveryModel.softwareEnabledCount}
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white dark:bg-[#151515] border border-neutral-200/80 dark:border-neutral-800/80 flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                  <UserCheck className="w-4 h-4" />
                </div>
                <div className="text-xs font-medium text-neutral-800 dark:text-neutral-200">
                  {s6.deliveryModel.consultantLedCount}
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white dark:bg-[#151515] border border-neutral-200/80 dark:border-neutral-800/80 flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-amber-50 dark:bg-amber-950/80 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div className="text-xs font-medium text-neutral-800 dark:text-neutral-200">
                  {s6.deliveryModel.supportScope}
                </div>
              </div>
            </div>

            {/* Filter Toggle */}
            <div className="mt-8 inline-flex p-1 rounded-full bg-neutral-200/70 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  filter === 'all'
                    ? 'bg-white dark:bg-[#1C1C1C] text-black dark:text-white shadow-xs'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white'
                }`}
              >
                All 15 Steps
              </button>
              <button
                onClick={() => setFilter('software')}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  filter === 'software'
                    ? 'bg-teal-600 text-white shadow-xs'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white'
                }`}
              >
                11 Software-Enabled
              </button>
              <button
                onClick={() => setFilter('consultant')}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  filter === 'consultant'
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white'
                }`}
              >
                4 Consultant-Led
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* 15 Steps Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {filteredSteps.map((step) => {
            const isConsultant = step.type === 'consultant';
            return (
              <ScrollReveal key={step.step} direction="up" duration={500}>
                <div className={`h-full rounded-2xl p-5 border transition-all duration-200 flex flex-col justify-between shadow-2xs hover:shadow-xs ${
                  isConsultant
                    ? 'bg-indigo-50/40 dark:bg-[#13121E] border-indigo-200/70 dark:border-indigo-900/40'
                    : 'bg-white dark:bg-[#151515] border-neutral-200/80 dark:border-neutral-800/80'
                }`}>
                  <div>
                    {/* Top step badge */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-xs font-extrabold text-neutral-400 dark:text-neutral-500">
                        STEP {step.step}
                      </span>
                      {isConsultant ? (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                          Consultant-Led
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800">
                          {step.ai ? 'AI Software' : 'Software-Enabled'}
                        </span>
                      )}
                    </div>

                    <h3 className="text-base font-bold text-black dark:text-white mb-2 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>

                  {step.deliveryText && (
                    <div className="mt-4 pt-3 border-t border-indigo-100 dark:border-indigo-900/30 text-[11px] font-mono font-semibold text-indigo-600 dark:text-indigo-400 italic">
                      {step.deliveryText}
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal direction="up" delay={200} duration={600}>
          <div className="mt-14 text-center">
            <button
              onClick={() => onOpenTrial({ mode: 'trial', plan: 'Mid-Size Business' })}
              className="px-8 py-3.5 rounded-full font-semibold text-sm transition-all shadow-md active:scale-98 cursor-pointer inline-flex items-center gap-2 bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
            >
              <span>{s6.cta}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
