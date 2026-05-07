"use client";

import React, { useState } from 'react';

const amMetrics = [
  {
    metric: '8',
    label: 'Max Accounts',
    desc: 'Every Account Manager handles a maximum of 8 clients. This is non-negotiable. It guarantees deep strategic focus, not surface-level check-ins.',
  },
  {
    metric: '97%',
    label: 'Retention Rate',
    desc: 'Our client retention rate speaks for itself. When you have a named human who treats your business like their own, you don\'t leave.',
  },
  {
    metric: '30m',
    label: 'Weekly Calls',
    desc: 'Every client receives a live, 30-minute weekly strategy call with screen-shared dashboards — not monthly slide decks recycled from last quarter.',
  },
  {
    metric: '24/7',
    label: 'Slack Access',
    desc: 'Every client gets a private Slack channel with their AM and the entire delivery team. No support tickets, no 48-hour email queues.',
  },
];

const amTerms = [
  {
    title: 'Onboarding Deep-Dive',
    content: 'Within 48 hours of signing, your AM leads a comprehensive 90-minute onboarding session. We map your business goals, KPIs, internal stakeholders, brand guidelines, competitive landscape, and every tool in your current stack. Nothing is left to assumption.',
  },
  {
    title: 'Shared Workspace Setup',
    content: 'We provision a private Slack channel, a shared Notion workspace for documentation and sprint tracking, and configure weekly calendar invites for recurring strategy sessions. Your AM also sets up a shared Loom library for async video updates.',
  },
  {
    title: 'Internal Advocacy',
    content: 'Your AM is not a messenger. They are your internal advocate who fights for your priorities within our engineering, design, and strategy teams. They coordinate all cross-functional work behind the scenes so you only deal with one person who delivers results.',
  },
  {
    title: 'Proactive Reporting',
    content: 'Your AM doesn\'t wait for you to ask "how are things going?" They deliver weekly performance snapshots, anomaly alerts, and strategic recommendations before you even think to ask. If something is trending down, you hear about it first — with a solution already attached.',
  },
  {
    title: 'Backup & Continuity',
    content: 'Every Account Manager has a designated backup who is briefed on all active accounts. Before any leave, your AM will introduce you to their backup and ensure a seamless transition. You will never be left without a direct point of contact.',
  },
  {
    title: 'Reassignment Policy',
    content: 'If at any point you feel the chemistry or expertise isn\'t right, you can request a reassignment. We will transition you to a new AM within 5 business days with a full context handover document to ensure zero information loss.',
  },
];

export default function AccountManagerPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
            Dedicated Account<br />
            <span className="text-[#2f5b7c]/20">Manager.</span>
          </h1>

          <p className="max-w-2xl text-lg sm:text-xl text-black/60 font-light leading-relaxed opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            You will never chase a support ticket. Every LRVN client is assigned a senior Account Manager who acts as your single point of contact, internal advocate, and strategic partner — from day one until the end of the engagement.
          </p>
        </div>
      </section>

      {/* Metrics Grid */}
      <section className="relative w-full py-24 px-6 bg-white border-t border-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-medium tracking-tight text-black mb-6">
              Guaranteed Commitments.
            </h2>
            <p className="text-black/50 font-light text-lg max-w-2xl mx-auto">
              This isn't a junior coordinator forwarding your emails. This is a senior strategist who understands your industry and owns your entire delivery pipeline.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {amMetrics.map((item, idx) => (
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

      {/* Responsibility Table */}
      <section className="relative w-full py-24 px-6 bg-[#fafafa] border-t border-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <div className="text-xs font-bold text-black/40 mb-6 uppercase tracking-widest">Responsibility Matrix</div>
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-black mb-4">
              What Your AM Owns.
            </h2>
            <p className="text-black/50 font-light text-lg max-w-2xl">
              Your Account Manager is accountable for every touchpoint. Here is the exact scope of their ownership across your engagement.
            </p>
          </div>

          <div className="rounded-3xl border border-black/10 bg-white overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.02)]">
            {/* Table Header */}
            <div className="grid grid-cols-4 px-8 py-5 bg-black text-white text-sm font-bold uppercase tracking-widest">
              <span>Domain</span>
              <span>Responsibility</span>
              <span>Cadence</span>
              <span>Channel</span>
            </div>

            {/* Strategy */}
            <div className="grid grid-cols-4 px-8 py-6 border-b border-black/5 items-center hover:bg-[#fafafa] transition-colors">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-[#2f5b7c] shrink-0"></span>
                <span className="font-bold text-black">Strategy</span>
              </div>
              <span className="text-black/60 font-light text-sm">KPI reviews, sprint planning, pivots</span>
              <span className="font-medium text-black">Weekly</span>
              <span className="font-medium text-black">Live Call</span>
            </div>

            {/* Communication */}
            <div className="grid grid-cols-4 px-8 py-6 border-b border-black/5 items-center hover:bg-[#fafafa] transition-colors">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-emerald-500 shrink-0"></span>
                <span className="font-bold text-black">Communication</span>
              </div>
              <span className="text-black/60 font-light text-sm">Updates, blockers, async questions</span>
              <span className="font-medium text-black">Daily</span>
              <span className="font-medium text-black">Slack</span>
            </div>

            {/* Reporting */}
            <div className="grid grid-cols-4 px-8 py-6 border-b border-black/5 items-center hover:bg-[#fafafa] transition-colors">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-amber-500 shrink-0"></span>
                <span className="font-bold text-black">Reporting</span>
              </div>
              <span className="text-black/60 font-light text-sm">Performance snapshots, anomaly alerts</span>
              <span className="font-medium text-black">Weekly</span>
              <span className="font-medium text-black">Notion + Loom</span>
            </div>

            {/* Escalation */}
            <div className="grid grid-cols-4 px-8 py-6 items-center hover:bg-[#fafafa] transition-colors">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-red-500 shrink-0"></span>
                <span className="font-bold text-black">Escalation</span>
              </div>
              <span className="text-black/60 font-light text-sm">Critical incidents, SLA breaches</span>
              <span className="font-medium text-black">Immediate</span>
              <span className="font-medium text-black">Phone + Slack</span>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Accordion */}
      <section className="relative w-full py-32 px-6 bg-white border-t border-black/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-black mb-16 text-center">
            How It Works.
          </h2>

          <div className="flex flex-col border-t border-black/10">
            {amTerms.map((term, index) => {
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
            Ready for a real partner?
          </h2>
          <p className="relative z-10 text-white/60 font-light text-lg mb-12 max-w-xl mx-auto">
            Stop dealing with anonymous support queues. Get a named strategist who treats your business like their own.
          </p>
          <a
            href="/#contact"
            className="relative z-10 inline-flex items-center gap-2 px-10 py-4 bg-white text-black rounded-full text-sm font-bold hover:bg-[#2f5b7c] hover:text-white transition-all duration-500 shadow-xl"
          >
            Meet Your AM
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>

    </main>
  );
}
