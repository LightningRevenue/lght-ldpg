import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ConsentChoicesButton from './ConsentChoicesButton';

const complianceBadges = [
  { label: 'HIPAA Aligned' },
  { label: 'GDPR Aligned' },
  { label: 'ISO 27001 Aligned' },
];

export default function Footer() {
  return (
    <footer className="bg-[#050505] text-white pt-20 pb-8 px-6 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Top Section - CTA */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-12">
          <div>
            <div className="text-xs font-bold text-white/30 mb-4 uppercase tracking-[0.2em] flex items-center gap-4">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
              Accepting new projects
            </div>
            <h2 className="text-4xl sm:text-5xl font-medium tracking-tight mb-4">
              Let's build the impossible.
            </h2>
            <p className="text-white/50 font-light max-w-md text-base">
              Partner with an elite digital agency that acts as your dedicated
              growth engine.
            </p>
          </div>
          <Link
            href="/contact"
            className="group flex flex-col items-center justify-center w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-white text-black hover:bg-white/90 hover:scale-[0.98] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
          >
            <span className="text-xs font-bold tracking-wide z-10 group-hover:-translate-y-1.5 transition-transform duration-500">
              Start Project
            </span>
            <div className="absolute bottom-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-1.5 transition-all duration-500">
              <svg
                className="w-3.5 h-3.5 text-black -rotate-45"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </div>
          </Link>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 border-t border-white/10 pt-12">
          <div className="flex flex-col gap-3">
            <h4 className="text-white/30 text-[10px] font-bold uppercase tracking-widest mb-3">
              Services
            </h4>
            <Link
              href="/services/ppc"
              className="text-white/60 hover:text-white transition-colors text-sm font-light"
            >
              PPC
            </Link>
            <Link
              href="/services/seo"
              className="text-white/60 hover:text-white transition-colors text-sm font-light"
            >
              SEO
            </Link>
            <Link
              href="/services/web-development"
              className="text-white/60 hover:text-white transition-colors text-sm font-light"
            >
              Web Development
            </Link>
            <Link
              href="/services/software-development"
              className="text-white/60 hover:text-white transition-colors text-sm font-light"
            >
              Software Development
            </Link>
            <Link
              href="/services/smm"
              className="text-white/60 hover:text-white transition-colors text-sm font-light"
            >
              SMM
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-white/30 text-[10px] font-bold uppercase tracking-widest mb-3">
              Expertise & Tiers
            </h4>
            <Link
              href="/expertise/sla"
              className="text-white/60 hover:text-white transition-colors text-sm font-light"
            >
              SLA Guarantees
            </Link>
            <Link
              href="/expertise/account-manager"
              className="text-white/60 hover:text-white transition-colors text-sm font-light"
            >
              Account Manager
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-white/30 text-[10px] font-bold uppercase tracking-widest mb-3">
              Company
            </h4>
            <Link
              href="/about"
              className="text-white/60 hover:text-white transition-colors text-sm font-light"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-white/60 hover:text-white transition-colors text-sm font-light"
            >
              Contact
            </Link>
            <ConsentChoicesButton />
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-white/30 text-[10px] font-bold uppercase tracking-widest mb-3">
              Socials
            </h4>
            <a
              href="#"
              className="text-white/60 hover:text-white transition-colors text-sm font-light"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-white/60 hover:text-white transition-colors text-sm font-light"
            >
              Instagram
            </a>
          </div>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-3 border-t border-white/10 pt-8 sm:grid-cols-3">
          {complianceBadges.map(badge => (
            <div
              key={badge.label}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3"
            >
              {' '}
              <span className="text-sm font-light text-white/55">
                {badge.label}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom Logo & Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <Link
            href="/"
            className="flex items-center"
            aria-label="LightningRevenue home"
          >
            <Image
              src="/logo-lrvn.png"
              alt="LightningRevenue"
              width={190}
              height={45}
              className="h-9 w-auto object-contain brightness-0 invert"
            />
          </Link>
          <div className="flex flex-col md:flex-row items-center gap-6 text-xs font-light text-white/40">
            <p>
              © {new Date().getFullYear()} LightningRevenue . All rights
              reserved.
            </p>
            <div className="flex gap-8">
              <Link
                href="/privacy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
