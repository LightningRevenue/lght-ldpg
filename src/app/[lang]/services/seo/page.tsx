import React from 'react';
import { redirect } from 'next/navigation';
import SEOHeader from '@/components/seo-components/SEOHeader';
import SEOPainPoints from '@/components/seo-components/SEOPainPoints';
import SEOAbout from '@/components/seo-components/SEOAbout';
import SEOAdvanced from '@/components/seo-components/SEOAdvanced';
import SEOContact from '@/components/seo-components/SEOContact';
import SEOFAQ from '@/components/seo-components/SEOFAQ';
import { createPageMetadata, getSeoCopy, getCanonicalPath } from '@/lib/seo-metadata';
import { localizePath } from '@/lib/i18n';
import StructuredData from '@/components/StructuredData';
import { getServiceSchema } from '@/lib/schema';

type PageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { lang } = await params;
  return createPageMetadata('serviceSeo', lang);
}

export default async function SEOPage({ params }: PageProps) {
  const { lang } = await params;

  if (lang === 'ro') {
    redirect(localizePath('/services/seo', lang));
  }

  const copy = getSeoCopy('serviceSeo', lang);
  const canonical = getCanonicalPath('serviceSeo', lang);
  const schemaData = getServiceSchema(copy.title, copy.description, canonical);

  return (
    <main className="min-h-screen bg-white">
      <StructuredData data={schemaData} />
      <SEOHeader />
      <SEOPainPoints />
      <SEOAbout />
      <SEOAdvanced />
      <SEOContact />
      <SEOFAQ />
    </main>
  );
}
