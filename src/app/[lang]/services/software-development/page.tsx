import React from 'react';
import { redirect } from 'next/navigation';
import SoftwareHeader from '@/components/software-components/SoftwareHeader';
import SoftwarePainPoints from '@/components/software-components/SoftwarePainPoints';
import SoftwareAbout from '@/components/software-components/SoftwareAbout';
import SoftwareAdvanced from '@/components/software-components/SoftwareAdvanced';
import SoftwareContact from '@/components/software-components/SoftwareContact';
import SoftwareFAQ from '@/components/software-components/SoftwareFAQ';
import { createPageMetadata, getSeoCopy, getCanonicalPath } from '@/lib/seo-metadata';
import { localizePath } from '@/lib/i18n';
import StructuredData from '@/components/StructuredData';
import { getServiceSchema } from '@/lib/schema';

type PageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { lang } = await params;
  return createPageMetadata('serviceSoftwareDevelopment', lang);
}

export default async function SoftwareDevelopmentPage({ params }: PageProps) {
  const { lang } = await params;

  if (lang === 'ro') {
    redirect(localizePath('/services/software-development', lang));
  }

  const copy = getSeoCopy('serviceSoftwareDevelopment', lang);
  const canonical = getCanonicalPath('serviceSoftwareDevelopment', lang);
  const schemaData = getServiceSchema(copy.title, copy.description, canonical);

  return (
    <main className="min-h-screen bg-white">
      <StructuredData data={schemaData} />
      <SoftwareHeader />
      <SoftwarePainPoints />
      <SoftwareAbout />
      <SoftwareAdvanced />
      <SoftwareContact />
      <SoftwareFAQ />
    </main>
  );
}
