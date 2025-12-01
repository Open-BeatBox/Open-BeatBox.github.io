import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { getNavigation, getSiteConfig } from "@/lib/content";

type OgType =
  | "website"
  | "article"
  | "book"
  | "profile"
  | "music.song"
  | "music.album"
  | "music.playlist"
  | "music.radio_station"
  | "video.movie"
  | "video.episode"
  | "video.tv_show"
  | "video.other";
type TwitterCard = "summary" | "summary_large_image" | "player" | "app";

export async function generateMetadata(): Promise<Metadata> {
  const site = await getSiteConfig();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const ogType =
    site.openGraph?.type &&
    ["website", "article", "profile", "book", "music.song", "music.album", "music.playlist", "music.radio_station", "video.movie", "video.episode", "video.tv_show", "video.other"].includes(
      site.openGraph.type
    )
      ? (site.openGraph.type as OgType)
      : "website";
  const twitterCard =
    site.twitter?.cardType &&
    ["summary", "summary_large_image", "player", "app"].includes(site.twitter.cardType)
      ? (site.twitter.cardType as TwitterCard)
      : "summary_large_image";
  return {
    title: site.title,
    description: site.description,
    keywords: site.keywords,
    authors: site.authors,
    openGraph: {
      title: site.title,
      description: site.description,
      images: site.openGraph?.defaultImage ? [site.openGraph.defaultImage] : undefined,
      type: ogType,
      locale: site.openGraph?.locale,
    },
    twitter: {
      card: twitterCard,
      site: site.twitter?.handle,
    },
    metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [navItems, site] = await Promise.all([getNavigation(), getSiteConfig()]);
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en">
      <body>
        <div className="mx-auto flex min-h-screen max-w-6xl flex-col gap-6 px-4 pb-10 pt-6">
          <Header items={navItems} logo={site.logo} title={site.title} />
          <main className="flex-1">{children}</main>
          <Footer title={site.title} description={site.description} />
        </div>
        <CookieConsent />
        <GoogleAnalytics measurementId={gaId} />
      </body>
    </html>
  );
}
