import type { Metadata, Viewport } from "next";
import "./globals.css";
import { JsonLd } from "@/components/JsonLd";
import {
  buildMetadata,
  organizationJsonLd,
  websiteJsonLd,
} from "@/lib/seo";
import { SITE_KEYWORDS } from "@/lib/keywords";

export const viewport: Viewport = {
  themeColor: "#0dcc3d",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  ...buildMetadata({
    title: "LakeBahis Giriş 2026 | Güncel Adres, Bonus ve Casino",
    description:
      "LakeBahis resmi tanıtım sitesi. Güncel giriş lakegrs.link/lakegir, %100 hoş geldin bonusu, canlı bahis, casino, slot, Aviator. Telegram giriş, mobil erişim ve 7/24 destek.",
    path: "/",
    keywords: [...SITE_KEYWORDS],
  }),
  title: {
    default: "LakeBahis Giriş 2026 | Güncel Adres, Bonus ve Casino",
    template: "%s | LakeBahis",
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.lakebahisonline.com",
  ),
  authors: [{ name: "LakeBahis" }],
  creator: "LakeBahis",
  publisher: "LakeBahis",
  formatDetection: { email: false, address: false, telephone: false },
  category: "entertainment",
  alternates: {
    types: { "application/rss+xml": "/feed.xml" },
  },
  icons: {
    icon: [{ url: "/images/favicon.png", type: "image/png", sizes: "100x100" }],
    apple: [{ url: "/images/favicon.png", type: "image/png", sizes: "100x100" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className="h-full antialiased">
      <body className="min-h-full flex flex-col overflow-x-hidden bg-background text-white selection:bg-pink/30 selection:text-white">
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
        {children}
      </body>
    </html>
  );
}
