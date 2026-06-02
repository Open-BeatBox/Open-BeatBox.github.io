param(
  [string]$Builder = "html"
)

$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $PSScriptRoot
$source = Join-Path $root "docs/source"
$output = Join-Path $root "site/public/docs/manual"
$doctrees = Join-Path $root "docs/_build/doctrees"

python -m sphinx -b $Builder -d $doctrees $source $output
