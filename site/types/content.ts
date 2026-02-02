import { Metadata } from "next";

export type Hero = {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  backgroundVideo?: string;
  primaryCta?: CTA;
  secondaryCta?: CTA;
};

export type CTA = {
  label: string;
  href: string;
};

export type FeatureCard = {
  title: string;
  body: string;
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

export type Step = string;

export type TimelineItem = {
  label: string;
  date?: string;
  description?: string;
};

export type Section =
  | { type: "text"; title?: string; body?: string }
  | { type: "featureCards"; title?: string; cards: FeatureCard[] }
  | { type: "updates"; title?: string; items: LinkItem[] }
  | { type: "list"; title?: string; items: string[] }
  | { type: "pipeline"; title?: string; steps: string[] }
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
  | { type: "cards"; title?: string; cards: FeatureCard[]; note?: string }
  | { type: "warning"; title?: string; body: string }
  | { type: "steps"; title?: string; steps: Step[] }
  | { type: "links"; title?: string; links: LinkItem[] }
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
};

export type PageMetadata = {
  metadata: Metadata;
  page?: ContentPage | BlogPost | null;
};
