import React from 'react';
import { redirect } from 'next/navigation';
import { createPageMetadata } from '@/lib/seo-metadata';

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: LayoutProps) {
  const { lang } = await params;
  return createPageMetadata('expertiseSla', lang);
}

export default async function SLALayout({ children, params }: LayoutProps) {
  const { lang } = await params;

  if (lang === 'ro') {
    redirect('/ro/expertise/unavailable');
  }

  return children;
}
