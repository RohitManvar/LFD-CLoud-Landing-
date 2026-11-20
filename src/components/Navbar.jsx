import React, { useState, useRef } from 'react';
import { 
  Menu, 
  X, 
  ArrowUpRight, 
  Sun, 
  Moon, 
  Layers, 
  Sparkles, 
  FlaskConical, 
  Compass, 
  Workflow, 
  Waves, 
  PanelsTopLeft, 
  Warehouse, 
  Truck, 
  ChevronRight 
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { LfdLogo } from './LfdLogo';

export const Navbar = ({ onOpenTrial, onOpenDemo, onNavigatePricing, onNavigateHome }) => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownTimeoutRef = useRef(null);

  const handleMouseEnter = (name) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  return (
    <header className="sticky top-0 z-50 select-none bg-white/95 dark:bg-[#0D0D0D]/95 backdrop-blur-md border-b border-neutral-200/70 dark:border-neutral-800/80 transition-colors duration-200">
      
      {/* Header Container */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 h-[56px] sm:h-[60px] relative flex items-center justify-between">
        
        {/* 1. LEFT: Brand Logo */}
        <div className="flex items-center">
          <a 
            href="#" 
            onClick={(e) => {
              if (onNavigateHome) {
                e.preventDefault();
                onNavigateHome();
              }
            }}
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <LfdLogo size="md" />
          </a>
        </div>

        {/* 2. CENTER: Navigation Links */}
        <nav 
          className="hidden lg:flex items-center gap-1 xl:gap-2 text-[14px] font-normal text-neutral-600 dark:text-neutral-300 absolute left-1/2 -translate-x-1/2"
          onMouseLeave={handleMouseLeave}
        >
          {/* ITEM 1: Applications */}
          <div 
            className="relative"
            onMouseEnter={() => handleMouseEnter('applications')}
            onMouseLeave={handleMouseLeave}
          >
            <a
              href="#applications"
              className={`transition-all duration-150 cursor-pointer block px-2.5 py-1 ${
                activeDropdown === 'applications' 
                  ? 'text-black dark:text-white font-medium' 
                  : 'hover:text-black dark:hover:text-white'
              }`}
            >
              Applications
            </a>

            {activeDropdown === 'applications' && (
              <div 
                className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                onMouseEnter={() => handleMouseEnter('applications')}
                onMouseLeave={handleMouseLeave}
              >
                <div className="w-[380px] rounded-2xl p-4 border border-neutral-200/90 dark:border-neutral-800/90 bg-white/95 dark:bg-[#181818]/95 backdrop-blur-2xl shadow-2xl text-left">
                  <div className="space-y-1">
                    <a
                      href="#applications"
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-start gap-3 p-2 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                    >
                      <FlaskConical className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-xs text-black dark:text-white">Product, Process &amp; Quantity (PPQ)</div>
                        <div className="text-[11px] text-neutral-500">Pareto classification &amp; portfolio routing</div>
                      </div>
                    </a>
                    <a
                      href="#applications"
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-start gap-3 p-2 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                    >
                      <Compass className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-xs text-black dark:text-white">Value Stream Identification (AI)</div>
                        <div className="text-[11px] text-neutral-500">Intelligent product family clustering</div>
                      </div>
                    </a>
                    <a
                      href="#applications"
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-start gap-3 p-2 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                    >
                      <Workflow className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-xs text-black dark:text-white">Value Stream Mapping (VSM)</div>
                        <div className="text-[11px] text-neutral-500">Current and future state timeline analysis</div>
                      </div>
                    </a>
                    <a
                      href="#flow"
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-start gap-3 p-2 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                    >
                      <Waves className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-xs text-black dark:text-white">Flow Management (Spaghetti)</div>
                        <div className="text-[11px] text-neutral-500">Material travel &amp; machine utilization</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* ITEM 2: Planning & Layout */}
          <div 
            className="relative"
            onMouseEnter={() => handleMouseEnter('planning')}
            onMouseLeave={handleMouseLeave}
          >
            <a
              href="#planning"
              className={`transition-all duration-150 cursor-pointer block px-2.5 py-1 ${
                activeDropdown === 'planning' 
                  ? 'text-black dark:text-white font-medium' 
                  : 'hover:text-black dark:hover:text-white'
              }`}
            >
              Manufacturing Planning
            </a>

            {activeDropdown === 'planning' && (
              <div 
                className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                onMouseEnter={() => handleMouseEnter('planning')}
                onMouseLeave={handleMouseLeave}
              >
                <div className="w-[340px] rounded-2xl p-4 border border-neutral-200/90 dark:border-neutral-800/90 bg-white/95 dark:bg-[#181818]/95 backdrop-blur-2xl shadow-2xl text-left">
                  <div className="space-y-1 text-xs">
                    <a 
                      href="#planning" 
                      onClick={() => setActiveDropdown(null)}
                      className="block p-2 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:text-black dark:hover:text-white transition-colors"
                    >
                      <div className="font-bold">Supply Chain &amp; Inbound Logistics</div>
                      <div className="text-[11px] text-neutral-500">Supplier replenishment &amp; milk-run planning</div>
                    </a>
                    <a 
                      href="#flow" 
                      onClick={() => setActiveDropdown(null)}
                      className="block p-2 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:text-black dark:hover:text-white transition-colors"
                    >
                      <div className="font-bold">Flow Supermarket Design</div>
                      <div className="text-[11px] text-neutral-500">Pull FIFO buffer sizing &amp; Kanban lanes</div>
                    </a>
                    <a 
                      href="#layout" 
                      onClick={() => setActiveDropdown(null)}
                      className="block p-2 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:text-black dark:hover:text-white transition-colors"
                    >
                      <div className="font-bold">2D &amp; 3D Factory Layout Design</div>
                      <div className="text-[11px] text-neutral-500">Cellular arrangements &amp; aisle clearance</div>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* ITEM 3: 15-Step Framework */}
          <a 
            href="#framework" 
            className="hover:text-black dark:hover:text-white transition-colors px-2.5 py-1 cursor-pointer"
          >
            15-Step Framework
          </a>

          {/* ITEM 4: Consulting + Tech */}
          <a 
            href="#consulting" 
            className="hover:text-black dark:hover:text-white transition-colors px-2.5 py-1 cursor-pointer"
          >
            Consulting + Tech
          </a>

          {/* ITEM 5: Pricing */}
          <a 
            href="#pricing" 
            onClick={(e) => {
              if (onNavigatePricing) {
                e.preventDefault();
                onNavigatePricing();
              }
            }}
            className="hover:text-black dark:hover:text-white transition-colors px-2.5 py-1 cursor-pointer"
          >
            Pricing
          </a>

          {/* ITEM 6: FAQs */}
          <a 
            href="#faqs" 
            className="hover:text-black dark:hover:text-white transition-colors px-2.5 py-1 cursor-pointer"
          >
            FAQs
          </a>
        </nav>

        {/* 3. RIGHT: Theme Toggle + Login + Primary Pill Button */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme mode"
            title={theme === 'dark' ? 'Switch to Light mode' : 'Switch to Dark mode'}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-neutral-700" />
            )}
          </button>

          {/* Login Text Link */}
          <button
            onClick={() => onOpenTrial({ mode: 'trial', plan: 'Free' })}
            className="hidden sm:inline-block px-3 py-1.5 text-[13px] font-medium text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
          >
            Login
          </button>

          {/* Primary Pill Button (NexVSM high-contrast pill) */}
          <button
            onClick={() => onOpenTrial({ mode: 'trial', plan: 'Mid-Size Business' })}
            className="h-[36px] px-5 rounded-full text-[13px] font-medium transition-all duration-150 cursor-pointer shadow-xs active:scale-98 flex items-center justify-center bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
          >
            Explore LFD Cloud
          </button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 rounded-md text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pt-3 pb-6 bg-white dark:bg-[#111111] border-b border-neutral-200 dark:border-neutral-800 space-y-3 animate-in fade-in duration-150">
          <a
            href="#applications"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-neutral-800 dark:text-neutral-200"
          >
            Applications (PPQ, VSM, Flow)
          </a>
          <a
            href="#planning"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-neutral-800 dark:text-neutral-200"
          >
            Manufacturing Planning
          </a>
          <a
            href="#flow"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-neutral-800 dark:text-neutral-200"
          >
            Intelligent Factory Flow
          </a>
          <a
            href="#layout"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-neutral-800 dark:text-neutral-200"
          >
            Factory Layout Design
          </a>
          <a
            href="#framework"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-neutral-800 dark:text-neutral-200"
          >
            15-Step Framework
          </a>
          <a
            href="#pricing"
            onClick={() => {
              setMobileMenuOpen(false);
              if (onNavigatePricing) onNavigatePricing();
            }}
            className="block py-2 text-sm font-medium text-neutral-800 dark:text-neutral-200"
          >
            Subscription Plans
          </a>
          <a
            href="#faqs"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-neutral-800 dark:text-neutral-200"
          >
            FAQs
          </a>
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTrial({ mode: 'trial', plan: 'Mid-Size Business' });
              }}
              className="w-full py-2.5 rounded-full bg-black text-white dark:bg-white dark:text-black font-semibold text-xs text-center"
            >
              Explore LFD Cloud
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo({ mode: 'demo', plan: 'Enterprise' });
              }}
              className="w-full py-2.5 rounded-full border border-neutral-300 dark:border-neutral-700 font-semibold text-xs text-center text-neutral-800 dark:text-neutral-200"
            >
              Book a Guided Demo
            </button>
          </div>
        </div>
      )}

    </header>
  );
};
