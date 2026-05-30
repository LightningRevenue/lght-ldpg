"use client";

import React from "react";
import { usePathname } from "next/navigation";
import AnalyticsProvider from "@/components/AnalyticsProvider";
import CookieConsent from "@/components/CookieConsent";
import FloatingHelp from "@/components/FloatingHelp";
import Footer from "@/components/Footer";
import GoogleAnalyticsConsent from "@/components/GoogleAnalyticsConsent";
import Navbar from "@/components/Navbar";

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdminRoute = pathname === "/admin" || pathname.startsWith("/admin/");

  if (isAdminRoute) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      <FloatingHelp />
      {children}
      <Footer />
      <AnalyticsProvider />
      <GoogleAnalyticsConsent />
      <CookieConsent />
    </>
  );
}
