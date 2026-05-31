import React from 'react';
import UIUXHeader from '@/components/ui-ux-components/UIUXHeader';
import UIUXPainPoints from '@/components/ui-ux-components/UIUXPainPoints';
import UIUXAbout from '@/components/ui-ux-components/UIUXAbout';
import UIUXAdvanced from '@/components/ui-ux-components/UIUXAdvanced';
import UIUXContact from '@/components/ui-ux-components/UIUXContact';
import UIUXFAQ from '@/components/ui-ux-components/UIUXFAQ';
import { createPageMetadata } from '@/lib/seo-metadata';

type PageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { lang } = await params;
  return createPageMetadata('serviceUiUx', lang);
}

export default function UIUXPage() {
  return (
    <main className="min-h-screen bg-white">
      <UIUXHeader />
      <UIUXPainPoints />
      <UIUXAbout />
      <UIUXAdvanced />
      <UIUXContact />
      <UIUXFAQ />
    </main>
  );
}
