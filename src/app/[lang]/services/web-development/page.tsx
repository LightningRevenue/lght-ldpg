import React from 'react';
import { redirect } from 'next/navigation';
import DevHeader from '@/components/dev-components/DevHeader';
import DevPainPoints from '@/components/dev-components/DevPainPoints';
import DevAbout from '@/components/dev-components/DevAbout';
import DevAdvanced from '@/components/dev-components/DevAdvanced';
import DevContact from '@/components/dev-components/DevContact';
import DevFAQ from '@/components/dev-components/DevFAQ';
import { createPageMetadata, getSeoCopy, getCanonicalPath } from '@/lib/seo-metadata';
import { localizePath } from '@/lib/i18n';
import StructuredData from '@/components/StructuredData';
import { getServiceSchema } from '@/lib/schema';

type PageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { lang } = await params;
  return createPageMetadata('serviceWebDevelopment', lang);
}

export default async function WebDevelopmentPage({ params }: PageProps) {
  const { lang } = await params;

  if (lang === 'ro') {
    redirect(localizePath('/services/web-development', lang));
  }

  const copy = getSeoCopy('serviceWebDevelopment', lang);
  const canonical = getCanonicalPath('serviceWebDevelopment', lang);
  const schemaData = getServiceSchema(copy.title, copy.description, canonical);

  return (
    <main className="min-h-screen bg-white">
      <StructuredData data={schemaData} />
      <DevHeader />
      <DevPainPoints />
      <DevAbout />
      <DevAdvanced />
      <DevContact />
      <DevFAQ />
    </main>
  );
}
