'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { getLanguageFromPathname } from '@/lib/i18n';
import { getServicesDictionary } from '@/i18n/get-services-dictionary';

const seoInfo = [
  {
    title: 'Technical Foundation',
    desc: 'Before scaling content, we fix the code. We eliminate crawl errors, optimize core web vitals, and implement perfect schema markup so Google understands your site instantly.',
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
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
  },
  {
    title: 'Intent Mapping',
    desc: "We map every keyword to a specific stage of the buyer's journey. We target bottom-of-funnel queries that have commercial intent, not just high volume vanity metrics.",
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
          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
        />
      </svg>
    ),
  },
  {
    title: 'Content Clusters',
    desc: 'Instead of random blog posts, we build interconnected "clusters" of content around pillar topics. This signals immense topical authority to search engines.',
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
    title: 'On-Page NLP',
    desc: "We optimize using Natural Language Processing (NLP) entities. We ensure your content contains the exact semantic phrasing that Google's AI expects for top rankings.",
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
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
  {
    title: 'Editorial Backlinks',
    desc: 'No spammy links. We execute manual PR outreach to secure high Domain Rating (DR) backlinks from authoritative publications in your specific industry.',
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
          d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
        />
      </svg>
    ),
  },
  {
    title: 'Iterative Decay Updates',
    desc: 'Content decays over time. We continuously monitor your rankings and proactively update, expand, and refresh older content to maintain the #1 spot indefinitely.',
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
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    ),
  },
];

export default function SEOAbout() {
  const t = getServicesDictionary(getLanguageFromPathname(usePathname())).seo.about;

  return (
    <section className="relative z-10 py-32 px-6 bg-white w-full">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center mb-20 max-w-3xl">
          <h2 className="text-4xl sm:text-5xl font-medium tracking-tight text-black mb-6">
            {t.title}
          </h2>
          <p className="text-black/50 font-light text-lg">
            {t.description}
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-32">
          {seoInfo.map((item, idx) => {
            const copy = t.cards[idx] || item;

            return (
            <div
              key={idx}
              className="p-8 sm:p-10 rounded-3xl border border-black/10 bg-[#fafafa] hover:bg-white hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:border-black/20 transition-all duration-500 flex flex-col group"
            >
              <div className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                {item.icon}
              </div>
              <h3 className="text-xl font-medium text-black mb-3">
                {copy.title}
              </h3>
              <p className="text-black/60 font-light leading-relaxed text-sm">
                {copy.desc}
              </p>
            </div>
            );
          })}
        </div>

        {/* Highlight / Growth Stat */}
        <div className="w-full relative rounded-3xl overflow-hidden bg-black text-white p-10 sm:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 border border-black/10 shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] bg-[#2f5b7c]/20 rounded-full blur-[100px]"></div>
          </div>

          <div className="relative z-10 flex-1">
            <div className="text-xs font-bold text-white/50 mb-6 uppercase tracking-[0.2em]">
              {t.highlightEyebrow}
            </div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight mb-6 leading-[1.1]">
              {t.highlightTitle}
            </h3>
            <p className="text-white/70 font-light leading-relaxed max-w-xl text-lg">
              {t.highlightDescription}
            </p>
          </div>

          <div className="relative z-10 shrink-0 w-full lg:w-auto flex flex-col sm:flex-row items-center gap-6">
            {t.stats.map(stat => (
            <div key={stat.label} className="flex flex-col items-center justify-center w-full sm:w-48 h-48 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
              <span className="text-5xl font-medium text-white mb-1">
                {stat.value.replace('%', '')}<span className="text-[#2f5b7c]">{stat.value.includes('%') ? '%' : ''}</span>
              </span>
              <span className="text-xs tracking-widest text-white/50 uppercase font-medium">
                {stat.label}
              </span>
            </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
