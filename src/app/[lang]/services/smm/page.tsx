import React from 'react';
import { redirect } from 'next/navigation';
import SMMHeader from '@/components/smm-components/SMMHeader';
import SMMPainPoints from '@/components/smm-components/SMMPainPoints';
import SMMAbout from '@/components/smm-components/SMMAbout';
import SMMAdvanced from '@/components/smm-components/SMMAdvanced';
import SMMContact from '@/components/smm-components/SMMContact';
import SMMFAQ from '@/components/smm-components/SMMFAQ';
import { createPageMetadata, getSeoCopy, getCanonicalPath } from '@/lib/seo-metadata';
import { localizePath } from '@/lib/i18n';
import StructuredData from '@/components/StructuredData';
import { getServiceSchema } from '@/lib/schema';

type PageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { lang } = await params;
  return createPageMetadata('serviceSmm', lang);
}

export default async function SMMPage({ params }: PageProps) {
  const { lang } = await params;

  if (lang === 'ro') {
    redirect(localizePath('/services/smm', lang));
  }

  const copy = getSeoCopy('serviceSmm', lang);
  const canonical = getCanonicalPath('serviceSmm', lang);
  const schemaData = getServiceSchema(copy.title, copy.description, canonical);

  return (
    <main className="min-h-screen bg-white">
      <StructuredData data={schemaData} />
      <SMMHeader />
      <SMMPainPoints />
      <SMMAbout />
      <SMMAdvanced />
      <SMMContact />
      <SMMFAQ />
    </main>
  );
}
