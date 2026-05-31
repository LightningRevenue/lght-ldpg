import React from 'react';
import PPCHeader from '@/components/ppc-components/PPCHeader';
import PPCAbout from '@/components/ppc-components/PPCAbout';
import PPCPainPoints from '@/components/ppc-components/PPCPainPoints';
import PPCAdvanced from '@/components/ppc-components/PPCAdvanced';
import PPCContact from '@/components/ppc-components/PPCContact';
import PPCFAQ from '@/components/ppc-components/PPCFAQ';
import { createPageMetadata } from '@/lib/seo-metadata';

type PageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { lang } = await params;
  return createPageMetadata('servicePpc', lang);
}

export default function PPCPage() {
  return (
    <main className="min-h-screen bg-white">
      <PPCHeader />
      <PPCPainPoints />
      <PPCAbout />
      <PPCAdvanced />
      <PPCContact />
      <PPCFAQ />
    </main>
  );
}
