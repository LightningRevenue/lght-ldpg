import React from 'react';
import SEOHeader from '@/components/seo-components/SEOHeader';
import SEOPainPoints from '@/components/seo-components/SEOPainPoints';
import SEOAbout from '@/components/seo-components/SEOAbout';
import SEOAdvanced from '@/components/seo-components/SEOAdvanced';
import SEOContact from '@/components/seo-components/SEOContact';
import SEOFAQ from '@/components/seo-components/SEOFAQ';

export const metadata = {
  title: "SEO Optimization | LRVN",
  description: "Technical SEO and organic growth architecture.",
};

export default function SEOPage() {
  return (
    <main className="min-h-screen bg-white">
      <SEOHeader />
      <SEOPainPoints />
      <SEOAbout />
      <SEOAdvanced />
      <SEOContact />
      <SEOFAQ />
    </main>
  );
}
