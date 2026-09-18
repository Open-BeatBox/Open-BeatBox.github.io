# Open-BEATBox

**Open-BEATBox** — **Open** — **BE**havioural and **A**u**T**onomous operant Box — is an open-source, modular, low-cost platform for autonomous home-cage operant conditioning and long-duration behavioral data acquisition in rodents.

The goal of this repository is to make the project reproducible from a single entry point: website, one-pager, technical manual, assembly SOP, hardware resources, firmware, software, and public communication assets.

## Start here

| Need | Link |
| --- | --- |
| Project website | <https://open-beatbox.github.io/> |
| Technical documentation | <https://open-beatbox.github.io/docs/manual/> |
| Modular assembly tutorials | <https://open-beatbox.github.io/docs/manual/build/assembly-tutorials/tutorials_index.html> |
| Assembly tutorial sources | <https://github.com/Open-BeatBox/assembly-tutorials> |
| Master BOM (CSV / XLSX) | <https://github.com/Open-BeatBox/assembly-tutorials#bill-of-materials> |
| Interactive assembly guide | <https://open-beatbox.github.io/docs/beatbox-assembly-tutorial.html> |
| Hardware — CAD, PCB, mechanical | <https://github.com/Open-BeatBox/Open-BeatBox_Hardware> |
| Firmware | <https://github.com/Open-BeatBox/Open-BeatBox_firmware> |
| Software — GUI, acquisition, analysis | <https://github.com/Open-BeatBox/Open-BeatBox_Software> |
| Documentation — manual source | <https://github.com/Open-BeatBox/Open-BeatBox_Documentation> |
| Website source | [`site/`](./site) |

## What Open-BEATBox is for

Open-BEATBox is designed for behavioral neuroscience experiments where short, experimenter-driven testing sessions are a limitation. It enables mice to interact with behavioral tasks inside the home-cage context over long periods, reducing repeated handling while increasing within-subject data density.

Main intended uses:

- autonomous operant conditioning;
- reward-delivery and sensor-triggered behavioral tasks;
- longitudinal home-cage behavioral monitoring;
- circadian and motivational dynamics assessment;
- reproducible open-hardware behavioral testing across laboratories.

## Repository structure

```text
Open-BeatBox.github.io/
├── README.md                         # Main repository entry point
├── LICENSE                           # Repository-level software license
├── package.json                      # Root helper scripts
├── docs/                             # Submodule -> Open-BeatBox_Documentation
│   ├── requirements.txt              # Python dependencies for Sphinx builds
│   └── source/                       # Manual source files
│       └── build/assembly-tutorials/ # Nested submodule -> assembly-tutorials
├── scripts/
│   └── build-docs.ps1                # Local Sphinx build helper
├── site/                             # Next.js public website
│   ├── README.md                     # Website-specific developer notes
│   ├── content/                      # Markdown content for website pages
│   ├── public/                       # Static assets served by the website
│   │   └── docs/manual/              # Generated Sphinx manual output
│   └── src/                          # Website application code
├── resources/                        # Forwarding stubs only - content moved out
└── .github/workflows/
    └── deploy-site.yml               # GitHub Pages deployment for website + Sphinx manual
```

## Documentation policy

