'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { getLanguageFromPathname } from '@/lib/i18n';
import { getHomeDictionary } from '@/i18n/get-home-dictionary';

export default function EliteTiers() {
  const t = getHomeDictionary(getLanguageFromPathname(usePathname())).tiers;

  return (
    <section className="relative w-full bg-[#050505] z-10 py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20 sm:mb-28">
          <div className="text-xs font-bold text-white/40 mb-6 uppercase tracking-[0.2em] flex items-center justify-center gap-4">
            <span className="w-8 h-[1px] bg-white/20"></span>
            {t.eyebrow}
            <span className="w-8 h-[1px] bg-white/20"></span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white mb-8">
            {t.title}
          </h2>
          <p className="text-white/50 font-light max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            {t.description}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          
          {/* Gold Tier Card */}
          <div className="group relative h-full bg-[#0a0a0a] p-10 sm:p-14 rounded-2xl border border-white/10 flex flex-col justify-between min-h-[420px] transition-colors duration-500 hover:border-white/30">
            <div>
              <div className="text-xs font-mono text-white/30 uppercase tracking-[0.2em] mb-12">{t.levelOne}</div>
              <h3 className="text-3xl font-medium text-white mb-6 tracking-tight">{t.goldTitle}</h3>
              <p className="text-white/50 font-light leading-relaxed text-base sm:text-lg">
                {t.goldDescription}
              </p>
            </div>
            
            <div className="mt-16 flex items-center justify-between border-t border-white/10 pt-6">
              <div className="text-[11px] font-mono text-white/30 uppercase tracking-[0.2em]">{t.status}</div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-white/40 uppercase tracking-widest">{t.locked}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
              </div>
            </div>
          </div>

          {/* Platinum Tier Card */}
          <div className="group relative h-full bg-[#0a0a0a] p-10 sm:p-14 rounded-2xl border border-white/10 flex flex-col justify-between min-h-[420px] transition-colors duration-500 hover:border-white/30">
            <div>
              <div className="text-xs font-mono text-white/30 uppercase tracking-[0.2em] mb-12">{t.levelTwo}</div>
              <h3 className="text-3xl font-medium text-white mb-6 tracking-tight">{t.platinumTitle}</h3>
              <p className="text-white/50 font-light leading-relaxed text-base sm:text-lg">
                {t.platinumDescription}
              </p>
            </div>
            
            <div className="mt-16 flex items-center justify-between border-t border-white/10 pt-6">
              <div className="text-[11px] font-mono text-white/30 uppercase tracking-[0.2em]">{t.status}</div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-white/40 uppercase tracking-widest">{t.locked}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
