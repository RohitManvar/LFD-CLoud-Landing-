import React, { useState, useEffect } from 'react';
import { 
  ArrowUpRight, 
  Sparkles, 
  CheckCircle2, 
  FileText,
  Maximize2,
  Box,
  Truck,
  Zap,
  ArrowRight,
  TrendingDown,
  TrendingUp,
  Activity,
  Layers,
  ChevronRight,
  PanelsTopLeft,
  Warehouse,
  FlaskConical,
  Compass,
  Cpu,
  BarChart3,
  SlidersHorizontal
} from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { useTheme } from '../context/ThemeContext';

export const Hero = ({ onOpenTrial, onOpenDemo }) => {
  const { theme } = useTheme();
  
  // Active capability state: 'ppq' | 'layout' | 'supermarket' | 'capacity'
  const [activeTab, setActiveTab] = useState('ppq');
  const [isPaused, setIsPaused] = useState(false);

  // Auto-cycle through the 4 tabs every 4.5 seconds when user isn't hovering
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveTab((prev) => {
        if (prev === 'ppq') return 'layout';
        if (prev === 'layout') return 'supermarket';
        if (prev === 'supermarket') return 'capacity';
        return 'ppq';
      });
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="relative pt-14 sm:pt-20 lg:pt-24 pb-20 md:pb-28 overflow-hidden bg-white dark:bg-[#0D0D0D] text-black dark:text-white transition-colors duration-200">
      
      {/* ========================================================================= */}
      {/* 1. FLOATING 2.5D STICKERS & OBJECTS (Lean Factory Geometry)                */}
      {/* ========================================================================= */}
      
      {/* Universal 8-Point Asterisks */}
      <div className="pointer-events-none absolute left-6 sm:left-14 top-1/2 -translate-y-20 text-neutral-400 dark:text-neutral-600 select-none hidden md:block transition-all duration-300 opacity-60">
        <svg width="42" height="42" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L13.5 8.5L22 7L15.5 12L22 17L13.5 15.5L12 24L10.5 15.5L2 17L8.5 12L2 7L10.5 8.5L12 0Z" />
        </svg>
      </div>

      <div className="pointer-events-none absolute right-8 sm:right-20 top-1/4 text-neutral-400 dark:text-neutral-600 select-none hidden md:block transition-all duration-300 opacity-60">
        <svg width="44" height="44" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L13.5 8.5L22 7L15.5 12L22 17L13.5 15.5L12 24L10.5 15.5L2 17L8.5 12L2 7L10.5 8.5L12 0Z" />
        </svg>
      </div>

      {/* Factory Gear / Gemba Sticker (Top Left) */}
      <div className="pointer-events-none absolute left-12 top-24 select-none hidden xl:block -rotate-12">
        <div className="w-12 h-12 rounded-2xl bg-teal-500/10 border border-teal-500/30 shadow-md flex items-center justify-center text-teal-600 text-xl font-bold backdrop-blur-xs">
          🏭
        </div>
      </div>

      {/* AGV Tugger / Material Flow Sticker (Far Right) */}
      <div className="pointer-events-none absolute right-16 top-1/2 select-none hidden xl:block rotate-12">
        <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 shadow-md flex items-center justify-center text-indigo-600 text-xl backdrop-blur-xs">
          ⚡
        </div>
      </div>

      {/* Continuous Flow Wave Ribbon (Bottom Right) */}
      <div className="pointer-events-none absolute right-14 bottom-24 select-none hidden xl:block -rotate-6">
        <svg width="56" height="36" viewBox="0 0 60 40" fill="none" stroke="#0D9488" strokeWidth="3.5" strokeLinecap="round">
          <path d="M4 30C15 10 25 10 35 30C45 50 55 20 58 12" />
        </svg>
      </div>

      {/* ========================================================================= */}
      {/* 2. HERO HEADLINE: "Now you can / PPQ, Lean Layout, Supermarkets / all in one SaaS platform." */}
      {/* ========================================================================= */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
        
        <ScrollReveal direction="up" duration={700}>
          <div className="max-w-4xl mx-auto">
            
            {/* Top Eyebrow Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800/80 border border-neutral-200/80 dark:border-neutral-700/80 text-xs font-mono font-semibold text-neutral-700 dark:text-neutral-300 mb-6 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
              <span>Lean Factory Design &bull; 15-Step SaaS Architecture</span>
            </div>

            {/* Top Line: "Now you can" */}
            <h1 className="text-5xl sm:text-7xl lg:text-[5.5rem] font-extrabold tracking-[-0.035em] text-black dark:text-white leading-[1.05] select-none">
              Now you can
            </h1>

            {/* Middle Line: Interactive Tabs */}
            <div className="mt-1 sm:mt-2">
              <div className="text-4xl sm:text-6xl lg:text-[4.8rem] font-extrabold tracking-[-0.035em] leading-[1.1] inline-flex items-center justify-center flex-wrap gap-x-2 sm:gap-x-3 select-none">
                
                {/* --- TAB 1: PPQ ANALYSIS --- */}
                <span
                  onMouseEnter={() => { setActiveTab('ppq'); setIsPaused(true); }}
                  onMouseLeave={() => setIsPaused(false)}
                  onClick={() => setActiveTab('ppq')}
                  className="relative inline-block cursor-pointer px-1 py-0.5 transition-all duration-200"
                >
                  {activeTab === 'ppq' ? (
                    <span className="inline-block transition-transform duration-150 scale-102">
                      <span className="text-teal-500">P</span>
                      <span className="text-teal-400">P</span>
                      <span className="text-cyan-500">Q</span>
                      <span className="mx-1 text-black dark:text-white"> </span>
                      <span className="text-emerald-500">Matrix</span>
                    </span>
                  ) : (
                    <span className="text-neutral-300 dark:text-neutral-700 hover:text-black dark:hover:text-white transition-colors duration-200">
                      PPQ Matrix
                    </span>
                  )}
                  {activeTab === 'ppq' && (
                    <span className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-1 sm:h-1.5 rounded-full bg-gradient-to-r from-teal-400 via-cyan-400 to-emerald-500 animate-in fade-in zoom-in-95 duration-200 block shadow-xs" />
                  )}
                </span>

                {/* Comma separator */}
                <span className="text-neutral-300 dark:text-neutral-700">,</span>

                {/* --- TAB 2: LEAN LAYOUT --- */}
                <span
                  onMouseEnter={() => { setActiveTab('layout'); setIsPaused(true); }}
                  onMouseLeave={() => setIsPaused(false)}
                  onClick={() => setActiveTab('layout')}
                  className="relative inline-block cursor-pointer px-1 py-0.5 transition-all duration-200"
                >
                  {activeTab === 'layout' ? (
                    <span className="inline-block transition-transform duration-150 scale-102">
                      <span className="text-indigo-500">L</span>
                      <span className="text-indigo-400">e</span>
                      <span className="text-blue-500">a</span>
                      <span className="text-blue-400">n</span>
                      <span className="mx-1 text-black dark:text-white"> </span>
                      <span className="text-violet-500">L</span>
                      <span className="text-purple-400">a</span>
                      <span className="text-pink-400">y</span>
                      <span className="text-rose-400">o</span>
                      <span className="text-amber-400">u</span>
                      <span className="text-emerald-400">t</span>
                    </span>
                  ) : (
                    <span className="text-neutral-300 dark:text-neutral-700 hover:text-black dark:hover:text-white transition-colors duration-200">
                      Lean Layout
                    </span>
                  )}
                  {activeTab === 'layout' && (
                    <span className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-1 sm:h-1.5 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-in fade-in zoom-in-95 duration-200 block shadow-xs" />
                  )}
                </span>

                {/* Comma separator */}
                <span className="text-neutral-300 dark:text-neutral-700">,</span>

                {/* --- TAB 3: SUPERMARKETS --- */}
                <span
                  onMouseEnter={() => { setActiveTab('supermarket'); setIsPaused(true); }}
                  onMouseLeave={() => setIsPaused(false)}
                  onClick={() => setActiveTab('supermarket')}
                  className="relative inline-block cursor-pointer px-1 py-0.5 transition-all duration-200"
                >
                  {activeTab === 'supermarket' ? (
                    <span className="inline-block transition-transform duration-150 scale-102">
                      <span className="text-amber-500">S</span>
                      <span className="text-amber-400">u</span>
                      <span className="text-orange-500">p</span>
                      <span className="text-orange-400">e</span>
                      <span className="text-rose-400">r</span>
                      <span className="text-red-500">m</span>
                      <span className="text-pink-500">a</span>
                      <span className="text-purple-400">r</span>
                      <span className="text-teal-400">k</span>
                      <span className="text-emerald-400">e</span>
                      <span className="text-cyan-400">t</span>
                      <span className="text-blue-500">s</span>
                    </span>
                  ) : (
                    <span className="text-neutral-300 dark:text-neutral-700 hover:text-black dark:hover:text-white transition-colors duration-200">
                      Supermarkets
                    </span>
                  )}
                  {activeTab === 'supermarket' && (
                    <span className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-1 sm:h-1.5 rounded-full bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 animate-in fade-in zoom-in-95 duration-200 block shadow-xs" />
                  )}
                </span>

              </div>
            </div>

            {/* Bottom Line: "all in one SaaS platform." */}
            <h1 className="text-5xl sm:text-7xl lg:text-[5.5rem] font-extrabold tracking-[-0.035em] text-black dark:text-white leading-[1.05] select-none mt-1 sm:mt-2">
              all in one SaaS platform.
            </h1>

            {/* Supporting Subtitle */}
            <p className="mt-5 sm:mt-6 text-base sm:text-lg text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed max-w-2xl mx-auto">
              From Product-Process-Quantity analysis to 2D/3D plant layout, pull supermarkets, and capacity ramp-up. Design, simulate, and scale your lean factory with LFD Cloud by Faber Infinite.
            </p>

          </div>
        </ScrollReveal>

        {/* CTA BUTTONS (Matching OpenAI/ChatGPT Pill & Text Link) */}
        <ScrollReveal direction="up" delay={150} duration={600}>
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-5 sm:gap-6">
            
            {/* Primary Pill Button */}
            <button
              onClick={() => onOpenTrial({ mode: 'trial', plan: 'Professional' })}
              className="px-7 py-3 rounded-full font-semibold text-sm transition-all shadow-md active:scale-98 cursor-pointer flex items-center gap-1.5 bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
            >
              <span>Start Free Trial*</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* Secondary Link with Diagonal Arrow */}
            <button
              onClick={() => onOpenDemo({ mode: 'demo', plan: 'Enterprise' })}
              className="text-sm font-medium transition-colors flex items-center gap-1 group py-1 text-black hover:text-neutral-700 dark:text-white dark:hover:text-neutral-300 cursor-pointer"
            >
              <span>Book Guided Demo</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

          </div>
        </ScrollReveal>

        {/* ========================================================================= */}
        {/* 3. CENTER STAGE MAC APPLICATION WINDOW: REAL LFD CLOUD SAAS PREVIEWS      */}
        {/* ========================================================================= */}
        <div className="mt-14 sm:mt-18 max-w-5xl mx-auto text-left relative">
          
          {/* Tilted Card on the Left (AutoCAD Blueprint Tag) */}
          <div className="pointer-events-none absolute -left-6 sm:-left-16 md:-left-20 top-20 -rotate-12 z-0 hidden lg:block select-none animate-in fade-in duration-500">
            <div className="w-[230px] rounded-2xl p-4 bg-white dark:bg-[#181818] border border-neutral-200/90 dark:border-neutral-800 shadow-2xl backdrop-blur-md">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-7 h-7 rounded-lg bg-teal-500/10 text-teal-600 flex items-center justify-center font-bold text-xs">
                  <PanelsTopLeft className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-xs text-black dark:text-white">
                    Factory Block Layout
                  </div>
                  <div className="text-[10px] text-neutral-400 font-mono">
                    Zone A: 14 Assembly Cells
                  </div>
                </div>
              </div>
              <div className="h-14 rounded-lg bg-neutral-100 dark:bg-neutral-800/60 p-2 flex items-center justify-center">
                <span className="text-[10px] font-mono text-emerald-600 font-semibold">
                  ✓ Spacing &amp; AISLE cleared
                </span>
              </div>
            </div>
          </div>

          {/* Tilted Card on the Right (Throughput & Travel Delta) */}
          <div className="pointer-events-none absolute -right-6 sm:-right-16 md:-right-20 top-28 rotate-12 z-0 hidden lg:block select-none animate-in fade-in duration-500">
            <div className="w-[240px] rounded-2xl p-4 bg-[#E6F4F1] dark:bg-[#0D2423] border border-teal-200/80 dark:border-teal-900/60 shadow-2xl backdrop-blur-md">
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-bold text-xs text-teal-950 dark:text-teal-100">
                  Throughput Ramp-Up
                </span>
                <span className="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400">
                  +30% Yield
                </span>
              </div>
              <div className="text-[10px] text-teal-800/80 dark:text-teal-300 mb-2 font-mono">
                Material Walk: -42% Distance
              </div>
              <div className="p-2 rounded-lg bg-white/80 dark:bg-neutral-900/80 text-[10px] text-neutral-600 dark:text-neutral-400 font-sans shadow-xs">
                "U-shaped cell flow eliminates 1.8km daily operator walk"
              </div>
            </div>
          </div>

          <ScrollReveal direction="up" delay={250} duration={700}>
            
            {/* Window Container */}
            <div className="relative z-10 rounded-2xl sm:rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#141414] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.14)] dark:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] overflow-hidden transition-colors">
              
              {/* Mac Window Title Bar */}
              <div className="h-10 px-4 bg-neutral-50 dark:bg-[#1A1A1A] border-b border-neutral-200/80 dark:border-neutral-800 flex items-center justify-between transition-colors">
                
                {/* Traffic Light Dots */}
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                  <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
                </div>

                {/* Window Center Breadcrumb */}
                <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 dark:text-neutral-400">
                  <span className="text-black dark:text-white font-semibold font-sans">LFD Cloud Platform</span>
                  <span>/</span>
                  {activeTab === 'ppq' && <span>ppq-pareto-analysis.lfd</span>}
                  {activeTab === 'layout' && <span>cellular-layout-studio.lfd</span>}
                  {activeTab === 'supermarket' && <span>flow-supermarket-kanban.lfd</span>}
                  {activeTab === 'capacity' && <span>capacity-rampup-planner.lfd</span>}
                </div>

                {/* Right Window Controls */}
                <div className="flex items-center gap-2 text-neutral-400">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>

              </div>

              {/* Window Body: Interactive Simulated LFD SaaS Screens */}
              <div className="relative overflow-hidden bg-neutral-100 dark:bg-[#181818] min-h-[380px] sm:min-h-[460px] p-4 sm:p-6 flex flex-col justify-between">
                
                {/* --- 1. PPQ ANALYSIS STUDIO PREVIEW --- */}
                {activeTab === 'ppq' && (
                  <div className="w-full h-full animate-in fade-in zoom-in-98 duration-200 space-y-4">
                    {/* Top Stats Banner */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      <div className="p-3 rounded-xl bg-white dark:bg-[#1E1E1E] border border-neutral-200 dark:border-neutral-800">
                        <span className="text-[10px] font-mono text-neutral-400 uppercase block">Total Portfolio SKUs</span>
                        <strong className="text-xl font-black text-black dark:text-white">104 SKUs</strong>
                        <span className="text-[10px] text-teal-600 block mt-0.5">Automated Pareto Ranking</span>
                      </div>
                      <div className="p-3 rounded-xl bg-white dark:bg-[#1E1E1E] border border-neutral-200 dark:border-neutral-800">
                        <span className="text-[10px] font-mono text-neutral-400 uppercase block">Class A (Runners)</span>
                        <strong className="text-xl font-black text-teal-600">78.4% Vol</strong>
                        <span className="text-[10px] text-neutral-500 block mt-0.5">14 High-Run SKUs</span>
                      </div>
                      <div className="p-3 rounded-xl bg-white dark:bg-[#1E1E1E] border border-neutral-200 dark:border-neutral-800">
                        <span className="text-[10px] font-mono text-neutral-400 uppercase block">Class B (Repeaters)</span>
                        <strong className="text-xl font-black text-indigo-600">16.2% Vol</strong>
                        <span className="text-[10px] text-neutral-500 block mt-0.5">26 Mid-Volume SKUs</span>
                      </div>
                      <div className="p-3 rounded-xl bg-white dark:bg-[#1E1E1E] border border-neutral-200 dark:border-neutral-800">
                        <span className="text-[10px] font-mono text-neutral-400 uppercase block">Class C (Strangers)</span>
                        <strong className="text-xl font-black text-amber-600">5.4% Vol</strong>
                        <span className="text-[10px] text-neutral-500 block mt-0.5">64 Job-Shop SKUs</span>
                      </div>
                    </div>

                    {/* Interactive PPQ Matrix Table */}
                    <div className="rounded-xl bg-white dark:bg-[#1E1E1E] border border-neutral-200 dark:border-neutral-800 overflow-hidden shadow-xs">
                      <div className="p-3 border-b border-neutral-100 dark:border-neutral-800 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <FlaskConical className="w-4 h-4 text-teal-600" />
                          <span className="text-xs font-bold text-black dark:text-white">Product-Process Routing Matrix</span>
                        </div>
                        <span className="text-[10px] font-mono bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 px-2 py-0.5 rounded-full font-semibold">
                          Target Value Stream Identified
                        </span>
                      </div>
                      <div className="overflow-x-auto text-[11px] font-mono">
                        <table className="w-full text-left">
                          <thead className="bg-neutral-50 dark:bg-[#141414] text-neutral-500 border-b border-neutral-200 dark:border-neutral-800">
                            <tr>
                              <th className="p-2.5">Product SKU</th>
                              <th className="p-2.5">Annual Vol</th>
                              <th className="p-2.5">Stamping</th>
                              <th className="p-2.5">CNC Machining</th>
                              <th className="p-2.5">Welding</th>
                              <th className="p-2.5">Powder Coat</th>
                              <th className="p-2.5">Assembly</th>
                              <th className="p-2.5">Pareto Class</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-neutral-100 dark:divide-neutral-800/60 text-neutral-800 dark:text-neutral-200">
                            <tr>
                              <td className="p-2.5 font-bold text-teal-600">SKU-A102 Battery Tray</td>
                              <td className="p-2.5">140,000</td>
                              <td className="p-2.5"><span className="text-emerald-500">● 42s</span></td>
                              <td className="p-2.5"><span className="text-emerald-500">● 68s</span></td>
                              <td className="p-2.5"><span className="text-emerald-500">● 55s</span></td>
                              <td className="p-2.5"><span className="text-emerald-500">● 110s</span></td>
                              <td className="p-2.5"><span className="text-emerald-500">● 92s</span></td>
                              <td className="p-2.5"><span className="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold">Class A (Runner)</span></td>
                            </tr>
                            <tr>
                              <td className="p-2.5 font-bold text-teal-600">SKU-A108 Module Carrier</td>
                              <td className="p-2.5">115,000</td>
                              <td className="p-2.5"><span className="text-emerald-500">● 40s</span></td>
                              <td className="p-2.5"><span className="text-emerald-500">● 65s</span></td>
                              <td className="p-2.5"><span className="text-emerald-500">● 52s</span></td>
                              <td className="p-2.5"><span className="text-neutral-300 dark:text-neutral-700">—</span></td>
                              <td className="p-2.5"><span className="text-emerald-500">● 88s</span></td>
                              <td className="p-2.5"><span className="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold">Class A (Runner)</span></td>
                            </tr>
                            <tr>
                              <td className="p-2.5 font-bold text-indigo-600">SKU-B204 Enclosure Top</td>
                              <td className="p-2.5">42,000</td>
                              <td className="p-2.5"><span className="text-indigo-500">● 50s</span></td>
                              <td className="p-2.5"><span className="text-neutral-300 dark:text-neutral-700">—</span></td>
                              <td className="p-2.5"><span className="text-indigo-500">● 75s</span></td>
                              <td className="p-2.5"><span className="text-indigo-500">● 120s</span></td>
                              <td className="p-2.5"><span className="text-indigo-500">● 115s</span></td>
                              <td className="p-2.5"><span className="px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-bold">Class B (Repeater)</span></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                )}

                {/* --- 2. CELLULAR LAYOUT DESIGNER PREVIEW --- */}
                {activeTab === 'layout' && (
                  <div className="w-full h-full animate-in fade-in zoom-in-98 duration-200 space-y-4">
                    <div className="p-4 rounded-xl bg-white dark:bg-[#1E1E1E] border border-neutral-200 dark:border-neutral-800 shadow-xs">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <PanelsTopLeft className="w-4 h-4 text-indigo-500" />
                          <span className="text-xs font-bold text-black dark:text-white">2D/3D Cellular Layout Studio &bull; Plant Zone B</span>
                        </div>
                        <span className="text-[10px] font-mono text-emerald-600 font-bold">U-Flow Optimization Active</span>
                      </div>

                      {/* Visual Factory Grid Canvas */}
                      <div className="relative h-64 rounded-lg bg-neutral-900 border border-neutral-800 p-3 overflow-hidden text-white font-mono text-xs flex flex-col justify-between">
                        {/* Background Grid Lines */}
                        <div className="absolute inset-0 bg-grid-dark opacity-30 pointer-events-none" />

                        {/* Plant Zones */}
                        <div className="relative z-10 flex justify-between items-center text-[10px]">
                          <span className="px-2 py-1 rounded bg-teal-900/60 border border-teal-500/40 text-teal-300">Inbound Raw Material Dock</span>
                          <span className="px-2 py-1 rounded bg-amber-900/60 border border-amber-500/40 text-amber-300">Point-of-Use Supermarket</span>
                          <span className="px-2 py-1 rounded bg-emerald-900/60 border border-emerald-500/40 text-emerald-300">Finished Goods Dispatch</span>
                        </div>

                        {/* U-Shaped Cells Simulation */}
                        <div className="relative z-10 grid grid-cols-5 gap-2 my-auto">
                          <div className="p-2 rounded bg-indigo-900/50 border border-indigo-400 text-center">
                            <span className="text-[9px] text-indigo-300 block">Cell 01</span>
                            <span className="font-bold text-[10px]">Stamping</span>
                          </div>
                          <div className="p-2 rounded bg-indigo-900/50 border border-indigo-400 text-center">
                            <span className="text-[9px] text-indigo-300 block">Cell 02</span>
                            <span className="font-bold text-[10px]">CNC Deburr</span>
                          </div>
                          <div className="p-2 rounded bg-indigo-900/50 border border-indigo-400 text-center">
                            <span className="text-[9px] text-indigo-300 block">Cell 03</span>
                            <span className="font-bold text-[10px]">Robot Weld</span>
                          </div>
                          <div className="p-2 rounded bg-indigo-900/50 border border-indigo-400 text-center">
                            <span className="text-[9px] text-indigo-300 block">Cell 04</span>
                            <span className="font-bold text-[10px]">Automated Test</span>
                          </div>
                          <div className="p-2 rounded bg-indigo-900/50 border border-indigo-400 text-center">
                            <span className="text-[9px] text-indigo-300 block">Cell 05</span>
                            <span className="font-bold text-[10px]">Pack &amp; Seal</span>
                          </div>
                        </div>

                        {/* Flow Arrow & Metrics Bar */}
                        <div className="relative z-10 flex justify-between items-center text-[10px] pt-2 border-t border-neutral-800">
                          <span className="text-teal-400 flex items-center gap-1">
                            <span>➔ Continuous Tugger Loop (Every 15m)</span>
                          </span>
                          <span className="text-emerald-400 font-bold">
                            Total Flow Distance: 86m (was 210m &bull; -59%)
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* --- 3. FLOW SUPERMARKET & KANBAN PREVIEW --- */}
                {activeTab === 'supermarket' && (
                  <div className="w-full h-full animate-in fade-in zoom-in-98 duration-200 space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="p-3.5 rounded-xl bg-white dark:bg-[#1E1E1E] border border-neutral-200 dark:border-neutral-800">
                        <span className="text-[10px] font-mono text-neutral-400 uppercase block">Daily Consumption (D)</span>
                        <strong className="text-xl font-black text-black dark:text-white">480 units/day</strong>
                        <span className="text-[10px] text-amber-600 block mt-0.5">Takt Time: 60 seconds</span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-white dark:bg-[#1E1E1E] border border-neutral-200 dark:border-neutral-800">
                        <span className="text-[10px] font-mono text-neutral-400 uppercase block">Replenishment Lead Time (L)</span>
                        <strong className="text-xl font-black text-teal-600">2.0 Hours</strong>
                        <span className="text-[10px] text-neutral-500 block mt-0.5">Tugger cycle: 20 mins</span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-white dark:bg-[#1E1E1E] border border-neutral-200 dark:border-neutral-800">
                        <span className="text-[10px] font-mono text-neutral-400 uppercase block">Calculated Kanban Bins (K)</span>
                        <strong className="text-xl font-black text-emerald-600">8 Bins (60 pcs/bin)</strong>
                        <span className="text-[10px] text-emerald-600 block mt-0.5">Safety Stock Factor: 1.15</span>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-white dark:bg-[#1E1E1E] border border-neutral-200 dark:border-neutral-800 space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Warehouse className="w-4 h-4 text-amber-500" />
                          <span className="text-xs font-bold text-black dark:text-white">Dynamic Gravity Rack Visualizer &bull; Sub-Assembly Supermarket #02</span>
                        </div>
                        <span className="text-[10px] font-mono bg-emerald-50 dark:bg-emerald-950 text-emerald-600 px-2 py-0.5 rounded-full font-bold">
                          Buffer Sized: 480 pcs
                        </span>
                      </div>

                      {/* Gravity Rack Bins Representation */}
                      <div className="grid grid-cols-8 gap-1.5 h-12 bg-neutral-100 dark:bg-[#141414] p-2 rounded-lg border border-neutral-200 dark:border-neutral-800">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((bin) => (
                          <div key={bin} className="h-full rounded bg-emerald-500/20 border border-emerald-500/40 flex flex-col items-center justify-center text-[10px] font-mono font-bold text-emerald-700 dark:text-emerald-300">
                            <span>Bin {bin}</span>
                            <span className="text-[8px] font-normal">60 pcs</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-between text-xs font-mono text-neutral-500 pt-1">
                        <span>FIFO Gravity Incline: 3.5&deg;</span>
                        <span className="text-emerald-600 font-bold">WIP Reduced by 64% vs static batch store</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* --- 4. CAPACITY & RAMP-UP PREVIEW --- */}
                {activeTab === 'capacity' && (
                  <div className="w-full h-full animate-in fade-in zoom-in-98 duration-200 space-y-4">
                    <div className="p-4 rounded-xl bg-white dark:bg-[#1E1E1E] border border-neutral-200 dark:border-neutral-800 space-y-3 shadow-xs">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-emerald-500" />
                          <span className="text-xs font-bold text-black dark:text-white">Machine Capacity vs Customer Demand Ramp-Up</span>
                        </div>
                        <span className="text-[10px] font-mono text-teal-600 font-bold">Target: 1,200 units/shift</span>
                      </div>

                      {/* Capacity Balance Bars */}
                      <div className="space-y-2 text-xs font-mono">
                        <div className="flex items-center justify-between">
                          <span className="w-28 text-neutral-600 dark:text-neutral-400">Station 1: Press</span>
                          <div className="flex-1 mx-3 bg-neutral-100 dark:bg-neutral-800 h-4 rounded-md overflow-hidden">
                            <div className="bg-teal-500 h-full text-[10px] text-white flex items-center justify-end pr-2" style={{ width: '68%' }}>68%</div>
                          </div>
                          <span className="text-neutral-500">42s C/T</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="w-28 text-rose-600 font-bold">Station 2: Mill</span>
                          <div className="flex-1 mx-3 bg-rose-100 dark:bg-rose-950/40 h-4 rounded-md overflow-hidden border border-rose-400">
                            <div className="bg-rose-600 h-full text-[10px] text-white font-bold flex items-center justify-end pr-2" style={{ width: '96%' }}>96% CONSTRAINT</div>
                          </div>
                          <span className="text-rose-600 font-bold">59s C/T</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="w-28 text-neutral-600 dark:text-neutral-400">Station 3: Weld</span>
                          <div className="flex-1 mx-3 bg-neutral-100 dark:bg-neutral-800 h-4 rounded-md overflow-hidden">
                            <div className="bg-teal-500 h-full text-[10px] text-white flex items-center justify-end pr-2" style={{ width: '74%' }}>74%</div>
                          </div>
                          <span className="text-neutral-500">45s C/T</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="w-28 text-neutral-600 dark:text-neutral-400">Station 4: Assembly</span>
                          <div className="flex-1 mx-3 bg-neutral-100 dark:bg-neutral-800 h-4 rounded-md overflow-hidden">
                            <div className="bg-teal-500 h-full text-[10px] text-white flex items-center justify-end pr-2" style={{ width: '82%' }}>82%</div>
                          </div>
                          <span className="text-neutral-500">50s C/T</span>
                        </div>
                      </div>

                      <div className="p-2.5 rounded-lg bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800/60 text-[11px] font-mono text-teal-800 dark:text-teal-200 flex items-center justify-between">
                        <span>✨ AI Recommendation: Rebalance 12s rough milling to CNC pre-op to relieve Station 2</span>
                        <span className="font-bold text-emerald-600">+14% Line Speedup</span>
                      </div>
                    </div>
                  </div>
                )}

              </div>

              {/* Canvas Bottom Status Bar */}
              <div className="h-10 px-4 bg-neutral-50 dark:bg-[#1A1A1A] border-t border-neutral-200/80 dark:border-neutral-800 flex items-center justify-between text-xs font-mono text-neutral-500 dark:text-neutral-400">
                <span>
                  {activeTab === 'ppq' && "Module: Product, Process & Quantity (PPQ) Pareto Ranking"}
                  {activeTab === 'layout' && "Module: 2D/3D Cellular Layout Studio & Flow Optimization"}
                  {activeTab === 'supermarket' && "Module: Flow Supermarket & Point-of-Use Kanban Design"}
                  {activeTab === 'capacity' && "Module: Capacity Planning & Bottleneck Constraint Radar"}
                </span>
                <button 
                  onClick={() => onOpenTrial({ mode: 'trial', plan: 'Professional' })}
                  className="text-teal-600 dark:text-teal-400 font-semibold hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>Launch Live Platform</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </ScrollReveal>
        </div>

      </div>

    </section>
  );
};
