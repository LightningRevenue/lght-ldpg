import { NextRequest, NextResponse } from 'next/server';
import {
  defaultLanguage,
  isSupportedLanguage,
  type SupportedLanguage,
} from '@/lib/i18n';

const LANGUAGE_COOKIE = 'lrvn_language';

function detectRequestLanguage(request: NextRequest): SupportedLanguage {
  const cookieLanguage = request.cookies.get(LANGUAGE_COOKIE)?.value;

  if (cookieLanguage && isSupportedLanguage(cookieLanguage)) {
    return cookieLanguage;
  }

  const country =
    request.headers.get('x-vercel-ip-country') ||
    request.headers.get('cf-ipcountry') ||
    request.headers.get('x-country-code');

  if (country?.toUpperCase() === 'RO') {
    return 'ro';
  }

  const acceptLanguage = request.headers
    .get('accept-language')
    ?.toLowerCase();

  if (acceptLanguage?.startsWith('ro')) {
    return 'ro';
  }

  return defaultLanguage;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const firstSegment = pathname.split('/').filter(Boolean)[0];

  if (pathname === '/sitemap') {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = '/sitemap.xml';
    return NextResponse.redirect(redirectUrl);
  }

  if (firstSegment && isSupportedLanguage(firstSegment)) {
    return NextResponse.next();
  }

  const redirectUrl = request.nextUrl.clone();
  const language = detectRequestLanguage(request);

  redirectUrl.pathname =
    pathname === '/' ? `/${language}` : `/${language}${pathname}`;

  return NextResponse.redirect(redirectUrl);
}

export const config = {
  matcher: ['/((?!api|admin|_next/static|_next/image|favicon.ico|.*\\..*).*)'],
};
