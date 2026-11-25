import React, { useState } from 'react';
import { PanelsTopLeft, Warehouse, Truck, ArrowRight, Check, X, ShieldAlert, Sparkles } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const LayoutSection = ({ onOpenTrial }) => {
  const [layoutMode, setLayoutMode] = useState('optimized'); // 'legacy' | 'optimized'

  return (
    <section id="layout" className="py-20 md:py-28 bg-neutral-50 dark:bg-[#0B0B0B] border-t border-neutral-200 dark:border-neutral-800 relative">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-300 text-xs font-mono font-semibold mb-3 border border-teal-200 dark:border-teal-800">
              <PanelsTopLeft className="w-3.5 h-3.5" />
              <span>Step 10, 11 &amp; 12: Layout &amp; Supermarket Design</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
              Transform Chaotic Spaghetti Flow Into Streamlined Lean Cells
            </h2>
            <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-neutral-400">
              Traditional CAD drafts static walls. LFD Cloud calculates dynamic aisle clearances, pull supermarket FIFO racks, and tugger-train routes to slash material transit distances.
            </p>
          </div>
        </ScrollReveal>

        {/* Layout Comparison Visualizer */}
        <div className="bg-white dark:bg-[#141414] rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-xl overflow-hidden mb-12">
          
          {/* Top Control Bar: Mode Toggle */}
          <div className="p-4 sm:p-6 border-b border-neutral-200 dark:border-neutral-800 flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono font-semibold text-neutral-400 uppercase tracking-wider block">
                Interactive Plant Layout Simulator
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white">
                {layoutMode === 'legacy' ? 'Legacy Departmental Batch Layout (Functional)' : 'LFD Optimized Cellular Flow with Supermarket'}
              </h3>
            </div>

            {/* Toggle Switch */}
            <div className="inline-flex p-1 rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">
              <button
                onClick={() => setLayoutMode('legacy')}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                  layoutMode === 'legacy'
                    ? 'bg-rose-500 text-white shadow'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white'
                }`}
              >
                Legacy Spaghetti Flow
              </button>
              <button
                onClick={() => setLayoutMode('optimized')}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                  layoutMode === 'optimized'
                    ? 'bg-teal-600 text-white shadow'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white'
                }`}
              >
                LFD Cellular Layout
              </button>
            </div>
          </div>

          {/* Interactive Layout Canvas Simulator */}
          <div className="p-6 sm:p-8 bg-grid-subtle dark:bg-grid-dark">
            {layoutMode === 'legacy' ? (
              /* Legacy Chaotic Layout Visual */
              <div className="space-y-6">
                <div className="p-4 rounded-xl bg-rose-50/80 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/50 flex items-start gap-3">
                  <ShieldAlert className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-rose-900 dark:text-rose-200">
                    <strong>Critical Bottlenecks Detected:</strong> Forklift criss-crossing causes 1,840m average daily material transit per batch. Uncontrolled WIP buffers sit idle between departmental silos.
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                  <div className="p-4 rounded-xl bg-neutral-50 dark:bg-[#1A1A1A] border border-neutral-200 dark:border-neutral-800">
                    <span className="text-xs text-neutral-500 font-mono">Daily Forklift Travel</span>
                    <div className="text-2xl font-extrabold text-rose-600 font-mono mt-1">1,840 meters</div>
                    <span className="text-[11px] text-rose-500 font-medium">Excessive Transit Waste</span>
                  </div>
                  <div className="p-4 rounded-xl bg-neutral-50 dark:bg-[#1A1A1A] border border-neutral-200 dark:border-neutral-800">
                    <span className="text-xs text-neutral-500 font-mono">Average WIP Holding</span>
                    <div className="text-2xl font-extrabold text-rose-600 font-mono mt-1">320 Units</div>
                    <span className="text-[11px] text-rose-500 font-medium">High Capital Blockage</span>
                  </div>
                  <div className="p-4 rounded-xl bg-neutral-50 dark:bg-[#1A1A1A] border border-neutral-200 dark:border-neutral-800">
                    <span className="text-xs text-neutral-500 font-mono">Manufacturing Lead Time</span>
                    <div className="text-2xl font-extrabold text-rose-600 font-mono mt-1">6.4 Days</div>
                    <span className="text-[11px] text-rose-500 font-medium">Delayed Order Dispatch</span>
                  </div>
                </div>

                {/* Legacy Flow Schematic */}
                <div className="p-6 rounded-xl bg-white dark:bg-[#161616] border border-neutral-200 dark:border-neutral-800 font-mono text-xs">
                  <div className="text-neutral-500 text-[11px] mb-3">DEPARTMENTAL PROCESS SILOS (DISCONNECTED):</div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                    <div className="p-3 rounded-lg border-2 border-dashed border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800/40">
                      <strong>Lathe Dept</strong>
                      <span className="block text-[10px] text-rose-500 mt-1">WIP: 95 pcs</span>
                    </div>
                    <div className="p-3 rounded-lg border-2 border-dashed border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800/40">
                      <strong>Milling Dept</strong>
                      <span className="block text-[10px] text-rose-500 mt-1">WIP: 110 pcs</span>
                    </div>
                    <div className="p-3 rounded-lg border-2 border-dashed border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800/40">
                      <strong>Heat Treat</strong>
                      <span className="block text-[10px] text-rose-500 mt-1">WIP: 65 pcs</span>
                    </div>
                    <div className="p-3 rounded-lg border-2 border-dashed border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800/40">
                      <strong>Assembly</strong>
                      <span className="block text-[10px] text-rose-500 mt-1">WIP: 50 pcs</span>
                    </div>
                  </div>
                  <div className="text-center text-rose-500 text-[11px] mt-3 font-semibold">
                    &times; Batch &amp; Queue pushes material across building with heavy forklift congestion
                  </div>
                </div>
              </div>
            ) : (
              /* LFD Cellular Layout Visual */
              <div className="space-y-6">
                <div className="p-4 rounded-xl bg-teal-50/80 dark:bg-teal-950/20 border border-teal-200 dark:border-teal-900/50 flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-teal-950 dark:text-teal-200">
                    <strong>LFD Flow Optimization Active:</strong> U-shaped multi-process cells, FIFO pull supermarket, and timed tugger-train replenishment reduce material travel by 62%.
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                  <div className="p-4 rounded-xl bg-white dark:bg-[#1A1A1A] border border-neutral-200 dark:border-neutral-800 shadow-sm">
                    <span className="text-xs text-neutral-500 font-mono">Daily Material Travel</span>
                    <div className="text-2xl font-extrabold text-teal-600 dark:text-teal-400 font-mono mt-1">690 meters</div>
                    <span className="text-[11px] text-emerald-600 font-semibold font-mono">-62% Distance Cut</span>
                  </div>
                  <div className="p-4 rounded-xl bg-white dark:bg-[#1A1A1A] border border-neutral-200 dark:border-neutral-800 shadow-sm">
                    <span className="text-xs text-neutral-500 font-mono">Average WIP Holding</span>
                    <div className="text-2xl font-extrabold text-teal-600 dark:text-teal-400 font-mono mt-1">42 Units</div>
                    <span className="text-[11px] text-emerald-600 font-semibold font-mono">-87% WIP Reduced</span>
                  </div>
                  <div className="p-4 rounded-xl bg-white dark:bg-[#1A1A1A] border border-neutral-200 dark:border-neutral-800 shadow-sm">
                    <span className="text-xs text-neutral-500 font-mono">Manufacturing Lead Time</span>
                    <div className="text-2xl font-extrabold text-teal-600 dark:text-teal-400 font-mono mt-1">4.2 Hours</div>
                    <span className="text-[11px] text-emerald-600 font-semibold font-mono">Same-Day Throughput</span>
                  </div>
                </div>

                {/* Cellular Flow Schematic */}
                <div className="p-6 rounded-xl bg-white dark:bg-[#161616] border border-teal-500/40 dark:border-teal-800 font-mono text-xs shadow-md">
                  <div className="flex justify-between items-center text-teal-700 dark:text-teal-300 text-[11px] mb-3 font-bold">
                    <span>U-SHAPED LEAN CELL (1-PIECE FLOW):</span>
                    <span className="px-2 py-0.5 rounded bg-teal-100 dark:bg-teal-900/60 text-teal-800 dark:text-teal-200">
                      Standard Work-in-Process (SWIP) = 4 pcs
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-center">
                    <div className="p-3 rounded-lg border border-teal-300 dark:border-teal-700 bg-teal-50/70 dark:bg-teal-950/40">
                      <strong className="text-teal-900 dark:text-teal-200">Op 10: CNC Turn</strong>
                      <span className="block text-[10px] text-teal-600 dark:text-teal-400 mt-1">Cycle: 42s</span>
                    </div>
                    <div className="p-3 rounded-lg border border-teal-300 dark:border-teal-700 bg-teal-50/70 dark:bg-teal-950/40">
                      <strong className="text-teal-900 dark:text-teal-200">Op 20: Mill</strong>
                      <span className="block text-[10px] text-teal-600 dark:text-teal-400 mt-1">Cycle: 46s</span>
                    </div>
                    <div className="p-3 rounded-lg border border-teal-300 dark:border-teal-700 bg-teal-50/70 dark:bg-teal-950/40">
                      <strong className="text-teal-900 dark:text-teal-200">Op 30: Deburr</strong>
                      <span className="block text-[10px] text-teal-600 dark:text-teal-400 mt-1">Cycle: 38s</span>
                    </div>
                    <div className="p-3 rounded-lg border border-emerald-300 dark:border-emerald-700 bg-emerald-50/70 dark:bg-emerald-950/40">
                      <strong className="text-emerald-900 dark:text-emerald-200">Op 40: Inspect</strong>
                      <span className="block text-[10px] text-emerald-600 dark:text-emerald-400 mt-1">Cycle: 45s</span>
                    </div>
                  </div>
                  <div className="text-center text-teal-700 dark:text-teal-300 text-[11px] mt-3 font-semibold flex items-center justify-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>Balanced to Customer Takt Time (48s) &bull; Zero forklift hazards</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer of Layout Container */}
          <div className="p-4 sm:p-6 bg-neutral-100/70 dark:bg-[#161616] border-t border-neutral-200 dark:border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-neutral-600 dark:text-neutral-400 text-center sm:text-left">
              Import 2D CAD files (.dwg, .dxf) or sketch layout zones from scratch with automated aisle clearance validation.
            </div>
            <button
              onClick={() => onOpenTrial({ mode: 'trial', plan: 'LFD Signature' })}
              className="px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-medium text-xs sm:text-sm transition-colors flex items-center gap-2 shrink-0"
            >
              <span>Model Your Factory Layout</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
