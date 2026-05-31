import type { Metadata } from 'next';
import './globals.css';
import SiteChrome from '@/components/SiteChrome';
import { siteOrigin } from '@/lib/seo-metadata';
import { GoogleAnalytics } from '@next/third-parties/google';

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  title: 'LightningRevenue - Premium Digital Growth Agency',
  description: 'Senior digital strategy, performance marketing, web development, automation, and revenue systems for ambitious teams.',
  icons: {
    icon: '/favicon.jpg',
    shortcut: '/favicon.jpg',
    apple: '/favicon.jpg',
  },
  verification: {
    google: '7HXE5c4j9u2d7YzDmm0DXdWO6Ov1XICN9CTgzXNb_u4',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col relative">
        <SiteChrome>{children}</SiteChrome>
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
      </body>
    </html>
  );
}
