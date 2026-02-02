---
title: "Contribute to the Website"
layout: "page"
showInNav: false
navOrder: 7
slug: "/contribute"
hero:
  title: "Contribute to the BEATBox website"
  subtitle: "Edit content safely, preview changes locally, and ship updates confidently."
  primaryCta:
    label: "View the repo"
    href: "https://github.com/Open-BeatBox/Open-BeatBox.github.io"
sections:
  - type: "columns"
    title: "What lives where"
    columns:
      - heading: "Content-first updates"
        body: |
          - Markdown in `site/content/` drives all pages and navigation.
          - Use frontmatter to set `title`, `slug`, `hero`, `sections`, and `showInNav`.
          - Blog posts live in `site/content/blog/` with `layout: \"blog\"` and `publishAt`.
      - heading: "Code changes"
        body: |
          - React components and styles live in `site/src/`.
          - SEO helpers are in `site/src/lib`.
          - Only touch TypeScript/React if you need new layouts or behaviors.
  - type: "steps"
    title: "Local workflow"
    steps:
      - "Clone the repo, install dependencies with `npm install`, and copy any required env vars from `site/.env.example` into `site/.env.local`."
      - "Run `npm run dev` from `site/` and open http://localhost:3000 to preview changes live."
      - "Edit Markdown in `site/content/` (or components in `site/src/` if needed), then refresh the page to verify the layout."
      - "Run `npm run lint`, `npm run type-check`, and `npm run test` before opening a pull request."
      - "Push a branch and open a PR with a short summary, the pages touched, and screenshots for visual changes."
  - type: "text"
    title: "Frontmatter reference"
    body: |
      Each page is a Markdown file with YAML frontmatter. Common fields:

      ```yaml
      ---
      title: "Contribute to the Site"
      layout: "page"            # or "blog"
      slug: "/contribute"       # must start with "/"
      showInNav: true            # controls top navigation
      navOrder: 7               # lower number = leftmost
      hero:
        title: "Readable headline"
        subtitle: "Short, actionable promise."
      sections:
        - type: "text"
          title: "Section title"
          body: |
            Markdown body with links, lists, and code fences.
      publishAt: "2024-06-01"   # blog only; future dates stay hidden
      ---
      ```

      Hero images can be set with `hero.backgroundImage`. Links in body content open in a new tab by default.
  - type: "list"
    title: "Supported section types"
    items:
      - "`featureCards`, `cards`, `columns` for grouped highlights."
      - "`text` for Markdown prose (headings, lists, code blocks)."
      - "`steps`, `pipeline` for ordered flows; `updates` for lists with links."
      - "`faq` for collapsible Q&A."
      - "`links` for compact resource lists with optional notes."
      - "`warning` for important notices."
  - type: "cards"
    title: "Common tasks"
    cards:
      - title: "Add a new page"
        body: "Duplicate a file in `site/content/`, change `title`, `slug`, `navOrder`, and update `sections`. Set `showInNav: true` if it should appear in the top nav."
      - title: "Add a blog post"
        body: "Create `site/content/blog/my-post.md` with `layout: \"blog\"`, a `publishAt` date, and a hero. Posts are sorted newest first; future-dated posts stay hidden until the date."
      - title: "Tweak navigation labels"
        body: "Edit the `title` and `showInNav` fields in the relevant Markdown file. The nav bar is generated from frontmatter, so no code change is needed."
      - title: "Adjust metadata"
        body: "Global defaults live in `site/content/_site.md`. Override per page with `description`, `keywords`, or a `hero.backgroundImage` for social cards."
  - type: "warning"
    title: "Checklist before opening a PR"
    body: |
      - Confirm the page renders correctly on desktop and mobile in the dev server.
      - Ensure `slug` values are unique and begin with `/`.
      - Keep `navOrder` integers unique to avoid shuffling in the header.
      - Run `npm run lint`, `npm run type-check`, and `npm run test`.
      - If you touched content, skim for typos and broken links; if you touched code, note the impacted routes in the PR description.
  - type: "links"
    title: "Helpful links"
    links:
      - label: "Repository on GitHub"
        href: "https://github.com/Open-BeatBox/Open-BeatBox.github.io"
        note: "Open issues and create pull requests here."
      - label: "Website README"
        href: "https://github.com/Open-BeatBox/Open-BeatBox.github.io/blob/main/site/README.md"
        note: "Architecture overview, scripts, and environment variables."
      - label: "Next.js App Router docs"
        href: "https://nextjs.org/docs/app"
        note: "Reference for routing, metadata, and data fetching."
---
