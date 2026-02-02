---
title: "Build & Code"
layout: "page"
showInNav: false
navOrder: 4
slug: "/build-and-code"
hero:
  title: "Build Beatbox, flash the firmware, start streaming data."
  subtitle: "Open hardware, open firmware, and open APIs."
sections:
  - type: "steps"
    title: "Hardware"
    steps:
      - "Download CAD, STL, PCB, and wiring diagrams from the Beatbox repository."
      - "Order components using the Bill of Materials."
      - "Assemble the chamber and modules following the build guide."
      - "<!-- TODO: link exact GitHub repo and hardware docs. -->"
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
      Contributions are welcome. Please follow the coding style and pull request process described in the repository.

      <!-- TODO: link CONTRIBUTING.md and issue tracker. -->
---

