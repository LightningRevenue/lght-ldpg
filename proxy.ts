import { NextRequest, NextResponse } from 'next/server';
import { defaultLanguage, isSupportedLanguage } from '@/lib/i18n';

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const firstSegment = pathname.split('/').filter(Boolean)[0];

  if (firstSegment && isSupportedLanguage(firstSegment)) {
    return NextResponse.next();
  }

  const redirectUrl = request.nextUrl.clone();
  redirectUrl.pathname =
    pathname === '/' ? `/${defaultLanguage}` : `/${defaultLanguage}${pathname}`;

  return NextResponse.redirect(redirectUrl);
}

export const config = {
  matcher: ['/((?!api|admin|_next/static|_next/image|favicon.ico|.*\\..*).*)'],
};
