import { siteOrigin } from '@/lib/seo-metadata';

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'LightningRevenue',
    url: siteOrigin,
    logo: `${siteOrigin}/favicon.jpg`,
    sameAs: [
      // Add social links here if available
    ],
  };
}

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'LightningRevenue',
    url: siteOrigin,
  };
}

export function getServiceSchema(
  serviceName: string,
  serviceDescription: string,
  serviceUrl: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description: serviceDescription,
    provider: {
      '@type': 'Organization',
      name: 'LightningRevenue',
      url: siteOrigin,
    },
    url: serviceUrl,
  };
}
