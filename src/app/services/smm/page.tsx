import React from 'react';
import SMMHeader from '@/components/smm-components/SMMHeader';
import SMMPainPoints from '@/components/smm-components/SMMPainPoints';
import SMMAbout from '@/components/smm-components/SMMAbout';
import SMMAdvanced from '@/components/smm-components/SMMAdvanced';
import SMMContact from '@/components/smm-components/SMMContact';
import SMMFAQ from '@/components/smm-components/SMMFAQ';

export const metadata = {
  title: "Social Media Management | LRVN",
  description: "Building viral ecosystems and die-hard communities.",
};

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