The **Sphinx manual** in [`docs/source/`](https://github.com/Open-BeatBox/Open-BeatBox_Documentation) (submodule) is the public technical entry point. Module-level assembly instructions and the Master BOM are maintained in the separate [`assembly-tutorials`](https://github.com/Open-BeatBox/assembly-tutorials) repository, pinned as a Git submodule, and rendered directly inside the manual. The manual source itself lives in `Open-BeatBox_Documentation`, mounted here as a submodule at `docs/`, so this repository nests two levels of submodule. Keeping one editable upstream copy of each avoids the website, manual and tutorial sources drifting apart.

Public manual URL:

<https://open-beatbox.github.io/docs/manual/>

Generated manual output is written to:

```text
site/public/docs/manual/
```

This output is included in the Next.js static export so that the website and the technical manual are deployed together.

## Key documentation pages

| Page | Purpose |
| --- | --- |
| [`docs/source/index.md`](https://github.com/Open-BeatBox/Open-BeatBox_Documentation/blob/main/source/index.md) | Manual landing page |
| [`docs/source/overview.md`](https://github.com/Open-BeatBox/Open-BeatBox_Documentation/blob/main/source/overview.md) | System overview and current status |
| [`docs/source/build/index.md`](https://github.com/Open-BeatBox/Open-BeatBox_Documentation/blob/main/source/build/index.md) | Build path and assembly entry point |
| [`docs/source/build/assembly.md`](https://github.com/Open-BeatBox/Open-BeatBox_Documentation/blob/main/source/build/assembly.md) | Assembly guide source |
| [`docs/source/build/bom.md`](https://github.com/Open-BeatBox/Open-BeatBox_Documentation/blob/main/source/build/bom.md) | Bill of materials source |
| [`docs/source/build/safety.md`](https://github.com/Open-BeatBox/Open-BeatBox_Documentation/blob/main/source/build/safety.md) | Safety notes |
| [`docs/source/hardware/index.md`](https://github.com/Open-BeatBox/Open-BeatBox_Documentation/blob/main/source/hardware/index.md) | Hardware and module overview |
| [`docs/source/hardware/flashing-cards.md`](https://github.com/Open-BeatBox/Open-BeatBox_Documentation/blob/main/source/hardware/flashing-cards.md) | Card-flashing placeholder and required build order |
| [`docs/source/hardware/pcbs.md`](https://github.com/Open-BeatBox/Open-BeatBox_Documentation/blob/main/source/hardware/pcbs.md) | PCB documentation |
| [`docs/source/software/index.md`](https://github.com/Open-BeatBox/Open-BeatBox_Documentation/blob/main/source/software/index.md) | Software and firmware documentation |
| [`docs/source/software/firmware/index.md`](https://github.com/Open-BeatBox/Open-BeatBox_Documentation/blob/main/source/software/firmware/index.md) | Firmware documentation index |
| [`docs/source/software/firmware/can-intermodule-protocol.md`](https://github.com/Open-BeatBox/Open-BeatBox_Documentation/blob/main/source/software/firmware/can-intermodule-protocol.md) | Inter-module CAN bus protocol |
| [`docs/source/protocols/index.md`](https://github.com/Open-BeatBox/Open-BeatBox_Documentation/blob/main/source/protocols/index.md) | Protocol templates and validation status |
| [`docs/source/contributing.md`](https://github.com/Open-BeatBox/Open-BeatBox_Documentation/blob/main/source/contributing.md) | Contribution guidelines |

## Project repositories

Open-BEATBox is maintained as five repositories. This one holds the website and the build pipeline; the engineering layers live separately, each under the licence that suits it.

| Repository | Contents | Licence |
| --- | --- | --- |
| [`Open-BeatBox.github.io`](https://github.com/Open-BeatBox/Open-BeatBox.github.io) | Website, build and deployment pipeline | AGPL-3.0 |
| [`Open-BeatBox_Documentation`](https://github.com/Open-BeatBox/Open-BeatBox_Documentation) | Sphinx manual source, technical notes, media | CC-BY-4.0 |
| [`Open-BeatBox_Hardware`](https://github.com/Open-BeatBox/Open-BeatBox_Hardware) | CAD, PCB, enclosure and mechanical design files | CERN-OHL-S-2.0 |
| [`Open-BeatBox_firmware`](https://github.com/Open-BeatBox/Open-BeatBox_firmware) | Firmware and embedded control | GPL-3.0 |
| [`Open-BeatBox_Software`](https://github.com/Open-BeatBox/Open-BeatBox_Software) | GUI, acquisition, control and analysis tools | AGPL-3.0 |
| [`assembly-tutorials`](https://github.com/Open-BeatBox/assembly-tutorials) | Module assembly guides and the Master BOM | see repository |

`Open-BeatBox_Documentation` is consumed by this repository as a submodule mounted at `docs/`, and it in turn consumes `assembly-tutorials`. Clone with `--recurse-submodules`.

## Local development

Install website dependencies:

```bash
cd site
npm install
```

If the repository was cloned without submodules, initialize the assembly tutorials before building the documentation:

```bash
git submodule update --init --recursive
```

To review a newer tutorial revision before publishing it in the manual:

```bash
git submodule update --remote --recursive docs
git diff --submodule
```

Commit the updated submodule pointer only after the tutorials and BOM have been reviewed.

Run the website locally:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Build the Sphinx manual locally

Install documentation dependencies from the repository root:

```bash
python -m pip install -r docs/requirements.txt
```

Build the manual into the website public folder:

```bash
python -m sphinx -b html -d docs/_build/doctrees docs/source site/public/docs/manual
```

On Windows, the helper script can also be used:

```powershell
npm run build:docs
```

## Build everything locally

From the repository root:

```bash
npm run build:all
```

This builds the Sphinx manual first, then the static website.

## Deployment

The GitHub Pages workflow builds and deploys the website and Sphinx manual together using:

```text
.github/workflows/deploy-site.yml
```

The workflow should run when website files, Sphinx documentation files, documentation requirements, or the deployment workflow itself are changed.

## Licensing

Open-BEATBox uses layer-specific open licenses:

- Website and software: GNU AGPLv3 — see [`LICENSE`](./LICENSE) in this repository and in [`Open-BeatBox_Software`](https://github.com/Open-BeatBox/Open-BeatBox_Software).
- Firmware: GNU GPLv3 — see [`Open-BeatBox_firmware`](https://github.com/Open-BeatBox/Open-BeatBox_firmware).
- Hardware: CERN OHL-S v2 — see [`Open-BeatBox_Hardware`](https://github.com/Open-BeatBox/Open-BeatBox_Hardware).
- Documentation: CC-BY-4.0 — see [`Open-BeatBox_Documentation`](https://github.com/Open-BeatBox/Open-BeatBox_Documentation).

Each repository carries its own `LICENSE` file, which is authoritative for that layer.

## Contributing

Contributions are welcome in the following areas:

- assembly documentation;
- bill of materials and supplier references;
- PCB and module documentation;
- firmware and GUI documentation;
- protocol templates;
- validation reports and troubleshooting notes;
- reproducible data-output examples.

For website-specific development, see [`site/README.md`](./site/README.md). For documentation updates, commit to [`Open-BeatBox_Documentation`](https://github.com/Open-BeatBox/Open-BeatBox_Documentation) and bump the submodule pointer here. Hardware, firmware and software contributions go to their own repositories. Check the TODO tracker in [`site/BEATBOX_IMPACT_REDESIGN_TODO.md`](./site/BEATBOX_IMPACT_REDESIGN_TODO.md).
