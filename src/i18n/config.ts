export const supportedLanguages = ['en', 'ro'] as const;

export type SupportedLanguage = (typeof supportedLanguages)[number];

export const defaultLanguage: SupportedLanguage = 'en';

const localizedPaths: Partial<Record<SupportedLanguage, Record<string, string>>> = {
  ro: {
    '/services/ppc': '/servicii/promovare-ppc',
    '/services/seo': '/servicii/optimizare-seo',
    '/services/web-development': '/servicii/dezvoltare-web',
    '/services/software-development': '/servicii/dezvoltare-software',
    '/services/smm': '/servicii/social-media',
    '/services/ui-ux': '/servicii/design-ui-ux',
    '/services/unavailable': '/servicii/indisponibil',
    '/about': '/despre',
    '/contact': '/contact',
    '/privacy': '/confidentialitate',
    '/terms': '/termeni',
  },
};

const localizedPathAliases: Record<string, string> = Object.fromEntries(
  Object.values(localizedPaths).flatMap(paths =>
    Object.entries(paths || {}).map(([internalPath, localizedPath]) => [
      localizedPath,
      internalPath,
    ]),
  ),
);

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

  const path = segments.length ? `/${segments.join('/')}` : '/';
  return localizedPathAliases[path] || path;
}

export function localizePath(path: string, language: string): string {
  const languageCode = normalizeLanguage(language);
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  const localizedPath = localizedPaths[languageCode]?.[cleanPath] || cleanPath;

  if (localizedPath === '/') {
    return `/${languageCode}`;
  }

  return `/${languageCode}${localizedPath}`;
}
