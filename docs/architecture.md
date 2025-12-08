# Architecture

## System overview
- Beatbox is a modular home-cage behavioral platform combining hardware (sensors/actuators), firmware/runtime for task control, and data pipelines for acquisition and analysis.
- This repository hosts the public website and documentation; reference external firmware/runtime repos and hardware BOMs where applicable.
- Typical deployment: one controller per cage, networked to a collector or local storage, with a web presence for docs and community.

## System layers
1. **Hardware**: cage, sensors (IR beam, nose-poke, capacitive touch, environmental), actuators (pellet/liquid dispenser, lights), power, and connectivity.
2. **Firmware/runtime** (external repo): pin maps, task logic, device health metrics, logging, and networking (e.g., HTTP/MQTT).
3. **Data layer** (external or shared): log transport, storage (raw + processed), QC pipelines, and dashboards.
4. **Docs/site (this repo)**: Next.js site rendering content from Markdown in `content/` and this MkDocs wiki under `docs/`.

## Repo structure (this site)
- `content/` — Markdown for pages and blog posts (`content/blog/`). `_site.md` stores global metadata (title, description, authors, default OG/Twitter assets).
- `src/app/` — Next.js App Router routes, layout, sitemap/robots, loading and not-found states, API routes (including `api/send-email`).
- `src/components/` — Reusable UI blocks for hero sections, content sections, navigation, and layout.
- `src/lib/` — Content parsing (`content.ts`), icon registry, utilities (text truncation, formatting).
- `public/` — Static assets (images, icons).
- `styles/` — Tailwind layer config plus scoped component CSS.
- `docs/` — MkDocs wiki pages; `mkdocs.yml` controls navigation.

## Content pipeline (site)
1. Markdown is parsed with `gray-matter` for frontmatter and content body.
2. Slugs default to the relative path (with `/home` mapped to `/`) unless explicitly set.
3. Navigation is derived from pages with `showInNav` and ordered by `navOrder`; groups use `navGroup`.
4. Blog posts respect `publishAt`; future-dated posts stay hidden.
5. SEO metadata is built from page fields with fallbacks from `_site.md` (title, description, OG/Twitter defaults). Hero background images or the first Markdown image are used as OG images when available.

## Rendering and styling
- Markdown renders through `react-markdown` with `remark-gfm` and sanitized raw HTML via `rehype-raw` + `rehype-sanitize`.
- Tailwind CSS v4 (via `@tailwindcss/postcss`) provides utility layers; component-specific CSS refines the aesthetic.
- Fonts are loaded through `src/app/fonts.css`; global styles in `src/app/globals.css`.

## API and integrations
- Contact form posts to `/api/send-email`, sanitizes inputs, and forwards through Mailgun. Configure `MAILGUN_API_KEY`, `MAILGUN_DOMAIN`, `MAILGUN_API_URL`, `MAILGUN_FROM_EMAIL`, and `MAILGUN_TO_EMAIL`.
- Optional Google reCAPTCHA: set `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` and wire the client component.

## Build and output
- `npm run build` produces the production bundle under `.next/`.
- `mkdocs build` (for this wiki) outputs to `site/` when needed; CI workflow publishes to `gh-pages`.
