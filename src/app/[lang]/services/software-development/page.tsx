import React from 'react';
import SoftwareHeader from '@/components/software-components/SoftwareHeader';
import SoftwarePainPoints from '@/components/software-components/SoftwarePainPoints';
import SoftwareAbout from '@/components/software-components/SoftwareAbout';
import SoftwareAdvanced from '@/components/software-components/SoftwareAdvanced';
import SoftwareContact from '@/components/software-components/SoftwareContact';
import SoftwareFAQ from '@/components/software-components/SoftwareFAQ';
import { createPageMetadata } from '@/lib/seo-metadata';

type PageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { lang } = await params;
  return createPageMetadata('serviceSoftwareDevelopment', lang);
}

export default function SoftwareDevelopmentPage() {
  return (
    <main className="min-h-screen bg-white">
      <SoftwareHeader />
      <SoftwarePainPoints />
      <SoftwareAbout />
      <SoftwareAdvanced />
      <SoftwareContact />
      <SoftwareFAQ />
    </main>
  );
}
