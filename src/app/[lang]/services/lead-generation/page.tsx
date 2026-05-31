import React from 'react';
import { redirect } from 'next/navigation';
import LeadGenHeader from '@/components/leadgen-components/LeadGenHeader';
import LeadGenPainPoints from '@/components/leadgen-components/LeadGenPainPoints';
import LeadGenAbout from '@/components/leadgen-components/LeadGenAbout';
import LeadGenAdvanced from '@/components/leadgen-components/LeadGenAdvanced';
import LeadGenContact from '@/components/leadgen-components/LeadGenContact';
import LeadGenFAQ from '@/components/leadgen-components/LeadGenFAQ';
import { createPageMetadata } from '@/lib/seo-metadata';
import { localizePath } from '@/lib/i18n';

type PageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { lang } = await params;
  return createPageMetadata('serviceLeadGeneration', lang);
}

export default async function LeadGenerationPage({ params }: PageProps) {
  const { lang } = await params;

  if (lang === 'ro') {
    redirect(localizePath('/services/unavailable', lang));
  }

  return (
    <main className="min-h-screen bg-white">
      <LeadGenHeader />
      <LeadGenPainPoints />
      <LeadGenAbout />
      <LeadGenAdvanced />
      <LeadGenContact />
      <LeadGenFAQ />
    </main>
  );
}
