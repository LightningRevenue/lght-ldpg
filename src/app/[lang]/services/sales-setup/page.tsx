import React from 'react';
import { redirect } from 'next/navigation';
import SalesSetupHeader from '@/components/sales-setup-components/SalesSetupHeader';
import SalesSetupPainPoints from '@/components/sales-setup-components/SalesSetupPainPoints';
import SalesSetupAbout from '@/components/sales-setup-components/SalesSetupAbout';
import SalesSetupAdvanced from '@/components/sales-setup-components/SalesSetupAdvanced';
import SalesSetupContact from '@/components/sales-setup-components/SalesSetupContact';
import SalesSetupFAQ from '@/components/sales-setup-components/SalesSetupFAQ';
import { createPageMetadata } from '@/lib/seo-metadata';

type PageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { lang } = await params;
  return createPageMetadata('serviceSalesSetup', lang);
}

export default async function SalesSetupPage({ params }: PageProps) {
  const { lang } = await params;

  if (lang === 'ro') {
    redirect('/ro/services/unavailable');
  }

  return (
    <main className="min-h-screen bg-white">
      <SalesSetupHeader />
      <SalesSetupPainPoints />
      <SalesSetupAbout />
      <SalesSetupAdvanced />
      <SalesSetupContact />
      <SalesSetupFAQ />
    </main>
  );
}
