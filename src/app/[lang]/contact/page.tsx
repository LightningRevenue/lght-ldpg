import React from 'react';
import ContactForm from './ContactForm';
import { createPageMetadata } from '@/lib/seo-metadata';
import { getContactDictionary } from '@/i18n/get-contact-dictionary';

type PageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { lang } = await params;
  return createPageMetadata('contact', lang);
}

export default async function ContactPage({ params }: PageProps) {
  const { lang } = await params;
  const t = getContactDictionary(lang);

  return (
    <main className="min-h-screen bg-[#fafafa] text-black">
      <section className="relative overflow-hidden px-6 pt-40 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,0.95fr)_minmax(520px,0.85fr)] gap-12 xl:gap-16 items-start">
            <div className="min-w-0 xl:sticky xl:top-32">
              <div className="flex items-center gap-3 mb-10">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                </span>
                <span className="text-[13px] font-medium uppercase tracking-wide text-black/50">
                  {t.availability}
                </span>
              </div>

              <h1 className="text-[4.5rem] sm:text-[7rem] xl:text-[7.75rem] font-medium tracking-[-0.04em] text-[#2f5b7c] leading-[0.85] -ml-1">
                {t.title}
                <span className="block max-w-full text-[clamp(3.4rem,6vw,6.25rem)] leading-[0.88] text-[#2f5b7c]/20 break-words">
                  {t.titleGhost}
                </span>
              </h1>

              <p className="mt-10 max-w-xl text-lg text-black/60 font-light leading-relaxed">
                {t.description}
              </p>

              <div className="mt-12 grid grid-cols-3 gap-3 max-w-xl">
                {t.stats.map(stat => (
                  <div
                    key={stat.label}
                    className="border border-black/10 bg-white rounded-2xl p-4"
                  >
                    <div className="text-2xl font-medium text-black">
                      {stat.value}
                    </div>
                    <div className="mt-2 text-[10px] font-bold uppercase tracking-[0.18em] text-black/35">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 rounded-[2rem] bg-black p-8 text-white">
                <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40 mb-5">
                  {t.direct}
                </div>
                <div className="space-y-4 text-sm">
                  <a
                    href="mailto:antonio@lightning-revenue.com"
                    className="flex items-center justify-between border-b border-white/10 pb-4 text-white/70 hover:text-white transition-colors"
                  >
                    <span>{t.email}</span>
                    <span>antonio@lightning-revenue.com</span>
                  </a>
                  <div className="flex items-center justify-between border-b border-white/10 pb-4 text-white/70">
                    <span>{t.timezone}</span>
                    <span>{t.timezoneValue}</span>
                  </div>
                  <div className="flex items-center justify-between text-white/70">
                    <span>{t.bestFit}</span>
                    <span>{t.bestFitValue}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="min-w-0 w-full max-w-3xl xl:max-w-none xl:justify-self-end">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
