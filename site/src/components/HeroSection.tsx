import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Hero } from "@/types/content";
import "./HeroSection.css";

type Props = {
  hero: Hero;
};

const HeroSection: React.FC<Props> = ({ hero }) => {
  if (!hero) return null;
  const hasVideo = Boolean(hero.backgroundVideo);
  const hasImage = Boolean(hero.backgroundImage);
  return (
    <section className="hero relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 text-white shadow-xl">
      {(hasVideo || hasImage) && (
        <div className="hero-media" aria-hidden>
          {hasVideo ? (
            <video
              className="hero-video"
              autoPlay
              loop
              muted
              playsInline
              poster={hero.backgroundImage}
            >
              <source src={hero.backgroundVideo} type="video/mp4" />
            </video>
          ) : hero.backgroundImage ? (
            <Image
              className="hero-image"
              src={hero.backgroundImage}
              alt=""
              fill
              priority
              sizes="100vw"
            />
          ) : null}
        </div>
      )}
      <div className="hero-overlay" aria-hidden />
      <div className="relative z-10 space-y-6 md:max-w-3xl">
        <p className="text-sm uppercase tracking-[0.2em] text-blue-200">BEATBox</p>
        <h1 className="text-3xl font-bold leading-tight md:text-5xl">
          {hero.title}
        </h1>
        {hero.subtitle && (
          <p className="max-w-2xl text-lg text-slate-200 md:text-xl">
            {hero.subtitle}
          </p>
        )}
        <div className="flex flex-wrap gap-3">
          {hero.primaryCta && (
            <Link className="btn btn-primary" href={hero.primaryCta.href}>
              {hero.primaryCta.label}
            </Link>
          )}
          {hero.secondaryCta && (
            <Link className="btn btn-secondary" href={hero.secondaryCta.href}>
              {hero.secondaryCta.label}
            </Link>
          )}
        </div>
      </div>
      <div className="hero-glow absolute -right-10 -top-10 h-64 w-64 rounded-full bg-blue-500/30 blur-3xl" />
      <div className="hero-grid absolute inset-0" aria-hidden />
    </section>
  );
};

export default HeroSection;
