"use client";

import React, { useCallback, useState } from "react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";
import { Section } from "@/types/content";
import "./ContentSections.css";
import ContactForm from "./ContactForm";

type Props = {
  sections?: Section[];
};

const markdownPlugins = [remarkGfm];
const rehypePlugins = [rehypeRaw, rehypeSanitize];

const ContentSections: React.FC<Props> = ({ sections }) => {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(
    null
  );

  const openLightbox = useCallback((src: string, alt: string) => {
    setLightbox({ src, alt });
  }, []);

  const closeLightbox = useCallback(() => {
    setLightbox(null);
  }, []);

  if (!sections?.length) return null;

  return (
    <div className="content-sections space-y-10">
      {lightbox && (
        <div className="lightbox" role="dialog" aria-modal="true">
          <button className="lightbox-close" onClick={closeLightbox} type="button">
            Close
          </button>
          <div className="lightbox-backdrop" onClick={closeLightbox} />
          <div className="lightbox-content">
            <Image
              src={lightbox.src}
              alt={lightbox.alt}
              fill
              sizes="100vw"
              className="lightbox-image"
              priority
            />
          </div>
        </div>
      )}
      {sections.map((section, index) => {
        const key = `${section.type}-${index}`;
        switch (section.type) {
          case "mediaSplit":
            return (
              <section key={key} className="section section-split">
                {section.title && <h2 className="section-title">{section.title}</h2>}
                <div className="split-grid">
                  <div className="split-content">
                    {section.eyebrow && (
                      <p className="section-eyebrow">{section.eyebrow}</p>
                    )}
                    {section.body && (
                      <p className="text-slate-200">{section.body}</p>
                    )}
                    {section.bullets && section.bullets.length > 0 && (
                      <ul className="bullet-list">
                        {section.bullets.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div className="media-grid">
                    {section.media.map((item) => (
                      <figure key={item.src} className="media-card group">
                        <div className="media-image">
                          <Image
                            src={item.src}
                            alt={item.alt}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="media-img"
                          />
                          <button
                            className="media-zoom"
                            type="button"
                            onClick={() => openLightbox(item.src, item.alt)}
                            aria-label={`Zoom ${item.alt}`}
                          />
                        </div>
                        {item.caption && (
                          <figcaption className="media-caption">
                            {item.caption}
                          </figcaption>
                        )}
                      </figure>
                    ))}
                  </div>
                </div>
              </section>
            );
          case "iconGrid":
            return (
              <section key={key} className="section">
                {section.title && <h2 className="section-title">{section.title}</h2>}
                {section.subtitle && (
                  <p className="section-subtitle">{section.subtitle}</p>
                )}
                <div className="icon-grid">
                    {section.items.map((item) => (
                      <div key={item.title} className="icon-card">
                        <span className="icon-badge" aria-hidden>
                          {item.icon}
                        </span>
                      <h3 className="card-title">{item.title}</h3>
                      <p className="card-body">{item.body}</p>
                    </div>
                  ))}
                </div>
                {section.media && section.media.length > 0 && (
                  <div className="media-strip">
                    {section.media.map((item) => (
                      <figure key={item.src} className="media-card group">
                        <div className="media-image">
                          <Image
                            src={item.src}
                            alt={item.alt}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="media-img"
                          />
                          <button
                            className="media-zoom"
                            type="button"
                            onClick={() => openLightbox(item.src, item.alt)}
                            aria-label={`Zoom ${item.alt}`}
                          />
                        </div>
                        {item.caption && (
                          <figcaption className="media-caption">
                            {item.caption}
                          </figcaption>
                        )}
                      </figure>
                    ))}
                  </div>
                )}
              </section>
            );
          case "mediaGrid":
            return (
              <section key={key} className="section">
                {section.title && <h2 className="section-title">{section.title}</h2>}
                {section.subtitle && (
                  <p className="section-subtitle">{section.subtitle}</p>
                )}
                <div className="media-grid tech-grid">
                  {section.items.map((item) => (
                    <figure key={item.image} className="media-card tech-card group">
                      <div className="media-image">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 33vw"
                          className="media-img"
                        />
                        <button
                          className="media-zoom"
                          type="button"
                          onClick={() => openLightbox(item.image, item.title)}
                          aria-label={`Zoom ${item.title}`}
                        />
                      </div>
                      <figcaption className="media-caption">
                        <span className="font-semibold text-white">
                          {item.title}
                        </span>
                        {item.body && (
                          <span className="block text-sm text-slate-300">
                            {item.body}
                          </span>
                        )}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </section>
            );
          case "featureCards":
            return (
              <section key={key} className="section">
                {section.title && <h2 className="section-title">{section.title}</h2>}
                <div className="card-grid">
                  {section.cards.map((card) => (
                    <div key={card.title} className="glass-card">
                      <h3 className="card-title">{card.title}</h3>
                      <p className="card-body">{card.body}</p>
                    </div>
                  ))}
                </div>
              </section>
            );
          case "updates":
            return (
              <section key={key} className="section">
                {section.title && <h2 className="section-title">{section.title}</h2>}
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item.label} className="glass-row">
                      {item.href ? (
                        <a href={item.href} className="link" target="_blank" rel="noreferrer">
                          {item.label}
                        </a>
                      ) : (
                        <span>{item.label}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </section>
            );
          case "text":
            return (
              <section key={key} className="section prose prose-invert max-w-none">
                {section.title && <h2 className="section-title">{section.title}</h2>}
                {section.body && (
                  <ReactMarkdown
                    remarkPlugins={markdownPlugins}
                    rehypePlugins={rehypePlugins}
                    components={{
                      a: (props) => (
                        <a {...props} className="link" target="_blank" rel="noreferrer" />
                      ),
                    }}
                  >
                    {section.body}
                  </ReactMarkdown>
                )}
              </section>
            );
          case "list":
            return (
              <section key={key} className="section">
                {section.title && <h2 className="section-title">{section.title}</h2>}
                <ul className="list-disc space-y-2 pl-5 text-slate-200">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            );
          case "pipeline":
            return (
              <section key={key} className="section">
                {section.title && <h2 className="section-title">{section.title}</h2>}
                <div className="pipeline">
                  {section.steps.map((step, idx) => (
                    <div key={`${step}-${idx}`} className="pipeline-step">
                      <span className="pipeline-index">{idx + 1}</span>
                      <p>{step}</p>
                    </div>
                  ))}
                </div>
              </section>
            );
          case "columns":
            return (
              <section key={key} className="section">
                {section.title && <h2 className="section-title">{section.title}</h2>}
                <div className="grid gap-6 md:grid-cols-2">
                  {section.columns.map((col) => (
                    <div key={col.heading} className="glass-card">
                      <h3 className="card-title">{col.heading}</h3>
                      <ReactMarkdown
                        remarkPlugins={markdownPlugins}
                        rehypePlugins={rehypePlugins}
                        className="prose prose-invert max-w-none"
                      >
                        {col.body}
                      </ReactMarkdown>
                    </div>
                  ))}
                </div>
              </section>
            );
          case "roadmap":
            return (
              <section key={key} className="section">
                {section.title && <h2 className="section-title">{section.title}</h2>}
                <div className="timeline">
                  {section.items.map((item) => (
                    <div key={item.label} className="timeline-item">
                      <div className="timeline-dot" />
                      <div>
                        <p className="font-semibold text-white">{item.label}</p>
                        {item.description && (
                          <p className="text-sm text-slate-300">{item.description}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            );
          case "cards":
            return (
              <section key={key} className="section">
                {section.title && <h2 className="section-title">{section.title}</h2>}
                <div className="card-grid">
                  {section.cards.map((card) => (
                    <div key={card.title} className="glass-card">
                      <h3 className="card-title">{card.title}</h3>
                      <p className="card-body">{card.body}</p>
                    </div>
                  ))}
                </div>
                {section.note && (
                  <p className="mt-4 text-sm text-slate-300">{section.note}</p>
                )}
              </section>
            );
          case "warning":
            return (
              <section key={key} className="section">
                {section.title && <h2 className="section-title">{section.title}</h2>}
                <div className="warning-box">
                  <ReactMarkdown
                    remarkPlugins={markdownPlugins}
                    rehypePlugins={rehypePlugins}
                    className="prose prose-invert max-w-none"
                  >
                    {section.body}
                  </ReactMarkdown>
                </div>
              </section>
            );
          case "steps":
            return (
              <section key={key} className="section">
                {section.title && <h2 className="section-title">{section.title}</h2>}
                <ol className="ordered-steps">
                  {section.steps.map((step, idx) => (
                    <li key={`${step}-${idx}`} className="glass-card">
                      <span className="badge">{idx + 1}</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </section>
            );
          case "links":
            return (
              <section key={key} className="section">
                {section.title && <h2 className="section-title">{section.title}</h2>}
                <div className="glass-card space-y-2">
                  {section.links.map((link) => (
                    <div key={link.label} className="flex items-start justify-between gap-3">
                      <a href={link.href} className="link" target="_blank" rel="noreferrer">
                        {link.label}
                      </a>
                      {link.note && (
                        <span className="text-xs text-slate-300">{link.note}</span>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            );
          case "faq":
            return (
              <section key={key} className="section">
                {section.title && <h2 className="section-title">{section.title}</h2>}
                <div className="space-y-3">
                  {section.items.map((item) => (
                    <details key={item.question} className="glass-card">
                      <summary className="cursor-pointer text-lg font-semibold text-white">
                        {item.question}
                      </summary>
                      <p className="mt-2 text-slate-200">{item.answer}</p>
                    </details>
                  ))}
                </div>
              </section>
            );
          case "contactForm":
            return (
              <section key={key} className="section">
                {section.title && <h2 className="section-title">{section.title}</h2>}
                <div className="glass-card">
                  <p className="mb-4 text-sm text-slate-200">
                    Send a message and we will follow up shortly.
                  </p>
                  <ContactForm fields={section.fields} />
                </div>
              </section>
            );
          default:
            return null;
        }
      })}
    </div>
  );
};

export default ContentSections;
