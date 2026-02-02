---
title: "BEATBox One-Pager"
layout: "page"
showInNav: false
navOrder: 2
slug: "/one-pager"
hero:
  title: "The BEhavioural and AuTonomous Box (BEATBox): an open-source automated, customizable, and low-cost system for high-throughput data acquisition"
  subtitle: "24/7 home-cage operant conditioning that preserves natural rhythms while increasing data density and reproducibility."
  backgroundVideo: "/images/D_View_Promotional_Video_Generated.mp4"
  backgroundImage: "/images/beatbox-og-default.png"
  secondaryCta:
    label: "View Open-Source Resources"
    href: "https://github.com/Open-BeatBox/Open-BeatBox.github.io/tree/main/resources"
sections:
  - type: "text"
    title: "Context & Scientific Background"
    body: "*BEATBox is an autonomous home-cage behavioral system that lets rodents live inside the experimental apparatus while continuously performing tasks.*

By removing repeated handling, artificial session boundaries, and experimenter-driven timing, BEATBox preserves circadian rhythms, motivation, and long-term behavioral dynamics. The result is richer, more ecological data with higher reproducibility and lower animal stress."
  - type: "list"
    title: "BEATBox enables to:"
    items:
      - "Respect natural rhythms through fully autonomous task engagement"
      - "Run long-duration experiments (days to weeks) without repeated handling"
      - "Capture richer behavioral dynamics across circadian and motivational states"
      - "Implement complex operant conditioning procedures in an ecological context"
      - "Improve reproducibility through standardized, automated workflows"
      - "Align with the 3Rs (Reduction, Refinement, Replacement)"
      - "Reduce the number of animals required by increasing trials per subject and improving data quality"
  - type: "mediaSplit"
    title: "System Overview"
    eyebrow: "24/7 Home-Cage Operant Conditioning"
    body: "BEATBox is an open, modular platform for continuous behavioral monitoring in a home-cage-like environment. Tasks, sensors, and reward modules can be configured to match experimental goals while minimizing handling and stress."
    bullets:
      - "Continuous behavioral monitoring in a home-cage-like environment"
      - "Minimal experimenter intervention with autonomous task engagement"
      - "Modular hardware panels and task design"
      - "Built for long-term cognitive and motivational studies"
    media:
      - src: "/images/beatbox_V3.png"
        alt: "BEATBox enclosure rendering"
        caption: "Integrated home-cage environment with modular task interfaces."
      - src: "/images/beatbox_V3_clear.png"
        alt: "Transparent BEATBox layout"
        caption: "Clear view of the internal modules and animal pathways."
      - src: "/images/ChatGPT Image Jan 31, 2026, 02_37_59 PM.png"
        alt: "BEATBox system overview"
        caption: "Use BEATBox in your lab environment (AI-generated illustration)."
  - type: "iconGrid"
    title: "Scientific Advantages"
    subtitle: "Ecological validity with longitudinal, high-power datasets"
    items:
      - icon: "ECO"
        title: "Ecological validity"
        body: "Natural behavior is preserved by allowing animals to engage on their own schedule."
      - icon: "LONG"
        title: "Longitudinal acquisition"
        body: "Track behavioral dynamics across days and weeks with stable conditions."
      - icon: "TRIAL"
        title: "High trial counts"
        body: "Autonomous engagement increases the number of trials per subject."
      - icon: "LOW"
        title: "Reduced stress"
        body: "Minimal handling limits stress-related bias in behavioral readouts."
      - icon: "POWER"
        title: "Higher statistical power"
        body: "Richer within-subject datasets improve sensitivity and reproducibility."
    media:
      - src: "/images/screen_V3_2.png"
        alt: "BEATBox monitoring screen"
        caption: "Real-time monitoring and task status."
      - src: "/images/screen_V3_3.png"
        alt: "BEATBox data visualization"
        caption: "Behavioral readouts across sessions."
  - type: "list"
    title: "Publications and validation"
    items:
      - "Euvrard M, ..., Burguiere E - in preparation."
      - "Validation dataset and benchmark protocols (add link)."
      - "Peer-reviewed methods or preprints using BEATBox (add link)."
  - type: "steps"
    title: "How to build BEATBox"
    steps:
      - "Review the hardware and BOM requirements in the resources repository."
      - "Assemble the enclosure and core modules (master module, feeder, lighting)."
      - "Flash firmware and verify sensors and actuators."
      - "Install the control software and confirm data logging."
      - "Run a short validation protocol before full experiments."
  - type: "mediaGrid"
    title: "Technical Architecture"
    subtitle: "Modular hardware with software-hardware co-design"
    items:
      - image: "/images/master_module_V3_1.png"
        title: "Master module"
        body: "Central control, data logging, and system coordination."
      - image: "/images/feeder__V3_1.png"
        title: "Automated feeder"
        body: "Precision reward delivery with configurable schedules."
      - image: "/images/feeder__V3_2.png"
        title: "Feeder module"
        body: "Interchangeable components for different reward types."
      - image: "/images/lighting_V3_1.png"
        title: "Lighting control"
        body: "Programmable light cycles to match circadian protocols."
      - image: "/images/lighting_V3_3.png"
        title: "Light interface"
        body: "Task-specific cues and state indicators."
      - image: "/images/tunnel_V3_1.png"
        title: "Tunnel module"
        body: "Guides movement and supports ecological task design."
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
      - heading: "Build with the community (coming soon)"
        body: |
          ![Open-source collaboration visualization](/images/Gemini_Generated_Image_kp8glxkp8glxkp8g.png)

          Join a growing community of behavioral neuroscientists, method developers, and engineers shaping next-generation home-cage experimentation.
  - type: "links"
    title: "Open-Source Resources"
    links:
      - label: "Resources overview (GitHub)"
        href: "https://github.com/Open-BeatBox/Open-BeatBox.github.io/tree/main/resources"
        note: "Hardware, firmware, software, docs"
      - label: "Hardware"
        href: "https://github.com/Open-BeatBox/Open-BeatBox.github.io/tree/main/resources/hardware"
      - label: "Firmware"
        href: "https://github.com/Open-BeatBox/Open-BeatBox.github.io/tree/main/resources/firmware"
      - label: "Software"
        href: "https://github.com/Open-BeatBox/Open-BeatBox.github.io/tree/main/resources/software"
      - label: "Build guides"
        href: "https://github.com/Open-BeatBox/Open-BeatBox.github.io/tree/main/resources/build-guides"
      - label: "Documentation"
        href: "https://github.com/Open-BeatBox/Open-BeatBox.github.io/tree/main/resources/docs"
      - label: "Website README"
        href: "https://github.com/Open-BeatBox/Open-BeatBox.github.io/blob/main/site/README.md"
        note: "Site development"
  - type: "text"
    title: "NERB team"
    body: "BEATBox is developed by the NERB team: Eric Burguiere, Lizbeth Mondragon. Learn more at [nerb.team](https://nerb.team/)."
---
This one-pager summarizes BEATBox and provides direct access to the open-source resources needed to build and extend the system.
