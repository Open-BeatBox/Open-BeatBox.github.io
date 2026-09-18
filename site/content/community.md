---
title: "Community"
layout: "page"
showInNav: false
navOrder: 6
slug: "/community"
hero:
  title: "Build, share, and refine Open-BEATBox together."
  subtitle: "A community-driven ecosystem for open behavioral neuroscience tools."
sections:
  - type: "text"
    title: "Who uses Open-BEATBox?"
    body: |
      Open-BEATBox is designed for behavioral neuroscience labs, preclinical platforms, and facilities interested in open, ecological monitoring and operant tasks in the home cage.

      <!-- TODO: add a map or list of early adopters when available. -->
  - type: "links"
    title: "Join the community"
    links:
      - label: "Discussions — ask questions and share builds"
        href: "https://github.com/Open-BeatBox/Open-BeatBox.github.io/discussions"
        note: "Build help, parts sourcing and task design. Answers stay searchable for the next lab."
      - label: "Contributing guide"
        href: "https://github.com/Open-BeatBox/.github/blob/main/CONTRIBUTING.md"
        note: "Which repository takes what, and how contributions are licensed."
      - label: "Code of Conduct"
        href: "https://github.com/Open-BeatBox/.github/blob/main/CODE_OF_CONDUCT.md"
      - label: "Report a build problem"
        href: "https://github.com/Open-BeatBox/Open-BeatBox.github.io/issues/new/choose"
        note: "Build reports and part substitutions that worked are especially useful."
  - type: "faq"
    title: "FAQ"
    items:
      - question: "What sensors does Open-BEATBox support?"
        answer: "Open-BEATBox supports environmental sensors (temperature, humidity, light) and behavioral sensors such as IR beam breaks, nosepoke sensors, and capacitive touch modules. Exact sensor models can be configured per build."
      - question: "Can Open-BEATBox integrate with video-based HCM systems?"
        answer: "Yes. Open-BEATBox is designed to complement camera-based systems and can be synchronized via software and, where available, hardware triggers."
      - question: "What are the power and network requirements?"
        answer: "Typical setups require a stable power source and either USB or Wi-Fi for data transfer. Detailed requirements depend on the final hardware configuration."
  - type: "text"
    title: "How to cite Open-BEATBox"
    body: |
      If you use Open-BEATBox in a scientific publication, please cite the project. Each repository carries a `CITATION.cff` file, so GitHub's **Cite this repository** button gives you APA and BibTeX directly.

      A reference paper is in preparation. Once it is published it becomes the preferred citation, and the citation files will be updated to point at it.
  - type: "list"
    title: "Tutorials"
    items:
      - "Assembly overview"
      - "First operant task in the home cage"
      - "Basic data analysis with the Python client"
---

