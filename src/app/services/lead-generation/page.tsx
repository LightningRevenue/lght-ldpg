import React from 'react';
import LeadGenHeader from '@/components/leadgen-components/LeadGenHeader';
import LeadGenPainPoints from '@/components/leadgen-components/LeadGenPainPoints';
import LeadGenAbout from '@/components/leadgen-components/LeadGenAbout';
import LeadGenAdvanced from '@/components/leadgen-components/LeadGenAdvanced';
import LeadGenContact from '@/components/leadgen-components/LeadGenContact';
import LeadGenFAQ from '@/components/leadgen-components/LeadGenFAQ';

export const metadata = {
  title: "B2B Lead Generation | LRVN",
  description: "Automated, high-volume outbound systems and sales infrastructure.",
};

export default function LeadGenerationPage() {
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
