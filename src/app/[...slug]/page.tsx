import { notFound } from "next/navigation";
import ContentSections from "@/components/ContentSections";
import HeroSection from "@/components/HeroSection";
import Blog from "@/components/Blog";
import {
  buildPageMetadata,
  getBlogPosts,
  getContentPaths,
  getPageBySlug,
} from "@/lib/content";
import { Metadata } from "next";

export async function generateStaticParams() {
  const paths = await getContentPaths();
  return paths
    .filter((path) => path !== "/")
    .map((path) => ({ slug: path.replace(/^\//, "").split("/") }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}): Promise<Metadata> {
  const { slug = [] } = await params;
  const slugPath = slug.length ? `/${slug.join("/")}` : "/";
  const page = await getPageBySlug(slugPath);
  const { metadata } = await buildPageMetadata(page);
  return metadata;
}

export default async function MarkdownPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug = [] } = await params;
  const slugPath = slug.length ? `/${slug.join("/")}` : "/";
  const page = await getPageBySlug(slugPath);
  if (!page) return notFound();

  if (page.layout === "blog") {
    const posts = await getBlogPosts();
    const post = posts.find((p) => p.path === page.path) || null;
    return <Blog post={post} posts={posts} />;
  }

  return (
    <div className="space-y-8">
      {page.hero && <HeroSection hero={page.hero} />}
      <ContentSections sections={page.sections} />
    </div>
  );
}
