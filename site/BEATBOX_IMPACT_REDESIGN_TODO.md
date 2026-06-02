# BEATBox Impact Redesign TODO

## Phase 1 - Immediate CTA and Build Path

- [x] Make the top hero CTA path obvious:
  - [x] Add `Build your own` as a primary hero button.
  - [x] Keep `View Open-Source Resources` as a secondary hero button.
  - [x] Reduce hero CTA ambiguity by using action-oriented labels.
- [x] Make the Assembly SOP CTA highly visible:
  - [x] Move `Open the interactive BEATBox Assembly SOP` directly below the `Assembly Walkthrough` section title.
  - [x] Render it as a button, not a plain text link.
  - [x] Keep the assembly video and SOP visually connected.

## Phase 2 - Homepage Narrative Structure

- [x] Rework the first 2-3 scrolls around a clearer product story:
  - [x] Shorten the hero headline into a direct promise.
  - [x] Add a compact evidence/value strip for `24/7`, `open-source`, `home-cage`, `low-cost`, and `modular`.
  - [x] Move the most important real system visuals earlier.
- [x] Add a `How BEATBox works` section:
  - [x] Step 1: Home-cage access.
  - [x] Step 2: Autonomous task engagement.
  - [x] Step 3: Reward, sensors, screens, lighting, and tunnel modules.
  - [x] Step 4: Continuous data acquisition and monitoring.
- [x] Add a `Why it matters` section:
  - [x] Explain less handling and lower stress.
  - [x] Explain higher data density and longitudinal acquisition.
  - [x] Explain reproducibility and standardized workflows.
  - [x] Include quantitative placeholders where exact numbers still need validation.

## Phase 3 - Audience-Specific Paths

- [x] Add clear audience cards:
  - [x] `For scientists`: scientific rationale, use cases, validation.
  - [x] `For builders`: assembly SOP, BOM, CAD, PCB, practical warnings.
  - [x] `For developers`: firmware, GUI, data pipeline, contribution path.
- [x] Add a production-oriented resources section:
  - [x] Assembly SOP.
  - [x] Bill of materials.
  - [x] CAD / 3D print files.
  - [x] PCB files.
  - [x] Firmware.
  - [x] Software GUI.
  - [x] Protocol templates.

## Phase 4 - Validation and Credibility

- [x] Surface validation earlier:
  - [x] Mention current beta-testing status.
  - [x] List intended and tested behavioral use cases.
  - [x] List validated modules and unresolved items.
  - [x] Add a `what is ready / what is still under construction` block.
- [ ] Add citation / how-to-reference placeholder:
  - [ ] Add citation instructions when a preprint, paper, or DOI becomes available.
  - [x] Keep a temporary `How to cite` placeholder until publication metadata exists.

## Phase 5 - Visual Presentation

- [x] Improve visual hierarchy based on reference sites:
  - [x] Use a cleaner hero with a sharper headline and immediate CTAs.
  - [x] Add an early system workflow graphic or stepper.
  - [x] Add real build evidence before deeper galleries.
  - [x] Reduce long uninterrupted sections.
- [x] Improve module presentation:
  - [x] Show feeder, screen, tunnel, lighting, wall, and base as a coherent modular system.
  - [x] Keep detailed galleries lower on the page.
  - [x] Connect assembly GIFs to the build path.

## Phase 6 - Verification

- [x] Run `npm run build`.
- [ ] Check the homepage locally.
- [x] Confirm `/docs/beatbox-assembly-sop.html` still works.
- [x] Confirm no new broken asset paths.
