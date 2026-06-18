---
title: "Behavioral and Ecological Automated operant Box (BEATBox)"
layout: "page"
showInNav: false
navOrder: 1
slug: "/"
sections:
  - type: "brandShowcase"
    title: "BEATBox Behavioral and Ecological"
    subtitle: "Behavioral and Ecological Automated operant Box"
    kicker: "Open-source 24/7 home-cage operant conditioning that preserves natural rhythms while increasing data density and reproducibility."
    logo: "/images/beatbox-logo.png"
    video: "/assets/gifs/BEATBOX.5.compressed.gif"
    poster: "/images/beatbox_V3.png"
  - type: "quickLinks"
    items:
      - label: "Documentation"
        href: "/docs/manual/"
        image: "/images/nav-doc-book.svg"
        alt: "Documentation book icon"
      - label: "Build your Own"
        href: "/docs/beatbox-assembly-sop.html"
        image: "/images/nav-sop-checklist.svg"
        alt: "Build checklist icon"
      - label: "GUI"
        href: "https://github.com/Open-BeatBox/Open-BeatBox.github.io/tree/main/resources/software"
        image: "/images/software/window-monitoring_multiple.png"
        alt: "BEATBox GUI monitoring screenshot"
      - label: "Github"
        href: "https://github.com/Open-BeatBox/Open-BeatBox.github.io"
        image: "/images/nav-github-logo.svg"
        alt: "GitHub logo"
  - type: "stats"
    title: "BEATBox = Open-source 24/7 home-cage operant conditioning"
    items:
      - value: "24/7"
        label: "Autonomous access"
        body: "Animals can engage across day-night cycles."
      - value: "Home"
        label: "Cage context"
        body: "Designed to reduce repeated handling and preserve natural rhythms."
      - value: "Open"
        label: "Source build"
        body: "Hardware, software, CAD, firmware, and docs are inspectable."
      - value: "Modular"
        label: "Task panels"
        body: "Feeder, screen, tunnel, lighting, wall, and sensor modules."
      - value: "Low-cost"
        label: "Design target"
        body: "Accessible fabrication for reproducible deployments."
  - type: "pipeline"
    title: "How BEATBox works"
    steps:
      - "Home-cage access: the animal remains in the BEATBox environment and can approach task areas on its own schedule."
      - "Autonomous task engagement: operant events are triggered and logged without repeated handling or daily manual sessions."
      - "Integrated modules: feeder, screens, nosepokes, IR barriers, lighting, tunnels, and wall panels create configurable behavioral workflows."
      - "Continuous monitoring: the Raspberry Pi shield, GUI, and data pipeline record task state, sensor events, and performance across long experiments."
  - type: "cards"
    title: "Why it matters"
    cards:
      - title: "Less handling, less stress"
        body: "Autonomous engagement reduces the need to move animals into separate testing rooms and limits stress-related behavioral bias."
      - title: "More behavioral data per subject"
        body: "Continuous access can increase trial density and reveal circadian, motivational, and learning dynamics that short sessions may miss."
      - title: "Better reproducibility"
        body: "Standardized hardware, task timing, and data logs reduce experimenter variability and make protocols easier to share."
      - title: "3Rs alignment"
        body: "Richer within-subject datasets can improve statistical power and may reduce animal numbers when study designs support it."
      - title: "Autonomous"
        body: "Autonomous task engagement: operant events are triggered and logged without repeated handling or daily manual sessions."
      - title: "Integrated modules"
        body: "Feeder, screens, nosepokes, IR barriers, lighting, tunnels, and wall panels create configurable behavioral workflows."
  - type: "mediaGrid"
    title: "System Overview"
    subtitle: "Open-source 24/7 home-cage operant conditioning."
    items:
      - image: "/images/real-build-electronics.jpg"
        title: "Allow high-throughput and longitudinal cohort studies"
        body: "A modular system built for repeated, long-duration behavioral acquisition."
      - image: "/images/beatbox_V3_clear.png"
        title: "Optimized for design and communication"
        body: "A transparent architecture that makes the hardware and workflow easy to explain."
      - image: "/images/BB_V3_Material.jpg"
        title: "Modularity and adaptability"
        body: "Build-your-own logic with visible parts, modules, and materials that can be inspected, adapted, and replicated."
  - type: "gallery"
    title: "Gallery"
    subtitle: "Selected BEATBox renders, build photos, modules, electronics, and GUI screens."
    ctaLabel: "Open full gallery"
    ctaHref: "/gallery"
    items:
      - src: "/images/BB_Full-1.jpg"
        alt: "Completed BEATBox front view"
        caption: "Completed BEATBox."
      - src: "/images/BB_Full-2.jpg"
        alt: "Completed BEATBox side view"
        caption: "Completed BEATBox side view."
      - src: "/images/real-build-setup.jpg"
        alt: "Real BEATBox setup"
        caption: "Real build setup."
      - src: "/images/BB_V3_Material.jpg"
        alt: "V3 material set"
        caption: "V3 materials."
      - src: "/images/beatbox_V3.png"
        alt: "BEATBox V3 render"
        caption: "Full enclosure render."
      - src: "/images/beatbox_V3_clear.png"
        alt: "Transparent BEATBox V3 render"
        caption: "Transparent enclosure render."
      - src: "/images/master_module_V3_1.png"
        alt: "Master module render"
        caption: "Master module."
      - src: "/images/feeder__V3_1.png"
        alt: "Feeder render"
        caption: "Feeder render."
      - src: "/images/Feeder.jpg"
        alt: "Feeder module"
        caption: "Feeder module."
      - src: "/images/Tunnel.jpg"
        alt: "Tunnel module"
        caption: "Tunnel module."
      - src: "/images/Light_top.jpg"
        alt: "Lighting module top"
        caption: "Lighting module top."
      - src: "/images/Light_bottom.jpg"
        alt: "Lighting module bottom"
        caption: "Lighting module bottom."
      - src: "/images/software/window-monitoring_multiple.png"
        alt: "GUI monitoring screen"
        caption: "GUI monitoring screen."
      - src: "/images/software/window-performance.png"
        alt: "GUI performance screen"
        caption: "GUI performance screen."
      - src: "/images/electronics/photo-circuit-all.jpg"
        alt: "Electronics overview"
        caption: "Electronics overview."
  - type: "mediaSplit"
    title: "Live Demo"
    eyebrow: "In-lab recording"
    body: "Short real-life demo clip showing BEATBox in use."
    media:
      - src: "/images/beatbox-modules-demo.gif"
        alt: "Live demo GIF of BEATBox"
        caption: "Live BEATBox module demo."
  - type: "viewer"
    title: "System Presentation"
    subtitle: "Inline deck preview with a direct download link."
    sourcePath: "/presentations/BeatBox-long-presentation_byLizbethMG.pptx"
    downloadLabel: "Download the BEATBox system overview (PPTX)"
    downloadHref: "/presentations/BeatBox-long-presentation_byLizbethMG.pptx"
    note: "If the viewer fails, use the download link."
  - type: "text"
    title: "Contact"
    body: |
      For the team: [eric.burguiere@cnrs.fr](mailto:eric.burguiere@cnrs.fr)

      Centre de Recherche en Neurosciences de Lyon (CRNL), Located in: Centre Hospitalier Le Vinatier
      Address: CRNL - CH Le Vinatier - Bâtiment 462 - Neurocampus, 95 Bd Pinel, 69500 Bron
  - type: "columns"
    title: "Credits"
    columns:
      - heading: "Leadership & science"
        body: |
          **Project Lead and Vision**
          - Eric Burguiere

          **Scientific Conception and Contributions**
          - Eric Burguiere
          - Marine Euvrard
          - Daniela Domingues
          - Nabil Benzina
      - heading: "Engineering & platform"
        body: |
          **Software & Firmware**
          - Zenneddine Ajili
          - Guillaume Penderia
          - Charlie Rousseau

          **Electronics**
          - Pierre Tissier
          - Pierre Pavlov

          **Mechanical Design**
          - Pierre Tissier
          - Lucile Lebegue
      - heading: "Documentation, web & validation"
        body: |
          **Documentation & Open Repository**
          - [Damien Huzard](https://www.neuronautix.com)

          **Web Platform**
          - Damien Huzard
          - S. Lizbeth Mondragon-Gonzalez

          **Graphic Design**
          - S. Lizbeth Mondragon-Gonzalez

          **Validation & Beta Testing**
          - Marine Euvrard
          - Daniela Domingues
          - Eliana Lousada
          - Oriana Lavielle
          - Anne Lorenz
          - Youenn Travert
          - Christianne Schreiweiss

          \*All versions included
  - type: "text"
    title: "How to cite"
    body: |
      Citation instructions will be added when a preprint, paper, or DOI is available.

      Until publication metadata is finalized, please reference the BEATBox open-source repository and contact the team before public reuse in manuscripts, talks, or derivative documentation.
---

BEATBox is an open-source platform for ecological home-cage behavioral experiments.
