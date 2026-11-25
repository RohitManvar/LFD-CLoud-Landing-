import React, { useState } from 'react';
import { 
  Waves, 
  ArrowRight, 
  Sparkles, 
  TrendingDown, 
  ShieldAlert, 
  CheckCircle2, 
  Layers, 
  Truck, 
  Warehouse 
} from 'lucide-react';
import { SITE_DATA } from '../config/siteData';
import { ScrollReveal } from './ScrollReveal';

export const FactoryFlowSection = ({ onOpenTrial }) => {
  const [stateMode, setStateMode] = useState('future'); // 'current' | 'future'
  const s4 = SITE_DATA.section4;

  return (
    <section id="flow" className="py-20 md:py-32 bg-[#FAFAF9] dark:bg-[#0D0D0D] text-black dark:text-white border-t border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-200 select-none">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <ScrollReveal direction="up" duration={700}>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 text-xs font-mono font-medium mb-4">
              <span>{s4.eyebrow}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.035em] text-black dark:text-white leading-[1.12]">
              {s4.title}
            </h2>
            <p className="mt-5 text-base sm:text-lg text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed">
              {s4.description}
            </p>
          </div>
        </ScrollReveal>

        {/* Interactive Factory Flow Simulator Card */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-white dark:bg-[#151515] border border-neutral-200/80 dark:border-neutral-800/80 shadow-xl overflow-hidden mb-12">
          
          {/* Top Control Bar with Mode Switch */}
          <div className="p-6 sm:p-8 border-b border-neutral-200/80 dark:border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-1">
                {s4.simulatorTitle}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white">
                {stateMode === 'current' ? 'Current State: Spaghetti Material Movement' : 'Proposed Future State: Lean Synchronized Flow'}
              </h3>
            </div>

            {/* State Toggle Buttons */}
            <div className="inline-flex p-1 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">
              <button
                onClick={() => setStateMode('current')}
                className={`px-5 py-2 rounded-full text-xs font-semibold transition-all ${
                  stateMode === 'current'
                    ? 'bg-rose-500 text-white shadow-xs'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white'
                }`}
              >
                Current State Flow
              </button>
              <button
                onClick={() => setStateMode('future')}
                className={`px-5 py-2 rounded-full text-xs font-semibold transition-all ${
                  stateMode === 'future'
                    ? 'bg-black text-white dark:bg-white dark:text-black shadow-xs'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white'
                }`}
              >
                Proposed Future State
              </button>
            </div>
          </div>

          {/* Simulator Visual Body */}
          <div className="p-6 sm:p-8 space-y-6">
            
            {/* Aspect Tags */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className="text-neutral-400">Evaluated Aspects:</span>
              {s4.comparisonAspects.map((aspect, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-md bg-[#F9F9FB] dark:bg-[#1E1E1E] border border-neutral-200/70 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300"
                >
                  {aspect}
                </span>
              ))}
            </div>

            {/* Visual Canvas Simulation */}
            {stateMode === 'current' ? (
              <div className="p-6 rounded-2xl bg-rose-50/50 dark:bg-rose-950/10 border border-rose-200/80 dark:border-rose-900/40 space-y-4">
                <div className="flex items-center gap-2 text-rose-600 font-bold text-xs uppercase font-mono">
                  <ShieldAlert className="w-4 h-4" />
                  <span>Uncoordinated Forklift Cross-Traffic &amp; Buffers</span>
                </div>
                
                {/* Spaghetti Canvas Schematic */}
                <div className="h-44 rounded-xl bg-white dark:bg-[#111111] border border-neutral-200 dark:border-neutral-800 p-4 relative overflow-hidden flex flex-col justify-between">
                  <div className="flex justify-between text-[11px] font-mono text-neutral-400">
                    <span>Dock A (Inbound)</span>
                    <span className="text-rose-500 font-semibold">Criss-Cross Forklift Paths</span>
                    <span>Dock B (Outbound)</span>
                  </div>

                  <div className="grid grid-cols-4 gap-2 my-auto">
                    <div className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700 text-center">
                      <div className="text-[10px] font-mono text-neutral-400">Silo 1</div>
                      <div className="text-xs font-bold text-neutral-800 dark:text-neutral-200">Turning Dept</div>
                      <div className="text-[10px] text-rose-500 font-mono mt-0.5">WIP: 95 pcs</div>
                    </div>
                    <div className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700 text-center">
                      <div className="text-[10px] font-mono text-neutral-400">Silo 2</div>
                      <div className="text-xs font-bold text-neutral-800 dark:text-neutral-200">Milling Dept</div>
                      <div className="text-[10px] text-rose-500 font-mono mt-0.5">WIP: 110 pcs</div>
                    </div>
                    <div className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700 text-center">
                      <div className="text-[10px] font-mono text-neutral-400">Silo 3</div>
                      <div className="text-xs font-bold text-neutral-800 dark:text-neutral-200">Heat Treat</div>
                      <div className="text-[10px] text-rose-500 font-mono mt-0.5">WIP: 65 pcs</div>
                    </div>
                    <div className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700 text-center">
                      <div className="text-[10px] font-mono text-neutral-400">Silo 4</div>
                      <div className="text-xs font-bold text-neutral-800 dark:text-neutral-200">Inspection</div>
                      <div className="text-[10px] text-rose-500 font-mono mt-0.5">WIP: 50 pcs</div>
                    </div>
                  </div>

                  <div className="text-center text-[10px] font-mono text-rose-500">
                    &times; High transportation waste &bull; Cluttered aisles &bull; Frequent batch waiting
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-6 rounded-2xl bg-teal-50/50 dark:bg-teal-950/20 border border-teal-200/80 dark:border-teal-900/40 space-y-4">
                <div className="flex items-center gap-2 text-teal-600 font-bold text-xs uppercase font-mono">
                  <Sparkles className="w-4 h-4" />
                  <span>Synchronized U-Shaped Cells with Pull Supermarket</span>
                </div>

                {/* Lean Canvas Schematic */}
                <div className="h-44 rounded-xl bg-white dark:bg-[#111111] border border-teal-500/30 dark:border-teal-800 p-4 relative overflow-hidden flex flex-col justify-between shadow-xs">
                  <div className="flex justify-between text-[11px] font-mono text-neutral-400">
                    <span>Inbound Raw Material</span>
                    <span className="text-teal-600 font-bold">PULL SUPERMARKET (FIFO)</span>
                    <span>Ready Finished Goods</span>
                  </div>

                  <div className="grid grid-cols-4 gap-2 my-auto">
                    <div className="p-2 rounded-lg bg-teal-50/70 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 text-center">
                      <div className="text-[10px] font-mono text-neutral-400">Op 10</div>
                      <div className="text-xs font-bold text-teal-900 dark:text-teal-200">Turn &amp; Mill</div>
                      <div className="text-[10px] text-emerald-600 font-mono mt-0.5">SWIP: 2 pcs</div>
                    </div>
                    <div className="p-2 rounded-lg bg-teal-50/70 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 text-center">
                      <div className="text-[10px] font-mono text-neutral-400">Op 20</div>
                      <div className="text-xs font-bold text-teal-900 dark:text-teal-200">Deburr / Clean</div>
                      <div className="text-[10px] text-emerald-600 font-mono mt-0.5">SWIP: 1 pc</div>
                    </div>
                    <div className="p-2 rounded-lg bg-teal-50/70 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 text-center">
                      <div className="text-[10px] font-mono text-neutral-400">Op 30</div>
                      <div className="text-xs font-bold text-teal-900 dark:text-teal-200">In-Line Treat</div>
                      <div className="text-[10px] text-emerald-600 font-mono mt-0.5">SWIP: 1 pc</div>
                    </div>
                    <div className="p-2 rounded-lg bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-center">
                      <div className="text-[10px] font-mono text-neutral-400">Op 40</div>
                      <div className="text-xs font-bold text-emerald-900 dark:text-emerald-200">Inspect &amp; Pack</div>
                      <div className="text-[10px] text-emerald-600 font-mono mt-0.5">Finished</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[10px] font-mono text-teal-600 border-t border-dashed border-teal-200 dark:border-teal-800/80 pt-1">
                    <span>Continuous 1-Piece Flow &rarr;</span>
                    <span className="text-neutral-500">Tugger Milk Run: Every 20 mins</span>
                  </div>
                </div>
              </div>
            )}

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {s4.metrics.map((m, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-[#F9F9FB] dark:bg-[#1A1A1A] border border-neutral-200/80 dark:border-neutral-800 text-center">
                  <div className="text-xs text-neutral-500 font-mono mb-1">{m.label}</div>
                  <div className="text-xl sm:text-2xl font-extrabold font-mono text-black dark:text-white">
                    {stateMode === 'current' ? m.current : m.future}
                  </div>
                  <div className={`text-[11px] font-mono font-bold mt-1 ${
                    stateMode === 'current' ? 'text-rose-500' : 'text-emerald-600 dark:text-emerald-400'
                  }`}>
                    {stateMode === 'current' ? 'Unoptimized Baseline' : m.change}
                  </div>
                </div>
              ))}
            </div>

            {/* Optimization Callout */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#F9F9FB] dark:bg-[#181818] border border-neutral-200/80 dark:border-neutral-800 flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-black dark:text-white mb-0.5">
                  {s4.optimizationCalloutTitle}
                </h4>
                <p className="text-xs sm:text-[13px] text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {s4.optimizationCalloutText}
                </p>
              </div>
            </div>

          </div>

          {/* Footer CTA Strip */}
          <div className="p-6 bg-[#F9F9FB] dark:bg-[#161616] border-t border-neutral-200/80 dark:border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-neutral-500 font-mono text-center sm:text-left">
              Model spaghetti charts, measure line intersections and plan pull supermarkets.
            </span>
            <button
              onClick={() => onOpenTrial({ mode: 'trial', plan: 'LFD Core' })}
              className="px-6 py-2.5 rounded-full font-semibold text-xs sm:text-sm transition-all shadow-md active:scale-98 cursor-pointer flex items-center gap-1.5 bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
            >
              <span>{s4.cta}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
