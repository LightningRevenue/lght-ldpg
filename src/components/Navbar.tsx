'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import {
  getLanguageFromPathname,
  localizePath,
  stripLanguageFromPathname,
} from '@/lib/i18n';
import { getCommonDictionary } from '@/i18n/get-common-dictionary';

const languages = [
  { code: 'en', label: 'English', shortLabel: 'EN', flag: '/languages/english.png' },
  { code: 'ro', label: 'Romanian', shortLabel: 'RO', flag: '/languages/romanian.png' },
];

const languageStorageKey = 'lrvn_language';
const languageCookieMaxAge = 60 * 60 * 24 * 365;

const isRomanianRestrictedService = (path: string, language: string) =>
  language === 'ro' &&
  ['/services/lead-generation', '/services/sales-setup'].includes(path);

const isRomanianRestrictedExpertise = (path: string, language: string) =>
  language === 'ro' &&
  ['/expertise/sla', '/expertise/account-manager'].includes(path);

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileExpertiseOpen, setMobileExpertiseOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(
    languages.find(item => item.code === getLanguageFromPathname(pathname)) ||
      languages[0],
  );
  const t = getCommonDictionary(selectedLanguage.code).nav;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const pathLanguage = getLanguageFromPathname(pathname);
    const storedLanguage = window.localStorage.getItem(languageStorageKey);
    const language =
      languages.find(item => item.code === pathLanguage) ||
      languages.find(item => item.code === storedLanguage);

    if (language) {
      setSelectedLanguage(language);
      window.localStorage.setItem(languageStorageKey, language.code);
    }
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
    setMobileExpertiseOpen(false);
    setLanguageOpen(false);
  };

  const chooseLanguage = (code: string) => {
    const language = languages.find(item => item.code === code) || languages[0];
    const basePath = stripLanguageFromPathname(pathname);
    let targetPath = basePath;

    if (isRomanianRestrictedService(basePath, language.code)) {
      targetPath = '/services/unavailable';
    }

    if (isRomanianRestrictedExpertise(basePath, language.code)) {
      targetPath = '/expertise/unavailable';
    }

    setSelectedLanguage(language);
    setLanguageOpen(false);
    window.localStorage.setItem(languageStorageKey, language.code);
    document.cookie = `${languageStorageKey}=${language.code}; Max-Age=${languageCookieMaxAge}; Path=/; SameSite=Lax`;
    router.push(localizePath(targetPath, language.code));
  };

  const href = (path: string) => localizePath(path, selectedLanguage.code);
  const showServiceLink = (path: string) =>
    !isRomanianRestrictedService(path, selectedLanguage.code);
  const showExpertise = selectedLanguage.code !== 'ro';

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 flex justify-center mt-6 px-4 sm:px-6 pointer-events-none">
        <div
          className={`pointer-events-auto flex items-center justify-between transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            scrolled
              ? 'w-full max-w-5xl bg-white/40 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.06)] rounded-full px-6 py-3'
              : 'w-full max-w-6xl bg-transparent border-transparent px-2 py-4'
          }`}
        >
          {/* Logo */}
          <Link
            href={href('/')}
            className="relative z-20 flex min-w-[150px] items-center"
            aria-label="LightningRevenue home"
          >
            <Image
              src="/logo-lrvn.png"
              alt="LightningRevenue"
              width={92}
              height={40}
              priority
              loading="eager"
              fetchPriority="high"
              className="h-10 w-auto object-contain sm:h-9"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 justify-center flex-1 z-10">
            {/* Servicii Dropdown */}
            <div className="group relative">
              <button className="text-[14px] font-bold tracking-wide text-black/70 hover:text-black transition-colors duration-300 py-4 flex items-center gap-1.5">
                {t.services}
                <svg
                  className="w-3.5 h-3.5 opacity-50 group-hover:rotate-180 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="absolute top-[calc(100%-0.5rem)] left-1/2 -translate-x-1/2 pt-4 opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]">
                <div className="bg-white/95 backdrop-blur-2xl border border-black/10 rounded-2xl p-2 w-64 shadow-[0_16px_40px_-10px_rgba(0,0,0,0.1)] relative">
                  <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-t border-l border-black/10 rotate-45"></div>
                  <div className="relative z-10 flex flex-col gap-1">
                    <Link
                      href={href('/services/ppc')}
                      className="text-[14px] font-bold text-black/70 hover:text-black hover:bg-slate-50 px-4 py-2.5 rounded-xl transition-all duration-200"
                    >
                      PPC
                    </Link>
                    <Link
                      href={href('/services/seo')}
                      className="text-[14px] font-bold text-black/70 hover:text-black hover:bg-slate-50 px-4 py-2.5 rounded-xl transition-all duration-200"
                    >
                      SEO
                    </Link>
                    <Link
                      href={href('/services/web-development')}
                      className="text-[14px] font-bold text-black/70 hover:text-black hover:bg-slate-50 px-4 py-2.5 rounded-xl transition-all duration-200"
                    >
                      Web Development
                    </Link>
                    <Link
                      href={href('/services/software-development')}
                      className="text-[14px] font-bold text-black/70 hover:text-black hover:bg-slate-50 px-4 py-2.5 rounded-xl transition-all duration-200"
                    >
                      Software Development
                    </Link>
                    <Link
                      href={href('/services/smm')}
                      className="text-[14px] font-bold text-black/70 hover:text-black hover:bg-slate-50 px-4 py-2.5 rounded-xl transition-all duration-200"
                    >
                      SMM
                    </Link>
                    <Link
                      href={href('/services/ui-ux')}
                      className="text-[14px] font-bold text-black/70 hover:text-black hover:bg-slate-50 px-4 py-2.5 rounded-xl transition-all duration-200"
                    >
                      UI/UX
                    </Link>
                    {showServiceLink('/services/lead-generation') && (
                      <Link
                        href={href('/services/lead-generation')}
                        className="text-[14px] font-bold text-black/70 hover:text-black hover:bg-slate-50 px-4 py-2.5 rounded-xl transition-all duration-200"
                      >
                        Lead Generation
                      </Link>
                    )}
                    {showServiceLink('/services/sales-setup') && (
                      <Link
                        href={href('/services/sales-setup')}
                        className="text-[14px] font-bold text-black/70 hover:text-black hover:bg-slate-50 px-4 py-2.5 rounded-xl transition-all duration-200"
                      >
                        Sales Tools Set-Up
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {showExpertise && (
              <div className="group relative">
                <button className="text-[14px] font-bold tracking-wide text-black/70 hover:text-black transition-colors duration-300 py-4 flex items-center gap-1.5">
                  {t.expertise}
                  <svg
                    className="w-3.5 h-3.5 opacity-50 group-hover:rotate-180 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div className="absolute top-[calc(100%-0.5rem)] left-1/2 -translate-x-1/2 pt-4 opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]">
                  <div className="bg-white/95 backdrop-blur-2xl border border-black/10 rounded-2xl p-2 w-64 shadow-[0_16px_40px_-10px_rgba(0,0,0,0.1)] relative">
                    <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-t border-l border-black/10 rotate-45"></div>
                    <div className="relative z-10 flex flex-col gap-1">
                      <Link
                        href={href('/expertise/sla')}
                        className="text-[14px] font-bold text-black/70 hover:text-black hover:bg-slate-50 px-4 py-2.5 rounded-xl transition-all duration-200"
                      >
                        SLA
                      </Link>
                      <Link
                        href={href('/expertise/account-manager')}
                        className="text-[14px] font-bold text-black/70 hover:text-black hover:bg-slate-50 px-4 py-2.5 rounded-xl transition-all duration-200"
                      >
                        Account Manager
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <Link
              href={href('/about')}
              className="text-[14px] font-bold tracking-wide text-black/70 hover:text-black transition-colors duration-300 py-4"
            >
              {t.about}
            </Link>
            <Link
              href={href('/contact')}
              className="text-[14px] font-bold tracking-wide text-black/70 hover:text-black transition-colors duration-300 py-4"
            >
              {t.contact}
            </Link>
          </nav>

          {/* CTA & Login */}
          <div className="flex items-center justify-end gap-3 relative z-20 min-w-[64px] lg:min-w-[230px]">
            <div className="relative hidden lg:block">
              <button
                type="button"
                onClick={() => setLanguageOpen(current => !current)}
                className="flex items-center gap-2 rounded-full border border-black/10 bg-white/40 px-3 py-2 text-[13px] font-bold text-black/70 backdrop-blur-xl transition-colors hover:border-black/20 hover:text-black"
                aria-label="Select language"
              >
                <Image
                  src={selectedLanguage.flag}
                  alt={selectedLanguage.label}
                  width={22}
                  height={22}
                  className="h-5 w-5 rounded-full object-cover"
                />
                <span>{selectedLanguage.shortLabel}</span>
                <svg className={`h-3.5 w-3.5 opacity-50 transition-transform ${languageOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {languageOpen && (
                <div className="absolute right-0 top-[calc(100%+0.75rem)] w-52 rounded-2xl border border-black/10 bg-white/95 p-2 shadow-[0_16px_40px_-10px_rgba(0,0,0,0.12)] backdrop-blur-2xl">
                  {languages.map(language => (
                    <button
                      key={language.code}
                      type="button"
                      onClick={() => chooseLanguage(language.code)}
                      className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-bold transition-colors ${
                        selectedLanguage.code === language.code
                          ? 'bg-black text-white'
                          : 'text-black/65 hover:bg-black/[0.04] hover:text-black'
                      }`}
                    >
                      <Image
                        src={language.flag}
                        alt={language.label}
                        width={24}
                        height={24}
                        className="h-6 w-6 rounded-full object-cover"
                      />
                      <span>{language.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Link
              href={href('/contact')}
              className="hidden lg:flex items-center justify-center px-6 py-2.5 text-[14px] font-semibold tracking-wide text-white bg-black rounded-full hover:scale-105 hover:bg-black/90 hover:shadow-lg transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] whitespace-nowrap"
            >
              {t.startProject}
            </Link>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden flex flex-col justify-center items-end w-8 h-8 gap-1.5 relative z-[60]"
              aria-label="Toggle menu"
            >
              <span
                className={`h-[2px] bg-black block rounded-full transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${mobileOpen ? 'w-5 rotate-45 translate-y-[5px]' : 'w-5'}`}
              ></span>
              <span
                className={`h-[2px] bg-black block rounded-full transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${mobileOpen ? 'w-5 -rotate-45 -translate-y-[5px]' : 'w-3.5'}`}
              ></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[55] bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${mobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
        onClick={closeMobile}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 z-[56] w-full max-w-sm h-full bg-white shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden flex flex-col ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Mobile Header */}
        <div className="flex items-center justify-between px-6 py-6 border-b border-black/5 shrink-0">
          <Link
            href={href('/')}
            onClick={closeMobile}
            className="flex items-center"
            aria-label="LightningRevenue home"
          >
            <Image
              src="/logo-lrvn.png"
              alt="LightningRevenue"
              width={92}
              height={42}
              loading="eager"
              fetchPriority="high"
              className="h-10 w-auto object-contain"
            />
          </Link>
          <button
            onClick={closeMobile}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/5 transition-colors"
            aria-label="Close menu"
          >
            <svg
              className="w-5 h-5 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Links */}
        <div className="flex-1 overflow-y-auto px-6 py-8">
          <div className="flex flex-col gap-1">
            {/* Services Accordion */}
            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between py-4 text-lg font-bold text-black"
              >
                {t.services}
                <svg
                  className={`w-4 h-4 text-black/40 transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${mobileServicesOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="flex flex-col gap-1 pl-4 pb-4 border-l-2 border-black/5 ml-2">
                  <Link
                    href={href('/services/ppc')}
                    onClick={closeMobile}
                    className="text-[15px] font-medium text-black/60 hover:text-black py-2.5 px-3 rounded-xl hover:bg-black/[0.03] transition-all"
                  >
                    PPC
                  </Link>
                  <Link
                    href={href('/services/seo')}
                    onClick={closeMobile}
                    className="text-[15px] font-medium text-black/60 hover:text-black py-2.5 px-3 rounded-xl hover:bg-black/[0.03] transition-all"
                  >
                    SEO
                  </Link>
                  <Link
                    href={href('/services/web-development')}
                    onClick={closeMobile}
                    className="text-[15px] font-medium text-black/60 hover:text-black py-2.5 px-3 rounded-xl hover:bg-black/[0.03] transition-all"
                  >
                    Web Development
                  </Link>
                  <Link
                    href={href('/services/software-development')}
                    onClick={closeMobile}
                    className="text-[15px] font-medium text-black/60 hover:text-black py-2.5 px-3 rounded-xl hover:bg-black/[0.03] transition-all"
                  >
                    Software Development
                  </Link>
                  <Link
                    href={href('/services/smm')}
                    onClick={closeMobile}
                    className="text-[15px] font-medium text-black/60 hover:text-black py-2.5 px-3 rounded-xl hover:bg-black/[0.03] transition-all"
                  >
                    SMM
                  </Link>
                  <Link
                    href={href('/services/ui-ux')}
                    onClick={closeMobile}
                    className="text-[15px] font-medium text-black/60 hover:text-black py-2.5 px-3 rounded-xl hover:bg-black/[0.03] transition-all"
                  >
                    UI/UX
                  </Link>
                  {showServiceLink('/services/lead-generation') && (
                    <Link
                      href={href('/services/lead-generation')}
                      onClick={closeMobile}
                      className="text-[15px] font-medium text-black/60 hover:text-black py-2.5 px-3 rounded-xl hover:bg-black/[0.03] transition-all"
                    >
                      Lead Generation
                    </Link>
                  )}
                  {showServiceLink('/services/sales-setup') && (
                    <Link
                      href={href('/services/sales-setup')}
                      onClick={closeMobile}
                      className="text-[15px] font-medium text-black/60 hover:text-black py-2.5 px-3 rounded-xl hover:bg-black/[0.03] transition-all"
                    >
                      Sales Tools Set-Up
                    </Link>
                  )}
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-black/5"></div>

            {showExpertise && (
              <>
                <div>
                  <button
                    onClick={() => setMobileExpertiseOpen(!mobileExpertiseOpen)}
                    className="w-full flex items-center justify-between py-4 text-lg font-bold text-black"
                  >
                    {t.expertise}
                    <svg
                      className={`w-4 h-4 text-black/40 transition-transform duration-300 ${mobileExpertiseOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${mobileExpertiseOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <div className="flex flex-col gap-1 pl-4 pb-4 border-l-2 border-black/5 ml-2">
                      <Link
                        href={href('/expertise/sla')}
                        onClick={closeMobile}
                        className="text-[15px] font-medium text-black/60 hover:text-black py-2.5 px-3 rounded-xl hover:bg-black/[0.03] transition-all"
                      >
                        SLA
                      </Link>
                      <Link
                        href={href('/expertise/account-manager')}
                        onClick={closeMobile}
                        className="text-[15px] font-medium text-black/60 hover:text-black py-2.5 px-3 rounded-xl hover:bg-black/[0.03] transition-all"
                      >
                        Account Manager
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="h-px bg-black/5"></div>
              </>
            )}

            {/* Direct Links */}
            <Link
              href={href('/about')}
              onClick={closeMobile}
              className="py-4 text-lg font-bold text-black hover:text-[#2f5b7c] transition-colors"
            >
              {t.about}
            </Link>
            <div className="h-px bg-black/5"></div>
            <Link
              href={href('/contact')}
              onClick={closeMobile}
              className="py-4 text-lg font-bold text-black hover:text-[#2f5b7c] transition-colors"
            >
              {t.contact}
            </Link>

            <div className="h-px bg-black/5"></div>

            <div className="py-4">
              <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-black/30">
                {t.language}
              </div>
              <div className="grid grid-cols-2 gap-2">
                {languages.map(language => (
                  <button
                    key={language.code}
                    type="button"
                    onClick={() => chooseLanguage(language.code)}
                    className={`flex items-center gap-2 rounded-2xl border px-3 py-3 text-sm font-bold transition-colors ${
                      selectedLanguage.code === language.code
                        ? 'border-black bg-black text-white'
                        : 'border-black/10 bg-black/[0.03] text-black/65'
                    }`}
                  >
                    <Image
                      src={language.flag}
                      alt={language.label}
                      width={24}
                      height={24}
                      className="h-6 w-6 rounded-full object-cover"
                    />
                    <span>{language.shortLabel}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Footer CTAs */}
        <div className="px-6 py-6 border-t border-black/5 shrink-0 flex flex-col gap-3">
          <Link
            href={href('/contact')}
            onClick={closeMobile}
            className="w-full flex items-center justify-center px-6 py-3.5 text-[15px] font-bold text-white bg-black rounded-2xl hover:bg-black/90 transition-all"
          >
            {t.startProject}
          </Link>
          <Link
            href={href('/contact')}
            onClick={closeMobile}
            className="w-full flex items-center justify-center px-6 py-3.5 text-[15px] font-bold text-black bg-black/5 rounded-2xl hover:bg-black/10 transition-all"
          >
            {t.contact}
          </Link>
        </div>
      </div>
    </>
  );
}
