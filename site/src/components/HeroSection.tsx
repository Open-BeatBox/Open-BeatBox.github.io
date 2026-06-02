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
  const ctas =
    hero.ctas && hero.ctas.length > 0
      ? hero.ctas
      : [hero.primaryCta, hero.secondaryCta, hero.tertiaryCta].filter(Boolean);

  return (
    <section className="hero relative overflow-hidden rounded-3xl bg-slate-950 p-8 text-white shadow-xl">
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
      <div className="hero-content relative z-10">
        <p className="hero-eyebrow">{hero.eyebrow || "BEATBox"}</p>
        <h1 className="hero-title">
          {hero.title}
        </h1>
        {hero.subtitle && (
          <p className="hero-subtitle">
            {hero.subtitle}
          </p>
        )}
        {ctas.length > 0 && (
          <div className="hero-actions">
            {ctas.map((cta, index) => (
              <Link
                key={`${cta?.label}-${cta?.href}`}
                className={`btn btn-${cta?.variant || (index === 0 ? "primary" : "secondary")}`}
                href={cta?.href || "#"}
              >
                {cta?.label}
              </Link>
            ))}
          </div>
        )}
      </div>
      <div className="hero-grid absolute inset-0" aria-hidden />
    </section>
  );
};

export default HeroSection;
