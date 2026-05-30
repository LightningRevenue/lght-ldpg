import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About | LightningRevenue',
  description:
    'Learn how LightningRevenue builds high-performance digital growth systems.',
};

const principles = [
  {
    title: 'Quiet execution',
    text: 'We keep the process calm, measurable, and direct. Fewer meetings, clearer decisions, better output.',
  },
  {
    title: 'Senior ownership',
    text: 'Strategy, design, engineering, and acquisition work are handled by people who can own outcomes end to end.',
  },
  {
    title: 'Compounding systems',
    text: 'Every engagement is built to leave behind reusable assets, cleaner infrastructure, and stronger operating leverage.',
  },
];

const process = [
  'Diagnose the commercial bottleneck',
  'Map the fastest path to leverage',
  'Build the core digital system',
  'Measure, iterate, and compound',
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#fafafa] text-black">
      <section className="relative px-6 pt-40 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-5xl">
            <div className="flex items-center gap-3 mb-10">
              <span className="w-2 h-2 rounded-full bg-[#2f5b7c]"></span>
              <span className="text-[13px] font-medium uppercase tracking-wide text-black/50">
                About LightningRevenue
              </span>
            </div>

            <h1 className="text-[4.25rem] sm:text-[6.5rem] lg:text-[9rem] font-medium tracking-[-0.04em] text-[#2f5b7c] leading-[0.85] -ml-1">
              Digital
              <span className="block text-[#2f5b7c]/20">operators.</span>
            </h1>

            <p className="mt-10 max-w-3xl text-lg sm:text-xl text-black/60 font-light leading-relaxed">
              LightningRevenue is built for companies that need growth, product,
              and infrastructure to move as one system. We combine acquisition
              strategy, premium interface design, and production-grade
              engineering into focused engagements.
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              ['Core focus', 'Growth systems'],
              ['Delivery mode', 'Senior team'],
              ['Best fit', 'Ambitious operators'],
            ].map(([label, value]) => (
              <div
                key={label}
                className="border border-black/10 bg-white rounded-3xl p-8"
              >
                <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/35 mb-8">
                  {label}
                </div>
                <div className="text-3xl font-medium tracking-tight text-black">
                  {value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 bg-white border-y border-black/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-16">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-black/35 mb-6">
              Operating Belief
            </div>
            <h2 className="text-4xl sm:text-5xl font-medium tracking-tight text-black leading-tight">
              Beautiful work is not enough. It has to move the business.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {principles.map(principle => (
              <div
                key={principle.title}
                className="border border-black/10 rounded-3xl p-8 bg-[#fafafa]"
              >
                <h3 className="text-2xl font-medium tracking-tight text-black mb-3">
                  {principle.title}
                </h3>
                <p className="text-black/60 font-light leading-relaxed">
                  {principle.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 bg-[#050505] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-white/35 mb-6">
                Method
              </div>
              <h2 className="text-4xl sm:text-6xl font-medium tracking-tight leading-tight">
                The work starts with leverage, not decoration.
              </h2>
              <p className="mt-8 max-w-xl text-white/55 font-light leading-relaxed text-lg">
                We do not treat marketing, design, and engineering as separate
                departments. The same commercial problem shapes the funnel, the
                interface, the copy, the stack, and the reporting layer.
              </p>
            </div>

            <div className="border border-white/10 rounded-[2rem] overflow-hidden">
              {process.map((step, index) => (
                <div
                  key={step}
                  className="grid grid-cols-[88px_1fr] border-b border-white/10 last:border-b-0"
                >
                  <div className="flex items-center justify-center border-r border-white/10 text-white/30 font-mono text-sm">
                    0{index + 1}
                  </div>
                  <div className="p-7 text-xl sm:text-2xl font-medium tracking-tight">
                    {step}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-black/35 mb-6">
              Next Step
            </div>
            <h2 className="text-4xl sm:text-5xl font-medium tracking-tight text-black max-w-3xl">
              Bring the bottleneck. We will map the system around it.
            </h2>
          </div>

          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center justify-center rounded-full bg-black px-10 py-4 text-sm font-bold text-white shadow-lg transition-colors hover:bg-[#2f5b7c]"
          >
            Start Project
          </Link>
        </div>
      </section>
    </main>
  );
}
