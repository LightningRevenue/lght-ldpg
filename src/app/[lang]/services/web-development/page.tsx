import React from 'react';
import DevHeader from '@/components/dev-components/DevHeader';
import DevPainPoints from '@/components/dev-components/DevPainPoints';
import DevAbout from '@/components/dev-components/DevAbout';
import DevAdvanced from '@/components/dev-components/DevAdvanced';
import DevContact from '@/components/dev-components/DevContact';
import DevFAQ from '@/components/dev-components/DevFAQ';
import { createPageMetadata } from '@/lib/seo-metadata';

type PageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { lang } = await params;
  return createPageMetadata('serviceWebDevelopment', lang);
}

export default function WebDevelopmentPage() {
  return (
    <main className="min-h-screen bg-white">
      <DevHeader />
      <DevPainPoints />
      <DevAbout />
      <DevAdvanced />
      <DevContact />
      <DevFAQ />
    </main>
  );
}
