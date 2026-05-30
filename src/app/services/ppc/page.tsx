import React from 'react';
import PPCHeader from '@/components/ppc-components/PPCHeader';
import PPCAbout from '@/components/ppc-components/PPCAbout';
import PPCPainPoints from '@/components/ppc-components/PPCPainPoints';
import PPCAdvanced from '@/components/ppc-components/PPCAdvanced';
import PPCContact from '@/components/ppc-components/PPCContact';
import PPCFAQ from '@/components/ppc-components/PPCFAQ';

export const metadata = {
  title: 'PPC Management | LightningRevenue',
  description: 'Data-Driven PPC Scaling and Performance Marketing.',
};

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
