# FAQ

- **How do I preview the site locally?** Run `npm run dev` and open http://localhost:3000.
- **Where do docs live?** Project wiki files are in `docs/`; site content lives in `content/`.
- **How do I add a nav item?** Set `showInNav: true` and `navOrder` in the page’s frontmatter; update `mkdocs.yml` for wiki nav.
- **Why is my blog post hidden?** Future-dated posts (via `publishAt`) are suppressed until their date.
- **Where do images go?** Site assets in `public/`; wiki images in `docs/assets/`.
- **How do I run the wiki locally?** Install MkDocs + Material (`pip install mkdocs mkdocs-material`), then `mkdocs serve`.
