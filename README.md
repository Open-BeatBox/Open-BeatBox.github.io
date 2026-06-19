# BEATBox

**BEATBox** — **BE**havioural and **A**u**T**onomous Box — is an open-source, modular, low-cost platform for autonomous home-cage operant conditioning and long-duration behavioral data acquisition in rodents.

The goal of this repository is to make the project reproducible from a single entry point: website, one-pager, technical manual, assembly SOP, hardware resources, firmware, software, and public communication assets.

## Start here

| Need | Link |
| --- | --- |
| Project website | <https://open-beatbox.github.io/> |
| One-pager | <https://open-beatbox.github.io/one-pager/> |
| Technical documentation | <https://open-beatbox.github.io/docs/manual/> |
| Interactive assembly SOP | <https://open-beatbox.github.io/docs/beatbox-assembly-sop.html> |
| GitHub resources directory | [`resources/`](./resources) |
| Website source | [`site/`](./site) |
| Sphinx documentation source | [`docs/source/`](./docs/source) |
| Current documentation TODO tracker | [`site/BEATBOX_IMPACT_REDESIGN_TODO.md`](./site/BEATBOX_IMPACT_REDESIGN_TODO.md) |

## What BEATBox is for

BEATBox is designed for behavioral neuroscience experiments where short, experimenter-driven testing sessions are a limitation. It enables mice to interact with behavioral tasks inside the home-cage context over long periods, reducing repeated handling while increasing within-subject data density.

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
├── docs/                             # Canonical Sphinx documentation source
│   ├── requirements.txt              # Python dependencies for Sphinx builds
│   └── source/                       # Manual source files
├── scripts/
│   └── build-docs.ps1                # Local Sphinx build helper
├── site/                             # Next.js public website
│   ├── README.md                     # Website-specific developer notes
│   ├── content/                      # Markdown content for website pages
│   ├── public/                       # Static assets served by the website
│   │   └── docs/manual/              # Generated Sphinx manual output
│   └── src/                          # Website application code
├── resources/                        # Open-source project resources
│   ├── hardware/                     # CAD, PCB, mechanical, and electronics files
│   ├── firmware/                     # Firmware and embedded tooling
│   ├── software/                     # GUI, acquisition, control, and analysis tools
│   ├── build-guides/                 # Assembly, calibration, and validation material
│   └── assets/                       # Renders, diagrams, pictures, GIFs, and media
└── .github/workflows/
    └── deploy-site.yml               # GitHub Pages deployment for website + Sphinx manual
```

## Documentation policy

The canonical technical documentation is the **Sphinx manual** in [`docs/source/`](./docs/source).

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
| [`docs/source/index.md`](./docs/source/index.md) | Manual landing page |
| [`docs/source/overview.md`](./docs/source/overview.md) | System overview and current status |
| [`docs/source/build/index.md`](./docs/source/build/index.md) | Build path and assembly entry point |
| [`docs/source/build/assembly.md`](./docs/source/build/assembly.md) | Assembly guide source |
| [`docs/source/build/bom.md`](./docs/source/build/bom.md) | Bill of materials source |
| [`docs/source/build/safety.md`](./docs/source/build/safety.md) | Safety notes |
| [`docs/source/hardware/index.md`](./docs/source/hardware/index.md) | Hardware and module overview |
| [`docs/source/hardware/pcbs.md`](./docs/source/hardware/pcbs.md) | PCB documentation |
| [`docs/source/software/index.md`](./docs/source/software/index.md) | Software, GUI, and data workflow notes |
| [`docs/source/protocols/index.md`](./docs/source/protocols/index.md) | Protocol templates and validation status |
| [`docs/source/contributing.md`](./docs/source/contributing.md) | Contribution guidelines |

## Resource folders

| Folder | Contents |
| --- | --- |
| [`resources/hardware/`](./resources/hardware) | CAD, PCB, enclosure, module, and mechanical design files |
| [`resources/firmware/`](./resources/firmware) | Firmware and embedded control resources |
| [`resources/software/`](./resources/software) | GUI, data acquisition, control, and analysis software |
| [`resources/build-guides/`](./resources/build-guides) | Assembly, calibration, validation, and bench-use material |
| [`resources/assets/`](./resources/assets) | Figures, renders, diagrams, videos, GIFs, and dissemination assets |

## Local development

Install website dependencies:

```bash
cd site
npm install
```

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

BEATBox uses layer-specific open licenses:

- Software: GNU AGPLv3 — see [`LICENSE`](./LICENSE) and [`resources/software/LICENSE`](./resources/software/LICENSE).
- Firmware: GNU GPLv3 — see [`resources/firmware/LICENSE`](./resources/firmware/LICENSE).
- Hardware: CERN OHL-S v2 — see [`resources/hardware/LICENSE`](./resources/hardware/LICENSE).

## Contributing

Contributions are welcome in the following areas:

- assembly documentation;
- bill of materials and supplier references;
- PCB and module documentation;
- firmware and GUI documentation;
- protocol templates;
- validation reports and troubleshooting notes;
- reproducible data-output examples.

For website-specific development, see [`site/README.md`](./site/README.md). For documentation updates, edit files in [`docs/source/`](./docs/source/) and check the TODO tracker in [`site/BEATBOX_IMPACT_REDESIGN_TODO.md`](./site/BEATBOX_IMPACT_REDESIGN_TODO.md).
