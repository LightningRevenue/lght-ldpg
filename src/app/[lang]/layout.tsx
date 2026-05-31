import React from 'react';
import { notFound } from 'next/navigation';
import { isSupportedLanguage, supportedLanguages } from '@/lib/i18n';

type LanguageLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

export function generateStaticParams() {
  return supportedLanguages.map(lang => ({ lang }));
}

export default async function LanguageLayout({
  children,
  params,
}: LanguageLayoutProps) {
  const { lang } = await params;

  if (!isSupportedLanguage(lang)) {
    notFound();
  }

  return children;
}
