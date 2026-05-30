'use client';

import React, { useEffect, useMemo, useState } from 'react';

type ConsentState = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
  version: string;
  decidedAt: string;
};

const CONSENT_KEY = 'LightningRevenue_consent';
const CONSENT_VERSION = '2026-05-30';
const ONE_YEAR_SECONDS = 60 * 60 * 24 * 365;

const optionalCookies = [
  {
    key: 'analytics',
    title: 'Analytics cookies',
    description:
      'Help us understand page performance, traffic sources, and which content drives project inquiries.',
  },
  {
    key: 'marketing',
    title: 'Marketing cookies',
    description:
      'Allow campaign attribution and retargeting pixels when we run paid acquisition.',
  },
  {
    key: 'preferences',
    title: 'Preference cookies',
    description:
      'Remember non-essential interface choices so the site can feel more tailored over time.',
  },
] as const;

type OptionalCookieKey = (typeof optionalCookies)[number]['key'];

function buildConsent(
  optional: Record<OptionalCookieKey, boolean>
): ConsentState {
  return {
    necessary: true,
    analytics: optional.analytics,
    marketing: optional.marketing,
    preferences: optional.preferences,
    version: CONSENT_VERSION,
    decidedAt: new Date().toISOString(),
  };
}

function getStoredConsent(): ConsentState | null {
  if (typeof window === 'undefined') {
    return null;
  }

  const rawValue = window.localStorage.getItem(CONSENT_KEY);

  if (!rawValue) {
    return null;
  }

  try {
    const parsed = JSON.parse(rawValue) as ConsentState;
    return parsed.version === CONSENT_VERSION ? parsed : null;
  } catch {
    return null;
  }
}

function persistConsent(consent: ConsentState) {
  window.localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
  document.cookie = `${CONSENT_KEY}=${encodeURIComponent(JSON.stringify(consent))}; Max-Age=${ONE_YEAR_SECONDS}; Path=/; SameSite=Lax`;
  window.dispatchEvent(
    new CustomEvent('LightningRevenue:consent-updated', { detail: consent })
  );
}

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [optional, setOptional] = useState<Record<OptionalCookieKey, boolean>>({
    analytics: false,
    marketing: false,
    preferences: false,
  });

  const allOptionalSelected = useMemo(
    () => optional.analytics && optional.marketing && optional.preferences,
    [optional]
  );

  useEffect(() => {
    const storedConsent = getStoredConsent();

    if (!storedConsent) {
      setIsVisible(true);
      return;
    }

    window.dispatchEvent(
      new CustomEvent('LightningRevenue:consent-updated', {
        detail: storedConsent,
      })
    );
  }, []);

  useEffect(() => {
    const openConsentPreferences = () => {
      const storedConsent = getStoredConsent();

      if (storedConsent) {
        setOptional({
          analytics: storedConsent.analytics,
          marketing: storedConsent.marketing,
          preferences: storedConsent.preferences,
        });
      }

      setShowSettings(true);
      setIsVisible(true);
    };

    window.addEventListener(
      'LightningRevenue:open-consent-preferences',
      openConsentPreferences
    );

    return () => {
      window.removeEventListener(
        'LightningRevenue:open-consent-preferences',
        openConsentPreferences
      );
    };
  }, []);

  const saveConsent = (nextOptional: Record<OptionalCookieKey, boolean>) => {
    persistConsent(buildConsent(nextOptional));
    setIsVisible(false);
    setShowSettings(false);
  };

  const acceptAll = () => {
    saveConsent({
      analytics: true,
      marketing: true,
      preferences: true,
    });
  };

  const saveOptionalSelection = () => {
    saveConsent(optional);
  };

  const toggleOptional = (key: OptionalCookieKey) => {
    setOptional(current => ({
      ...current,
      [key]: !current[key],
    }));
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-[120] px-4 pb-4 sm:px-6 sm:pb-6">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-[1.75rem] border border-black/10 bg-white shadow-[0_24px_80px_rgba(0,0,0,0.18)]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 p-6 sm:p-8">
          <div>
            <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-black/35">
              Privacy preferences
            </div>
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-black">
              We use cookies to improve LightningRevenue.
            </h2>
            <p className="mt-4 max-w-2xl text-sm sm:text-base font-light leading-relaxed text-black/60">
              Essential cookies keep the site working. Optional cookies help us
              measure analytics, improve campaigns, and remember preferences. We
              only enable optional tracking if you approve it.
            </p>

            {showSettings && (
              <div className="mt-6 grid grid-cols-1 gap-3">
                <div className="rounded-2xl border border-black/10 bg-[#fafafa] p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-sm font-bold text-black">
                        Necessary cookies
                      </div>
                      <p className="mt-1 text-sm font-light text-black/55">
                        Required for security, form behavior, and basic site
                        functionality.
                      </p>
                    </div>
                    <span className="rounded-full bg-black px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                      Always on
                    </span>
                  </div>
                </div>

                {optionalCookies.map(item => (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => toggleOptional(item.key)}
                    className={`rounded-2xl border p-4 text-left transition-all ${
                      optional[item.key]
                        ? 'border-black bg-black text-white shadow-lg'
                        : 'border-black/10 bg-[#fafafa] text-black hover:border-black/30'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-sm font-bold">{item.title}</div>
                        <p
                          className={`mt-1 text-sm font-light ${optional[item.key] ? 'text-white/65' : 'text-black/55'}`}
                        >
                          {item.description}
                        </p>
                      </div>
                      <span
                        className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                          optional[item.key]
                            ? 'border-white bg-white'
                            : 'border-black/25'
                        }`}
                      >
                        {optional[item.key] && (
                          <span className="h-2.5 w-2.5 rounded-full bg-black" />
                        )}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="flex flex-col justify-end gap-3 lg:w-64">
            <button
              type="button"
              onClick={acceptAll}
              className="rounded-full bg-black px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#2f5b7c]"
            >
              Accept all
            </button>

            {showSettings ? (
              <>
                <button
                  type="button"
                  onClick={saveOptionalSelection}
                  className="rounded-full border border-black/15 px-6 py-3.5 text-sm font-bold text-black transition-colors hover:border-black hover:bg-black hover:text-white"
                >
                  Save preferences
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setOptional({
                      analytics: !allOptionalSelected,
                      marketing: !allOptionalSelected,
                      preferences: !allOptionalSelected,
                    })
                  }
                  className="text-sm font-medium text-black/50 transition-colors hover:text-black"
                >
                  {allOptionalSelected
                    ? 'Clear optional cookies'
                    : 'Select all optional cookies'}
                </button>
              </>
            ) : (
              <button
                type="button"
                onClick={() => setShowSettings(true)}
                className="rounded-full border border-black/15 px-6 py-3.5 text-sm font-bold text-black transition-colors hover:border-black hover:bg-black hover:text-white"
              >
                Manage optional cookies
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
