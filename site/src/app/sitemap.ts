import { MetadataRoute } from "next";
import { getAllContentPages } from "@/lib/content";

export const dynamic = "force-static";
export const revalidate = 0;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = await getAllContentPages();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");

  return pages.map((page) => ({
    url: siteUrl ? `${siteUrl}${page.path}` : page.path,
    lastModified: new Date(),
    changeFrequency: "weekly",
  }));
}
