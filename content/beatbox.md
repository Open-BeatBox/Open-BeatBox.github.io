---
title: "What is Beatbox?"
layout: "page"
showInNav: true
navOrder: 2
slug: "/beatbox"
hero:
  title: "Ecological, automated operant-conditioning in the home cage."
  subtitle: "Continuous behavioral experiments with reduced handling, improved welfare, and richer data."
sections:
  - type: "text"
    title: "Beatbox in a nutshell"
    body: |
      Beatbox is an ecological, automated operant-conditioning and home-cage monitoring device for mice. It enables continuous (24/7) behavioral experiments directly in the animal’s living environment.

      By allowing mice to self-engage in tasks at any time over weeks, Beatbox both refines welfare conditions and improves the statistical power of experiments.
  - type: "list"
    title: "Core problems Beatbox addresses"
    items:
      - "Short, stressful, experimenter-dependent sessions"
      - "Limited task flexibility in classical operant chambers"
      - "Poor standardization across labs and platforms"
  - type: "pipeline"
    title: "Design overview"
    steps:
      - "Environmental sensors (temperature, humidity, light)"
      - "Behavioral sensors (IR beam breaks, nosepoke sensors, levers, capacitive touch)"
      - "Audio input/output modules"
      - "Microcontroller with real-time firmware"
      - "Streaming to local PC or server via USB or Wi-Fi"
      - "Python client and REST/WebSocket APIs for data access"
  - type: "columns"
    title: "Hardware and Software"
    columns:
      - heading: "Hardware design"
        body: |
          Beatbox uses a modular enclosure with removable panels so labs can adapt the chamber to their task.

          Core components include the main chamber, interchangeable operant modules (nosepoke, rewards, sensors), a PCB with multiple sensor interfaces, and a central microcontroller.

          <!-- TODO: Insert exact microcontroller model, chamber dimensions, reward system details, and power supply specs. -->
      - heading: "Software stack TEST"
        body: |
          The Beatbox software stack includes real-time acquisition firmware, a Python middleware layer for streaming and buffering, Dockerized services for visualization and storage, and open APIs in JSON and WebSocket formats.

          Optional JSON-LD metadata export supports integration with FAIR data workflows.
  - type: "roadmap"
    title: "Versions & roadmap"
    items:
      - label: "v0.1 – First public release"
      - label: "v0.2 – Modular panel redesign"
      - label: "v0.3 – API stabilization"
      - label: "v0.4 – Benchmarking and validation datasets"
      - label: "v1.0 – Community hardware certification program"
---

