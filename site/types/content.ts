import { Metadata } from "next";

export type Hero = {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  backgroundImage?: string;
  backgroundVideo?: string;
  primaryCta?: CTA;
  secondaryCta?: CTA;
  tertiaryCta?: CTA;
  ctas?: CTA[];
};

export type CTA = {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
};

export type FeatureCard = {
  title: string;
  body: string;
  eyebrow?: string;
  icon?: string;
  href?: string;
  ctaLabel?: string;
  links?: LinkItem[];
  /** Optional CSS color for the card background (e.g. "pink", "#1e3a8a", "rgba(0,0,0,0.4)"). */
  color?: string;
};

export type MediaItem = {
  src: string;
  alt: string;
  caption?: string;
};

export type IconCard = {
  icon: string;
  title: string;
  body: string;
};

export type MediaGridItem = {
  image: string;
  title: string;
  body?: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type LinkItem = {
  label: string;
  href: string;
  note?: string;
};

export type QuickLinkItem = {
  label: string;
  href: string;
  image: string;
  alt: string;
  icon?: string;
};

export type BrandShowcase = {
  title: string;
  subtitle?: string;
  kicker?: string;
  logo?: string;
  video: string;
  poster?: string;
};

export type Step =
  | string
  | {
      title: string;
      body?: string;
      icon?: string;
      href?: string;
      ctaLabel?: string;
    };

export type StatItem = {
  value: string;
  label: string;
  body?: string;
};

export type TimelineItem = {
  label: string;
  date?: string;
  description?: string;
};

export type Section =
  | { type: "text"; title?: string; body?: string }
  | { type: "brandShowcase"; title: string; subtitle?: string; kicker?: string; logo?: string; video: string; poster?: string }
  | { type: "quickLinks"; title?: string; variant?: "default" | "emoji" | "screenshots"; items: QuickLinkItem[] }
  | { type: "featureCards"; title?: string; subtitle?: string; cards: FeatureCard[] }
  | { type: "stats"; title?: string; subtitle?: string; items: StatItem[] }
  | { type: "updates"; title?: string; items: LinkItem[] }
  | { type: "list"; title?: string; items: string[] }
  | { type: "pipeline"; title?: string; steps: string[] }
  | {
      type: "viewer";
      title?: string;
      subtitle?: string;
      embedUrl?: string;
      sourcePath?: string;
      downloadLabel?: string;
      downloadHref?: string;
      note?: string;
    }
  | {
      type: "video";
      title?: string;
      subtitle?: string;
      src: string;
      poster?: string;
      caption?: string;
      ctaLabel?: string;
      ctaHref?: string;
    }
  | {
      type: "gallery";
      title?: string;
      subtitle?: string;
      items: MediaItem[];
      ctaLabel?: string;
      ctaHref?: string;
    }
  | {
      type: "mediaSplit";
      title?: string;
      eyebrow?: string;
      body?: string;
      bullets?: string[];
      media: MediaItem[];
    }
  | {
      type: "iconGrid";
      title?: string;
      subtitle?: string;
      items: IconCard[];
      media?: MediaItem[];
    }
  | {
      type: "mediaGrid";
      title?: string;
      subtitle?: string;
      items: MediaGridItem[];
    }
  | {
      type: "columns";
      title?: string;
      columns: { heading: string; body: string }[];
    }
  | { type: "roadmap"; title?: string; items: TimelineItem[] }
  | {
      type: "cards";
      title?: string;
      subtitle?: string;
      cards: FeatureCard[];
      note?: string;
      variant?: "default" | "audience" | "resources" | "accent";
    }
  | { type: "warning"; title?: string; body: string }
  | { type: "steps"; title?: string; subtitle?: string; steps: Step[] }
  | { type: "links"; title?: string; subtitle?: string; links: LinkItem[] }
  | { type: "faq"; title?: string; items: FAQItem[] }
  | {
      type: "contactForm";
      title?: string;
      fields: ContactField[];
    };

export type ContactField = {
  name: string;
  label: string;
  type: "text" | "email" | "choice" | "textarea" | "recaptcha";
  required?: boolean;
  options?: string[];
};

export type ContentFrontmatter = {
  title: string;
  layout?: "page" | "blog";
  showInNav?: boolean;
  navOrder?: number;
  navGroup?: string;
  slug?: string;
  hero?: Hero;
  sections?: Section[];
  publishAt?: string;
};

export type ContentPage = ContentFrontmatter & {
  body: string;
  path: string;
};

export type BlogPost = ContentPage & {
  publishAt?: string;
};

export type NavigationItem = {
  title: string;
  href: string;
  navGroup?: string;
  navOrder?: number;
};

export type SiteMetadata = {
  title: string;
  description?: string;
  keywords?: string[];
  authors?: { name: string; url?: string }[];
  openGraph?: {
    defaultImage?: string;
    type?: string;
    locale?: string;
  };
  twitter?: {
    handle?: string;
    cardType?: string;
  };
  logo?: string;
  brandColor?: string;
  secondaryColor?: string;
  extraNavItems?: NavigationItem[];
};

export type PageMetadata = {
  metadata: Metadata;
  page?: ContentPage | BlogPost | null;
};
