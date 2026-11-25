import {
  BarChart3, PieChart, Table2, Filter, ListOrdered, Sigma, FlaskConical,
  Workflow, GitBranch, Timer, Factory, Clock, Truck, Compass,
  LayoutGrid, PanelsTopLeft, Ruler, Box, Grid3x3, Move3d, Frame,
  Warehouse, Package, Boxes, ShoppingCart, Archive, Layers, ScanBarcode,
  Waves, Route, Forklift, ArrowLeftRight, Container, Navigation, Spline,
  Gauge, TrendingUp, Activity, Cpu, Users, CalendarClock, SlidersHorizontal,
} from 'lucide-react';

// Each topic drives: the headline phrase, the floating tile icons/colours,
// the AI prompt pill, and (when `tab` is set) the app-window preview below.
// Class strings are written out in full so Tailwind keeps them.
export const HERO_TOPICS = [
  {
    key: 'ppq',
    tab: 'ppq',
    phrase: 'PPQ analysis',
    prompt: 'rank 240 SKUs by volume and routing',
    icons: [BarChart3, PieChart, Table2, Filter, ListOrdered, Sigma, FlaskConical],
    paper: 'text-teal-600 dark:text-teal-400',
    tint: 'bg-teal-50 border-teal-100 text-teal-700 dark:bg-teal-950 dark:border-teal-900 dark:text-teal-300',
    grad: 'bg-gradient-to-br from-teal-400 to-emerald-600 border-transparent text-white',
  },
  {
    key: 'vsm',
    tab: null,
    phrase: 'value stream map',
    prompt: 'map current-state lead time for line 2',
    icons: [Workflow, GitBranch, Timer, Factory, Clock, Truck, Compass],
    paper: 'text-indigo-600 dark:text-indigo-400',
    tint: 'bg-indigo-50 border-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:border-indigo-900 dark:text-indigo-300',
    grad: 'bg-gradient-to-br from-indigo-400 to-violet-600 border-transparent text-white',
  },
  {
    key: 'layout',
    tab: 'layout',
    phrase: 'lean factory layout',
    prompt: 'design a U-shaped cell for assembly',
    icons: [LayoutGrid, PanelsTopLeft, Ruler, Box, Grid3x3, Move3d, Frame],
    paper: 'text-violet-600 dark:text-violet-400',
    tint: 'bg-violet-50 border-violet-100 text-violet-700 dark:bg-violet-950 dark:border-violet-900 dark:text-violet-300',
    grad: 'bg-gradient-to-br from-violet-400 to-fuchsia-600 border-transparent text-white',
  },
  {
    key: 'supermarket',
    tab: 'supermarket',
    phrase: 'pull supermarket',
    prompt: 'size kanban lanes for 60 part numbers',
    icons: [Warehouse, Package, Boxes, ShoppingCart, Archive, Layers, ScanBarcode],
    paper: 'text-amber-600 dark:text-amber-400',
    tint: 'bg-amber-50 border-amber-100 text-amber-700 dark:bg-amber-950 dark:border-amber-900 dark:text-amber-300',
    grad: 'bg-gradient-to-br from-amber-400 to-orange-600 border-transparent text-white',
  },
  {
    key: 'flow',
    tab: null,
    phrase: 'material flow',
    prompt: 'cut forklift travel distance by 30%',
    icons: [Waves, Route, Forklift, ArrowLeftRight, Container, Navigation, Spline],
    paper: 'text-sky-600 dark:text-sky-400',
    tint: 'bg-sky-50 border-sky-100 text-sky-700 dark:bg-sky-950 dark:border-sky-900 dark:text-sky-300',
    grad: 'bg-gradient-to-br from-sky-400 to-blue-600 border-transparent text-white',
  },
  {
    key: 'capacity',
    tab: 'capacity',
    phrase: 'capacity ramp-up',
    prompt: 'find the bottleneck at 2× demand',
    icons: [Gauge, TrendingUp, Activity, Cpu, Users, CalendarClock, SlidersHorizontal],
    paper: 'text-emerald-600 dark:text-emerald-400',
    tint: 'bg-emerald-50 border-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:border-emerald-900 dark:text-emerald-300',
    grad: 'bg-gradient-to-br from-emerald-400 to-teal-600 border-transparent text-white',
  },
];

// Tile surface styles, picked per tile with these weights.
const VARIANTS = [
  ['paper', 0.42],
  ['tint', 0.3],
  ['grad', 0.18],
  ['ink', 0.1],
];

export const pickVariant = () => {
  let r = Math.random();
  for (const [v, w] of VARIANTS) {
    if ((r -= w) <= 0) return v;
  }
  return 'paper';
};

export const tileClasses = (topic, variant) => {
  switch (variant) {
    case 'tint':
      return topic.tint;
    case 'grad':
      return topic.grad;
    case 'ink':
      return 'bg-[#0D0D0D] border-white/10 text-white dark:bg-white dark:border-black/5 dark:text-[#0D0D0D]';
    default:
      return `bg-white border-black/[0.06] dark:bg-[#1A1A1A] dark:border-white/10 ${topic.paper}`;
  }
};
