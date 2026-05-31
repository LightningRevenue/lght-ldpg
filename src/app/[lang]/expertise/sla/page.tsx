"use client";

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { getLanguageFromPathname, localizePath } from '@/lib/i18n';

const slaMetrics = [
  {
    metric: '99.9%',
    label: 'Uptime Guarantee',
    desc: 'All client-facing assets (websites, landing pages, applications) hosted on our infrastructure are guaranteed 99.9% uptime, monitored 24/7 via automated health checks.',
  },
  {
    metric: '<2h',
    label: 'Critical Response',
    desc: 'P0 incidents (site down, data breach, payment flow failure) receive an initial engineering response within 2 hours, any time of day, any day of the year.',
  },
  {
    metric: '<4h',
    label: 'High Priority',
    desc: 'P1 incidents (major feature broken, conversion tracking offline, CRM sync failure) receive a response within 4 business hours with a resolution ETA.',
  },
  {
    metric: '<24h',
    label: 'Standard Priority',
    desc: 'P2 requests (design adjustments, copy changes, new landing page builds) are acknowledged within 24 hours and scheduled into the current sprint cycle.',
  },
];

const slaTerms = [
  {
    title: 'Service Credits',
    content: 'If we fail to meet our uptime commitment in any given calendar month, you are automatically entitled to service credits. Below 99.9% = 10% credit. Below 99.5% = 25% credit. Below 99.0% = 50% credit on your monthly retainer. No forms to fill out — credits are applied automatically.',
  },
  {
    title: 'Escalation Matrix',
    content: 'Every client has a named Account Manager as their primary contact. If your issue is not acknowledged within the SLA window, it automatically escalates to our Head of Operations. If still unresolved, it escalates directly to the Managing Director within 1 hour.',
  },
  {
    title: 'Scheduled Maintenance',
    content: 'All planned maintenance windows are communicated a minimum of 72 hours in advance via email and Slack. Maintenance is exclusively performed between 02:00–06:00 UTC on weekends to ensure zero impact on business-critical hours.',
  },
  {
    title: 'Incident Post-Mortems',
    content: 'Every P0 and P1 incident is followed by a detailed Root Cause Analysis (RCA) document delivered within 48 hours. This includes the timeline of events, what went wrong, and what infrastructure changes were permanently deployed to prevent recurrence.',
  },
  {
    title: 'Data & Security',
    content: 'All client data is encrypted at rest (AES-256) and in transit (TLS 1.3). We perform automated daily backups with 30-day retention. Full disaster recovery procedures are tested quarterly, and recovery time objectives (RTO) are guaranteed under 4 hours.',
  },
  {
    title: 'Termination & Handover',
    content: 'You may terminate the agreement with 30 days written notice. Upon termination, we provide a complete data export, transfer all domain credentials, hand over source code repositories, and ensure a clean transition within 14 business days.',
  },
];

