import type { MetadataRoute } from 'next';
import {
  getLanguageAlternates,
  seoRoutePaths,
  siteOrigin,
  type SeoRouteKey,
} from '@/lib/seo-metadata';
import { localizePath, supportedLanguages } from '@/lib/i18n';

const routePriorities: Partial<Record<SeoRouteKey, number>> = {
  home: 1,
  contact: 0.9,
  about: 0.8,
  privacy: 0.4,
  terms: 0.4,
};

const routeChangeFrequency: Partial<
  Record<SeoRouteKey, MetadataRoute.Sitemap[number]['changeFrequency']>
> = {
  home: 'weekly',
  contact: 'monthly',
  about: 'monthly',
  privacy: 'yearly',
  terms: 'yearly',
};

function absoluteUrl(path: string) {
  return new URL(path, siteOrigin).toString();
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return Object.entries(seoRoutePaths).flatMap(([routeKey, routePath]) => {
    const key = routeKey as SeoRouteKey;
    const alternates = Object.fromEntries(
      Object.entries(getLanguageAlternates(key)).map(([language, path]) => [
        language,
        absoluteUrl(path),
      ]),
    );

    return supportedLanguages.map(language => ({
      url: absoluteUrl(localizePath(routePath, language)),
      lastModified,
      changeFrequency: routeChangeFrequency[key] || 'monthly',
      priority: routePriorities[key] || 0.7,
      alternates: {
        languages: alternates,
      },
    }));
  });
}
