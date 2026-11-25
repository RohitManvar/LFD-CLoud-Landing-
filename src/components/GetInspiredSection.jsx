import React, { useState, useEffect } from 'react';
import { ArrowUpRight, X, Sparkles, TrendingUp, CheckCircle2, Layers, Cpu, Compass, ArrowRight, PanelsTopLeft, Warehouse, Truck } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { useTheme } from '../context/ThemeContext';

export const GetInspiredSection = ({ onOpenTrial }) => {
  const { theme } = useTheme();
  const [selectedStory, setSelectedStory] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedStory(null);
      }
    };
    if (selectedStory) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedStory]);

  const stories = [
    {
      id: 'automotive-chakan',
      company: 'Sahyadri Auto Components',
      industry: 'Automotive Tier-1 &bull; Chakan MIDC',
      title: 'Slashing material travel distance by 42% with cellular U-flow and point-of-use supermarkets',
      subtitle: 'Restructured 14 disconnected machining and welding bays into 4 synchronized U-shaped workcells with 20-minute tugger train delivery loops.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
      highlightBadge: '-42% Travel Cut',
      metrics: [
        { label: 'Daily Material Travel', before: '2.4 km / shift', after: '1.4 km / shift', change: '-42%' },
        { label: 'Line Starvation', before: '14 hrs / wk', after: '0 hrs / wk', change: '-100%' },
        { label: 'Takt Adherence', before: '76%', after: '98.5%', change: '+22.5%' },
        { label: 'Floor Space Saved', before: 'Baseline', after: '4,200 sq ft', change: '-32%' }
      ],
      platformWorkflow: {
        stepA: {
          step: '1. PPQ & Pareto Routing Matrix (Step 02)',
          headline: 'Isolated 14 runner SKUs generating 78% of volume',
          description: 'LFD Cloud analyzed 104 SKUs, computing an automated Pareto curve that revealed 14 battery tray parts accounted for 78% of production load. Grouped them into a dedicated high-volume continuous flow stream.'
        },
        stepB: {
          step: '2. Supermarket & Kanban Sizing (Step 10)',
          headline: 'Point-of-use gravity racks replaced centralized storage',
          description: 'Replaced disorganized forklift pallets with 8-bin dynamic gravity flow racks at each cell entrance, fed by a synchronized 20-minute tugger train route.'
        },
        stepC: {
          step: '3. 2D/3D Cellular Layout Studio (Step 12)',
          headline: 'U-shaped single-piece continuous flow commissioning',
          description: 'Designed U-flow workcells with standardized work-in-process (SWIP) buffers, liberating 4,200 sq ft of floor space and cutting operator walking distance by 1.0 km per shift.'
        }
      },
      quote: {
        text: 'LFD Cloud turned months of manual CAD revisions into automated Lean engineering logic. We eliminated over a kilometer of unnecessary walking per shift and gained 4,200 sq ft of usable floor space.',
        author: 'Nitin Deshmukh',
        role: 'Director of Plant Operations, Sahyadri Auto Components'
      }
    },
    {
      id: 'pharma-formulations',
      company: 'Narmada Pharma Formulations',
      industry: 'Pharma Formulations &bull; Sarigam GIDC',
      title: 'Doubling Process Cycle Efficiency across solid dose cleanrooms under strict GMP standards',
      subtitle: 'Synchronized granulation, compression, and blistering lines with automated capacity balancing and statutory cleanroom airlock flow.',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
      highlightBadge: '2.4x PCE Gain',
      metrics: [
        { label: 'Process Cycle Efficiency', before: '12%', after: '29%', change: '+141%' },
        { label: 'Quarantine WIP Days', before: '16 days', after: '4.8 days', change: '-70%' },
        { label: 'Compression Bottleneck', before: '108% Takt', after: '84% Takt', change: 'Balanced' },
        { label: 'GMP Compliance Audit', before: 'Manual checks', after: 'Automated 17-pt LFD', change: 'Certified' }
      ],
      platformWorkflow: {
        stepA: {
          step: '1. Value Stream Identification (Step 03)',
          headline: 'End-to-end solid dose formulation mapping',
          description: 'Mapped tablet granulation, fluid bed drying, rotary compression, and blister packaging. Discovered that unequal batch sizing was trapping 16 days of quarantine WIP between compression and packaging.'
        },
        stepB: {
          step: '2. Capacity & Ramp-Up Balancing (Step 06)',
          headline: 'Relieved compression constraint with staggered tooling SMED',
          description: 'LFD Cloud bottleneck radar highlighted compression at 108% Takt. Simulated tooling SMED changeovers that cut setup times by 65%, pulling Station 2 within customer Takt.'
        },
        stepC: {
          step: '3. Layout & Airlock Separation (Step 12 & 14)',
          headline: 'Zero cross-contamination cleanroom zoning',
          description: 'Exported validated 2D layout complying with Schedule M and WHO-GMP zoning, featuring one-way personnel airlocks and dedicated material transfer hatches.'
        }
      },
      quote: {
        text: 'In pharmaceutical manufacturing, facility layout cannot be separated from regulatory compliance. LFD Cloud gave us the exact documentation and engineering proof to validate our plant expansion with zero GMP observations.',
        author: 'Dr. Sanjay Patel',
        role: 'VP of Quality & Manufacturing Excellence, Narmada Pharma'
      }
    },
    {
      id: 'heavy-engineering',
      company: 'Kalinga Metal Treatment',
      industry: 'Heavy Engineering &bull; Jamshedpur',
      title: 'Releasing $420,000 in trapped WIP and eliminating heavy forklift congestion',
      subtitle: 'Replaced erratic batch push annealing with timed tugger deliveries, supermarket pull buffers, and visual 5S floor management.',
      image: 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&w=1200&q=80',
      highlightBadge: '+$420k WIP Freed',
      metrics: [
        { label: 'Trapped WIP Released', before: '$680k', after: '$260k', change: '-$420,000' },
        { label: 'Forklift Cross-Traffic', before: '48 trips/hr', after: '12 trips/hr', change: '-75%' },
        { label: 'Throughput Volume', before: '180 tons/mo', after: '235 tons/mo', change: '+30.5%' },
        { label: 'FMEA Critical Risks', before: '8 Open Risks', after: '0 Open Risks', change: '100% Mitigated' }
      ],
      platformWorkflow: {
        stepA: {
          step: '1. Flow Management & Travel Analysis (Step 05)',
          headline: 'Spaghetti diagram revealed crisscrossing heavy loads',
          description: 'Visualized heavy steel coil transfer routes between shot blasting, heat treatment furnaces, and surface coating. Identified 4 dangerous crossing points where forklifts interacted with pedestrian walkways.'
        },
        stepB: {
          step: '2. Material Handling & Route Redesign (Step 11)',
          headline: 'Dedicated automated tugger perimeter loop',
          description: 'Confined forklifts exclusively to the exterior receiving yard while internal coil movements shifted to rail-guided transfer trolleys and overhead gantry cranes.'
        },
        stepC: {
          step: '3. FMEA Risk Assessment & Mitigations (Step 14)',
          headline: 'Systematic reduction of high-severity collision risks',
          description: 'Scored initial RPN at 120; automated mitigation reduced residual RPN to 18, earning full safety clearance with zero production down-days.'
        }
      },
      quote: {
        text: 'Connecting Lean factory logistics directly with safety FMEA in LFD Cloud allowed us to unlock $420,000 in working capital while transforming plant safety.',
        author: 'Rakesh Banerjee',
        role: 'Chief Operating Officer, Kalinga Metal Treatment'
      }
    }
  ];

  return (
    <section id="stories" className="py-20 md:py-32 bg-white dark:bg-[#0D0D0D] text-black dark:text-white transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================================= */}
        {/* SECTION HEADER                                                            */}
        {/* ========================================================================= */}
        <ScrollReveal direction="up" duration={700}>
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-[-0.035em] leading-[1.12] text-black dark:text-white">
              Get inspired
            </h2>
            <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
              See what manufacturing leaders and Lean practitioners are achieving with LFD Cloud.
            </p>
          </div>
        </ScrollReveal>

        {/* ========================================================================= */}
        {/* 3 STORY CARDS                                                             */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 max-w-6xl mx-auto">
          {stories.map((story, idx) => (
            <ScrollReveal key={story.id} direction="up" delay={idx * 120} duration={600}>
              <div 
                onClick={() => setSelectedStory(story)}
                className="group cursor-pointer text-left flex flex-col h-full rounded-2xl transition-all duration-300"
              >
                {/* Photo Container */}
                <div className="aspect-[4/3] sm:aspect-square w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-neutral-100 dark:bg-neutral-800 mb-5 relative shadow-xs border border-neutral-200/60 dark:border-neutral-800/80">
                  <img 
                    src={story.image} 
                    alt={story.company} 
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  
                  {/* Category Tag */}
                  <div className="absolute top-4 left-4 z-10">
                    <span 
                      className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-black/80 dark:bg-black/90 text-white backdrop-blur-md shadow-xs"
                      dangerouslySetInnerHTML={{ __html: story.industry }}
                    />
                  </div>

                  {/* Impact Highlight Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-teal-500 text-black backdrop-blur-md shadow-xs">
                      {story.highlightBadge}
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                    <span className="text-xs font-semibold text-white flex items-center gap-1.5">
                      <span>View full transformation story</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                {/* Typography Block */}
                <div className="flex-1 flex flex-col justify-between space-y-2.5">
                  <div>
                    <div className="text-xs font-mono text-neutral-500 dark:text-neutral-400 font-semibold uppercase tracking-wider mb-1">
                      {story.company}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-black dark:group-hover:text-white leading-snug flex items-start gap-1 transition-colors">
                      <span>{story.title}</span>
                      <ArrowUpRight className="w-4 h-4 shrink-0 mt-1 text-neutral-400 group-hover:text-black dark:group-hover:text-white transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2 leading-relaxed">
                    {story.subtitle}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>

      {/* ========================================================================= */}
      {/* INTERACTIVE CASE STUDY MODAL                                              */}
      {/* ========================================================================= */}
      {selectedStory && (
        <div 
          className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setSelectedStory(null)}
        >
          <div 
            className="relative bg-white dark:bg-[#141414] text-neutral-900 dark:text-white rounded-3xl max-w-3xl w-full p-6 sm:p-10 shadow-2xl border border-neutral-200 dark:border-neutral-800 text-left my-8 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedStory(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header: Industry & Company */}
            <div className="flex flex-wrap items-center gap-2.5 mb-3">
              <span 
                className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
                dangerouslySetInnerHTML={{ __html: selectedStory.industry }}
              />
              <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500">
                &bull; {selectedStory.company}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-snug text-neutral-900 dark:text-white pr-8">
              {selectedStory.title}
            </h3>

            <p className="mt-3 text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
              {selectedStory.subtitle}
            </p>

            {/* Before vs After Metrics Grid */}
            <div className="mt-8 pt-6 border-t border-neutral-200 dark:border-neutral-800">
              <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-neutral-500 dark:text-neutral-400 mb-4 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-teal-500" />
                <span>Verified Impact Metrics (Before vs After)</span>
              </h4>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                {selectedStory.metrics.map((m, i) => (
                  <div key={i} className="p-3.5 rounded-2xl bg-neutral-50 dark:bg-[#1E1E1E] border border-neutral-200/70 dark:border-neutral-800/80">
                    <div className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400 truncate mb-1">
                      {m.label}
                    </div>
                    <div className="text-base sm:text-lg font-black text-black dark:text-white">
                      {m.after}
                    </div>
                    <div className="text-[10px] font-mono text-neutral-400 line-through">
                      Was: {m.before}
                    </div>
                    <div className="mt-1 text-xs font-bold text-teal-600 dark:text-teal-400">
                      {m.change}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3-Step Platform Journey */}
            <div className="mt-8 pt-6 border-t border-neutral-200 dark:border-neutral-800 space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-neutral-500 dark:text-neutral-400 mb-2 flex items-center gap-2">
                <Layers className="w-4 h-4 text-teal-500" />
                <span>The LFD Cloud Transformation Journey</span>
              </h4>

              {/* Step A */}
              <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-[#181818] border border-neutral-200/70 dark:border-neutral-800">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-black dark:text-white mb-1">
                  <span className="w-2 h-2 rounded-full bg-teal-500 inline-block"></span>
                  {selectedStory.platformWorkflow.stepA.step}
                </div>
                <div className="font-semibold text-sm text-neutral-900 dark:text-neutral-100 mb-1">
                  {selectedStory.platformWorkflow.stepA.headline}
                </div>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {selectedStory.platformWorkflow.stepA.description}
                </p>
              </div>

              {/* Step B */}
              <div className="p-4 rounded-2xl bg-amber-500/5 dark:bg-amber-500/10 border border-amber-500/30">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-600 dark:text-amber-400 mb-1">
                  <Warehouse className="w-3.5 h-3.5" />
                  {selectedStory.platformWorkflow.stepB.step}
                </div>
                <div className="font-semibold text-sm text-amber-950 dark:text-amber-200 mb-1">
                  {selectedStory.platformWorkflow.stepB.headline}
                </div>
                <p className="text-xs text-amber-900/80 dark:text-amber-300/80 leading-relaxed">
                  {selectedStory.platformWorkflow.stepB.description}
                </p>
              </div>

              {/* Step C */}
              <div className="p-4 rounded-2xl bg-indigo-500/5 dark:bg-indigo-500/10 border border-indigo-500/30">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 mb-1">
                  <PanelsTopLeft className="w-3.5 h-3.5" />
                  {selectedStory.platformWorkflow.stepC.step}
                </div>
                <div className="font-semibold text-sm text-indigo-950 dark:text-indigo-200 mb-1">
                  {selectedStory.platformWorkflow.stepC.headline}
                </div>
                <p className="text-xs text-indigo-900/80 dark:text-indigo-300/80 leading-relaxed">
                  {selectedStory.platformWorkflow.stepC.description}
                </p>
              </div>
            </div>

            {/* Testimonial Quote */}
            <div className="mt-6 p-5 rounded-2xl bg-neutral-100 dark:bg-[#1E1E1E] border border-neutral-200 dark:border-neutral-800">
              <p className="italic text-sm text-neutral-800 dark:text-neutral-200 leading-relaxed">
                "{selectedStory.quote.text}"
              </p>
              <div className="mt-3 text-xs font-mono font-semibold text-neutral-600 dark:text-neutral-400">
                {selectedStory.quote.author} &bull; <span className="font-normal text-neutral-500">{selectedStory.quote.role}</span>
              </div>
            </div>

            {/* Modal Bottom CTAs */}
            <div className="mt-8 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-neutral-500 dark:text-neutral-400 font-mono">
                Ready to transform your plant layout and flow?
              </span>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => {
                    setSelectedStory(null);
                    onOpenTrial({ mode: 'trial', plan: 'LFD Signature' });
                  }}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 transition-colors cursor-pointer shadow-xs"
                >
                  Start free trial
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
