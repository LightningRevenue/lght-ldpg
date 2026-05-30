'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import React, { Suspense, useEffect } from 'react';
import {
  ensureAnalyticsState,
  trackAnalyticsEvent,
} from '@/lib/analytics-client';

type ConsentState = {
  analytics: boolean;
};

function AnalyticsRuntime() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleConsentUpdate = (event: Event) => {
      const consent = (event as CustomEvent<ConsentState>).detail;

      if (consent?.analytics) {
        ensureAnalyticsState();
        void trackAnalyticsEvent('page_view', { source: 'consent_update' });
      }
    };

    window.addEventListener(
      'LightningRevenue:consent-updated',
      handleConsentUpdate
    );
    return () =>
      window.removeEventListener(
        'LightningRevenue:consent-updated',
        handleConsentUpdate
      );
  }, []);

  useEffect(() => {
    void trackAnalyticsEvent('page_view');
  }, [pathname, searchParams]);

  return null;
}

export default function AnalyticsProvider() {
  return (
    <Suspense fallback={null}>
      <AnalyticsRuntime />
    </Suspense>
  );
}
