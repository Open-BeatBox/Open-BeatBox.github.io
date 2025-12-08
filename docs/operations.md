# Operations

## Local checks (site + wiki)
- Lint: `npm run lint`
- Types: `npm run type-check`
- Tests: `npm run test`
- Build: `npm run build`
- Docs (wiki): `mkdocs build --strict`

## Environment variables
Create `.env.local` from `.env.example`:
- `MAILGUN_API_KEY`, `MAILGUN_DOMAIN`, `MAILGUN_API_URL`, `MAILGUN_FROM_EMAIL`, `MAILGUN_TO_EMAIL` — required for contact form delivery.
- `NEXT_PUBLIC_SITE_URL` — canonical URLs, sitemap, and robots.
- `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` — optional reCAPTCHA support for contact forms.

## Deployment (site)
- Vercel or similar: connect the repo, set environment variables, deploy on pushes to `main`.
- GitHub Actions/Pages (static export): run `npm run build` then serve `.next` output with the platform’s adapter (ensure the hosting platform supports the Next.js features you use).
- Manual: `npm run build` then `npm run start` in the target environment.

## Deployment (MkDocs wiki)
- CI workflow: `.github/workflows/mkdocs.yml` builds `docs/` with `mkdocs build --strict` and publishes `site/` to the `gh-pages` branch on pushes to `main` or manual dispatch.
- Enable GitHub Pages from the `gh-pages` branch (root).

## Runbook: common issues
- **Broken links or missing assets**: run `npm run build` and fix reported paths; ensure images exist in `public/` or correct relative paths in Markdown.
- **Future-dated blog post not visible**: verify `publishAt` is in the past or remove it.
- **Contact form errors**: confirm Mailgun env vars, domain configuration, and network access. Check server logs for response codes.
- **Navigation missing a page**: ensure `showInNav: true` and `navOrder` are set, and frontmatter `slug` is correct.
- **Stale caches**: remove `.next/` and restart the dev server; for MkDocs, remove `.cache/` and rerun `mkdocs serve`.

## Maintaining the wiki
- Edit Markdown in `docs/` and update `mkdocs.yml` navigation.
- Preview locally with `mkdocs serve`.
- Keep screenshots and diagrams in `docs/assets/` with descriptive filenames.

## Field operations reminders
- Back up configurations before firmware/runtime updates.
- Keep a device inventory with firmware versions and configuration hashes.
- For multi-cage deployments, monitor clock sync and storage health; schedule periodic validation runs.
