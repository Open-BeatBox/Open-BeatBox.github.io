# Build your own BEATBox

This section deliberately keeps two assembly-guide versions in parallel while the project team evaluates which experience to retain. Both describe the same device, but their structure and interaction model differ.

```{toctree}
:maxdepth: 2

assembly
bom
safety
fabrication
video-tutorials
```

## Compare the two versions

::::{grid} 1 2 2 2
:gutter: 3

:::{grid-item-card} Version A — Interactive SOP
Use the single-page, step-by-step checklist during a bench build. It is optimized for sequential progress and quick validation.

<a href="../../beatbox-assembly-sop.html">Open the interactive Assembly SOP</a>
:::

:::{grid-item-card} Version B — Modular Sphinx guide
Use the six rendered tutorials from `assembly-tutorials`, with the versioned BOM and the available videos embedded on their matching module pages.

{doc}`Open the modular Sphinx guide <assembly-tutorials/tutorials_index>`
:::

::::

Neither version is removed during this comparison period. For useful feedback, complete a build primarily with one version and record where its navigation, level of detail, or media support helps or blocks you.

## Common preparation

1. Review the safety notes.
2. Download the Master BOM and confirm every unresolved field for the hardware revision being built.
3. Prepare 3D-printed and laser-cut parts.
4. Choose one of the two guide versions above for the evaluation build.
5. Record deviations and validation notes, including the guide version used.

## Versioned sources

- {doc}`Tutorial index <assembly-tutorials/tutorials_index>`
- {download}`Master BOM (XLSX) <assembly-tutorials/BOM.xlsx>`
- {download}`Master BOM (CSV) <assembly-tutorials/BOM.csv>`
- {doc}`Part-ID and media conventions <assembly-tutorials/conventions>`

The `assembly-tutorials` repository owns the editable module guides and BOM. It is included here as a pinned Git submodule, so the manual renders the reviewed source revision directly instead of maintaining a second editable copy.
