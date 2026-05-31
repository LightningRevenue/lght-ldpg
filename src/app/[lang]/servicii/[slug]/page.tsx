import React from 'react';
import { notFound, redirect } from 'next/navigation';
import PPCHeader from '@/components/ppc-components/PPCHeader';
import PPCAbout from '@/components/ppc-components/PPCAbout';
import PPCPainPoints from '@/components/ppc-components/PPCPainPoints';
import PPCAdvanced from '@/components/ppc-components/PPCAdvanced';
import PPCContact from '@/components/ppc-components/PPCContact';
import PPCFAQ from '@/components/ppc-components/PPCFAQ';
import SEOHeader from '@/components/seo-components/SEOHeader';
import SEOPainPoints from '@/components/seo-components/SEOPainPoints';
import SEOAbout from '@/components/seo-components/SEOAbout';
import SEOAdvanced from '@/components/seo-components/SEOAdvanced';
import SEOContact from '@/components/seo-components/SEOContact';
import SEOFAQ from '@/components/seo-components/SEOFAQ';
import DevHeader from '@/components/dev-components/DevHeader';
import DevPainPoints from '@/components/dev-components/DevPainPoints';
import DevAbout from '@/components/dev-components/DevAbout';
import DevAdvanced from '@/components/dev-components/DevAdvanced';
import DevContact from '@/components/dev-components/DevContact';
import DevFAQ from '@/components/dev-components/DevFAQ';
import SoftwareHeader from '@/components/software-components/SoftwareHeader';
import SoftwarePainPoints from '@/components/software-components/SoftwarePainPoints';
import SoftwareAbout from '@/components/software-components/SoftwareAbout';
import SoftwareAdvanced from '@/components/software-components/SoftwareAdvanced';
import SoftwareContact from '@/components/software-components/SoftwareContact';
import SoftwareFAQ from '@/components/software-components/SoftwareFAQ';
import SMMHeader from '@/components/smm-components/SMMHeader';
import SMMPainPoints from '@/components/smm-components/SMMPainPoints';
import SMMAbout from '@/components/smm-components/SMMAbout';
import SMMAdvanced from '@/components/smm-components/SMMAdvanced';
import SMMContact from '@/components/smm-components/SMMContact';
import SMMFAQ from '@/components/smm-components/SMMFAQ';
import UIUXHeader from '@/components/ui-ux-components/UIUXHeader';
import UIUXPainPoints from '@/components/ui-ux-components/UIUXPainPoints';
import UIUXAbout from '@/components/ui-ux-components/UIUXAbout';
import UIUXAdvanced from '@/components/ui-ux-components/UIUXAdvanced';
import UIUXContact from '@/components/ui-ux-components/UIUXContact';
import UIUXFAQ from '@/components/ui-ux-components/UIUXFAQ';
import { createPageMetadata, getSeoCopy, getCanonicalPath, type SeoRouteKey } from '@/lib/seo-metadata';
import StructuredData from '@/components/StructuredData';
import { getServiceSchema } from '@/lib/schema';

type PageProps = {
  params: Promise<{ lang: string; slug: string }>;
};

const servicePages: Record<
  string,
  { routeKey: SeoRouteKey; component: React.ReactNode }
> = {
  'promovare-ppc': {
    routeKey: 'servicePpc',
    component: (
      <>
        <PPCHeader />
        <PPCPainPoints />
        <PPCAbout />
        <PPCAdvanced />
        <PPCContact />
        <PPCFAQ />
      </>
    ),
  },
  'optimizare-seo': {
    routeKey: 'serviceSeo',
    component: (
      <>
        <SEOHeader />
        <SEOPainPoints />
        <SEOAbout />
        <SEOAdvanced />
        <SEOContact />
        <SEOFAQ />
      </>
    ),
  },
  'dezvoltare-web': {
    routeKey: 'serviceWebDevelopment',
    component: (
      <>
        <DevHeader />
        <DevPainPoints />
        <DevAbout />
        <DevAdvanced />
        <DevContact />
        <DevFAQ />
      </>
    ),
  },
  'dezvoltare-software': {
    routeKey: 'serviceSoftwareDevelopment',
    component: (
      <>
        <SoftwareHeader />
        <SoftwarePainPoints />
        <SoftwareAbout />
        <SoftwareAdvanced />
        <SoftwareContact />
        <SoftwareFAQ />
      </>
    ),
  },
  'social-media': {
    routeKey: 'serviceSmm',
    component: (
      <>
        <SMMHeader />
        <SMMPainPoints />
        <SMMAbout />
        <SMMAdvanced />
        <SMMContact />
        <SMMFAQ />
      </>
    ),
  },
  'design-ui-ux': {
    routeKey: 'serviceUiUx',
    component: (
      <>
        <UIUXHeader />
        <UIUXPainPoints />
        <UIUXAbout />
        <UIUXAdvanced />
        <UIUXContact />
        <UIUXFAQ />
      </>
    ),
  },
};

export function generateStaticParams() {
  return Object.keys(servicePages).map(slug => ({ lang: 'ro', slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { lang, slug } = await params;
  const page = servicePages[slug];

  if (lang !== 'ro' || !page) {
    return {};
  }

  return createPageMetadata(page.routeKey, lang);
}

export default async function RomanianServicePage({ params }: PageProps) {
  const { lang, slug } = await params;

  if (lang !== 'ro') {
    redirect('/en');
  }

  const page = servicePages[slug];

  if (!page) {
    notFound();
  }

  const copy = getSeoCopy(page.routeKey, lang);
  const canonical = getCanonicalPath(page.routeKey, lang);
  const schemaData = getServiceSchema(copy.title, copy.description, canonical);

  return (
    <main className="min-h-screen bg-white">
      <StructuredData data={schemaData} />
      {page.component}
    </main>
  );
}
