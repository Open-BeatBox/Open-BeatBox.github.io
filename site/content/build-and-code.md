---
title: "Build & Code"
layout: "page"
showInNav: false
navOrder: 4
slug: "/build-and-code"
hero:
  title: "Build BEATBox module by module."
  subtitle: "Start with the Master BOM, follow the versioned tutorials, then validate the complete system."
  primaryCta:
    label: "Compare assembly guides"
    href: "/docs/manual/build/"
  secondaryCta:
    label: "Open interactive SOP"
    href: "/docs/beatbox-assembly-sop.html"
sections:
  - type: "steps"
    title: "Hardware build path"
    steps:
      - title: "Check the Master BOM"
        body: "Download the CSV or XLSX, confirm the hardware revision, and resolve every row still marked for validation before ordering."
        href: "https://github.com/Open-BeatBox/assembly-tutorials#bill-of-materials"
        ctaLabel: "Open BOM"
      - title: "Prepare fabricated parts"
        body: "Download the available CAD and production files, then inspect every printed and laser-cut part before assembly."
        href: "https://github.com/Open-BeatBox/Open-BeatBox.github.io/tree/main/resources/hardware"
        ctaLabel: "Open hardware files"
      - title: "Assemble each module"
        body: "Follow the frame, bottle mount, feeder, light ring, photobeam gate, and screen tutorials. Each guide uses the item IDs from the Master BOM."
        href: "/docs/manual/build/assembly-tutorials/tutorials_index.html"
        ctaLabel: "Open tutorials"
      - title: "Validate the complete build"
        body: "Use the interactive SOP as a bench checklist and record any discrepancy with its module ID, item ID, and hardware revision."
        href: "/docs/beatbox-assembly-sop.html"
        ctaLabel: "Open checklist"
  - type: "links"
    title: "Two assembly-guide versions"
    links:
      - label: "Version A — Interactive Assembly SOP"
        href: "/docs/beatbox-assembly-sop.html"
        note: "A single sequential checklist optimized for use at the bench"
      - label: "Version B — Modular Sphinx guide"
        href: "/docs/manual/build/assembly-tutorials/tutorials_index.html"
        note: "The assembly-tutorials repository rendered as six module pages, with available videos"
      - label: "Assembly tutorial source repository"
        href: "https://github.com/Open-BeatBox/assembly-tutorials"
        note: "Canonical Markdown and BOM source"
      - label: "Master BOM — XLSX"
        href: "https://github.com/Open-BeatBox/assembly-tutorials/raw/main/BOM.xlsx"
        note: "Editable working file"
      - label: "Master BOM — CSV"
        href: "https://github.com/Open-BeatBox/assembly-tutorials/raw/main/BOM.csv"
        note: "Portable export"
      - label: "Technical build manual"
        href: "/docs/manual/build/"
        note: "Build order, safety, fabrication, BOM and video status"
  - type: "steps"
    title: "Firmware"
    steps:
      - "Install the toolchain for the chosen microcontroller."
      - "Clone the firmware repository."
      - "Configure the build for your hardware variant."
      - "Flash the firmware onto the Beatbox controller."
      - "<!-- TODO: add exact commands and microcontroller type. -->"
  - type: "steps"
    title: "Software & API"
    steps:
      - "Install the Python client package and/or Docker stack."
      - "Start the Beatbox server and confirm streaming from the device."
      - "Use the REST or WebSocket API to subscribe to events and time-series."
      - "Explore the example Jupyter notebooks for analysis workflows."
  - type: "text"
    title: "Contributing"
    body: |
      Report assembly or BOM corrections in the [assembly-tutorials issue tracker](https://github.com/Open-BeatBox/assembly-tutorials/issues). For website, software, or general project work, use the [main issue tracker](https://github.com/Open-BeatBox/Open-BeatBox.github.io/issues) and read the [contribution guide](https://open-beatbox.github.io/docs/manual/contributing.html).
---

