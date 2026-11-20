import React from 'react';
import { 
  PanelsTopLeft, 
  CheckCircle2, 
  ArrowRight, 
  Box, 
  Layers, 
  Compass, 
  FileDown, 
  Sparkles 
} from 'lucide-react';
import { SITE_DATA } from '../config/siteData';
import { ScrollReveal } from './ScrollReveal';

export const LayoutDesignSection = ({ onOpenTrial }) => {
  const s5 = SITE_DATA.section5;

  return (
    <section id="layout" className="py-20 md:py-32 bg-white dark:bg-[#0D0D0D] text-black dark:text-white border-t border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-200 select-none">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <ScrollReveal direction="up" duration={700}>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 text-xs font-mono font-medium mb-4">
              <span>{s5.eyebrow}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.035em] text-black dark:text-white leading-[1.12]">
              {s5.title}
            </h2>
            <p className="mt-5 text-base sm:text-lg text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed">
              {s5.description}
            </p>
          </div>
        </ScrollReveal>

        {/* 2D/3D Layout Studio Showcase (NexVSM Mac Frame) */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-[#F9F9FB] dark:bg-[#151515] border border-neutral-200/80 dark:border-neutral-800/80 p-8 sm:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Capabilities List */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-teal-600 dark:text-teal-400 font-bold block mb-2">
                  Integrated Engineering Engine
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-black dark:text-white">
                  {s5.capabilitiesTitle}
                </h3>
              </div>

              <div className="space-y-3">
                {s5.capabilities.map((cap, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm text-neutral-800 dark:text-neutral-200">
                    <div className="w-5 h-5 rounded-full bg-teal-100 dark:bg-teal-950/80 text-teal-700 dark:text-teal-300 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-medium">{cap}</span>
                  </div>
                ))}
              </div>

              {/* Import Note */}
              <div className="p-4 rounded-xl bg-white dark:bg-[#1E1E1E] border border-neutral-200/80 dark:border-neutral-700/80 text-xs text-neutral-600 dark:text-neutral-300">
                <span className="font-bold text-black dark:text-white font-mono">Format Support: </span>
                {s5.importNote}
              </div>

              <div>
                <button
                  onClick={() => onOpenTrial({ mode: 'trial', plan: 'Small Business' })}
                  className="px-8 py-3.5 rounded-full font-semibold text-sm transition-all shadow-md active:scale-98 cursor-pointer inline-flex items-center gap-2 bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
                >
                  <span>{s5.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Column: Visual Layout Canvas Mockup */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden bg-white dark:bg-[#111111] border border-neutral-200/80 dark:border-neutral-800 shadow-2xl">
                {/* Window header */}
                <div className="h-10 px-4 bg-[#F9F9FB] dark:bg-[#181818] border-b border-neutral-200/80 dark:border-neutral-800 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-neutral-300 dark:bg-neutral-600" />
                    <div className="w-2.5 h-2.5 rounded-full bg-neutral-300 dark:bg-neutral-600" />
                    <div className="w-2.5 h-2.5 rounded-full bg-neutral-300 dark:bg-neutral-600" />
                    <span className="text-neutral-500 ml-2">Plant-01-ZoneB.lfd (3D View)</span>
                  </div>
                  <span className="text-teal-600 font-bold">2D/3D Live Sync</span>
                </div>

                {/* Canvas blueprint graphic */}
                <div className="p-6 bg-grid-subtle dark:bg-grid-dark relative min-h-[300px] flex flex-col justify-between">
                  <div className="flex justify-between items-center text-[10px] font-mono text-neutral-400">
                    <span>NORTH AISLE: 3.5m CLEARANCE</span>
                    <span className="text-teal-600 font-bold">ZONE B: CELLULAR LINE 02</span>
                  </div>

                  {/* Layout zones representation */}
                  <div className="grid grid-cols-3 gap-3 my-auto">
                    <div className="p-3 rounded-lg border-2 border-teal-500/40 bg-teal-50/60 dark:bg-teal-950/40 text-center">
                      <div className="text-[10px] font-mono text-teal-700 dark:text-teal-300 font-bold">CELL 01</div>
                      <div className="text-xs font-bold text-neutral-800 dark:text-white mt-1">CNC Line</div>
                      <div className="text-[9px] text-neutral-500 font-mono mt-1">Takt: 48s</div>
                    </div>
                    <div className="p-3 rounded-lg border-2 border-dashed border-teal-400 bg-white dark:bg-[#1A1A1A] text-center">
                      <div className="text-[10px] font-mono text-teal-600 font-bold">SUPERMARKET</div>
                      <div className="text-xs font-bold text-neutral-800 dark:text-white mt-1">FIFO Racks</div>
                      <div className="text-[9px] text-emerald-600 font-mono mt-1">14 Bins Safe</div>
                    </div>
                    <div className="p-3 rounded-lg border-2 border-teal-500/40 bg-teal-50/60 dark:bg-teal-950/40 text-center">
                      <div className="text-[10px] font-mono text-teal-700 dark:text-teal-300 font-bold">CELL 02</div>
                      <div className="text-xs font-bold text-neutral-800 dark:text-white mt-1">Assembly</div>
                      <div className="text-[9px] text-neutral-500 font-mono mt-1">Takt: 48s</div>
                    </div>
                  </div>

                  {/* Tugger path footer */}
                  <div className="flex items-center justify-between text-[10px] font-mono text-neutral-500 border-t border-dashed border-neutral-200 dark:border-neutral-700 pt-2">
                    <span className="text-teal-600 font-semibold">Tugger Train Route (One-way Loop)</span>
                    <span>Safety Clearance: Validated</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
