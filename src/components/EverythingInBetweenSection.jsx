import React, { useRef, useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  AlertTriangle, 
  TrendingDown, 
  Sparkles, 
  CheckCircle2, 
  Zap, 
  BarChart3, 
  Box, 
  FileText, 
  Activity,
  Layers,
  Users,
  Compass,
  ArrowUpRight,
  Warehouse,
  Truck,
  PanelsTopLeft,
  ShieldCheck,
  TrendingUp,
  Cpu,
  FlaskConical,
  Workflow
} from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { useTheme } from '../context/ThemeContext';

export const EverythingInBetweenSection = ({ onOpenTrial }) => {
  const { theme } = useTheme();
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scrollPrev = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -380, behavior: 'smooth' });
    }
  };

  const scrollNext = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 380, behavior: 'smooth' });
    }
  };

  const features = [
    {
      id: 'ppq-analysis',
      title: 'PPQ & Pareto Portfolio Analysis',
      description: 'Rank your entire manufacturing portfolio automatically. Compute 80/20 Pareto curves and categorize SKUs into Class A runners, Class B repeaters, and Class C job-shop parts.',
      tag: 'Step 02 &bull; Portfolio Strategy',
      visual: (
        <div className="w-full h-full flex flex-col justify-between font-mono text-xs">
          <div className="p-3 rounded-xl bg-neutral-100 dark:bg-[#1A1A1A] border border-neutral-200 dark:border-neutral-800 space-y-1.5 text-[11px]">
            <div className="flex justify-between items-center text-neutral-500">
              <span>Pareto Distribution:</span>
              <span className="text-teal-600 font-bold">14 Runner SKUs (78%)</span>
            </div>
            <div className="grid grid-cols-3 gap-1.5 text-[10px]">
              <span className="p-1 rounded bg-white dark:bg-[#141414] border border-neutral-200 dark:border-neutral-700 text-center font-bold text-teal-600">Class A (78%)</span>
              <span className="p-1 rounded bg-white dark:bg-[#141414] border border-neutral-200 dark:border-neutral-700 text-center text-indigo-600">Class B (16%)</span>
              <span className="p-1 rounded bg-white dark:bg-[#141414] border border-neutral-200 dark:border-neutral-700 text-center text-amber-600">Class C (6%)</span>
            </div>
          </div>
          <div className="p-2.5 rounded-xl bg-white dark:bg-[#222] border border-neutral-200 dark:border-neutral-700 shadow-xs flex items-center gap-2">
            <FlaskConical className="w-4 h-4 text-teal-500 shrink-0" />
            <div className="text-[11px] font-sans font-semibold text-black dark:text-white">
              Automated Routing Matrix Classification
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cellular-layout',
      title: '2D & 3D Cellular Layout Studio',
      description: 'Replace fragmented machine silos with synchronized U-shaped workcells. Minimize material walking distance, eliminate forklift cross-traffic, and optimize square footage.',
      tag: 'Step 12 &bull; Plant Architecture',
      visual: (
        <div className="w-full h-full flex flex-col justify-between font-mono text-xs">
          <div className="p-3 rounded-xl bg-neutral-100 dark:bg-[#1A1A1A] border border-neutral-200 dark:border-neutral-800 space-y-1.5 text-[11px]">
            <div className="flex justify-between text-neutral-500">
              <span>Operator Walk Distance:</span>
              <span className="text-emerald-600 font-bold">-42% Travel Cut</span>
            </div>
            <div className="flex justify-between text-[10px] text-neutral-400">
              <span>Before: 2.4 km / shift</span>
              <span className="text-emerald-600 font-bold">Target: 1.4 km / shift</span>
            </div>
            <div className="w-full bg-neutral-200 dark:bg-neutral-800 h-2 rounded-full overflow-hidden flex">
              <div className="bg-emerald-500 h-full w-[58%]" />
              <div className="bg-neutral-300 dark:bg-neutral-700 h-full w-[42%]" />
            </div>
          </div>
          <div className="p-2.5 rounded-xl bg-white dark:bg-[#222] border border-indigo-200 dark:border-indigo-900 shadow-xs flex items-center gap-2">
            <PanelsTopLeft className="w-4 h-4 text-indigo-500 shrink-0" />
            <div className="text-[11px] font-sans font-semibold text-black dark:text-white">
              U-Flow Single-Piece Cells
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'supermarket-kanban',
      title: 'Flow Supermarkets & Kanban Sizing',
      description: 'Size gravity flow racks and FIFO buffer bins using deterministic Lean formulas based on customer Takt, supplier replenishment frequency, and container lot sizes.',
      tag: 'Step 10 &bull; Pull Systems',
      visual: (
        <div className="w-full h-full flex flex-col justify-between font-mono text-xs">
          <div className="p-3 rounded-xl bg-neutral-100 dark:bg-[#1A1A1A] border border-neutral-200 dark:border-neutral-800 space-y-1.5 text-[11px]">
            <div className="flex justify-between items-center">
              <span className="font-bold text-black dark:text-white flex items-center gap-1">
                <Warehouse className="w-3.5 h-3.5 text-amber-500" />
                Cell Supermarket #01
              </span>
              <span className="text-emerald-600 font-bold">8 Kanban Bins</span>
            </div>
            <div className="grid grid-cols-8 gap-1 h-5 items-center bg-white dark:bg-[#141414] p-1 rounded border border-neutral-200 dark:border-neutral-800">
              <span className="h-full bg-emerald-500 rounded-2xs" />
              <span className="h-full bg-emerald-500 rounded-2xs" />
              <span className="h-full bg-emerald-500 rounded-2xs" />
              <span className="h-full bg-emerald-500 rounded-2xs" />
              <span className="h-full bg-emerald-500 rounded-2xs" />
              <span className="h-full bg-emerald-500 rounded-2xs" />
              <span className="h-full bg-emerald-500 rounded-2xs" />
              <span className="h-full bg-neutral-300 dark:bg-neutral-700 rounded-2xs" />
            </div>
          </div>
          <div className="p-2.5 rounded-xl bg-white dark:bg-[#222] border border-emerald-200 dark:border-emerald-800 shadow-xs flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            <div className="text-[11px] font-sans font-semibold text-black dark:text-white">
              Zero Line Starvation Guarantee
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'capacity-rampup',
      title: 'Capacity Planning & Bottleneck Radar',
      description: 'Benchmark machine cycle times against planned shift volumes. Pinpoint constraint machines before commissioning new capital investments.',
      tag: 'Step 06 &bull; Production Yield',
      visual: (
        <div className="w-full h-full flex flex-col justify-between font-mono text-xs">
          <div className="space-y-1.5 pt-1">
            <div className="flex justify-between text-[11px] text-neutral-500">
              <span>Machine Uptime vs Takt:</span>
              <span className="text-rose-600 font-bold">⚠️ Station 2 Constraint</span>
            </div>
            <div className="space-y-1 text-[10px]">
              <div className="flex items-center gap-1.5">
                <span className="w-12 text-neutral-400">STN 1 Press</span>
                <div className="flex-1 bg-neutral-100 dark:bg-neutral-800 h-3 rounded overflow-hidden">
                  <div className="bg-teal-500 h-full" style={{ width: '65%' }} />
                </div>
                <span className="text-neutral-500">65%</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-12 text-rose-500 font-bold">STN 2 Mill</span>
                <div className="flex-1 bg-rose-100 dark:bg-rose-950/40 h-3 rounded overflow-hidden border border-rose-300 dark:border-rose-800">
                  <div className="bg-rose-600 h-full" style={{ width: '96%' }} />
                </div>
                <span className="text-rose-600 font-bold">96%</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-12 text-neutral-400">STN 3 Weld</span>
                <div className="flex-1 bg-neutral-100 dark:bg-neutral-800 h-3 rounded overflow-hidden">
                  <div className="bg-teal-500 h-full" style={{ width: '72%' }} />
                </div>
                <span className="text-neutral-500">72%</span>
              </div>
            </div>
          </div>
          <div className="p-2.5 rounded-xl bg-white dark:bg-[#222] border border-rose-200 dark:border-rose-900 shadow-xs flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-rose-500 shrink-0" />
            <div className="text-[11px] font-sans font-semibold text-rose-600 dark:text-rose-400">
              Station 2 Mill: Constraint at 96% Takt
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'material-handling',
      title: 'Material Handling & Tugger Routes',
      description: 'Design timed tugger train routes, gravity feed chutes, and AGV delivery pathways. Eliminate heavy forklift traffic across busy operator assembly aisles.',
      tag: 'Step 11 &bull; Logistics & AGVs',
      visual: (
        <div className="w-full h-full flex flex-col justify-between font-mono text-xs">
          <div className="p-3 rounded-xl bg-neutral-100 dark:bg-[#1A1A1A] border border-neutral-200 dark:border-neutral-800 space-y-1 text-[11px]">
            <div className="flex justify-between text-neutral-500">
              <span>Tugger Frequency:</span>
              <strong className="text-teal-600">Fixed 20-Min Route</strong>
            </div>
            <div className="flex justify-between text-neutral-500">
              <span>Forklifts in Cells:</span>
              <strong className="text-emerald-600">0 Forklifts (100% Tugger)</strong>
            </div>
            <div className="flex justify-between text-neutral-500">
              <span>Floor Safety Index:</span>
              <strong className="text-emerald-600 font-mono">99.4% Cleared</strong>
            </div>
          </div>
          <div className="p-2.5 rounded-xl bg-white dark:bg-[#222] border border-neutral-200 dark:border-neutral-700 shadow-xs flex items-center gap-2">
            <Truck className="w-4 h-4 text-teal-500 shrink-0" />
            <div className="text-[11px] font-sans font-semibold text-black dark:text-white">
              Tugger Loops &amp; Timed Deliveries
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'risk-fmea',
      title: 'Risk Assessment & FMEA Matrix',
      description: 'Systematically score risks across Severity &times; Occurrence &times; Detection (S &times; O &times; D). Track statutory factory provisions and mitigation action items.',
      tag: 'Step 14 &bull; Industrial Compliance',
      visual: (
        <div className="w-full h-full flex flex-col justify-between font-mono text-xs">
          <div className="p-3 rounded-xl bg-neutral-100 dark:bg-[#1A1A1A] border border-neutral-200 dark:border-neutral-800 space-y-1.5 text-[11px]">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-black dark:text-white">Risk R-002: Bottleneck</span>
              <span className="text-[10px] text-emerald-600 font-bold">Mitigated</span>
            </div>
            <div className="flex justify-between text-[10px] text-neutral-500">
              <span>Initial RPN: 80 (High)</span>
              <span className="text-emerald-600 font-bold">Residual RPN: 20 (Low)</span>
            </div>
          </div>
          <div className="p-2.5 rounded-xl bg-white dark:bg-[#222] border border-neutral-200 dark:border-neutral-700 shadow-xs flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
            <div className="text-[11px] font-sans font-semibold text-black dark:text-white">
              Statutory Fire, Safety &amp; EHS Provisions
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'manpower-standard-work',
      title: 'Manpower Requirement & Yamazumi',
      description: 'Balance operator workload against customer Takt time using interactive Yamazumi charts. Create repeatable standard work sheets with zero ergonomic strain.',
      tag: 'Step 08 &bull; Work Balancing',
      visual: (
        <div className="w-full h-full flex flex-col justify-between font-mono text-xs">
          <div className="p-3 rounded-xl bg-neutral-100 dark:bg-[#1A1A1A] border border-neutral-200 dark:border-neutral-800 space-y-1 text-[11px]">
            <div className="flex justify-between text-neutral-500">
              <span>Operators Deployed:</span>
              <span className="line-through text-neutral-400">12 headcount</span>
              <strong className="text-emerald-600">8 headcount</strong>
            </div>
            <div className="flex justify-between text-neutral-500">
              <span>Output per Person:</span>
              <strong className="text-teal-600">+50% Productivity</strong>
            </div>
          </div>
          <div className="p-2.5 rounded-xl bg-white dark:bg-[#222] border border-teal-200 dark:border-teal-900 shadow-xs flex items-center gap-2">
            <Users className="w-4 h-4 text-teal-500 shrink-0" />
            <div className="text-[11px] font-sans font-semibold text-black dark:text-white">
              Yamazumi Takt Time Balance
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'multi-client-workspaces',
      title: 'Multi-Tenant Client Workspaces',
      description: 'Manage distinct manufacturing facilities, client projects, and role-based permissions under one organized enterprise SaaS console.',
      tag: 'Enterprise SaaS &bull; Multi-Tenant',
      visual: (
        <div className="w-full h-full flex flex-col justify-between font-mono text-xs">
          <div className="p-3 rounded-xl bg-neutral-100 dark:bg-[#1A1A1A] border border-neutral-200 dark:border-neutral-800 space-y-1.5 text-[11px]">
            <div className="flex items-center justify-between">
              <span className="text-black dark:text-white font-semibold">Client: Sahyadri Auto (Chakan)</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
            </div>
            <div className="flex items-center justify-between text-neutral-500">
              <span className="text-black dark:text-white font-semibold">Client: Narmada Pharma (Sarigam)</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
            </div>
          </div>
          <div className="p-2.5 rounded-xl bg-white dark:bg-[#222] border border-neutral-200 dark:border-neutral-700 shadow-xs flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-purple-500 shrink-0" />
            <div className="text-[11px] font-sans font-semibold text-black dark:text-white">
              Complete Data &amp; Plant Isolation
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="features" className="py-20 md:py-28 bg-white dark:bg-[#0D0D0D] text-black dark:text-white transition-colors duration-200 border-b border-neutral-200/70 dark:border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================================= */}
        {/* HEADER: "Use LFD Cloud for PPQ, Layout, and everything in between."       */}
        {/* ========================================================================= */}
        <ScrollReveal direction="up" duration={700}>
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
            <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-[-0.035em] leading-[1.12] text-black dark:text-white">
              Use LFD Cloud for PPQ, Layout, and <br className="hidden sm:inline" />
              everything in between.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed max-w-xl mx-auto">
              Authentic Lean manufacturing capabilities engineered for modern factory transformations.
            </p>

            {/* Carousel Arrow Controls */}
            <div className="flex items-center justify-center gap-3 mt-6 sm:mt-8">
              <button
                onClick={scrollPrev}
                disabled={!canScrollLeft}
                aria-label="Previous card"
                className={`w-9 h-9 rounded-full border border-neutral-300 dark:border-neutral-700 flex items-center justify-center transition-all duration-150 cursor-pointer ${
                  canScrollLeft 
                    ? 'text-black dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800' 
                    : 'text-neutral-300 dark:text-neutral-600 cursor-not-allowed border-neutral-200 dark:border-neutral-800'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                onClick={scrollNext}
                disabled={!canScrollRight}
                aria-label="Next card"
                className={`w-9 h-9 rounded-full border border-neutral-300 dark:border-neutral-700 flex items-center justify-center transition-all duration-150 cursor-pointer ${
                  canScrollRight 
                    ? 'text-black dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800' 
                    : 'text-neutral-300 dark:text-neutral-600 cursor-not-allowed border-neutral-200 dark:border-neutral-800'
                }`}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* ========================================================================= */}
        {/* HORIZONTAL CAROUSEL CARDS GRID                                            */}
        {/* ========================================================================= */}
        <div 
          ref={scrollContainerRef}
          onScroll={checkScroll}
          className="flex gap-6 overflow-x-auto pb-6 pt-2 scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {features.map((feature) => (
            <div
              key={feature.id}
              className="w-[320px] sm:w-[360px] lg:w-[380px] shrink-0 snap-start rounded-3xl bg-[#F9F9FB] dark:bg-[#151515] border border-neutral-200/80 dark:border-neutral-800/80 p-7 sm:p-8 flex flex-col justify-between h-[490px] sm:h-[510px] text-left transition-all duration-200 hover:shadow-lg dark:hover:shadow-2xl overflow-hidden group"
            >
              {/* Top Text Content */}
              <div>
                <span 
                  className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-1 block"
                  dangerouslySetInnerHTML={{ __html: feature.tag }}
                />
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-black dark:text-white mb-2.5">
                  {feature.title}
                </h3>
                <p className="text-[13px] sm:text-[14px] text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
                  {feature.description}
                </p>
              </div>

              {/* Bottom Visual Container Peeking Up */}
              <div className="h-[230px] w-full rounded-t-2xl bg-white dark:bg-[#1C1C1C] border-t border-x border-neutral-200/90 dark:border-neutral-700/80 shadow-md p-4 pt-4 relative overflow-hidden flex flex-col justify-between">
                {feature.visual}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
