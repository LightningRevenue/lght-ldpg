import { getDatabaseSchema, getPool } from '@/lib/db';

type AttributionCookies = {
  sessionId: string | null;
  visitorId: string | null;
  landingPage: string | null;
  referrer: string | null;
  utmSource: string | null;
  utmMedium: string | null;
  utmCampaign: string | null;
  utmContent: string | null;
  utmTerm: string | null;
};

export type LeadType =
  | 'contact'
  | 'service_request'
  | 'help_popup'
  | 'newsletter'
  | 'engagement_model';

function parseCookieHeader(cookieHeader: string | null) {
  const cookies = new Map<string, string>();

  if (!cookieHeader) {
    return cookies;
  }

  for (const part of cookieHeader.split(';')) {
    const [rawKey, ...rawValue] = part.trim().split('=');
    if (!rawKey || rawValue.length === 0) {
      continue;
    }

    cookies.set(rawKey, decodeURIComponent(rawValue.join('=')));
  }

  return cookies;
}

function readCookie(cookies: Map<string, string>, key: string) {
  const value = cookies.get(key);
  return value && value.length <= 1000 ? value : null;
}

export function readAttributionCookies(request: Request): AttributionCookies {
  const cookies = parseCookieHeader(request.headers.get('cookie'));

  return {
    sessionId: readCookie(cookies, 'LightningRevenue_session_id'),
    visitorId: readCookie(cookies, 'LightningRevenue_visitor_id'),
    landingPage: readCookie(cookies, 'LightningRevenue_landing_page'),
    referrer: readCookie(cookies, 'LightningRevenue_referrer'),
    utmSource: readCookie(cookies, 'LightningRevenue_utm_source'),
    utmMedium: readCookie(cookies, 'LightningRevenue_utm_medium'),
    utmCampaign: readCookie(cookies, 'LightningRevenue_utm_campaign'),
    utmContent: readCookie(cookies, 'LightningRevenue_utm_content'),
    utmTerm: readCookie(cookies, 'LightningRevenue_utm_term'),
  };
}

export async function recordLeadAttribution({
  request,
  leadType,
  leadId,
}: {
  request: Request;
  leadType: LeadType;
  leadId: string;
}) {
  const attribution = readAttributionCookies(request);

  if (!attribution.sessionId && !attribution.visitorId) {
    return;
  }

  const schema = getDatabaseSchema();

  await getPool().query(
    `
      insert into ${schema}.analytics_lead_attribution (
        lead_type,
        lead_id,
        session_id,
        visitor_id,
        landing_page,
        referrer,
        utm_source,
        utm_medium,
        utm_campaign,
        utm_content,
        utm_term
      )
      values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
    `,
    [
      leadType,
      leadId,
      attribution.sessionId,
      attribution.visitorId,
      attribution.landingPage,
      attribution.referrer,
      attribution.utmSource,
      attribution.utmMedium,
      attribution.utmCampaign,
      attribution.utmContent,
      attribution.utmTerm,
    ]
  );
}
