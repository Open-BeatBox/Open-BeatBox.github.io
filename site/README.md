# BEATBox Website (Next.js)

A Next.js 15 App Router site for **Beatbox**, an open, modular home-cage cognitive monitoring system. All copy and structure come from Markdown in `content/` and render through reusable React components.

## Content model
- Site metadata: `content/_site.md` (title, description, keywords, authors, Open Graph/Twitter defaults, logo paths).
- Pages: top-level Markdown files like `content/home.md`, `content/beatbox.md`. Each has frontmatter with `hero`, `sections`, `layout`, `slug`, and navigation fields.
- Blog: Markdown in `content/blog/*.md` with `layout: "blog"`, `publishAt` for scheduling, and optional `showInNav`/`navOrder`.
- Navigation: built automatically from `showInNav` and `navOrder`.
- Metadata: generated from `_site.md` plus per-page overrides, with canonical URLs built from `NEXT_PUBLIC_SITE_URL`.

## Getting started
```bash
npm install
npm run dev
```

## Scripts
- `npm run dev` - start development server
- `npm run build` - static export build
- `npm run start` - start production server (not used for static export)
- `npm run lint` - ESLint (Next.js config, ESLint 9)
- `npm run type-check` - TypeScript `--noEmit`
- `npm run test` - lightweight utility tests via `ts-node`

## Adding content
1. Duplicate an existing file in `content/` and adjust frontmatter (`title`, `layout`, `slug`, `hero`, `sections`).
2. For blog posts, place files in `content/blog/` with `layout: "blog"` and `publishAt`. Future-dated posts are hidden until their date.
3. Navigation updates automatically from `showInNav` and `navOrder`.

## Metadata & SEO
- Global defaults come from `content/_site.md`.
- Per-page metadata uses hero/subtitle or body for descriptions and pulls OG/Twitter images from hero backgrounds, the first Markdown image, or the default logo/OG image.
- `NEXT_PUBLIC_SITE_URL` is used for canonical, sitemap, and robots entries.

## Environment variables
Copy `.env.example` to `.env.local` and fill in:
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_GA_ID` (optional)

## Static export
This site is configured for static export and GitHub Pages deployment. The exported output is written to `out/`.

## Contact form
`/api/send-email` accepts JSON `fields`, sanitizes values, and forwards them to Mailgun. Ensure the Mailgun variables are set and reachable from the server environment.

## Styling
Tailwind CSS v4 via `@tailwindcss/postcss`, plus small component-scoped CSS files (e.g., `HeroSection.css`, `ContentSections.css`) to keep the glass aesthetic and hero typography.

## Testing
`npm run test` executes simple utility checks via `ts-node`. Extend with additional utility or content schema tests as needed.
