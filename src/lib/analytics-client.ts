'use client';

export type AnalyticsEventMetadata = Record<
  string,
  string | number | boolean | null | undefined
>;

type ConsentState = {
  analytics: boolean;
};

type AnalyticsState = {
  sessionId: string;
  visitorId: string;
  landingPage: string;
  referrer: string;
  utm: {
    source: string;
    medium: string;
    campaign: string;
    content: string;
    term: string;
  };
};

const CONSENT_KEY = 'LightningRevenue_consent';
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;
const SESSION_MAX_AGE = 60 * 60 * 2;
const ANALYTICS_COOKIE_NAMES = [
  'LightningRevenue_visitor_id',
  'LightningRevenue_session_id',
  'LightningRevenue_landing_page',
  'LightningRevenue_referrer',
  'LightningRevenue_utm_source',
  'LightningRevenue_utm_medium',
  'LightningRevenue_utm_campaign',
  'LightningRevenue_utm_content',
  'LightningRevenue_utm_term',
];

function randomId() {
  if (window.crypto?.randomUUID) {
    return window.crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function readCookie(key: string) {
  const cookie = document.cookie
    .split('; ')
    .find(item => item.startsWith(`${key}=`));

  return cookie ? decodeURIComponent(cookie.split('=').slice(1).join('=')) : '';
}

function writeCookie(key: string, value: string, maxAge = COOKIE_MAX_AGE) {
  document.cookie = `${key}=${encodeURIComponent(value)}; Max-Age=${maxAge}; Path=/; SameSite=Lax`;
}

function expireCookie(key: string) {
  document.cookie = `${key}=; Max-Age=0; Path=/; SameSite=Lax`;

  if (window.location.hostname) {
    document.cookie = `${key}=; Max-Age=0; Path=/; Domain=${window.location.hostname}; SameSite=Lax`;
  }
}

function readConsent() {
  const rawConsent = window.localStorage.getItem(CONSENT_KEY);

  if (!rawConsent) {
    return null;
  }

  try {
    return JSON.parse(rawConsent) as ConsentState;
  } catch {
    return null;
  }
}

export function hasAnalyticsConsent() {
  return readConsent()?.analytics === true;
}

export function clearAnalyticsState() {
  ANALYTICS_COOKIE_NAMES.forEach(expireCookie);
}

function readOrCreateCookie(
  key: string,
  fallback: string,
  maxAge = COOKIE_MAX_AGE
) {
  const currentValue = readCookie(key);

  if (currentValue) {
    return currentValue;
  }

  writeCookie(key, fallback, maxAge);
  return fallback;
}

export function ensureAnalyticsState(): AnalyticsState | null {
  if (!hasAnalyticsConsent()) {
    return null;
  }

  const params = new URLSearchParams(window.location.search);
  const path = `${window.location.pathname}${window.location.search}`;
  const visitorId = readOrCreateCookie(
    'LightningRevenue_visitor_id',
    randomId()
  );
  const sessionId = readOrCreateCookie(
    'LightningRevenue_session_id',
    randomId(),
    SESSION_MAX_AGE
  );
  const landingPage = readOrCreateCookie('LightningRevenue_landing_page', path);
  const referrer = readOrCreateCookie(
    'LightningRevenue_referrer',
    document.referrer || 'direct'
  );
  const utm = {
    source: readOrCreateCookie(
      'LightningRevenue_utm_source',
      params.get('utm_source') || ''
    ),
    medium: readOrCreateCookie(
      'LightningRevenue_utm_medium',
      params.get('utm_medium') || ''
    ),
    campaign: readOrCreateCookie(
      'LightningRevenue_utm_campaign',
      params.get('utm_campaign') || ''
    ),
    content: readOrCreateCookie(
      'LightningRevenue_utm_content',
      params.get('utm_content') || ''
    ),
    term: readOrCreateCookie(
      'LightningRevenue_utm_term',
      params.get('utm_term') || ''
    ),
  };

  writeCookie('LightningRevenue_session_id', sessionId, SESSION_MAX_AGE);

  return {
    sessionId,
    visitorId,
    landingPage,
    referrer,
    utm,
  };
}

export async function trackAnalyticsEvent(
  eventName: string,
  metadata: AnalyticsEventMetadata = {}
) {
  const analyticsState = ensureAnalyticsState();

  if (!analyticsState) {
    return;
  }

  await fetch('/api/analytics/events', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      sessionId: analyticsState.sessionId,
      visitorId: analyticsState.visitorId,
      eventName,
      path: `${window.location.pathname}${window.location.search}`,
      landingPage: analyticsState.landingPage,
      referrer: analyticsState.referrer,
      utm: analyticsState.utm,
      metadata,
    }),
    keepalive: true,
  }).catch(() => {
    // Analytics must never break the user experience.
  });
}
