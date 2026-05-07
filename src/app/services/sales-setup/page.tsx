import React from 'react';
import SalesSetupHeader from '@/components/sales-setup-components/SalesSetupHeader';
import SalesSetupPainPoints from '@/components/sales-setup-components/SalesSetupPainPoints';
import SalesSetupAbout from '@/components/sales-setup-components/SalesSetupAbout';
import SalesSetupAdvanced from '@/components/sales-setup-components/SalesSetupAdvanced';
import SalesSetupContact from '@/components/sales-setup-components/SalesSetupContact';
import SalesSetupFAQ from '@/components/sales-setup-components/SalesSetupFAQ';

export const metadata = {
  title: "CRM & Sales Operations | LRVN",
  description: "Bulletproof DNS configurations and fully automated CRM pipelines.",
};

export default function SalesSetupPage() {
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
