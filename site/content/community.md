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
      - question: "What sensors does Open-BEATBox have?"
        answer: "The modules use infrared sensors: pulsed infrared light curtains (screens and tunnel) and infrared photo-interrupters (pellet detection at the feeder, and the optional nosepoke module). Other sensors can be added by building a new module on the same board design and the CAN bus."
      - question: "Can Open-BEATBox integrate with video-based HCM systems?"
        answer: "Open-BEATBox is designed to complement camera-based systems, and a camera can be installed. The box itself records events, not video; synchronising with an external video system is left to the user for now."
      - question: "What are the power and computer requirements?"
        answer: "The box runs from a single 12 V power adapter. It connects to a PC through the main module (a serial link), and the control application runs on Windows, macOS or Linux with Python. No network connection is needed during an experiment."
  - type: "text"
    title: "How to cite Open-BEATBox"
    body: |
      If you use Open-BEATBox in a scientific publication, please cite **both** the reference preprint and the archived release of the layer you used.

      **The platform (preprint):** Euvrard M, Benzina N, Domingues D, Mondragón-González SL, Huzard D, Penderia G, Travert-Jouanneau Y, Lavielle O, Lousada E, Schreiweis C, Lorenz A, Pavlov P, Ajili Z, Lebegue L, Tissier P, Burguière E. "Open-BEATBox: an open-source autonomous operant chamber for high-throughput data acquisition of complex behaviour." bioRxiv, 2026 (DOI to be added when the preprint is posted).

      **The release you used:** each release of the [Hardware](https://github.com/Open-BeatBox/Open-BeatBox_Hardware/releases), [Software](https://github.com/Open-BeatBox/Open-BeatBox_Software/releases) and [Documentation](https://github.com/Open-BeatBox/Open-BeatBox_Documentation/releases) repositories is archived on Zenodo with its own DOI (release `biorxiv-v1` for the preprint: Hardware [10.5281/zenodo.24080048](https://doi.org/10.5281/zenodo.24080048), Software [10.5281/zenodo.24080479](https://doi.org/10.5281/zenodo.24080479), Documentation [10.5281/zenodo.24080481](https://doi.org/10.5281/zenodo.24080481)). The firmware has no record of its own: it is part of the Software repository, so cite that record.

      Each repository carries a `CITATION.cff` file, so GitHub's **Cite this repository** button gives you APA and BibTeX directly.
  - type: "list"
    title: "Tutorials"
    items:
      - "Assembly overview"
      - "Your first training stage (S1)"
      - "Reading the CSV result files"
---

