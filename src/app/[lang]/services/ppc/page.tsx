import React from 'react';
import { redirect } from 'next/navigation';
import PPCHeader from '@/components/ppc-components/PPCHeader';
import PPCAbout from '@/components/ppc-components/PPCAbout';
import PPCPainPoints from '@/components/ppc-components/PPCPainPoints';
import PPCAdvanced from '@/components/ppc-components/PPCAdvanced';
import PPCContact from '@/components/ppc-components/PPCContact';
import PPCFAQ from '@/components/ppc-components/PPCFAQ';
import { createPageMetadata, getSeoCopy, getCanonicalPath } from '@/lib/seo-metadata';
import { localizePath } from '@/lib/i18n';
import StructuredData from '@/components/StructuredData';
import { getServiceSchema } from '@/lib/schema';

type PageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { lang } = await params;
  return createPageMetadata('servicePpc', lang);
}

export default async function PPCPage({ params }: PageProps) {
  const { lang } = await params;

  if (lang === 'ro') {
    redirect(localizePath('/services/ppc', lang));
  }

  const copy = getSeoCopy('servicePpc', lang);
  const canonical = getCanonicalPath('servicePpc', lang);
  const schemaData = getServiceSchema(copy.title, copy.description, canonical);

  return (
    <main className="min-h-screen bg-white">
      <StructuredData data={schemaData} />
      <PPCHeader />
      <PPCPainPoints />
      <PPCAbout />
      <PPCAdvanced />
      <PPCContact />
      <PPCFAQ />
    </main>
  );
}
