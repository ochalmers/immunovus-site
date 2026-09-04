import type { Metadata } from "next";
import localFont from "next/font/local";
import { SiteChrome } from "@/components/site/SiteChrome";
import { pages } from "@/content/site";
import "./globals.css";

const inter = localFont({
  src: [
    {
      path: "../fonts/Inter-VariableFont_opsz,wght.ttf",
      style: "normal",
      weight: "100 900",
    },
    {
      path: "../fonts/Inter-Italic-VariableFont_opsz,wght.ttf",
      style: "italic",
      weight: "100 900",
    },
  ],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: pages.home.title,
    template: "%s · Immunovus",
  },
  description: pages.home.description,
  icons: { icon: "/brand/immunovus-mark.png" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`} data-scroll-behavior="smooth">
      <body className={`${inter.className} min-h-full`}>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <div className="site-grain" aria-hidden="true" />
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
