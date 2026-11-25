import React, { useState, useEffect, useRef } from 'react';
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
  ChevronDown,
  CalendarDays,
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
import { FloatingTiles } from './FloatingTiles';
import { HERO_TOPICS, tileClasses } from './heroTopics';

const TOPIC_INTERVAL_MS = 3200;

export const Hero = ({ onOpenTrial, onOpenDemo }) => {
  const { theme } = useTheme();

  // Active capability state for the app window: 'ppq' | 'layout' | 'supermarket' | 'capacity'
  const [activeTab, setActiveTab] = useState('ppq');

  // Headline topic (drives the phrase, floating tiles, AI prompt and window tab)
  const [topicIdx, setTopicIdx] = useState(0);
  const [typed, setTyped] = useState('');
  const windowRef = useRef(null);
  const topic = HERO_TOPICS[topicIdx];

  useEffect(() => {
    const interval = setInterval(() => {
      setTopicIdx((i) => (i + 1) % HERO_TOPICS.length);
    }, TOPIC_INTERVAL_MS);
    return () => clearInterval(interval);
  }, []);

  // Keep the app window in sync with topics that have a matching module.
  useEffect(() => {
    if (topic.tab) setActiveTab(topic.tab);
  }, [topic]);

  // Type the AI prompt out character by character.
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setTyped(topic.prompt);
      return;
    }
    setTyped('');
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setTyped(topic.prompt.slice(0, i));
      if (i >= topic.prompt.length) clearInterval(id);
    }, 28);
    return () => clearInterval(id);
  }, [topic]);

  const [ClusterA, ClusterB] = [topic.icons[0], topic.icons[1]];

  return (
    <section className="relative pb-20 md:pb-28 overflow-hidden bg-white dark:bg-[#0D0D0D] text-black dark:text-white transition-colors duration-200">

      {/* ========================================================================= */}
      {/* 1. FULL-HEIGHT STAGE: 3D icon tiles flying toward the viewer               */}
      {/* ========================================================================= */}
      <div className="relative min-h-[calc(100svh-56px)] sm:min-h-[calc(100svh-60px)] flex flex-col items-center justify-center bg-[#F7F5F2] dark:bg-[#0D0D0D] transition-colors duration-200">

        <FloatingTiles topicIdx={topicIdx} />

        {/* Soft wash behind the copy so tiles never fight the headline */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[1001] [background:radial-gradient(ellipse_44%_38%_at_50%_50%,rgba(247,245,242,0.92),rgba(247,245,242,0)_100%)] dark:[background:radial-gradient(ellipse_44%_38%_at_50%_50%,rgba(13,13,13,0.9),rgba(13,13,13,0)_100%)]"
        />

        <div className="relative z-[1002] w-full max-w-5xl mx-auto px-4 sm:px-6 text-center py-16">

          {/* Headline */}
          <h1 className="text-[40px] sm:text-6xl lg:text-[80px] font-bold tracking-[-0.045em] leading-[1.02] text-[#0D0D0D] dark:text-white select-none">
            <span className="block">Design your next</span>
            <span className="inline-flex items-center justify-center gap-3 sm:gap-5 flex-wrap">
              <span key={topic.key} className="hero-phrase-in inline-block">
                {topic.phrase}
              </span>
              {/* Inline cluster of two tilted icon tiles, like a thumbnail stack */}
              <span key={`${topic.key}-cluster`} className="hero-cluster-in hidden sm:inline-flex items-center -space-x-3 align-middle">
                <span className={`w-12 h-12 lg:w-[68px] lg:h-[68px] rounded-[26%] border flex items-center justify-center -rotate-6 shadow-[0_14px_30px_-14px_rgba(13,13,13,0.45)] ${tileClasses(topic, 'grad')}`}>
                  <ClusterA className="w-1/2 h-1/2" strokeWidth={1.6} />
                </span>
                <span className={`w-12 h-12 lg:w-[68px] lg:h-[68px] rounded-[26%] border flex items-center justify-center rotate-6 shadow-[0_14px_30px_-14px_rgba(13,13,13,0.45)] ${tileClasses(topic, 'paper')}`}>
                  <ClusterB className="w-1/2 h-1/2" strokeWidth={1.6} />
                </span>
              </span>
            </span>
          </h1>

          {/* AI prompt pill (opens the trial flow) */}
          <div className="mt-8 sm:mt-10 mx-auto max-w-[680px] p-1.5 rounded-full bg-white/60 dark:bg-white/5 border border-black/[0.07] dark:border-white/10 backdrop-blur-md flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => onOpenTrial({ mode: 'trial', plan: 'LFD Signature' })}
              aria-label={`Ask LFD AI to ${topic.prompt}`}
              className="flex-1 min-w-0 h-14 sm:h-16 pl-5 pr-4 rounded-full bg-white dark:bg-[#161616] border border-black/[0.08] dark:border-white/10 flex items-center gap-3 text-left cursor-text"
            >
              <Sparkles className="w-5 h-5 shrink-0 text-neutral-400" strokeWidth={1.75} />
              <span className="truncate text-[15px] sm:text-[17px] text-neutral-400 dark:text-neutral-500">
                Ask LFD AI to{' '}
                <span className="text-[#0D0D0D] dark:text-white">{typed}</span>
                <span className="hero-caret inline-block w-[2px] h-[1.1em] -mb-[0.2em] ml-0.5 bg-[#0D0D0D] dark:bg-white" />
              </span>
            </button>
            <button
              type="button"
              onClick={() => onOpenTrial({ mode: 'trial', plan: 'LFD Signature' })}
              aria-label="Run with LFD AI"
              className={`shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-full border flex items-center justify-center cursor-pointer ${tileClasses(topic, 'grad')}`}
            >
              <ArrowRight className="w-5 h-5" strokeWidth={2} />
            </button>
          </div>

          {/* CTAs */}
          <div className="mt-7 sm:mt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => onOpenTrial({ mode: 'trial', plan: 'LFD Signature' })}
              className="h-14 sm:h-16 px-7 rounded-full font-bold text-[15px] sm:text-base inline-flex items-center gap-1.5 cursor-pointer transition-colors bg-[#0D0D0D] text-white hover:bg-[#1E1E1E] dark:bg-white dark:text-[#0D0D0D] dark:hover:bg-neutral-200"
            >
              Start Free Trial*
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onOpenDemo({ mode: 'demo', plan: 'LFD Enterprise' })}
              className="group h-14 sm:h-16 px-7 rounded-full font-bold text-[15px] sm:text-base inline-flex items-center gap-1.5 cursor-pointer transition-colors bg-white text-[#0D0D0D] border border-black/[0.08] hover:bg-neutral-50 dark:bg-transparent dark:text-white dark:border-white/15 dark:hover:bg-white/5"
            >
              Book Guided Demo
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Floating utility card (bottom-right) */}
        <button
          type="button"
          onClick={() => onOpenDemo({ mode: 'demo', plan: 'LFD Enterprise' })}
          className="hidden lg:flex absolute right-8 bottom-8 z-[1002] w-[210px] flex-col gap-3 p-4 rounded-3xl text-left cursor-pointer bg-white dark:bg-[#161616] border border-black/[0.07] dark:border-white/10 shadow-[0_24px_50px_-24px_rgba(13,13,13,0.35)] hover:-translate-y-0.5 transition-transform"
        >
          <span className="flex items-center gap-2 text-sm font-bold text-[#0D0D0D] dark:text-white">
            <CalendarDays className="w-4 h-4" />
            Live walkthrough
          </span>
          <span className="grid grid-cols-6 gap-1">
            {HERO_TOPICS.map((t, i) => {
              const I = t.icons[0];
              return (
                <span
                  key={t.key}
                  className={`aspect-square rounded-lg border flex items-center justify-center transition-all duration-300 ${i === topicIdx ? tileClasses(t, 'grad') + ' scale-110' : tileClasses(t, 'tint')}`}
                >
                  <I className="w-3 h-3" strokeWidth={2} />
                </span>
              );
            })}
          </span>
          <span className="text-xs text-neutral-500 dark:text-neutral-400 leading-snug">
            30-min guided demo with a lean expert. <span className="text-[#0D0D0D] dark:text-white font-semibold">Book →</span>
          </span>
        </button>

        {/* Scroll cue */}
        <button
          type="button"
          aria-label="Scroll to platform preview"
          onClick={() => windowRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[1002] w-11 h-11 rounded-full bg-white dark:bg-[#161616] border border-black/[0.07] dark:border-white/10 flex items-center justify-center cursor-pointer hover:translate-y-0.5 transition-transform"
        >
          <ChevronDown className="w-5 h-5" />
        </button>

        {/* Fade the warm stage into the white page */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-24 z-[1001] bg-gradient-to-b from-transparent to-white dark:to-[#0D0D0D]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
        {/* ========================================================================= */}
        {/* 3. CENTER STAGE MAC APPLICATION WINDOW: REAL LFD CLOUD SAAS PREVIEWS      */}
        {/* ========================================================================= */}
        <div ref={windowRef} className="mt-4 sm:mt-6 max-w-5xl mx-auto text-left relative scroll-mt-24">
          
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
                  onClick={() => onOpenTrial({ mode: 'trial', plan: 'LFD Signature' })}
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
