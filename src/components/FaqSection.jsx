import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { SITE_DATA } from '../config/siteData';
import { ScrollReveal } from './ScrollReveal';

export const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const s9 = SITE_DATA.section9;
  const faqs = s9.faqs;

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faqs" className="py-20 md:py-32 bg-white dark:bg-[#0D0D0D] text-black dark:text-white border-t border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-200 select-none">
      <div className="max-w-[920px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <ScrollReveal direction="up" duration={700}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 text-xs font-mono font-medium mb-4">
              <span>{s9.eyebrow}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.035em] text-black dark:text-white leading-[1.12]">
              {s9.title}
            </h2>
          </div>
        </ScrollReveal>

        {/* Accordion List (NexVSM Clean Style) */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <ScrollReveal key={idx} direction="up" delay={idx * 40} duration={400}>
                <div className="rounded-2xl border border-neutral-200/80 dark:border-neutral-800/80 bg-[#F9F9FB] dark:bg-[#151515] overflow-hidden transition-all duration-200">
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-semibold text-black dark:text-white hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors cursor-pointer"
                  >
                    <span className="text-base sm:text-lg leading-snug">{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 shrink-0 transition-transform duration-200 text-neutral-400 ${
                        isOpen ? 'rotate-180 text-black dark:text-white' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed border-t border-neutral-100 dark:border-neutral-800/60 animate-in fade-in duration-150">
                      {faq.a}
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};
