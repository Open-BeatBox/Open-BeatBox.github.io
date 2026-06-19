# BEATBox Documentation and Repository TODO

This tracker lists completed repository/documentation cleanup work and the remaining placeholders or unfinished text that must be resolved before the documentation can be considered stable.

## Phase 1 - Repository entry point and public navigation

- [x] Make the top hero CTA path obvious.
  - [x] Add `Build your own` as a primary hero button.
  - [x] Keep `View Open-Source Resources` as a secondary hero button.
  - [x] Reduce hero CTA ambiguity by using action-oriented labels.
- [x] Make the Assembly SOP CTA highly visible.
  - [x] Move `Open the interactive BEATBox Assembly SOP` directly below the `Assembly Walkthrough` section title.
  - [x] Render it as a button, not a plain text link.
  - [x] Keep the assembly video and SOP visually connected.
- [x] Replace the root README with a comprehensive repository entry point.
  - [x] Link the project website.
  - [x] Link the one-pager.
  - [x] Link the Sphinx manual.
  - [x] Link the interactive assembly SOP.
  - [x] Explain repository structure from the root.
  - [x] Explain resource-folder roles.
  - [x] Explain local website and Sphinx documentation builds.
  - [x] Explain license layers.

## Phase 2 - Documentation system cleanup

- [x] Keep Sphinx as the canonical documentation system.
- [x] Remove the MkDocs deployment workflow.
- [x] Remove the MkDocs configuration file.
- [x] Update the GitHub Pages workflow so documentation changes trigger a full deployment.
- [x] Build the Sphinx manual before the Next.js static export.
- [ ] Audit and migrate any still-useful legacy Markdown content from `resources/docs/` into `docs/source/`.
- [ ] Remove or archive legacy `resources/docs/` files after migration so contributors are not presented with two documentation systems.
- [ ] Update any remaining contributor text that still mentions MkDocs, `resources/mkdocs.yml`, or `gh-pages-docs`.

## Phase 3 - Homepage narrative structure

- [x] Rework the first 2-3 scrolls around a clearer product story.
  - [x] Shorten the hero headline into a direct promise.
  - [x] Add a compact evidence/value strip for `24/7`, `open-source`, `home-cage`, `low-cost`, and `modular`.
  - [x] Move the most important real system visuals earlier.
- [x] Add a `How BEATBox works` section.
  - [x] Step 1: Home-cage access.
  - [x] Step 2: Autonomous task engagement.
  - [x] Step 3: Reward, sensors, screens, lighting, and tunnel modules.
  - [x] Step 4: Continuous data acquisition and monitoring.
- [x] Add a `Why it matters` section.
  - [x] Explain less handling and lower stress.
  - [x] Explain higher data density and longitudinal acquisition.
  - [x] Explain reproducibility and standardized workflows.
  - [x] Include quantitative placeholders where exact numbers still need validation.

## Phase 4 - Audience-specific paths

- [x] Add clear audience cards.
  - [x] `For scientists`: scientific rationale, use cases, validation.
  - [x] `For builders`: assembly SOP, BOM, CAD, PCB, practical warnings.
  - [x] `For developers`: firmware, GUI, data pipeline, contribution path.
- [x] Add a production-oriented resources section.
  - [x] Assembly SOP.
  - [x] Bill of materials.
  - [x] CAD / 3D print files.
  - [x] PCB files.
  - [x] Firmware.
  - [x] Software GUI.
  - [x] Protocol templates.

## Phase 5 - Validation and credibility

- [x] Surface validation earlier.
  - [x] Mention current beta-testing status.
  - [x] List intended and tested behavioral use cases.
  - [x] List validated modules and unresolved items.
  - [x] Add a `what is ready / what is still under construction` block.
- [ ] Add final citation instructions.
  - [ ] Add preprint, paper, DOI, or Zenodo citation metadata when available.
  - [x] Keep a temporary `How to cite` placeholder until publication metadata exists.
- [ ] Replace broad validation statements with quantitative evidence when available.
  - [ ] Add cost benchmark.
  - [ ] Add cable-length recommendations.
  - [ ] Add tracking-wall color recommendation.
  - [ ] Add long-term reliability notes.
  - [ ] Add finalized protocol templates.

