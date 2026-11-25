import React from 'react';
import { ArrowRight, Play, Sparkles, ShieldCheck } from 'lucide-react';

export const CtaBanner = ({ onOpenTrial, onOpenDemo }) => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-neutral-100 dark:from-[#0D0D0D] dark:to-[#050505] relative overflow-hidden border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-300 text-xs font-mono font-semibold mb-6 border border-teal-200 dark:border-teal-800">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Faber Infinite Lean Platform</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight leading-tight max-w-3xl mx-auto">
          Design Your Future-Ready Lean Factory in Days, Not Months
        </h2>

        {/* Subtitle */}
        <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
          Join industrial engineering teams using LFD Cloud to conduct PPQ Pareto analyses, size pull supermarkets, and cut shop-floor material travel by over 60%.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => onOpenTrial({ mode: 'trial', plan: 'LFD Signature' })}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold text-sm sm:text-base transition-all duration-150 flex items-center justify-center gap-2 shadow-xl shadow-teal-600/30 hover:-translate-y-0.5"
          >
            <span>Start Free Trial</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => onOpenDemo({ mode: 'demo', plan: 'LFD Enterprise' })}
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-900 dark:text-white border border-neutral-300 dark:border-neutral-700 font-semibold text-sm sm:text-base transition-all duration-150 flex items-center justify-center gap-2 hover:-translate-y-0.5"
          >
            <Play className="w-4 h-4 fill-current text-teal-600 dark:text-teal-400" />
            <span>Book Engineering Walkthrough</span>
          </button>
        </div>

        {/* Reassurance */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-500 font-mono">
          <span>&bull; No credit card required</span>
          <span>&bull; Full access to 15-step suite</span>
          <span>&bull; Enterprise grade data encryption</span>
        </div>

      </div>
    </section>
  );
};
