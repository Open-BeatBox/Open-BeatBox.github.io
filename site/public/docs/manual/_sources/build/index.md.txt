# Build your own BEATBox

This is the starting point for building a BEATBox. The guide brings the preparation notes, bill of materials, fabrication guidance, and step-by-step module tutorials into a single workflow.

Before you begin, read the safety notes and check that the bill of materials matches the hardware revision you intend to build. Prepare and inspect the fabricated parts before assembling the modules. Cards must be flashed **before they are installed in a module**; see {doc}`Flashing the cards <../hardware/flashing-cards>` for the current status of those instructions.

```{toctree}
:maxdepth: 2
:hidden:

assembly
bom
safety
fabrication
video-tutorials
```

## Start the step-by-step guide

::::{grid} 1 1 1 1
:gutter: 3

:::{grid-item-card} Module-by-module assembly
Follow the six Sphinx tutorials for the frame, bottle mount, feeder, light ring, photobeam gate, and screen. Each tutorial uses identifiers from the Master BOM and includes the available supporting media.

{doc}`Open the modular Sphinx guide <assembly-tutorials/tutorials_index>`
:::

::::

## Recommended build order

1. Review the safety notes.
2. Download the Master BOM and confirm every unresolved field for the hardware revision being built.
3. Prepare 3D-printed and laser-cut parts.
4. Flash all required cards before installing them in their modules.
5. Follow the module-by-module Sphinx tutorials.
6. Complete the electrical, mechanical, and animal-facing safety checks.
7. Record any deviations and validation notes with the relevant module and item identifiers.

## Versioned sources

- {doc}`Step-by-step tutorial index <assembly-tutorials/tutorials_index>`
- {download}`Master BOM (XLSX) <assembly-tutorials/BOM.xlsx>`
- {download}`Master BOM (CSV) <assembly-tutorials/BOM.csv>`
- {doc}`Part-ID and media conventions <assembly-tutorials/conventions>`

The `assembly-tutorials` repository owns the editable module guides and BOM. It is included here as a pinned Git submodule, so the manual renders the reviewed source revision directly instead of maintaining a second editable copy.
