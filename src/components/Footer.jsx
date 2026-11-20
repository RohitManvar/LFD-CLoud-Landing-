import React from 'react';
import { Globe, ArrowUpRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { LfdLogo } from './LfdLogo';

export const Footer = ({ onOpenTrial, onOpenDemo }) => {
  const { theme } = useTheme();

  return (
    <footer className="bg-white dark:bg-[#0D0D0D] text-neutral-600 dark:text-neutral-400 text-sm transition-colors duration-200 pt-16 pb-12 select-none border-t border-neutral-100 dark:border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid: Logo on Left, Categorized Columns on Right */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 pb-16">
          
          {/* Left: Brand Logo & Tagline */}
          <div className="space-y-3">
            <a href="#" className="inline-block group cursor-pointer">
              <LfdLogo size="lg" />
            </a>
            <p className="text-xs text-neutral-500 max-w-xs leading-relaxed font-sans">
              From Product-Process-Quantity analysis to 2D/3D plant layout and pull supermarkets. Smarter Lean Factory Design for modern manufacturing teams.
            </p>
            <div className="pt-2 text-[11px] font-mono text-neutral-400">
              A product of <span className="font-semibold text-neutral-700 dark:text-neutral-300">Faber Infinite</span>
            </div>
          </div>

          {/* Right: Categorized Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12 text-left">
            
            {/* Column 1: Core Product */}
            <div className="space-y-3">
              <span className="text-xs font-mono font-medium text-neutral-400 dark:text-neutral-500 uppercase tracking-wider block">
                Product
              </span>
              <ul className="space-y-2 text-xs sm:text-[13px]">
                <li><a href="#ppq" className="hover:text-black dark:hover:text-white transition-colors">PPQ &amp; Pareto Matrix</a></li>
                <li><a href="#layout" className="hover:text-black dark:hover:text-white transition-colors">2D/3D Layout Studio</a></li>
                <li><a href="#supermarket" className="hover:text-black dark:hover:text-white transition-colors">Supermarket &amp; Kanban</a></li>
                <li><a href="#features" className="hover:text-black dark:hover:text-white transition-colors">Capacity &amp; Bottlenecks</a></li>
                <li><a href="#pricing" className="hover:text-black dark:hover:text-white transition-colors">Pricing Plans</a></li>
              </ul>
            </div>

            {/* Column 2: 15-Step Framework */}
            <div className="space-y-3">
              <span className="text-xs font-mono font-medium text-neutral-400 dark:text-neutral-500 uppercase tracking-wider block">
                Methodology
              </span>
              <ul className="space-y-2 text-xs sm:text-[13px]">
                <li><a href="#framework" className="hover:text-black dark:hover:text-white transition-colors">15-Step Framework</a></li>
                <li><a href="#framework" className="hover:text-black dark:hover:text-white transition-colors">Material Handling &amp; AGV</a></li>
                <li><a href="#framework" className="hover:text-black dark:hover:text-white transition-colors">Visual Controls (V1–V10)</a></li>
                <li><a href="#framework" className="hover:text-black dark:hover:text-white transition-colors">FMEA Risk Assessment</a></li>
                <li><a href="#faq" className="hover:text-black dark:hover:text-white transition-colors">Practitioner FAQ</a></li>
              </ul>
            </div>

            {/* Column 3: Company */}
            <div className="space-y-3">
              <span className="text-xs font-mono font-medium text-neutral-400 dark:text-neutral-500 uppercase tracking-wider block">
                Faber Infinite
              </span>
              <ul className="space-y-2 text-xs sm:text-[13px]">
                <li><a href="https://faberinfinite.com" target="_blank" rel="noreferrer" className="hover:text-black dark:hover:text-white transition-colors">About Faber Infinite</a></li>
                <li><button onClick={() => onOpenDemo({ mode: 'demo' })} className="hover:text-black dark:hover:text-white transition-colors cursor-pointer">Request Demo</button></li>
                <li><button onClick={() => onOpenTrial({ mode: 'trial' })} className="hover:text-black dark:hover:text-white transition-colors cursor-pointer">Start Free Trial</button></li>
                <li><a href="#security" className="hover:text-black dark:hover:text-white transition-colors">Security &amp; Trust</a></li>
              </ul>
            </div>

            {/* Column 4: Legal & Policies */}
            <div className="space-y-3">
              <span className="text-xs font-mono font-medium text-neutral-400 dark:text-neutral-500 uppercase tracking-wider block">
                Terms &amp; Policies
              </span>
              <ul className="space-y-2 text-xs sm:text-[13px]">
                <li><a href="#privacy" className="hover:text-black dark:hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#terms" className="hover:text-black dark:hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#security" className="hover:text-black dark:hover:text-white transition-colors">Data Confidentiality</a></li>
                <li><a href="#cookies" className="hover:text-black dark:hover:text-white transition-colors">Cookie Preferences</a></li>
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom Bar: Copyright on Left, Social Icons + Language on Right */}
        <div className="pt-8 border-t border-neutral-100 dark:border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-neutral-500 dark:text-neutral-400">
          
          {/* Left: Copyright */}
          <div className="flex items-center gap-3">
            <span>LFD Cloud by Faber Infinite &copy; 2026</span>
            <span className="text-neutral-300 dark:text-neutral-700">&bull;</span>
            <span>All rights reserved.</span>
          </div>

          {/* Right: Social Icons + Language */}
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-3.5 text-neutral-500 hover:text-black dark:hover:text-white">
              {/* X / Twitter */}
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-black dark:hover:text-white transition-colors" aria-label="Twitter">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              {/* YouTube */}
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-black dark:hover:text-white transition-colors" aria-label="YouTube">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-black dark:hover:text-white transition-colors" aria-label="LinkedIn">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>
            </div>

            {/* Language */}
            <div className="flex items-center gap-1.5 cursor-pointer hover:text-black dark:hover:text-white transition-colors">
              <Globe className="w-3.5 h-3.5" />
              <span>English (United States)</span>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
};
