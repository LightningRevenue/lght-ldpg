import type { Metadata } from 'next';
import './globals.css';
import SiteChrome from '@/components/SiteChrome';

export const metadata: Metadata = {
  title: 'LightningRevenue - Premium Digital Agency',
  description: 'Minimalist, high-end digital marketing agency.',
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
      </body>
    </html>
  );
}
