# Development

## Branching and flow
- Create topic branches from `main` (e.g., `feature/<topic>` or `dax/<topic>`).
- Keep commits small and purposeful; write present-tense messages (`Add community docs`).
- Open pull requests early for feedback; request at least one review before merging.

## Core commands
- Dev server: `npm run dev`
- Lint: `npm run lint`
- Types: `npm run type-check`
- Tests: `npm run test`
- Build: `npm run build`
- Docs preview: `mkdocs serve`

## Content workflow
1. Add or edit Markdown in `content/`.
2. Ensure frontmatter includes `layout`, `slug`, `hero`, `sections`, and navigation fields when needed.
3. For blog posts, confirm `publishAt` is set and in the past if you want it live.
4. Check SEO: hero images, metadata in `content/_site.md`, and page-level overrides as needed.
5. Run `npm run dev` to visually verify sections render correctly.

## Quality gates
- `npm run lint` and `npm run type-check` must pass.
- `npm run build` before merging larger changes to catch integration issues.
- `mkdocs build --strict` before publishing wiki updates to avoid broken links.
- Add screenshots or diagrams to `docs/assets/` when useful and reference them with relative paths.

## Security and data handling
- The contact endpoint sanitizes fields, but keep payloads minimal and avoid collecting sensitive data unnecessarily.
- Do not commit secrets; use `.env.local` for local development and platform-specific secret storage in deployment environments.
