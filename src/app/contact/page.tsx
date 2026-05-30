import React from 'react';
import type { Metadata } from 'next';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact | LightningRevenue',
  description: 'Start a project with LightningRevenue.',
};

const contactStats = [
  { label: 'Response window', value: '24h' },
  { label: 'Discovery format', value: 'Video' },
  { label: 'Scope clarity', value: '100%' },
];

export default function ContactPage() {
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
                  Accepting new projects
                </span>
              </div>

              <h1 className="text-[4.5rem] sm:text-[7rem] xl:text-[7.75rem] font-medium tracking-[-0.04em] text-[#2f5b7c] leading-[0.85] -ml-1">
                Contact
                <span className="block max-w-full text-[clamp(3.4rem,6vw,6.25rem)] leading-[0.88] text-[#2f5b7c]/20 break-words">
                  LightningRevenue.
                </span>
              </h1>

              <p className="mt-10 max-w-xl text-lg text-black/60 font-light leading-relaxed">
                Tell us what you are building, where growth is blocked, and what
                timeline matters. We will route it to the right strategist
                before the first call.
              </p>

              <div className="mt-12 grid grid-cols-3 gap-3 max-w-xl">
                {contactStats.map(stat => (
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
                  Direct
                </div>
                <div className="space-y-4 text-sm">
                  <a
                    href="mailto:antonio@lightning-revenue.com"
                    className="flex items-center justify-between border-b border-white/10 pb-4 text-white/70 hover:text-white transition-colors"
                  >
                    <span>Email</span>
                    <span>antonio@lightning-revenue.com</span>
                  </a>
                  <div className="flex items-center justify-between border-b border-white/10 pb-4 text-white/70">
                    <span>Timezone</span>
                    <span>EU / US overlap</span>
                  </div>
                  <div className="flex items-center justify-between text-white/70">
                    <span>Best fit</span>
                    <span>Growth and build teams</span>
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
