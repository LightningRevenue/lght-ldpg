"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import { getLanguageFromPathname } from '@/i18n/config';
import { getServicesDictionary } from '@/i18n/get-services-dictionary';

const smmInfo = [
  {
    title: 'Short-Form Dominance',
    desc: 'Mastering TikTok, Reels, and Shorts. We script, edit, and distribute high-retention vertical video that the algorithm favors, capturing massive organic reach.',
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
          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: 'Platform-Native Copywriting',
    desc: 'No copy/pasting across networks. We write deeply engaging Twitter threads, professional LinkedIn carousels, and aesthetic Instagram captions tailored to each audience.',
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
          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
        />
      </svg>
    ),
  },
  {
    title: 'Algorithmic Trend Hacking',
    desc: 'We monitor micro-trends, audio signals, and platform updates daily. By jumping on trends early, we catapult your brand into algorithmic virality before competitors react.',
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
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
  },
  {
    title: 'Community Management',
    desc: "We don't just broadcast; we engage. We actively manage comments, reply to DMs, and foster discussions to turn casual viewers into die-hard brand superfans.",
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
          d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
        />
      </svg>
    ),
  },
  {
    title: 'Influencer Seeding',
    desc: 'Identifying and negotiating with micro-influencers and creators in your specific niche to amplify your message through trusted, third-party voices.',
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
          d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
        />
      </svg>
    ),
  },
  {
    title: 'Content Repurposing Engine',
    desc: 'Extracting maximum ROI. We take one core piece of content (like a podcast or webinar) and splinter it into 20+ optimized micro-assets for distribution across all channels.',
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

export default function SMMAbout() {
  const t = getServicesDictionary(getLanguageFromPathname(usePathname())).smm.about;

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
          {smmInfo.map((item, idx) => {
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
            {t.stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center w-full sm:w-48 h-48 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm"
              >
                <span className="text-5xl font-medium text-white mb-1">
                  {stat.value.replace('%', '')}
                  {stat.value.includes('%') && (
                    <span className="text-[#2f5b7c]">%</span>
                  )}
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
