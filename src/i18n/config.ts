export const supportedLanguages = ['en', 'ro'] as const;

export type SupportedLanguage = (typeof supportedLanguages)[number];

export const defaultLanguage: SupportedLanguage = 'en';

export function isSupportedLanguage(value: string): value is SupportedLanguage {
  return supportedLanguages.includes(value as SupportedLanguage);
}

export function normalizeLanguage(language: string): SupportedLanguage {
  return isSupportedLanguage(language) ? language : defaultLanguage;
}

export function getLanguageFromPathname(pathname: string): SupportedLanguage {
  const segment = pathname.split('/').filter(Boolean)[0];
  return segment && isSupportedLanguage(segment) ? segment : defaultLanguage;
}

export function stripLanguageFromPathname(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);

  if (segments[0] && isSupportedLanguage(segments[0])) {
    segments.shift();
  }

  return segments.length ? `/${segments.join('/')}` : '/';
}

export function localizePath(path: string, language: string): string {
  const languageCode = normalizeLanguage(language);
  const cleanPath = path.startsWith('/') ? path : `/${path}`;

  if (cleanPath === '/') {
    return `/${languageCode}`;
  }

  return `/${languageCode}${cleanPath}`;
}