export default function SLAPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const language = getLanguageFromPathname(usePathname());

  return (
    <main className="min-h-screen bg-[#fafafa]">

      {/* Hero */}
      <section className="relative w-full pt-40 pb-24 px-6 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-10 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-30"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-black/60"></span>
            </div>
            <span className="text-[13px] font-medium text-black/50 tracking-wide uppercase">Expertise</span>
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-medium tracking-[-0.04em] text-[#2f5b7c] leading-[0.9] mb-12 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Service Level<br />
            <span className="text-[#2f5b7c]/20">Agreement.</span>
          </h1>

          <p className="max-w-2xl text-lg sm:text-xl text-black/60 font-light leading-relaxed opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            We don't hide behind vague promises. Our SLA is a legally binding contract that guarantees specific response times, uptime commitments, and automatic financial penalties if we fail to deliver.
          </p>
        </div>
      </section>

      {/* Metrics Grid */}
      <section className="relative w-full py-24 px-6 bg-white border-t border-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-medium tracking-tight text-black mb-6">
              Guaranteed Performance Benchmarks.
            </h2>
            <p className="text-black/50 font-light text-lg max-w-2xl mx-auto">
              Every commitment below is contractually enforced. If we miss a benchmark, you get paid — automatically.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {slaMetrics.map((item, idx) => (
              <div
                key={idx}
                className="relative p-8 sm:p-10 rounded-3xl border border-black/10 bg-[#fafafa] hover:bg-white hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:border-black/20 transition-all duration-500 flex flex-col group overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#2f5b7c]/5 rounded-full blur-[40px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="text-4xl sm:text-5xl font-medium text-[#2f5b7c] mb-2 relative z-10">{item.metric}</span>
                <span className="text-sm font-bold text-black/80 uppercase tracking-widest mb-4 relative z-10">{item.label}</span>
                <p className="text-black/50 font-light leading-relaxed text-sm relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Priority Table */}
      <section className="relative w-full py-24 px-6 bg-[#fafafa] border-t border-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <div className="text-xs font-bold text-black/40 mb-6 uppercase tracking-widest">Priority Matrix</div>
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-black mb-4">
              Incident Classification.
            </h2>
            <p className="text-black/50 font-light text-lg max-w-2xl">
              Every ticket is automatically classified by severity. Higher severity means faster response — no exceptions, no negotiations.
            </p>
          </div>

          <div className="rounded-3xl border border-black/10 bg-white overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.02)]">
            {/* Table Header */}
            <div className="grid grid-cols-4 px-8 py-5 bg-black text-white text-sm font-bold uppercase tracking-widest">
              <span>Priority</span>
              <span>Example</span>
              <span>Response</span>
              <span>Resolution</span>
            </div>

            {/* P0 */}
            <div className="grid grid-cols-4 px-8 py-6 border-b border-black/5 items-center hover:bg-[#fafafa] transition-colors">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-red-500 shrink-0"></span>
                <span className="font-bold text-black">P0 — Critical</span>
              </div>
              <span className="text-black/60 font-light text-sm">Site completely down, data breach</span>
              <span className="font-medium text-black">≤ 2 hours</span>
              <span className="font-medium text-black">≤ 8 hours</span>
            </div>

            {/* P1 */}
            <div className="grid grid-cols-4 px-8 py-6 border-b border-black/5 items-center hover:bg-[#fafafa] transition-colors">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-orange-500 shrink-0"></span>
                <span className="font-bold text-black">P1 — High</span>
              </div>
              <span className="text-black/60 font-light text-sm">Payment flow broken, tracking offline</span>
              <span className="font-medium text-black">≤ 4 hours</span>
              <span className="font-medium text-black">≤ 24 hours</span>
            </div>

            {/* P2 */}
            <div className="grid grid-cols-4 px-8 py-6 border-b border-black/5 items-center hover:bg-[#fafafa] transition-colors">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-yellow-500 shrink-0"></span>
                <span className="font-bold text-black">P2 — Medium</span>
              </div>
              <span className="text-black/60 font-light text-sm">Visual bugs, copy changes, new pages</span>
              <span className="font-medium text-black">≤ 24 hours</span>
              <span className="font-medium text-black">≤ 72 hours</span>
            </div>

            {/* P3 */}
            <div className="grid grid-cols-4 px-8 py-6 items-center hover:bg-[#fafafa] transition-colors">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-green-500 shrink-0"></span>
                <span className="font-bold text-black">P3 — Low</span>
              </div>
              <span className="text-black/60 font-light text-sm">Feature requests, strategic reviews</span>
              <span className="font-medium text-black">≤ 48 hours</span>
              <span className="font-medium text-black">Next sprint</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contractual Terms Accordion */}
      <section className="relative w-full py-32 px-6 bg-white border-t border-black/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-black mb-16 text-center">
            Contractual Terms.
          </h2>

          <div className="flex flex-col border-t border-black/10">
            {slaTerms.map((term, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="border-b border-black/10">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full py-8 sm:py-10 flex items-center justify-between text-left focus:outline-none group"
                  >
                    <span className="text-xl sm:text-2xl font-medium tracking-tight text-black group-hover:translate-x-2 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] pr-8">
                      {term.title}
                    </span>
                    <span className={`flex-shrink-0 w-8 h-8 flex items-center justify-center border border-black/10 rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'rotate-45 bg-black text-white border-black' : 'text-black group-hover:border-black/30'}`}>
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                      </svg>
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'max-h-96 pb-10 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <p className="text-black/60 font-light text-lg leading-relaxed max-w-3xl">
                      {term.content}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative w-full py-24 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#2f5b7c]/15 rounded-full blur-[120px] pointer-events-none"></div>
          
          <h2 className="relative z-10 text-4xl sm:text-5xl font-medium tracking-tight text-white mb-6">
            Ready for accountability?
          </h2>
          <p className="relative z-10 text-white/60 font-light text-lg mb-12 max-w-xl mx-auto">
            Stop working with agencies that disappear. Start working with engineers who put their revenue on the line for your success.
          </p>
          <a
            href={localizePath('/contact', language)}
            className="relative z-10 inline-flex items-center gap-2 px-10 py-4 bg-white text-black rounded-full text-sm font-bold hover:bg-[#2f5b7c] hover:text-white transition-all duration-500 shadow-xl"
          >
            Get Your SLA
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>

    </main>
  );
}
