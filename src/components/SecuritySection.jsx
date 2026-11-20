import React from 'react';
import { ShieldCheck, Lock, Key, Server, Users, Database } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { useTheme } from '../context/ThemeContext';

export const SecuritySection = ({ onOpenTrial }) => {
  const { theme } = useTheme();

  const capabilities = [
    {
      icon: <Lock className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />,
      title: 'Secure Account Access',
      description: 'Industry-standard session safeguards, MFA, and SSO protecting your plant layouts.'
    },
    {
      icon: <Key className="w-4 h-4 text-blue-600 dark:text-blue-400" />,
      title: 'Granular Plant RBAC',
      description: 'Role-based access control guarantees engineers only view designated factory lines.'
    },
    {
      icon: <ShieldCheck className="w-4 h-4 text-purple-600 dark:text-purple-400" />,
      title: 'Zero Public AI Training',
      description: 'Proprietary machine cycle times and factory layouts are never used to train public AI.'
    },
    {
      icon: <Database className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />,
      title: 'Encrypted CAD & Telemetry',
      description: 'All layout files and factory parameters are transmitted via encrypted TLS 1.3.'
    },
    {
      icon: <Users className="w-4 h-4 text-amber-600 dark:text-amber-400" />,
      title: 'Isolated Client Workspaces',
      description: 'Consultants maintain strict, isolated tenant boundaries across separate client firms.'
    },
    {
      icon: <Server className="w-4 h-4 text-rose-600 dark:text-rose-400" />,
      title: 'High-Availability Cloud',
      description: 'Redundant cloud architecture engineered for continuous multi-plant uptime.'
    }
  ];

  return (
    <section id="security" className="py-20 md:py-32 bg-white dark:bg-[#0D0D0D] text-black dark:text-white transition-colors duration-200 border-b border-neutral-200/70 dark:border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================================= */}
        {/* HEADLINE: "Designed to keep you safe"                                     */}
        {/* ========================================================================= */}
        <ScrollReveal direction="up" duration={700}>
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-[-0.035em] leading-[1.12] text-black dark:text-white">
              Designed to keep you safe
            </h2>
            <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal max-w-2xl mx-auto">
              We're committed to protecting our customers' proprietary manufacturing data; LFD Cloud is built with enterprise security, tenant isolation, and confidentiality at its core.
            </p>
          </div>
        </ScrollReveal>

        {/* ========================================================================= */}
        {/* 2 SIDE-BY-SIDE CARDS                                                      */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto mb-16">
          
          {/* Card 1: Proprietary IP & Privacy */}
          <ScrollReveal direction="up" delay={100} duration={600}>
            <div className="rounded-2xl sm:rounded-3xl border border-neutral-200/90 dark:border-neutral-800/90 bg-[#F9F9FB] dark:bg-[#141414] p-8 sm:p-10 text-left h-full flex flex-col justify-between transition-all duration-200 hover:border-neutral-300 dark:hover:border-neutral-700">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-black dark:text-white mb-3">
                  Proprietary manufacturing IP
                </h3>
                <p className="text-sm sm:text-[14px] text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
                  Your factory blueprints, machine cycle times, routing sequences, and Capex estimates are your competitive advantage. In LFD Cloud, all client data is encrypted at rest and in transit, and never leaves your isolated workspace.
                </p>
              </div>

              <div className="pt-6 sm:pt-8">
                <button
                  onClick={() => onOpenTrial({ mode: 'trial' })}
                  className="px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 transition-all cursor-pointer shadow-xs active:scale-98"
                >
                  Learn more
                </button>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 2: Enterprise Governance & RBAC */}
          <ScrollReveal direction="up" delay={200} duration={600}>
            <div className="rounded-2xl sm:rounded-3xl border border-neutral-200/90 dark:border-neutral-800/90 bg-[#F9F9FB] dark:bg-[#141414] p-8 sm:p-10 text-left h-full flex flex-col justify-between transition-all duration-200 hover:border-neutral-300 dark:hover:border-neutral-700">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-black dark:text-white mb-3">
                  Enterprise governance &amp; RBAC
                </h3>
                <p className="text-sm sm:text-[14px] text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
                  Enterprise-grade security controls allow plant directors to establish strict organizational roles, multi-factor authentication, Single Sign-On (SSO via Okta / Azure AD), and complete chronological audit logs across all layout revisions.
                </p>
              </div>

              <div className="pt-6 sm:pt-8">
                <button
                  onClick={() => onOpenTrial({ mode: 'demo' })}
                  className="px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 transition-all cursor-pointer shadow-xs active:scale-98"
                >
                  Learn more
                </button>
              </div>
            </div>
          </ScrollReveal>

        </div>

        {/* 6 Grid Capabilities */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto pt-6 border-t border-neutral-100 dark:border-neutral-800/60">
          {capabilities.map((cap, idx) => (
            <div key={idx} className="p-3 text-left">
              <div className="mb-2">{cap.icon}</div>
              <h4 className="text-xs font-bold text-black dark:text-white leading-snug">{cap.title}</h4>
              <p className="text-[11px] text-neutral-500 mt-0.5 leading-snug">{cap.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
