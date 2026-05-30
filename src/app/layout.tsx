import type { Metadata } from 'next';
import './globals.css';
import SiteChrome from '@/components/SiteChrome';

export const metadata: Metadata = {
  title: 'LightningRevenue - Premium Digital Agency',
  description: 'Minimalist, high-end digital marketing agency.',
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
