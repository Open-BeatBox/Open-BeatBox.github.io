import { notFound } from "next/navigation";
import ContentSections from "@/components/ContentSections";
import HeroSection from "@/components/HeroSection";
import { getHomePage } from "@/lib/content";

export default async function HomePage() {
  const page = await getHomePage();
  if (!page) return notFound();

  return (
    <div className="space-y-8">
      {page.hero && <HeroSection hero={page.hero} />}
      <ContentSections sections={page.sections} />
    </div>
  );
}
