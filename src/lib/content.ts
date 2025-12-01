import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { Metadata } from "next";
import {
  BlogPost,
  ContentPage,
  NavigationItem,
  PageMetadata,
  SiteMetadata,
} from "@/types/content";
import { truncateText } from "./utils";

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

const contentDir = path.join(process.cwd(), "content");
const allowedOgTypes = new Set<OgType>([
  "website",
  "article",
  "profile",
  "book",
  "music.song",
  "music.album",
  "music.playlist",
  "music.radio_station",
  "video.movie",
  "video.episode",
  "video.tv_show",
  "video.other",
]);
const allowedTwitterCards = new Set<TwitterCard>([
  "summary",
  "summary_large_image",
  "player",
  "app",
]);

const ensureLeadingSlash = (slug: string) =>
  slug.startsWith("/") ? slug : `/${slug}`;

const isFutureDate = (value?: string) => {
  if (!value) return false;
  const date = new Date(value);
  return Number.isFinite(date.valueOf()) && date.getTime() > Date.now();
};

const readFileSafe = async (filePath: string) => {
  try {
    return await fs.readFile(filePath, "utf8");
  } catch (error) {
    console.error(`Failed to read file ${filePath}:`, error);
    return null;
  }
};

export const getSiteConfig = async (): Promise<SiteMetadata> => {
  const sitePath = path.join(contentDir, "_site.md");
  const file = await readFileSafe(sitePath);
  if (!file) {
    return { title: "Beatbox" };
  }
  const { data } = matter(file);
  return data as SiteMetadata;
};

const parseMarkdownFile = (
  fileContent: string,
  filePath: string
): ContentPage => {
  const { data, content } = matter(fileContent);
  const fm = data as ContentPage;
  const slug =
    typeof fm.slug === "string" && fm.slug.length > 0
      ? fm.slug
      : `/${path
          .relative(contentDir, filePath)
          .replace(/\\/g, "/")
          .replace(/index\\.md$/, "")
          .replace(/\\.md$/, "")}`;

  return {
    ...fm,
    path: ensureLeadingSlash(slug === "/home" ? "/" : slug),
    body: content.trim(),
  };
};

export const loadContentFile = async (
  filePath: string
): Promise<ContentPage | null> => {
  const absolute = path.isAbsolute(filePath)
    ? filePath
    : path.join(contentDir, filePath);
  const file = await readFileSafe(absolute);
  if (!file) return null;
  return parseMarkdownFile(file, absolute);
};

export const getAllContentPages = async (): Promise<ContentPage[]> => {
  const files = await listMarkdownFiles(contentDir);
  const pages: ContentPage[] = [];
  for (const file of files) {
    if (file.endsWith("_site.md")) continue;
    const page = await loadContentFile(file);
    if (page) {
      if (page.layout === "blog" && isFutureDate(page.publishAt)) continue;
      pages.push(page);
    }
  }
  return pages;
};

const listMarkdownFiles = async (dir: string): Promise<string[]> => {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files: string[] = [];
  for (const entry of entries) {
    const res = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await listMarkdownFiles(res)));
    } else if (entry.isFile() && entry.name.endsWith(".md")) {
      files.push(res);
    }
  }
  return files;
};

export const getPageBySlug = async (
  slug: string
): Promise<ContentPage | BlogPost | null> => {
  const normalized = slug === "/" ? "/" : ensureLeadingSlash(slug);
  const pages = await getAllContentPages();
  const target = pages.find((page) => page.path === normalized);
  if (!target) return null;
  if (target.layout === "blog" && isFutureDate(target.publishAt)) {
    return null;
  }
  return target;
};

export const getHomePage = async (): Promise<ContentPage | null> => {
  const page = await getPageBySlug("/");
  if (page) return page;
  const fallback = await getPageBySlug("/home");
  return fallback;
};

export const getBlogPosts = async (): Promise<BlogPost[]> => {
  const pages = await getAllContentPages();
  return pages
    .filter((page) => page.layout === "blog")
    .map((page) => page as BlogPost)
    .filter((post) => !isFutureDate(post.publishAt))
    .sort((a, b) => {
      const dateA = new Date(a.publishAt || 0).getTime();
      const dateB = new Date(b.publishAt || 0).getTime();
      return dateB - dateA;
    });
};

export const getNavigation = async (): Promise<NavigationItem[]> => {
  const pages = await getAllContentPages();
  return pages
    .filter((page) => page.showInNav)
    .map((page) => ({
      title: page.title,
      href: page.path,
      navGroup: page.navGroup,
      navOrder: page.navOrder,
    }))
    .sort((a, b) => {
      const orderA = a.navOrder ?? Number.MAX_SAFE_INTEGER;
      const orderB = b.navOrder ?? Number.MAX_SAFE_INTEGER;
      if (orderA !== orderB) return orderA - orderB;
      return a.title.localeCompare(b.title);
    });
};

const deriveOgImage = (page?: ContentPage | null, site?: SiteMetadata) => {
  if (page?.hero?.backgroundImage) return page.hero.backgroundImage;
  const match = page?.body?.match(/!\\[[^\\]]*\\]\\(([^)]+)\\)/);
  if (match?.[1]) return match[1];
  return site?.openGraph?.defaultImage || site?.logo;
};

const absoluteUrl = (siteUrl: string | undefined, pathValue?: string) => {
  if (!pathValue) return undefined;
  if (pathValue.startsWith("http")) return pathValue;
  if (!siteUrl) return pathValue;
  const normalizedSite = siteUrl.endsWith("/")
    ? siteUrl.slice(0, -1)
    : siteUrl;
  return `${normalizedSite}${ensureLeadingSlash(pathValue)}`;
};

export const buildPageMetadata = async (
  page: ContentPage | BlogPost | null
): Promise<PageMetadata> => {
  const site = await getSiteConfig();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const title = page?.title || site.title;
  const description =
    page?.hero?.subtitle ||
    site.description ||
    truncateText(page?.body || "", 160);
  const image = deriveOgImage(page, site);
  const ogType = allowedOgTypes.has(site.openGraph?.type as OgType)
    ? (site.openGraph?.type as OgType)
    : "website";
  const twitterCard = allowedTwitterCards.has(site.twitter?.cardType as TwitterCard)
    ? (site.twitter?.cardType as TwitterCard)
    : "summary_large_image";
  const canonical = page?.path
    ? absoluteUrl(siteUrl, page.path)
    : absoluteUrl(siteUrl, "/");

  const metadata: Metadata = {
    title,
    description,
    keywords: site.keywords,
    authors: site.authors,
    metadataBase: siteUrl ? new URL(siteUrl) : undefined,
    alternates: canonical ? { canonical } : undefined,
    openGraph: {
      title,
      description,
      type: ogType,
      locale: site.openGraph?.locale,
      images: image ? [absoluteUrl(siteUrl, image) || image] : undefined,
      url: canonical,
    },
    twitter: {
      card: twitterCard,
      site: site.twitter?.handle,
      title,
      description,
      images: image ? [absoluteUrl(siteUrl, image) || image] : undefined,
    },
  };

  return { metadata, page };
};

export const getContentPaths = async (): Promise<string[]> => {
  const files = await listMarkdownFiles(contentDir);
  return files
    .filter((file) => !file.endsWith("_site.md"))
    .map((file) => parseSlugFromPath(file));
};

const parseSlugFromPath = (filePath: string) => {
  const relative = path.relative(contentDir, filePath).replace(/\\\\/g, "/");
  const clean = relative.replace(/index\\.md$/, "").replace(/\\.md$/, "");
  return ensureLeadingSlash(clean === "home" ? "/" : clean);
};
