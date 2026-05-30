"use client";

import React, { useEffect, useRef, useState } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";

const GA_ID = "G-Z3M7XM7WMZ";
const CONSENT_KEY = "LightningRevenue_consent";

type ConsentState = {
  analytics?: boolean;
};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    [key: `ga-disable-${string}`]: boolean | undefined;
  }
}

function readAnalyticsConsent() {
  if (typeof window === "undefined") {
    return false;
  }

  const rawValue = window.localStorage.getItem(CONSENT_KEY);

  if (!rawValue) {
    return false;
  }

  try {
    return (JSON.parse(rawValue) as ConsentState).analytics === true;
  } catch {
    return false;
  }
}

function expireCookie(name: string) {
  document.cookie = `${name}=; Max-Age=0; Path=/; SameSite=Lax`;
  document.cookie = `${name}=; Max-Age=0; Path=/; Domain=${window.location.hostname}; SameSite=Lax`;
}

function clearGoogleAnalyticsCookies() {
  expireCookie("_ga");
  expireCookie(`_ga_${GA_ID.replace("G-", "")}`);
}

function disableGoogleAnalytics() {
  window[`ga-disable-${GA_ID}`] = true;

  if (window.gtag) {
    window.gtag("consent", "update", {
      analytics_storage: "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
  }

  clearGoogleAnalyticsCookies();
}

function enableGoogleAnalytics() {
  window[`ga-disable-${GA_ID}`] = false;
  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
    };

  window.gtag("consent", "update", {
    analytics_storage: "granted",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
}

export default function GoogleAnalyticsConsent() {
  const pathname = usePathname();
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);
  const [scriptReady, setScriptReady] = useState(false);
  const lastTrackedPath = useRef("");

  useEffect(() => {
    const syncConsent = (event?: Event) => {
      const consent = event instanceof CustomEvent ? (event.detail as ConsentState | undefined) : null;
      const isEnabled = consent?.analytics === true || (!consent && readAnalyticsConsent());

      setAnalyticsEnabled(isEnabled);

      if (isEnabled) {
        enableGoogleAnalytics();
      } else {
        disableGoogleAnalytics();
      }
    };

    syncConsent();
    window.addEventListener("LightningRevenue:consent-updated", syncConsent);

    return () => {
      window.removeEventListener("LightningRevenue:consent-updated", syncConsent);
    };
  }, []);

  useEffect(() => {
    if (!analyticsEnabled || !scriptReady || !window.gtag) {
      return;
    }

    const queryString = window.location.search.replace(/^\?/, "");
    const pagePath = queryString ? `${pathname}?${queryString}` : pathname;

    if (lastTrackedPath.current === pagePath) {
      return;
    }

    lastTrackedPath.current = pagePath;
    window.gtag("config", GA_ID, {
      page_path: pagePath,
    });
  }, [analyticsEnabled, pathname, scriptReady]);

  if (!analyticsEnabled) {
    return null;
  }

  return (
    <>
      <Script
        id="google-analytics-loader"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
        onLoad={() => {
          enableGoogleAnalytics();
          window.gtag?.("js", new Date());
          setScriptReady(true);
        }}
      />
    </>
  );
}
