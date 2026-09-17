# Video tutorials

Six short 720p MP4 tutorials complement the written module guides. All six are available in the temporary Google Drive handoff and embedded directly in their matching Sphinx pages. The written guides remain essential because they contain the full parts lists, cautions, checkpoints, and revision information.

## Publication status

The project's YouTube channel is live at <https://www.youtube.com/@open-beatbox/>, and a tutorials playlist with thumbnails and descriptions has been prepared. The playlist is still private while the remaining channel settings are decided (licence terms, whether comments are enabled), so no public watch URLs exist yet.

Until those URLs are available, the table below keeps the temporary Google Drive links. Google may request sign-in until public sharing is confirmed.

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
- Settle the remaining channel settings (licence terms, comments enabled or not) and make the tutorials playlist public.
- Use the naming convention in the [assembly documentation conventions](https://github.com/Open-BeatBox/assembly-tutorials/blob/main/conventions.md).
- Provide one thumbnail, a descriptive title, captions or a transcript, and a public URL per video. Thumbnails and descriptions are already prepared for the playlist.
- Replace each temporary Drive `embed_url` and `watch_url` in `docs/source/_ext/assembly_videos.py` with the corresponding YouTube URLs and update the table above.
- Verify playback on desktop and mobile before release.

Large MP4 files should not be committed directly to the website repository; use YouTube for the website experience. A Zenodo deposit for the archival copies is planned but deferred: it waits on the outstanding hardware and software elements, and the DOI is currently targeted at the journal submission rather than the BioRxiv preprint.
