export const SITE = {
  name: "LakeBahis",
  tagline: "Güvenilir Bahis ve Casino",
  /** Tanıtım sitesinin kendi domain'i (SEO canonical için) */
  promoUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.lakebahisonline.com",
  /** Kalıcı giriş yönlendirme linki — domain değişse bile güncel adrese gider */
  domain: "lakegrs.link/lakegir",
  url: "https://lakegrs.link/lakegir",
  loginUrl: "https://lakegrs.link/lakegir",
  registerUrl: "https://lakegrs.link/lakegir",
  supportEmail: "destek@lakebahisonline.com",
  telegramUrl: "https://t.me/lakegiris",
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
