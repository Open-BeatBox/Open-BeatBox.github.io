# Open BeatBox Wiki

Welcome to the project wiki for the Beatbox content-driven Next.js site. This space centralizes onboarding, development workflow, architecture notes, and operations runbooks so contributors can move quickly and safely.

## Quick links
- Start coding: [Getting Started](getting-started.md)
- How we build and ship: [Development](development.md)
- Voice, tone, and formatting: [Content Style](content-style.md)
- System overview: [Architecture](architecture.md)
- Contribute changes: [Contributing](contributing.md)
- Runbooks and deployments: [Operations](operations.md)

## What this repo is
- A Next.js 15 App Router site where all page structure and copy live in `content/` Markdown.
- Components render sections like hero blocks, text, lists, FAQs, and links from frontmatter-driven content.
- A contact API route relays sanitized form submissions to Mailgun (see environment variables in [Operations](operations.md)).
