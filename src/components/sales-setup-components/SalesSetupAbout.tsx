import React from 'react';

const salesSetupInfo = [
  {
    title: 'DNS & Deliverability',
    desc: 'We configure DMARC, SPF, and DKIM protocols on your primary domains to guarantee 100% email deliverability and prevent your sales team from landing in spam.',
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
        />
      </svg>
    ),
  },
  {
    title: 'CRM Implementation',
    desc: 'Building bespoke Hubspot, Salesforce, or Pipedrive environments. We define exact custom properties, deal stages, and required fields to enforce data discipline.',
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      </svg>
    ),
  },
  {
    title: 'Zapier & Make Automations',
    desc: 'Connecting your fragmented tools via API Webhooks. When a lead is captured on Facebook, they instantly appear in your CRM and get a Slack notification.',
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: 'Calendar & Scheduling',
    desc: 'Implementing advanced routing via Calendly or ChiliPiper. We qualify leads based on form inputs and instantly route them to the correct Account Executive.',
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: 'VOIP & Dialer Setup',
    desc: 'Integrating Aircall, Ringover, or JustCall directly into your CRM for one-click calling, automatic call logging, and seamless call recording compliance.',
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
  },
  {
    title: 'Data Hygiene',
    desc: 'Setting up automated deduplication rules and waterfall enrichment pipelines so your sales reps are always looking at accurate, up-to-date contact information.',
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      </svg>
    ),
  },
];

export default function SalesSetupAbout() {
  return (
    <section className="relative z-10 py-32 px-6 bg-white w-full">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center mb-20 max-w-3xl">
          <h2 className="text-4xl sm:text-5xl font-medium tracking-tight text-black mb-6">
            The Anatomy of Sales Ops.
          </h2>
          <p className="text-black/50 font-light text-lg">
            We eliminate manual busywork. By connecting your CRM, dialer, and
            calendar via APIs, we give your sales team their time back to do
            what they do best: sell.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-32">
          {salesSetupInfo.map((item, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-10 rounded-3xl border border-black/10 bg-[#fafafa] hover:bg-white hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:border-black/20 transition-all duration-500 flex flex-col group"
            >
              <div className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                {item.icon}
              </div>
              <h3 className="text-xl font-medium text-black mb-3">
                {item.title}
              </h3>
              <p className="text-black/60 font-light leading-relaxed text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Highlight / Growth Stat */}
        <div className="w-full relative rounded-3xl overflow-hidden bg-black text-white p-10 sm:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 border border-black/10 shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] bg-[#2f5b7c]/20 rounded-full blur-[100px]"></div>
          </div>

          <div className="relative z-10 flex-1">
            <div className="text-xs font-bold text-white/50 mb-6 uppercase tracking-[0.2em]">
              The LightningRevenue Standard
            </div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight mb-6 leading-[1.1]">
              How much time is lost <br className="hidden sm:block" /> to manual
              data entry?
            </h3>
            <p className="text-white/70 font-light leading-relaxed max-w-xl text-lg">
              Sales reps are highly paid professionals, not data entry clerks.
              By properly architecting your RevOps stack, we typically recover{' '}
              <strong className="text-white font-medium">
                15 hours per rep, per week
              </strong>
              , while simultaneously achieving absolute{' '}
              <strong className="text-white font-medium">
                100% data accuracy
              </strong>{' '}
              across your entire pipeline.
            </p>
          </div>

          <div className="relative z-10 shrink-0 w-full lg:w-auto flex flex-col sm:flex-row items-center gap-6">
            <div className="flex flex-col items-center justify-center w-full sm:w-48 h-48 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
              <span className="text-5xl font-medium text-white mb-1">
                15<span className="text-[#2f5b7c]">h</span>
              </span>
              <span className="text-xs tracking-widest text-white/50 uppercase font-medium">
                Saved Weekly
              </span>
            </div>
            <div className="flex flex-col items-center justify-center w-full sm:w-48 h-48 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
              <span className="text-5xl font-medium text-white mb-1">
                100<span className="text-[#2f5b7c]">%</span>
              </span>
              <span className="text-xs tracking-widest text-white/50 uppercase font-medium">
                Data Accuracy
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
