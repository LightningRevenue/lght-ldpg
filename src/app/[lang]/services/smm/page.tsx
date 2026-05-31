import React from 'react';
import SMMHeader from '@/components/smm-components/SMMHeader';
import SMMPainPoints from '@/components/smm-components/SMMPainPoints';
import SMMAbout from '@/components/smm-components/SMMAbout';
import SMMAdvanced from '@/components/smm-components/SMMAdvanced';
import SMMContact from '@/components/smm-components/SMMContact';
import SMMFAQ from '@/components/smm-components/SMMFAQ';
import { createPageMetadata } from '@/lib/seo-metadata';

type PageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { lang } = await params;
  return createPageMetadata('serviceSmm', lang);
}

export default function SMMPage() {
  return (
    <main className="min-h-screen bg-white">
      <SMMHeader />
      <SMMPainPoints />
      <SMMAbout />
      <SMMAdvanced />
      <SMMContact />
      <SMMFAQ />
    </main>
  );
}
