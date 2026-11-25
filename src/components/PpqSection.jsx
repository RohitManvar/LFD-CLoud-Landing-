import React, { useState } from 'react';
import { FlaskConical, TrendingUp, Compass, ArrowRight, BarChart3, CheckCircle2, Sliders } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const PpqSection = ({ onOpenTrial }) => {
  const [activeTab, setActiveTab] = useState('runners');

  const categories = {
    runners: {
      label: 'Runners (Class A)',
      badge: 'High Volume / Predictable Flow',
      percentage: '78% of Total Factory Volume',
      skuCount: '12 SKUs (15% of Portfolio)',
      description: 'Dedicated continuous flow cells with 1-piece flow, minimal WIP buffers, and automated pull supermarkets.',
      metrics: [
        { label: 'Demand Variability (CoV)', val: '< 0.25 (Very Stable)' },
        { label: 'Dedicated Cells', val: 'Cell 01 & Cell 02' },
        { label: 'Recommended Takt', val: '48 seconds' }
      ],
      flowStrategy: 'Continuous 1-piece flow line with synchronized pacemaker station.'
    },
    repeaters: {
      label: 'Repeaters (Class B)',
      badge: 'Medium Volume / Periodic Batches',
      percentage: '17% of Total Factory Volume',
      skuCount: '34 SKUs (25% of Portfolio)',
      description: 'Flexible manufacturing cells with SMED quick-changeover tooling and kanban-governed supermarket lanes.',
      metrics: [
        { label: 'Demand Variability (CoV)', val: '0.25 – 0.65' },
        { label: 'Shared Cells', val: 'Cell 03 (Dual-tooling)' },
        { label: 'Recommended Takt', val: '140 seconds' }
      ],
      flowStrategy: 'Heijunka leveled pitch sequencing with standardized changeover matrices.'
    },
    strangers: {
      label: 'Strangers (Class C)',
      badge: 'Low Volume / Custom Specials',
      percentage: '5% of Total Factory Volume',
      skuCount: '140 SKUs (60% of Portfolio)',
      description: 'Dedicated job shop or high-mix low-volume (HMLV) work center to prevent disruption to high-speed runner cells.',
      metrics: [
        { label: 'Demand Variability (CoV)', val: '> 0.70 (Volatile)' },
        { label: 'Routing Area', val: 'Flexible Job Shop Zone' },
        { label: 'Recommended Takt', val: 'Make-to-Order' }
      ],
      flowStrategy: 'Segregated from core lines to preserve runner cell cadence and prevent bottleneck starvation.'
    }
  };

  const current = categories[activeTab];

  return (
    <section id="ppq" className="py-20 md:py-28 bg-white dark:bg-[#0D0D0D] border-t border-neutral-200 dark:border-neutral-800 relative">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-300 text-xs font-mono font-semibold mb-3 border border-teal-200 dark:border-teal-800">
              <FlaskConical className="w-3.5 h-3.5" />
              <span>Step 02 &amp; Step 03 of LFD Framework</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
              Automated PPQ Pareto &amp; Value Stream Routing
            </h2>
            <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-neutral-400">
              Stop guessing machine groupings. LFD Cloud analyzes your entire SKU catalogue to separate high-speed runners from strangers and build mathematically balanced manufacturing cells.
            </p>
          </div>
        </ScrollReveal>

        {/* Interactive Matrix & Pareto Studio Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Interactive Selector */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-sm font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 font-bold">
              Portfolio Segmentation (Pareto 80/20)
            </h3>

            <div className="space-y-3">
              {Object.keys(categories).map((key) => {
                const item = categories[key];
                const isActive = activeTab === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-150 ${
                      isActive 
                        ? 'bg-teal-50/70 dark:bg-teal-950/40 border-teal-500/80 shadow-md ring-1 ring-teal-500/50' 
                        : 'bg-white dark:bg-[#141414] border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-sm text-neutral-900 dark:text-white">
                        {item.label}
                      </span>
                      <span className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded ${
                        isActive 
                          ? 'bg-teal-200 dark:bg-teal-900 text-teal-800 dark:text-teal-200' 
                          : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400'
                      }`}>
                        {item.percentage}
                      </span>
                    </div>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 line-clamp-2">
                      {item.description}
                    </p>
                  </button>
                );
              })}
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenTrial({ mode: 'trial', plan: 'LFD Core' })}
                className="inline-flex items-center gap-2 text-sm font-semibold text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300"
              >
                <span>Upload your product-process Excel sheet &rarr;</span>
              </button>
            </div>
          </div>

          {/* Right Column: Dynamic Deep-Dive Card */}
          <div className="lg:col-span-7 bg-neutral-50 dark:bg-[#141414] rounded-2xl p-6 sm:p-8 border border-neutral-200 dark:border-neutral-800 shadow-xl">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-5 border-b border-neutral-200 dark:border-neutral-800">
              <div>
                <span className="text-xs font-mono text-teal-600 dark:text-teal-400 font-bold uppercase tracking-wider block">
                  Active Filter
                </span>
                <h4 className="text-xl font-bold text-neutral-900 dark:text-white">
                  {current.label}
                </h4>
              </div>
              <span className="text-xs font-mono font-medium px-3 py-1 rounded-full bg-neutral-200/80 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
                {current.badge}
              </span>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-6">
              {current.metrics.map((m, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-white dark:bg-[#1B1B1B] border border-neutral-200/80 dark:border-neutral-800/80">
                  <div className="text-[11px] text-neutral-500 font-mono mb-1">{m.label}</div>
                  <div className="text-sm font-bold font-mono text-neutral-900 dark:text-white">{m.val}</div>
                </div>
              ))}
            </div>

            {/* Micro Routing Matrix Table */}
            <div className="space-y-3">
              <div className="text-xs font-mono font-semibold text-neutral-500 uppercase tracking-wider">
                Automated Routing Matrix Preview:
              </div>
              <div className="overflow-x-auto rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#181818]">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-neutral-100 dark:bg-neutral-800/60 text-neutral-600 dark:text-neutral-400 border-b border-neutral-200 dark:border-neutral-800">
                    <tr>
                      <th className="py-2.5 px-3">SKU Family</th>
                      <th className="py-2.5 px-3">Cut / Turn</th>
                      <th className="py-2.5 px-3">Milling</th>
                      <th className="py-2.5 px-3">Assembly</th>
                      <th className="py-2.5 px-3">Inspection</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
                    <tr>
                      <td className="py-2.5 px-3 font-bold text-teal-600 dark:text-teal-400">{current.label.split(' ')[0]} - 01</td>
                      <td className="py-2.5 px-3 text-emerald-600 font-bold">✓ (Op 10)</td>
                      <td className="py-2.5 px-3 text-emerald-600 font-bold">✓ (Op 20)</td>
                      <td className="py-2.5 px-3 text-emerald-600 font-bold">✓ (Op 30)</td>
                      <td className="py-2.5 px-3 text-emerald-600 font-bold">✓ (Op 40)</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 font-bold text-neutral-700 dark:text-neutral-300">{current.label.split(' ')[0]} - 02</td>
                      <td className="py-2.5 px-3 text-emerald-600 font-bold">✓ (Op 10)</td>
                      <td className="py-2.5 px-3 text-neutral-400">—</td>
                      <td className="py-2.5 px-3 text-emerald-600 font-bold">✓ (Op 30)</td>
                      <td className="py-2.5 px-3 text-emerald-600 font-bold">✓ (Op 40)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Flow Strategy Footnote */}
            <div className="mt-5 p-3 rounded-lg bg-teal-50/60 dark:bg-teal-950/30 border border-teal-200/50 dark:border-teal-800/50 text-xs text-neutral-700 dark:text-neutral-300">
              <strong className="text-teal-700 dark:text-teal-300 font-semibold font-mono">Lean Flow Rule: </strong>
              {current.flowStrategy}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
