import React from 'react';
import { redirect } from 'next/navigation';
import UIUXHeader from '@/components/ui-ux-components/UIUXHeader';
import UIUXPainPoints from '@/components/ui-ux-components/UIUXPainPoints';
import UIUXAbout from '@/components/ui-ux-components/UIUXAbout';
import UIUXAdvanced from '@/components/ui-ux-components/UIUXAdvanced';
import UIUXContact from '@/components/ui-ux-components/UIUXContact';
import UIUXFAQ from '@/components/ui-ux-components/UIUXFAQ';
import { createPageMetadata, getSeoCopy, getCanonicalPath } from '@/lib/seo-metadata';
import { localizePath } from '@/lib/i18n';
import StructuredData from '@/components/StructuredData';
import { getServiceSchema } from '@/lib/schema';

type PageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { lang } = await params;
  return createPageMetadata('serviceUiUx', lang);
}

export default async function UIUXPage({ params }: PageProps) {
  const { lang } = await params;

  if (lang === 'ro') {
    redirect(localizePath('/services/ui-ux', lang));
  }

  const copy = getSeoCopy('serviceUiUx', lang);
  const canonical = getCanonicalPath('serviceUiUx', lang);
  const schemaData = getServiceSchema(copy.title, copy.description, canonical);

  return (
    <main className="min-h-screen bg-white">
      <StructuredData data={schemaData} />
      <UIUXHeader />
      <UIUXPainPoints />
      <UIUXAbout />
      <UIUXAdvanced />
      <UIUXContact />
      <UIUXFAQ />
    </main>
  );
}
