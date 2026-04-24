import { Inter, Cinzel, Anton, JetBrains_Mono } from "next/font/google";

/**
 * Font loaders.
 * Applied on <html> in app/layout.tsx so CSS variables are available everywhere.
 * Keep the CSS var names aligned with tailwind.config.ts fontFamily + globals.css.
 */

export const fontBody = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap"
});

export const fontDisplay = Cinzel({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-display",
  display: "swap"
});

export const fontHeading = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-heading",
  display: "swap"
});

export const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap"
});
