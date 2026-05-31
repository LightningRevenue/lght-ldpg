import React from 'react';
import HomeHeader from '@/components/HomeHeader';
import MainServices from '@/components/MainServices';
import WhyWorkWithUs from '@/components/WhyWorkWithUs';
import Packages from '@/components/Packages';
import AddOns from '@/components/AddOns';
import EliteTiers from '@/components/EliteTiers';
import FAQ from '@/components/FAQ';
import Newsletter from '@/components/Newsletter';
import { createPageMetadata } from '@/lib/seo-metadata';

type PageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { lang } = await params;
  return createPageMetadata('home', lang);
}

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#fafafa]">
      <HomeHeader />
      <MainServices />
      <WhyWorkWithUs />
      <Packages />
      <AddOns />
      <EliteTiers />
      <FAQ />
      <Newsletter />
    </main>
  );
}
