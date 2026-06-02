---
title: "The BEhavioural and AuTonomous Box (BEATBox)"
layout: "page"
showInNav: false
navOrder: 1
slug: "/"
hero:
  title: "Open-source 24/7 home-cage behavioral testing"
  subtitle: "BEATBox is a modular, low-cost platform for autonomous operant conditioning, longitudinal monitoring, and reproducible behavioral neuroscience."
  backgroundVideo: "/images/D_View_Promotional_Video_Generated.mp4"
  backgroundImage: "/images/beatbox_V3.png"
  primaryCta:
    label: "Build your own"
    href: "/docs/beatbox-assembly-sop.html"
  secondaryCta:
    label: "View Open-Source Resources"
    href: "https://github.com/Open-BeatBox/Open-BeatBox.github.io/tree/main/resources"
sections:
  - type: "stats"
    title: "Built for experiments that do not fit into short sessions"
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
        body: "Accessible fabrication; final cost benchmarks remain to validate."
  - type: "mediaSplit"
    title: "System Overview"
    eyebrow: "24/7 Home-Cage Operant Conditioning"
    body: "BEATBox lets rodents live inside the experimental apparatus while continuously accessing task modules, rewards, sensors, and monitoring interfaces. The system is designed for ecological, high-throughput acquisition with minimal experimenter intervention."
    bullets:
      - "Continuous behavioral monitoring in a home-cage-like environment"
      - "Minimal experimenter intervention with autonomous task engagement"
      - "Modular hardware panels and task design"
      - "Built for long-term cognitive and motivational studies"
    media:
      - src: "/images/beatbox_V3.png"
        alt: "3D render of the BEATBox enclosure"
        caption: "3D render of the integrated home-cage enclosure with modular task interfaces."
      - src: "/images/beatbox_V3_clear.png"
        alt: "Transparent render showing BEATBox internal layout"
        caption: "Transparent render showing internal modules and animal pathways."
      - src: "/images/ChatGPT Image Jan 31, 2026, 02_37_59 PM.png"
        alt: "Concept illustration of BEATBox in a lab environment"
        caption: "Concept illustration of BEATBox in a lab environment (AI-generated)."
  - type: "pipeline"
    title: "How BEATBox works"
    steps:
      - "Home-cage access: the animal remains in the BEATBox environment and can approach task areas on its own schedule."
      - "Autonomous task engagement: operant events are triggered and logged without repeated handling or daily manual sessions."
      - "Integrated modules: feeder, screens, nosepokes, IR barriers, lighting, tunnels, and wall panels create configurable behavioral workflows."
      - "Continuous monitoring: the Raspberry Pi shield, GUI, and data pipeline record task state, sensor events, and performance across long experiments."
  - type: "cards"
    title: "Why it matters"
    note: "Quantitative benchmarks such as cost per box, trials per day, and long-term reliability will be added as validation data are finalized."
    cards:
      - title: "Less handling, less stress"
        body: "Autonomous engagement reduces the need to move animals into separate testing rooms and limits stress-related behavioral bias."
      - title: "More behavioral data per subject"
        body: "Continuous access can increase trial density and reveal circadian, motivational, and learning dynamics that short sessions may miss."
      - title: "Better reproducibility"
        body: "Standardized hardware, task timing, and data logs reduce experimenter variability and make protocols easier to share."
      - title: "3Rs alignment"
        body: "Richer within-subject datasets can improve statistical power and may reduce animal numbers when study designs support it."
  - type: "cards"
    title: "Choose your path"
    cards:
      - title: "For scientists"
        body: "Start with the scientific rationale, intended use cases, validation status, and examples of long-duration behavioral paradigms."
      - title: "For builders"
        body: "Use the assembly SOP, build guides, CAD files, PCB identifiers, BOM notes, and safety warnings to prepare a reproducible build."
      - title: "For developers"
        body: "Inspect the firmware, Python GUI, data outputs, Raspberry Pi shield integration, and contribution notes for extending the platform."
  - type: "links"
    title: "Build and production resources"
    links:
      - label: "Interactive assembly SOP"
        href: "/docs/beatbox-assembly-sop.html"
        note: "Step-by-step build checklist with module GIFs"
      - label: "Build guides"
        href: "https://github.com/Open-BeatBox/Open-BeatBox.github.io/tree/main/resources/build-guides"
        note: "Under construction"
      - label: "CAD and 3D print files"
        href: "https://github.com/Open-BeatBox/Open-BeatBox.github.io/tree/main/resources/hardware/CAD_files"
        note: "V2 and V3 hardware files"
      - label: "Hardware and PCB resources"
        href: "https://github.com/Open-BeatBox/Open-BeatBox.github.io/tree/main/resources/hardware"
        note: "Includes hardware area; PCB package and BOM still being consolidated"
      - label: "Firmware"
        href: "https://github.com/Open-BeatBox/Open-BeatBox.github.io/tree/main/resources/firmware"
        note: "Embedded control code"
      - label: "Software GUI"
        href: "https://github.com/Open-BeatBox/Open-BeatBox.github.io/tree/main/resources/software"
        note: "Python software interface"
      - label: "Documentation and protocol templates"
        href: "/docs/manual/"
        note: "Sphinx documentation for build, hardware, software, and protocols"
      - label: "Website README"
        href: "https://github.com/Open-BeatBox/Open-BeatBox.github.io/blob/main/site/README.md"
        note: "Site development"
  - type: "mediaGrid"
    title: "Real-World Builds (Photos)"
    subtitle: "Real photos to show BEATBox nearing deployment"
    items:
      - image: "/images/real-build-setup.jpg"
        title: "Full enclosure in the lab"
        body: "Real BEATBox setup installed in a home-cage environment."
      - image: "/images/real-build-electronics.jpg"
        title: "Electronics layout"
        body: "Top-down photo showing electronics wiring and controller boards."
      - image: "/images/real-build-electronics-detail.jpg"
        title: "Control detail"
        body: "Close-up of screens and electronics integration."
  - type: "video"
    title: "Assembly Walkthrough"
    subtitle: "Transparent assembly video of the BEATBox enclosure with the detailed build SOP"
    src: "/videos/AssemblageCage_Transparent.mp4"
    caption: "Use the walkthrough video together with the interactive assembly checklist for internal builds and beta units."
    ctaLabel: "Open the interactive BEATBox Assembly SOP"
    ctaHref: "/docs/beatbox-assembly-sop.html"
  - type: "cards"
    title: "Readiness and validation status"
    note: "This section should be updated as beta-testing, module validation, and quantitative benchmarks are finalized."
    cards:
      - title: "Current stage"
        body: "BEATBox is nearing deployment through real builds, assembly documentation, and beta-unit preparation."
      - title: "Validated build path"
        body: "The assembly SOP now includes module-level GIFs for the base, walls, screen, feeder, tunnel, and lighting modules."
      - title: "Behavioral use cases"
        body: "The platform targets operant conditioning, autonomous reward delivery, sensor-triggered events, and longitudinal monitoring."
      - title: "Open questions"
        body: "Final cost, optimal cable lengths, wall color for tracking, long-term reliability, and full protocol templates still need formal resolution."
  - type: "text"
    title: "How to cite"
    body: |
      Citation instructions will be added when a preprint, paper, or DOI is available.

      Until publication metadata is finalized, please reference the BEATBox open-source repository and contact the NERB team before public reuse in manuscripts, talks, or derivative documentation.
  - type: "mediaGrid"
    title: "GUI & Monitoring Screens"
    subtitle: "Python software interface screenshots"
    items:
      - image: "/images/software/GUI.png"
        title: "Main GUI"
        body: "Primary control window for system setup and monitoring."
      - image: "/images/software/window-monitoring.png"
        title: "Monitoring window"
        body: "Live status for tasks and sensors."
      - image: "/images/software/window-performance.png"
        title: "Performance dashboard"
        body: "Behavioral metrics and performance overview."
  - type: "iconGrid"
    title: "Scientific Advantages"
    subtitle: "Ecological validity with longitudinal, high-power datasets"
    items:
      - icon: "🌿"
        title: "Ecological validity"
        body: "Natural behavior is preserved by allowing animals to engage on their own schedule."
      - icon: "🧭"
        title: "Longitudinal acquisition"
        body: "Track behavioral dynamics across days and weeks with stable conditions."
      - icon: "🔁"
        title: "High trial counts"
        body: "Autonomous engagement increases the number of trials per subject."
      - icon: "🧘"
        title: "Reduced stress"
        body: "Minimal handling limits stress-related bias in behavioral readouts."
      - icon: "📈"
        title: "Higher statistical power"
        body: "Richer within-subject datasets improve sensitivity and reproducibility."
  - type: "text"
    title: "Context & Scientific Background"
    body: |
      *BEATBox is an autonomous home-cage behavioral system that lets rodents live inside the experimental apparatus while continuously performing tasks.*

      By removing repeated handling, artificial session boundaries, and experimenter-driven timing, BEATBox is designed to preserve circadian rhythms, motivation, and long-term behavioral dynamics. The result is richer, more ecological data with higher reproducibility and lower animal stress.
  - type: "list"
    title: "BEATBox enables researchers to"
    items:
      - "Respect natural rhythms through fully autonomous task engagement"
      - "Run long-duration experiments (days to weeks) without repeated handling"
      - "Capture richer behavioral dynamics across circadian and motivational states"
      - "Implement complex operant conditioning procedures in an ecological context"
      - "Improve reproducibility through standardized, automated workflows"
      - "Align with the 3Rs (Reduction, Refinement, Replacement)"
      - "Reduce the number of animals required by increasing trials per subject and improving data quality"
  - type: "mediaGrid"
    title: "Technical Architecture"
    subtitle: "Modular hardware with software-hardware co-design"
    items:
      - image: "/images/Feeder.jpg"
        title: "Automated feeder"
        body: "Real feeder module installed in the V3 build."
      - image: "/images/Feeder_side.jpg"
        title: "Feeder (side view)"
        body: "Side view of the feeder module."
      - image: "/images/Light_top.jpg"
        title: "Lighting control (top)"
        body: "Top view of the lighting module."
      - image: "/images/Light_bottom.jpg"
        title: "Lighting control (bottom)"
        body: "Bottom view of the lighting module."
      - image: "/images/Tunnel.jpg"
        title: "Tunnel module"
        body: "Real tunnel module in the V3 build."
  - type: "gallery"
    title: "CAD Render Gallery"
    subtitle: "V3 CAD render highlights"
    items:
      - src: "/images/beatbox_V3.png"
        alt: "BEATBox V3 render"
        caption: "Full enclosure render."
      - src: "/images/beatbox_V3_clear.png"
        alt: "Transparent BEATBox V3 render"
        caption: "Transparent view of the enclosure."
      - src: "/images/master_module_V3_1.png"
        alt: "Master module render"
        caption: "Master module render."
      - src: "/images/feeder__V3_1.png"
        alt: "Automated feeder render"
        caption: "Feeder render."
      - src: "/images/feeder__V3_2.png"
        alt: "Feeder module render"
        caption: "Feeder module render."
      - src: "/images/lighting_V3_1.png"
        alt: "Lighting control render"
        caption: "Lighting control render."
      - src: "/images/lighting_V3_3.png"
        alt: "Light interface render"
        caption: "Light interface render."
      - src: "/images/tunnel_V3_1.png"
        alt: "Tunnel module render"
        caption: "Tunnel module render."
      - src: "/images/screen_V3_2.png"
        alt: "Monitoring screen render"
        caption: "Monitoring screen render."
      - src: "/images/screen_V3_3.png"
        alt: "Data visualization render"
        caption: "Data visualization render."
  - type: "gallery"
    title: "Electronics Gallery"
    subtitle: "Controller boards, screens, and wiring details"
    items:
      - src: "/images/electronics/photo-circuit-all.jpg"
        alt: "Electronics overview"
        caption: "Electronics overview."
      - src: "/images/electronics/photo-circuit-ecrans1.jpg"
        alt: "Electronics screens detail 1"
        caption: "Screens detail 1."
      - src: "/images/electronics/photo-circuit-ecrans2.jpg"
        alt: "Electronics screens detail 2"
        caption: "Screens detail 2."
      - src: "/images/electronics/20260202_102651.jpg"
        alt: "Electronics photo 20260202 102651"
        caption: "Electronics build photo."
      - src: "/images/electronics/20260202_102731_1.jpg"
        alt: "Electronics photo 20260202 102731"
        caption: "Electronics build photo."
      - src: "/images/electronics/20260202_102829_1.jpg"
        alt: "Electronics photo 20260202 102829"
        caption: "Electronics build photo."
      - src: "/images/electronics/20260202_103036_1.jpg"
        alt: "Electronics photo 20260202 103036"
        caption: "Electronics build photo."
      - src: "/images/electronics/20260202_103042_1.jpg"
        alt: "Electronics photo 20260202 103042"
        caption: "Electronics build photo."
      - src: "/images/electronics/20260202_103049_1.jpg"
        alt: "Electronics photo 20260202 103049"
        caption: "Electronics build photo."
      - src: "/images/electronics/20260202_103053_1.jpg"
        alt: "Electronics photo 20260202 103053"
        caption: "Electronics build photo."
      - src: "/images/electronics/20260202_103204_1.jpg"
        alt: "Electronics photo 20260202 103204"
        caption: "Electronics build photo."
  - type: "mediaSplit"
    title: "Live Demo"
    eyebrow: "In-lab recording"
    body: "Short, real-life demo clip showing BEATBox in use."
    media:
      - src: "/images/beatbox-modules-demo.gif"
        alt: "Live demo GIF of BEATBox"
        caption: "Live demo: video_èdaniela_mini_gif."
  - type: "viewer"
    title: "System Presentation"
    subtitle: "Inline deck preview with a direct download link"
    sourcePath: "/presentations/BeatBox-long-presentation_byLizbethMG.pptx"
    downloadLabel: "Download the BEATBox system overview (PPTX)"
    downloadHref: "/presentations/BeatBox-long-presentation_byLizbethMG.pptx"
    note: "If the viewer fails, ensure the PPTX is publicly accessible at the site URL."
  - type: "columns"
    title: "Open-Source & Community"
    columns:
      - heading: "Open by design"
        body: |
          BEATBox hardware and software are fully open-source, enabling inspection, adaptation, and replication across labs.

          - Modular, extensible hardware schematics and firmware
          - Transparent behavioral workflows and data formats
          - Clear interfaces for sensors, actuators, and task modules
          - Reproducible configurations with versioned components
          - Community review and iteration on protocols and data pipelines
          - Community-driven improvements and reproducibility
      - heading: "Build with the community (Coming soon)"
        body: |
          ![Open-source collaboration visualization](/images/Gemini_Generated_Image_kp8glxkp8glxkp8g.png)

          Join a growing community of behavioral neuroscientists, method developers, and engineers shaping next-generation home-cage experimentation.
        links:
          - label: "Join the (upcoming) BEATBox community forum"
            href: "https://github.com/Open-BeatBox/Open-BeatBox.github.io/discussions"
  - type: "text"
    title: "NERB team"
    body: "BEATBox is developed by the NERB team: Eric Burguiere, Lizbeth Mondragon-Gonzalez, Daniela Domingues. Learn more at [nerb.team](https://nerb.team/)."
  - type: "text"
    title: "Contact"
    body: |
      For the team: [nerbmouse@gmail.com](mailto:nerbmouse@gmail.com)

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
---

BEATBox lets you move beyond short, stressful sessions toward continuous, ecological monitoring inside the home cage.
