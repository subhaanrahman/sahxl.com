import type { Metadata } from "next";
import { fontBody, fontDisplay, fontHeading, fontMono } from "@/lib/fonts";
import { SiteHeader } from "@/components/nav/SiteHeader";
import { SiteFooter } from "@/components/nav/SiteFooter";
import { cn } from "@/lib/cn";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sahxl.com"),
  title: {
    default: "SAHXL · No Limit",
    template: "%s · SAHXL"
  },
  description:
    "SAHXL. Recording artist out of Los Angeles. 506 Global. No limit — music, merch, tour, drops.",
  openGraph: {
    type: "website",
    siteName: "SAHXL",
    images: ["/images/og-default.jpg"]
  },
  twitter: { card: "summary_large_image" },
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={cn(
        fontBody.variable,
        fontDisplay.variable,
        fontHeading.variable,
        fontMono.variable
      )}
    >
      <body className="min-h-screen bg-ink-1 text-bone-100 antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-bone-100 focus:px-4 focus:py-2 focus:text-ink-0"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
