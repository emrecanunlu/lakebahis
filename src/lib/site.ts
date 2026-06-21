export const SITE = {
  name: "LakeBahis",
  tagline: "Güvenilir Bahis ve Casino",
  /** Tanıtım sitesinin kendi domain'i (SEO canonical için) */
  promoUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://lakebahis.vercel.app",
  /** Ana bahis sitesi */
  domain: "lakebahis718.com",
  url: "https://www.lakebahis718.com",
  loginUrl: "https://www.lakebahis718.com",
  registerUrl: "https://www.lakebahis718.com",
  supportEmail: "destek@lakebahis718.com",
  telegramUrl: "https://t.me/lakebahis",
  locale: "tr_TR",
  language: "tr",
  twitter: "@lakebahis",
};

export const HEADER_NAV = [
  { label: "Oyunlar", href: "/oyunlar" },
  { label: "Rehber", href: "/rehber" },
  { label: "Blog", href: "/blog" },
  { label: "Bonuslar", href: "/#bonuslar" },
  { label: "Partner", href: "/partner-siteler" },
  { label: "İletişim", href: "/iletisim" },
];

export const NAV = [
  { label: "Anasayfa", href: "/" },
  ...HEADER_NAV,
  { label: "Arama", href: "/arama" },
];

export const CATEGORIES = [
  { slug: "canli-bahis", name: "Canlı Bahis" },
  { slug: "canli-casino", name: "Canlı Casino" },
  { slug: "slot", name: "Slot Oyunları" },
  { slug: "bonuslar", name: "Bonuslar" },
  { slug: "rehber", name: "Rehber" },
  { slug: "guncel", name: "Güncel Giriş" },
];

export const SEO_LINKS = [
  { label: "LakeBahis Giriş", href: "/rehber/lakebahis-giris" },
  { label: "Güncel Adres", href: "/rehber/lakebahis-guncel-adres" },
  { label: "Hoş Geldin Bonusu", href: "/rehber/lakebahis-bonus" },
  { label: "Canlı Bahis", href: "/rehber/lakebahis-canli-bahis" },
  { label: "Canlı Casino", href: "/rehber/lakebahis-casino" },
  { label: "Aviator", href: "/rehber/lakebahis-aviator" },
  { label: "Mobil Giriş", href: "/rehber/lakebahis-mobil-giris" },
  { label: "Güvenilir mi?", href: "/rehber/lakebahis-guvenilir-mi" },
];
