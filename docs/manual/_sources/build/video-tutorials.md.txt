# Video tutorials

Six short 720p MP4 tutorials complement the written module guides. All six are available in the temporary Google Drive handoff and embedded directly in their matching Sphinx pages. The written guides remain essential because they contain the full parts lists, cautions, checkpoints, and revision information.

## Publication status

The current Drive links are temporary. They will be replaced by project-controlled YouTube links for playback, while released originals should be archived on Zenodo with durable identifiers. Google may request sign-in until public sharing is confirmed.

| Tutorial | Written guide | Public video |
| --- | --- | --- |
| Frame and enclosure | {doc}`Open guide with video <assembly-tutorials/modules/mod-frm-assembly>` | [Temporary Drive file](https://drive.google.com/file/d/13iQ4pZJJIW37ojucvI6OUpseFJEl0oHU/view?usp=drivesdk) |
| Water bottle mount | {doc}`Open guide with video <assembly-tutorials/modules/mod-bmt-assembly>` | [Temporary Drive file](https://drive.google.com/file/d/12cbWKacPB6CGM2SMgHU8EKzlYtNXjdLv/view?usp=drivesdk) |
| Feeder module | {doc}`Open guide with video <assembly-tutorials/modules/mod-fdr-aseembly>` | [Temporary Drive file](https://drive.google.com/file/d/1U7WHxCBrBH_LmIhVE-iPwYedeMLx_lZj/view?usp=drivesdk) |
| Light ring | {doc}`Open guide with video <assembly-tutorials/modules/mod-lgt>` | [Temporary Drive file](https://drive.google.com/file/d/11ymhMf_vLa13IoAeG7u0pcYd7CdqgUvQ/view?usp=drivesdk) |
| Photobeam gate | {doc}`Open guide with video <assembly-tutorials/modules/mod-pbg-assembly>` | [Temporary Drive file](https://drive.google.com/file/d/1YcfWktCNrZLU985ME6mK09RCsFTdyBYW/view?usp=drivesdk) |
| Screen module | {doc}`Open guide with video <assembly-tutorials/modules/mod-scr-assembly>` | [Temporary Drive file](https://drive.google.com/file/d/1W-CbucP4mVNRbWdahoSWfjjUbpiLWMX0/view?usp=drivesdk) |

[Open the temporary Google Drive folder](https://drive.google.com/drive/folders/15qdSVwi2WGLClNfwwK7sh3xtZT9da_ts).

## Publication requirements

- Keep the 720p MP4 originals as archival assets outside the Git repository.
- Publish streamable copies on the project's YouTube channel and archive released originals on Zenodo.
- Use the naming convention in the [assembly documentation conventions](https://github.com/Open-BeatBox/assembly-tutorials/blob/main/conventions.md).
- Provide one thumbnail, a descriptive title, captions or a transcript, and a public URL per video.
- Replace each temporary Drive `embed_url` and `watch_url` in `docs/source/_ext/assembly_videos.py` with the corresponding YouTube URLs and update the table above.
- Verify playback on desktop and mobile before release.

Large MP4 files should not be committed directly to the website repository. Zenodo should hold the versioned archival copy; use YouTube for the website experience.
