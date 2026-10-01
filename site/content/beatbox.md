---
title: "What is Open-BEATBox?"
layout: "page"
showInNav: false
navOrder: 2
slug: "/beatbox"
hero:
  title: "Ecological, automated operant-conditioning in the home cage."
  subtitle: "Continuous behavioral experiments with reduced handling, improved welfare, and richer data."
sections:
  - type: "text"
    title: "Open-BEATBox in a nutshell"
    body: |
      Open-BEATBox is an ecological, automated operant-conditioning and home-cage monitoring device for mice. It enables continuous (24/7) behavioral experiments directly in the animal’s living environment.

      By allowing mice to self-engage in tasks at any time over weeks, Open-BEATBox both refines welfare conditions and improves the statistical power of experiments.
  - type: "list"
    title: "Core problems Open-BEATBox addresses"
    items:
      - "Short, stressful, experimenter-dependent sessions"
      - "Limited task flexibility in classical operant chambers"
      - "Poor standardization across labs and platforms"
  - type: "pipeline"
    title: "How it works"
    steps:
      - "The mouse walks through a tunnel, looks at two screens, touches one, and collects a food pellet."
      - "Each module (feeder, screens, tunnel, lighting, nosepoke) has its own small computer that reads its sensors and drives its motor, screen or LEDs."
      - "The modules talk to each other over a shared cable, the CAN bus, and announce events by themselves."
      - "One main module connects the box to your computer and forwards messages."
      - "The control application on the computer runs the training protocol and shows the animal's progress."
      - "Every event and every trial is saved to CSV files, ready for Excel, R or Python."
  - type: "columns"
    title: "Hardware and Software"
    columns:
      - heading: "Hardware design"
        body: |
          Open-BEATBox is built from independent modules in a laser-cut plexiglass enclosure with 3D-printed parts: a **feeder**, two **touch/response screens**, a **photobeam gate (tunnel)**, a **lighting** module with white, red and infrared LEDs, and a **main module** that links the box to your PC. An optional **nosepoke** module is also available.

          Every module has a custom circuit board built around an **RP2040** microcontroller and a **CAN bus** controller. Eight board designs (KiCad) and the full mechanical design (CAD, V3) are published. The box runs from a single 12 V supply.

          See the [hardware chapter of the manual](/docs/manual/hardware/index.html).
      - heading: "Software stack"
        body: |
          The firmware of each module is written in **MicroPython**. A **PC application** (Python, with a graphical interface) runs the training protocol — five stages from "collect a pellet" to "choose the correct screen" — and writes the results to **CSV files**. A small **command-line tool** lets you test every module without the application.

          The software is a development version. See the [software chapter of the manual](/docs/manual/software/index.html) and the [open points](/docs/manual/project/status.html).
  - type: "roadmap"
    title: "Versions & roadmap"
    items:
      - label: "v0.1 – First public release"
      - label: "v0.2 – Modular panel redesign"
      - label: "v0.3 – API stabilization"
      - label: "v0.4 – Benchmarking and validation datasets"
      - label: "v1.0 – Community hardware certification program"
---

