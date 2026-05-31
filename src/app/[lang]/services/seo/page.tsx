import React from 'react';
import SEOHeader from '@/components/seo-components/SEOHeader';
import SEOPainPoints from '@/components/seo-components/SEOPainPoints';
import SEOAbout from '@/components/seo-components/SEOAbout';
import SEOAdvanced from '@/components/seo-components/SEOAdvanced';
import SEOContact from '@/components/seo-components/SEOContact';
import SEOFAQ from '@/components/seo-components/SEOFAQ';
import { createPageMetadata } from '@/lib/seo-metadata';

type PageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { lang } = await params;
  return createPageMetadata('serviceSeo', lang);
}

export default function SEOPage() {
  return (
    <main className="min-h-screen bg-white">
      <SEOHeader />
      <SEOPainPoints />
      <SEOAbout />
      <SEOAdvanced />
      <SEOContact />
      <SEOFAQ />
    </main>
  );
}