## Phase 6 - Sphinx manual placeholders to resolve

- [ ] `docs/source/build/assembly.md`
  - [ ] Migrate the interactive SOP into a stable, versioned, non-interactive assembly guide.
  - [ ] Add required tools and pre-build checklist.
  - [ ] Add module-by-module assembly checkpoints.
  - [ ] Add final validation checklist before animal use.
- [ ] `docs/source/build/bom.md`
  - [ ] Replace the placeholder BOM with a real table.
  - [ ] Add quantities.
  - [ ] Add supplier references.
  - [ ] Add acceptable substitutes.
  - [ ] Add revision compatibility notes.
  - [ ] Confirm `BB_Feeder_IRBarrier_V1.1` naming.
- [ ] `docs/source/software/index.md`
  - [ ] Add Raspberry Pi setup instructions.
  - [ ] Add firmware installation instructions.
  - [ ] Add Python GUI setup instructions.
  - [ ] Add monitoring-window documentation.
  - [ ] Add performance-dashboard documentation.
  - [ ] Add data-output format documentation.
  - [ ] Add troubleshooting section.
- [ ] `docs/source/protocols/index.md`
  - [ ] Add at least one complete behavioral protocol template.
  - [ ] Add validation status by module or protocol.
  - [ ] Add QC criteria for experimental runs.
  - [ ] Add expected output fields and analysis-ready variables.
- [ ] `docs/source/hardware/pcbs.md`
  - [ ] Add PCB version table.
  - [ ] Add board function by PCB.
  - [ ] Add connector and pinout links.
  - [ ] Add status: tested, beta, obsolete, or to confirm.

## Phase 7 - Website content placeholders to resolve

- [ ] `site/content/beatbox.md`
  - [ ] Replace `Software stack TEST` with final public heading.
  - [ ] Insert exact microcontroller model.
  - [ ] Insert chamber dimensions.
  - [ ] Insert reward-system details.
  - [ ] Insert power-supply specifications.
- [ ] `site/content/build-and-code.md`
  - [ ] Replace `TODO: link exact GitHub repo and hardware docs` with exact resource links.
  - [ ] Add exact firmware commands.
  - [ ] Add exact microcontroller or controller type.
  - [ ] Link contribution guide and issue tracker.
- [ ] `site/content/get-beatbox.md`
  - [ ] Clarify whether pre-assembled units are currently available.
  - [ ] Add vendors, pricing ranges, and ordering process if applicable.
  - [ ] Otherwise replace the TODO with `Coming soon`.
  - [ ] Clarify whether support/customization packages exist today.
  - [ ] Add request-a-quote/contact route if applicable.
- [ ] `site/content/home.md`
  - [ ] Replace temporary citation language once publication metadata exists.
  - [ ] Verify that `Build your Own` capitalization is consistent with the rest of the website.

## Phase 8 - Visual presentation

- [x] Improve visual hierarchy based on reference sites.
  - [x] Use a cleaner hero with a sharper headline and immediate CTAs.
  - [x] Add an early system workflow graphic or stepper.
  - [x] Add real build evidence before deeper galleries.
  - [x] Reduce long uninterrupted sections.
- [x] Improve module presentation.
  - [x] Show feeder, screen, tunnel, lighting, wall, and base as a coherent modular system.
  - [x] Keep detailed galleries lower on the page.
  - [x] Connect assembly GIFs to the build path.

## Phase 9 - Verification

- [x] Run `npm run build` during the previous redesign pass.
- [x] Confirm `/docs/beatbox-assembly-sop.html` still works during the previous redesign pass.
- [x] Confirm no new broken asset paths during the previous redesign pass.
- [ ] Run `python -m sphinx -b html -d docs/_build/doctrees docs/source site/public/docs/manual` after the Sphinx workflow change.
- [ ] Run `npm run build` after rebuilding the manual.
- [ ] Check the homepage locally.
- [ ] Check `/docs/manual/` locally after the Sphinx build.
- [ ] Check `/docs/beatbox-assembly-sop.html` locally after the deployment workflow change.
