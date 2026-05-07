import React from 'react';
import UIUXHeader from '@/components/ui-ux-components/UIUXHeader';
import UIUXPainPoints from '@/components/ui-ux-components/UIUXPainPoints';
import UIUXAbout from '@/components/ui-ux-components/UIUXAbout';
import UIUXAdvanced from '@/components/ui-ux-components/UIUXAdvanced';
import UIUXContact from '@/components/ui-ux-components/UIUXContact';
import UIUXFAQ from '@/components/ui-ux-components/UIUXFAQ';

export const metadata = {
  title: "UI/UX Design | LRVN",
  description: "Marrying world-class aesthetics with frictionless user journeys.",
};

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
