import type { Metadata } from "next";
import localFont from "next/font/local";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { PageCta } from "@/components/site/PageCta";
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
        <SiteHeader />
        <main id="main">{children}</main>
        <PageCta />
        <SiteFooter />
      </body>
    </html>
  );
}
