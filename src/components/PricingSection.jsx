import React, { useState } from 'react';
import { 
  Check, 
  ChevronRight, 
  ChevronDown, 
  ChevronUp, 
  Clock 
} from 'lucide-react';
import { PRICING_CONFIG, formatPrice, getCurrencySymbol } from '../config/pricing';
import { ScrollReveal } from './ScrollReveal';
import { useTheme } from '../context/ThemeContext';

export const PricingSection = ({ onOpenTrial }) => {
  const { theme } = useTheme();
  const [currency, setCurrency] = useState('USD'); // 'USD' | 'INR'
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' | 'quarterly'
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const faqs = [
    {
      q: 'How does the 7-Day Trial work and what happens after 7 days?',
      a: 'The Trial provides 7 days of full trial access to explore LFD Cloud with zero upfront payment or credit card. After 7 days: (1) Trial expires automatically with no forced rollover; (2) Customer receives expiry reminders; (3) Customer chooses a paid subscription (LFD Core, LFD Signature, or LFD Enterprise); (4) No automatic payment is charged without authorization; and (5) Project data is safely retained for 30 days under the proposed retention policy.'
    },
    {
      q: 'What is included in the Trial ($0)?',
      a: 'The Trial includes 7 days of trial access with 1 user account, 1 active transformation project, PPQ analysis, Value Stream Identification, AI-powered Current State VSM, Flow Management, FSPlanner, 5 AI credits, and Project Plan.'
    },
    {
      q: 'What is the key difference between LFD Core ($149/mo) and LFD Signature ($399/mo)?',
      a: 'Both plans provide access to the core 11 software-enabled steps. LFD Core ($149/mo or $425/quarter) supports up to 3 users and 5 active projects with 100 AI credits/mo. LFD Signature ($399/mo or $1,149/quarter) is designed for growing teams managing multiple projects: it scales to 10 users and 15 active projects with 500 AI credits/mo, advanced AI analysis & recommendations, AI improvement refinement, team collaboration, shared improvement plans, and a centralized organization dashboard with role-based access control.'
    },
    {
      q: 'How does the 15-Step Framework map across the plans?',
      a: 'LFD Core and LFD Signature plans both provide complete access to the core 11 software-enabled steps. The remaining 4 specialized engineering steps — Capacity Planning & Ramp-up Plan, Equipment Planning Guidelines, Manpower Planning Guidelines, and Line Side Design — are provided under LFD Enterprise consulting engagements with dedicated Faber Infinite consultant support.'
    },
    {
      q: 'What is the billing frequency and policy?',
      a: 'LFD Cloud supports recurring monthly billing or quarterly billing at a lower effective rate. LFD Core is $149/mo ($1,788/yr) or $425/quarter ($1,700/yr). LFD Signature is $399/mo ($4,788/yr) or $1,149/quarter ($4,596/yr). LFD Enterprise pricing is custom. Extra AI credits and users can be added on demand.'
    },
    {
      q: 'How do AI credits work and can we get more?',
      a: 'Each plan includes an AI credit quota (Trial: 5 credits for the 7-day trial, LFD Core: 100/mo, LFD Signature: 500/mo, LFD Enterprise: Custom). Credits reset at each billing cycle and are only consumed when an AI-powered operation is triggered (e.g. AI Value Stream Identification, automated VSM laddering, AI recommendations). Normal navigation, data review, and manual entry consume zero credits. Additional AI credits can be purchased as paid add-ons.'
    },
    {
      q: 'Is our manufacturing data, plant layouts, and machine cycle data secure?',
      a: 'Yes. Enterprise-grade encryption in transit and at rest safeguards all plant floor layouts, equipment parameters, routing matrices, and operational data. Your data is isolated within your tenant and is never used to train public AI models.'
    }
  ];

  const comparisonRows = [
    { name: 'Plan Access & Duration', free: '7 days trial access', small: 'Monthly / Quarterly subscription', mid: 'Monthly / Quarterly subscription', enterprise: 'Custom agreement' },
    { name: 'Active Transformation Projects', free: '1 project', small: 'Up to 5 projects', mid: 'Up to 15 projects', enterprise: 'Custom limits' },
    { name: 'User Accounts Included', free: '1 user', small: 'Up to 3 users', mid: 'Up to 10 users', enterprise: 'Custom allocation' },
    { name: 'AI Credit Allocation', free: '5 credits (trial)', small: '100 credits/mo', mid: '500 credits/mo', enterprise: 'Custom allocation' },
    { name: 'Core 11 Software Steps', free: 'Included', small: 'Included (Complete)', mid: 'Included (Complete)', enterprise: 'Included (Complete)' },
    { name: '4 Consulting-Supported Steps', free: '—', small: '—', mid: 'Optional consulting', enterprise: 'Included as agreed' },
    { name: 'PPQ & Pareto Analysis', free: 'Included', small: 'Complete', mid: 'Complete', enterprise: 'Complete' },
    { name: 'AI Value Stream Identification', free: 'Included', small: 'Included', mid: 'Advanced', enterprise: 'Advanced / Custom' },
    { name: 'Value Stream Mapping (VSM)', free: 'AI Current State', small: 'Included', mid: 'Advanced + Refinement', enterprise: 'Complete' },
    { name: 'Flow Management (Spaghetti)', free: 'Included', small: 'Included', mid: 'Complete', enterprise: 'Complete' },
    { name: 'Supply Chain & Flow Supermarket', free: '—', small: 'Included', mid: 'Complete', enterprise: 'Complete + Line Side' },
    { name: 'Material Handling & Layout Design', free: '—', small: 'Included', mid: 'Complete', enterprise: 'Complete' },
    { name: 'Risk Assessment & Guidelines', free: 'Included', small: 'Included', mid: 'Advanced', enterprise: 'Advanced' },
    { name: 'FSPlanner Engine', free: 'Included', small: 'Complete', mid: 'Complete', enterprise: 'Complete' },
    { name: 'Team Collaboration & Dashboard', free: '—', small: 'Standard', mid: 'Org Dashboard & RBAC', enterprise: 'Multi-site Org Admin' },
    { name: 'Reports & Export Formats', free: '—', small: 'PDF & Excel Export', mid: 'Advanced Presentations', enterprise: 'Custom Reporting' },
    { name: 'Support & Consulting Delivery', free: 'Self-serve', small: 'Standard Support', mid: 'Priority Support', enterprise: 'Dedicated Consultant & SLA' }
  ];

  return (
    <section id="pricing" className="py-24 md:py-36 bg-white dark:bg-[#0D0D0D] text-black dark:text-white transition-colors duration-200 border-b border-neutral-200/70 dark:border-neutral-800/80 select-none">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================================= */}
        {/* EDITORIAL HEADER                                                          */}
        {/* ========================================================================= */}
        <ScrollReveal direction="up" duration={700}>
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-[-0.035em] leading-[1.12] text-black dark:text-white">
              Simple plans. <br className="hidden sm:inline" />
              Smarter lean factory design.
            </h2>

            <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed max-w-xl mx-auto">
              Choose the right LFD Cloud plan for your plant or enterprise and scale your Lean Transformation.
            </p>

            {/* Currency Selector (USD $ / INR ₹) & Billing Cycle (Monthly / Quarterly) */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              
              {/* Currency Selector */}
              <div className="inline-flex items-center bg-neutral-100 dark:bg-[#1A1A1A] p-1 rounded-full border border-neutral-200/80 dark:border-neutral-800 shadow-2xs">
                <button
                  onClick={() => setCurrency('USD')}
                  className={`px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-150 cursor-pointer flex items-center gap-1.5 ${
                    currency === 'USD'
                      ? 'bg-black text-white dark:bg-white dark:text-black shadow-sm'
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white'
                  }`}
                  aria-label="Switch pricing currency to USD"
                >
                  <span className="font-mono text-xs font-bold">$</span>
                  <span>USD</span>
                </button>
                <button
                  onClick={() => setCurrency('INR')}
                  className={`px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-150 cursor-pointer flex items-center gap-1.5 ${
                    currency === 'INR'
                      ? 'bg-black text-white dark:bg-white dark:text-black shadow-sm'
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white'
                  }`}
                  aria-label="Switch pricing currency to INR"
                >
                  <span className="font-mono text-xs font-bold">₹</span>
                  <span>INR</span>
                </button>
              </div>

              {/* Monthly / Quarterly Pill Toggle */}
              <div className="inline-flex items-center bg-neutral-100 dark:bg-[#1A1A1A] p-1 rounded-full border border-neutral-200/80 dark:border-neutral-800 shadow-2xs">
                <button
                  onClick={() => setBillingCycle('monthly')}
                  className={`px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-150 cursor-pointer ${
                    billingCycle === 'monthly'
                      ? 'bg-black text-white dark:bg-white dark:text-black shadow-sm'
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingCycle('quarterly')}
                  className={`px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-150 flex items-center gap-2 cursor-pointer ${
                    billingCycle === 'quarterly'
                      ? 'bg-black text-white dark:bg-white dark:text-black shadow-sm'
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white'
                  }`}
                >
                  <span>Quarterly</span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    billingCycle === 'quarterly'
                      ? 'bg-teal-500/20 text-teal-300 dark:text-teal-700'
                      : 'bg-teal-100 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300'
                  }`}>
                    Save up to 5%
                  </span>
                </button>
              </div>

            </div>
          </div>
        </ScrollReveal>

        {/* ========================================================================= */}
        {/* 4 PRICING CARDS (CENTERED, PERFECTLY ALIGNED HEIGHTS & CTAS)               */}
        {/* ========================================================================= */}
        <div className="pt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch max-w-7xl mx-auto justify-center">
          {PRICING_CONFIG.plans.map((plan, idx) => {
            const isQuarterly = billingCycle === 'quarterly';
            const planPricing = plan.pricing?.[currency] || {};
            const monthlyPrice = planPricing.monthly;
            const quarterlyPrice = planPricing.quarterly;
            const isTrial = monthlyPrice === 0;
            // Trial has no quarterly option, so it keeps showing $0
            const price = isQuarterly && !isTrial ? quarterlyPrice : monthlyPrice;
            const hasPrice = price !== null && price !== undefined;
            const showFrom = isQuarterly && planPricing.quarterlyFrom;
            const periodLabel = isQuarterly ? '/ quarter' : '/ month';
            const yearlyMonthly = monthlyPrice ? monthlyPrice * 12 : null;
            const yearlyQuarterly = quarterlyPrice ? quarterlyPrice * 4 : null;
            const symbol = getCurrencySymbol(currency);

            return (
              <ScrollReveal 
                key={plan.id} 
                direction="up" 
                delay={idx * 60}
                className="h-full flex flex-col"
              >
                <div
                  className={`h-full rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 text-left relative ${
                    plan.popular
                      ? 'bg-white dark:bg-[#161616] border-2 border-black dark:border-white shadow-xl ring-2 ring-black/5 dark:ring-white/10'
                      : 'bg-[#F9F9FB] dark:bg-[#141414] border border-neutral-200/80 dark:border-neutral-800/80 hover:border-neutral-300 dark:hover:border-neutral-700 shadow-xs'
                  }`}
                >
                  {/* Recommended / Trial Highlight Badge */}
                  {plan.badge && (
                    <div className={`absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-0.5 rounded-full text-[10px] font-extrabold tracking-wider uppercase shadow-xs z-20 ${
                      plan.popular 
                        ? 'bg-black text-white dark:bg-white dark:text-black' 
                        : 'bg-teal-100 text-teal-800 dark:bg-teal-950/80 dark:text-teal-300 border border-teal-200/80 dark:border-teal-800/60'
                    }`}>
                      {plan.badge}
                    </div>
                  )}

                  <div className="flex-1 flex flex-col">
                    {/* Plan Name & Tagline */}
                    <div className="mb-1">
                      <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-black dark:text-white">
                        {plan.name}
                      </h3>
                    </div>

                    <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed min-h-[38px] font-normal">
                      {plan.description}
                    </p>

                    {/* Price Block */}
                    <div className="mt-4 pb-5 border-b border-neutral-200/80 dark:border-neutral-800">
                      {!hasPrice ? (
                        <div className="h-[44px] flex items-baseline">
                          <span className="text-3xl font-extrabold tracking-tight text-black dark:text-white">
                            Custom
                          </span>
                        </div>
                      ) : (
                        <div className="flex items-baseline gap-1 flex-wrap">
                          {showFrom && (
                            <span className="text-xs text-neutral-500 dark:text-neutral-400 font-mono mr-0.5">From</span>
                          )}
                          <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-black dark:text-white">
                            {symbol}{formatPrice(price, currency)}
                          </span>
                          <span className="text-xs text-neutral-500 dark:text-neutral-400 font-mono">
                            {isTrial ? '' : periodLabel}
                          </span>
                        </div>
                      )}

                      <div className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-1 font-mono">
                        {isTrial
                          ? '7 days trial • No card required'
                          : plan.isCustom
                            ? showFrom
                              ? `Billed quarterly • from ${symbol}${formatPrice(yearlyQuarterly, currency)}/yr`
                              : 'Tailored enterprise deployment'
                            : plan.trialDays
                              ? `${plan.trialDays}-day free trial, then billed ${isQuarterly ? 'quarterly' : 'monthly'}`
                            : isQuarterly
                              ? `Billed quarterly • ${symbol}${formatPrice(yearlyQuarterly, currency)}/yr (vs ${symbol}${formatPrice(yearlyMonthly, currency)} monthly)`
                              : `Billed monthly • ${symbol}${formatPrice(yearlyMonthly, currency)}/yr, cancel anytime`
                        }
                      </div>
                    </div>

                    {/* Feature Checklist */}
                    <div className="pt-4 space-y-2.5 flex-1">
                      <span className="text-[10px] font-mono font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider block">
                        Included Features:
                      </span>
                      {plan.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-neutral-700 dark:text-neutral-300">
                          <Check className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                          <span className="leading-snug text-[12px]">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Plan Action CTA Button (Anchored to Bottom) */}
                  <div className="mt-6 pt-4 border-t border-neutral-200/80 dark:border-neutral-800">
                    <button
                      onClick={() => onOpenTrial({ mode: plan.ctaMode || (plan.isCustom ? 'demo' : 'trial'), plan: plan.name, currency })}
                      className={`w-full py-2.5 sm:py-3 rounded-full text-xs font-semibold transition-all duration-150 flex items-center justify-center gap-1 cursor-pointer shadow-xs active:scale-98 ${
                        plan.popular
                          ? 'bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 font-bold'
                          : 'bg-white dark:bg-[#1E1E1E] text-black dark:text-white border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                      }`}
                    >
                      <span>{plan.ctaText}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                    {plan.secondaryCtaText && (
                      <button
                        onClick={() => onOpenTrial({ mode: 'demo', plan: plan.name, currency })}
                        className="mt-2.5 w-full py-2.5 sm:py-3 rounded-full text-xs font-semibold transition-all duration-150 flex items-center justify-center gap-1 cursor-pointer active:scale-98 text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800"
                      >
                        <span>{plan.secondaryCtaText}</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* FREE PLAN 7-DAY TRIAL POLICY & AFTER 7 DAYS RULES                         */}
        {/* ========================================================================= */}
        <div className="mt-14 max-w-4xl mx-auto">
          <div className="rounded-2xl border border-neutral-200/90 dark:border-neutral-800 bg-[#F9F9FB] dark:bg-[#151515] p-6 sm:p-7 text-left shadow-2xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-neutral-200/80 dark:border-neutral-800">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold font-mono bg-teal-100 dark:bg-teal-950/80 text-teal-800 dark:text-teal-300 border border-teal-200/80 dark:border-teal-800/60">
                  Trial &bull; 7-Day Trial Policy
                </span>
                <span className="text-xs text-neutral-500 font-mono">$0 &bull; 7 Days Access</span>
              </div>
              <span className="text-xs text-neutral-500 dark:text-neutral-400 font-mono">
                No credit card required
              </span>
            </div>

            <div className="mt-4">
              <h4 className="text-sm font-bold text-black dark:text-white mb-3 flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                <span>After 7 days</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-xl bg-white dark:bg-[#1C1C1C] border border-neutral-200/70 dark:border-neutral-800/80 text-xs text-neutral-700 dark:text-neutral-300">
                  <div className="font-semibold text-black dark:text-white mb-0.5">• Trial expires automatically</div>
                  <p className="text-[11.5px] text-neutral-500 dark:text-neutral-400 leading-relaxed">
                    Zero forced subscriptions. Access concludes automatically at the end of 7 days.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white dark:bg-[#1C1C1C] border border-neutral-200/70 dark:border-neutral-800/80 text-xs text-neutral-700 dark:text-neutral-300">
                  <div className="font-semibold text-black dark:text-white mb-0.5">• Customer receives expiry reminders</div>
                  <p className="text-[11.5px] text-neutral-500 dark:text-neutral-400 leading-relaxed">
                    Clear reminder notifications are emailed before your trial period concludes.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white dark:bg-[#1C1C1C] border border-neutral-200/70 dark:border-neutral-800/80 text-xs text-neutral-700 dark:text-neutral-300">
                  <div className="font-semibold text-black dark:text-white mb-0.5">• Customer chooses a paid subscription</div>
                  <p className="text-[11.5px] text-neutral-500 dark:text-neutral-400 leading-relaxed">
                    Select LFD Core ($149/mo), LFD Signature ($399/mo), or LFD Enterprise to continue.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white dark:bg-[#1C1C1C] border border-neutral-200/70 dark:border-neutral-800/80 text-xs text-neutral-700 dark:text-neutral-300">
                  <div className="font-semibold text-black dark:text-white mb-0.5">• No payment without authorization</div>
                  <p className="text-[11.5px] text-neutral-500 dark:text-neutral-400 leading-relaxed">
                    Zero surprise billing. No charge will ever be made without explicit customer authorization.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white dark:bg-[#1C1C1C] border border-neutral-200/70 dark:border-neutral-800/80 text-xs text-neutral-700 dark:text-neutral-300 sm:col-span-2 lg:col-span-2">
                  <div className="font-semibold text-black dark:text-white mb-0.5">• Project data retained for 30 days</div>
                  <p className="text-[11.5px] text-neutral-500 dark:text-neutral-400 leading-relaxed">
                    Under the proposed retention policy, all transformation projects, plant layouts, and VSM models are retained for 30 days for seamless reactivation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* COMPREHENSIVE FEATURE COMPARISON TABLE                                    */}
        {/* ========================================================================= */}
        <div className="mt-20 sm:mt-24 max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-black dark:text-white">
              Compare plan features
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
              Detailed breakdown of allowances and capabilities across all 4 plans.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-[#FBFBFC] dark:bg-[#141414]">
            <table className="w-full text-left border-collapse text-xs sm:text-[13px]">
              <thead>
                <tr className="border-b border-neutral-200 dark:border-neutral-800 bg-neutral-100/70 dark:bg-[#1A1A1A]/70 text-black dark:text-white font-bold">
                  <th className="py-3.5 px-4 font-mono uppercase tracking-wider text-[11px]">Capability</th>
                  <th className="py-3.5 px-3">Trial</th>
                  <th className="py-3.5 px-3">LFD Core</th>
                  <th className="py-3.5 px-3 font-semibold text-teal-600 dark:text-teal-400">LFD Signature</th>
                  <th className="py-3.5 px-3">LFD Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200/70 dark:divide-neutral-800/70 text-neutral-700 dark:text-neutral-300 font-sans">
                {comparisonRows.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-neutral-100/50 dark:hover:bg-neutral-800/50 transition-colors">
                    <td className="py-3 px-4 font-medium text-black dark:text-white">{row.name}</td>
                    <td className="py-3 px-3 font-medium text-teal-700 dark:text-teal-300">{row.free}</td>
                    <td className="py-3 px-3">{row.small}</td>
                    <td className="py-3 px-3 font-semibold text-teal-700 dark:text-teal-300">{row.mid}</td>
                    <td className="py-3 px-3 font-medium text-black dark:text-white">{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* FREQUENTLY ASKED QUESTIONS (FAQ) ACCORDION                                */}
        {/* ========================================================================= */}
        <div id="faq" className="mt-20 sm:mt-24 max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-black dark:text-white">
              Frequently asked questions
            </h3>
          </div>

          <div className="space-y-3 text-left">
            {faqs.map((faq, fIdx) => (
              <div 
                key={fIdx}
                className="rounded-2xl border border-neutral-200/80 dark:border-neutral-800/80 bg-white dark:bg-[#141414] overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === fIdx ? null : fIdx)}
                  className="w-full py-4 px-5 text-left font-semibold text-sm sm:text-[15px] flex items-center justify-between gap-4 text-black dark:text-white cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors"
                >
                  <span>{faq.q}</span>
                  {openFaqIndex === fIdx ? (
                    <ChevronUp className="w-4 h-4 text-neutral-500 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-neutral-500 shrink-0" />
                  )}
                </button>
                {openFaqIndex === fIdx && (
                  <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed border-t border-neutral-100 dark:border-neutral-800/60 animate-in fade-in duration-150">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Footnote Disclaimers */}
        <div className="mt-14 max-w-2xl mx-auto text-center space-y-1.5 text-xs text-neutral-500 dark:text-neutral-400 font-mono">
          <p>{PRICING_CONFIG.currencies[currency].taxNotice}</p>
          <p>{PRICING_CONFIG.consultantNotice}</p>
          <p>{PRICING_CONFIG.disclaimer}</p>
        </div>

      </div>
    </section>
  );
};
