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
  - [x] Replace `TODO: link exact GitHub repo and hardware docs` with exact resource links.
  - [ ] Add exact firmware commands.
  - [ ] Add exact microcontroller or controller type.
  - [x] Link contribution guide and issue tracker.
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
- [x] Run `python -m sphinx -b html -d docs/_build/doctrees docs/source site/public/docs/manual` after the Sphinx workflow change.
- [x] Run `npm run build` after rebuilding the manual.
- [ ] Check the homepage locally.
- [x] Check `/docs/manual/` in the static export after the Sphinx build.
- [x] Check `/docs/beatbox-assembly-sop.html` in the static export after the deployment workflow change.
- [ ] Triage the dependency audit before the final production release (`npm ci` reported 1 low, 4 moderate, 12 high, and 1 critical finding on 2026-09-01); review upgrades individually rather than applying a blind force fix.

## Phase 10 - Lizbeth assembly-documentation handoff and public release

Source handoff: the `assembly-tutorials` repository contains the Master BOM in CSV/XLSX, one enclosure guide, five sub-module guides, and six announced 720p MP4 tutorial videos. Four videos are currently available in a temporary Google Drive handoff; final playback and archival locations remain YouTube and Zenodo respectively.

### Website and repository integration - Damien / Eric

- [x] Link the modular tutorial index from the public build manual.
- [x] Link direct CSV and XLSX downloads from the public build manual.
- [x] Replace the placeholder build-guide directory with a pointer to the maintained tutorial repository.
- [x] Update the website build path and resources page to expose the tutorial repository and Master BOM.
- [x] Make the homepage `Build your Own` entry point open the consolidated build manual.
- [x] Document that `assembly-tutorials` owns the editable BOM and module guides, avoiding duplicate sources.
- [x] Pin `assembly-tutorials` as a Git submodule and render all six source guides directly inside Sphinx.
- [x] Keep the interactive SOP and modular Sphinx rendering as two explicit alternatives for comparison.
- [x] Embed the four delivered Drive videos on their matching Sphinx module pages without committing MP4 files.
- [ ] Eric: approve the final information architecture and public video-hosting choice.
- [ ] Damien: add the remaining two videos, then replace all temporary Drive IDs with YouTube URLs and add thumbnails.

### Master BOM release gate - Pierre

- [ ] Complete or validate every doubtful field directly in `BOM.xlsx`.
- [ ] Replace placeholder values such as question marks, `path to file`, unknown suppliers, and unspecified revisions.
- [ ] Resolve duplicate IDs in the current CSV: `FST-M3X8`, `FST-M3X10`, and `PCB-PBG-002`.
- [ ] Give the 600 mm photobeam cable its own `CBL-*` identifier instead of `PCB-PBG-002`.
- [ ] Reconcile naming mismatches used by tutorials, including `TOL-FORC` / `TOL-FORC-`, `TBC-CBL-PBG-001`, `FST-M5X5`, `FST-M3X6-SHCS`, `FST-M3X8-SHCS`, and `TBC-M3-FASTENER`.
- [ ] Verify every fabrication path against the actual repository, including filename case and extension.
- [ ] Confirm quantities per complete BEATBox, especially the two screen modules.
- [ ] Add hardware revision compatibility and a BOM version/date.
- [ ] Regenerate `BOM.csv` from the approved XLSX and verify both formats are equivalent.

### Tutorial release gate - Damien / Pierre

- [ ] Correct filename typos and standardize guide names (`mod-fdr-aseembly.md`, `mod-lgt.md`).
- [ ] Replace `0.1-draft`, blank `hardware_revision`, and `YYYY-MM-DD` in all six guides with approved release metadata.
- [ ] Ensure every item ID in each module parts table exists exactly once in the approved BOM.
- [ ] Resolve prose and hardware placeholders before publication (for example unspecified fasteners and instructions that only say to consult a video).
- [ ] Add required tools, electrical checks, mechanical checkpoints, and final animal-facing safety checks to every relevant guide.
- [ ] Perform one clean-room documentation pass using only the BOM and tutorials; record corrections as issues.
- [ ] Tag the approved tutorial repository release as `v1.0` and link that immutable release from the website.

### Video publication - Damien / Eric

- [ ] Collect all six source MP4 files in project-controlled staging storage; feeder, light ring, photobeam gate, and screen are currently visible in the temporary Drive folder.
- [ ] Do not commit the approximately 1 GB video set to the website Git history.
- [x] Select project YouTube for public streaming and Zenodo for the versioned archival deposit/DOI.
- [ ] Confirm every temporary Drive file is viewable without authentication while it is linked from the public site.
- [ ] Rename each file using `<module-id>_<step>_<action>_<view>.mp4`.
- [ ] Produce a thumbnail and captions or transcript for each video.
- [ ] Confirm each video maps to one of: frame, water bottle mount, feeder, light ring, photobeam gate, or screen.
- [ ] Replace the temporary Drive embeds with public YouTube URLs next to the relevant written steps and in `docs/source/build/video-tutorials.md`.
- [ ] Test playback on desktop and mobile and confirm that no temporary or private Drive URL remains in the final public release.

### System validation - Zenneddine / project team

- [ ] Record the ICM-built unit's hardware revision and serial/build identifier.
- [ ] Use the ICM unit for code integration tests and log results against the matching hardware and BOM versions.
- [ ] Verify feeder motor/rotor, both screens, IR boards, photobeam gate, light ring, cabling, and full-system communications.
- [ ] Feed every hardware/documentation discrepancy back into the corresponding tutorial or BOM issue.
- [ ] Publish a short validation record and define the criteria for declaring documentation `v1.0`.

### Final release acceptance

- [ ] BOM has no unresolved required fields or duplicate identifiers.
- [ ] All six written guides have approved revisions and verification dates.
- [ ] All six videos have durable public URLs, captions, and thumbnails.
- [ ] Website, Sphinx manual, interactive SOP, tutorial repository, and BOM cross-link correctly.
- [ ] Documentation and website builds pass; links and video playback are manually checked.
- [ ] A versioned release and concise changelog are published.
