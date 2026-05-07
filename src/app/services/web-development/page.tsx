import React from 'react';
import DevHeader from '@/components/dev-components/DevHeader';
import DevPainPoints from '@/components/dev-components/DevPainPoints';
import DevAbout from '@/components/dev-components/DevAbout';
import DevAdvanced from '@/components/dev-components/DevAdvanced';
import DevContact from '@/components/dev-components/DevContact';
import DevFAQ from '@/components/dev-components/DevFAQ';

export const metadata = {
  title: "Web Design & Development | LRVN",
  description: "High-performance web applications and marketing sites.",
};

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
