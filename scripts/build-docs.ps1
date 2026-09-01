param(
  [string]$Builder = "html"
)

$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $PSScriptRoot
$source = Join-Path $root "docs/source"
$output = Join-Path $root "site/public/docs/manual"
$doctrees = Join-Path $root "docs/_build/doctrees"
$assemblyTutorials = Join-Path $source "build/assembly-tutorials/tutorials_index.md"

if (-not (Test-Path -LiteralPath $assemblyTutorials)) {
  throw "Assembly tutorials submodule is missing. Run: git submodule update --init --recursive"
}

python -m sphinx -b $Builder -d $doctrees $source $output
