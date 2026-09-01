"""Attach temporary assembly-video players to the matching tutorial pages."""

from __future__ import annotations

from html import escape

from docutils import nodes
from sphinx.application import Sphinx


VIDEOS = {
    "build/assembly-tutorials/modules/mod-fdr-aseembly": {
        "title": "Feeder module assembly",
        "embed_url": "https://drive.google.com/file/d/1U7WHxCBrBH_LmIhVE-iPwYedeMLx_lZj/preview",
        "watch_url": "https://drive.google.com/file/d/1U7WHxCBrBH_LmIhVE-iPwYedeMLx_lZj/view?usp=drivesdk",
    },
    "build/assembly-tutorials/modules/mod-lgt": {
        "title": "Light ring module assembly",
        "embed_url": "https://drive.google.com/file/d/11ymhMf_vLa13IoAeG7u0pcYd7CdqgUvQ/preview",
        "watch_url": "https://drive.google.com/file/d/11ymhMf_vLa13IoAeG7u0pcYd7CdqgUvQ/view?usp=drivesdk",
    },
    "build/assembly-tutorials/modules/mod-pbg-assembly": {
        "title": "Photobeam gate assembly",
        "embed_url": "https://drive.google.com/file/d/1YcfWktCNrZLU985ME6mK09RCsFTdyBYW/preview",
        "watch_url": "https://drive.google.com/file/d/1YcfWktCNrZLU985ME6mK09RCsFTdyBYW/view?usp=drivesdk",
    },
    "build/assembly-tutorials/modules/mod-scr-assembly": {
        "title": "Screen module assembly",
        "embed_url": "https://drive.google.com/file/d/1W-CbucP4mVNRbWdahoSWfjjUbpiLWMX0/preview",
        "watch_url": "https://drive.google.com/file/d/1W-CbucP4mVNRbWdahoSWfjjUbpiLWMX0/view?usp=drivesdk",
    },
}


def _append_video(app: Sphinx, doctree: nodes.document, docname: str) -> None:
    video = VIDEOS.get(docname)
    if video is None or app.builder.format != "html":
        return

    title = str(video["title"])
    embed_url = str(video["embed_url"])
    watch_url = str(video["watch_url"])

    section = nodes.section(ids=["assembly-video-tutorial"])
    section += nodes.title(text="Assembly video")
    section += nodes.paragraph(
        text=(
            "Use this short visual walkthrough alongside the written instructions. "
            "The parts list, cautions, and checkpoints in this page remain essential."
        )
    )
    section += nodes.raw(
        "",
        (
            '<div class="assembly-video">'
            f'<iframe src="{escape(embed_url, quote=True)}" '
            f'title="{escape(title, quote=True)}" '
            'loading="lazy" allow="autoplay; fullscreen" allowfullscreen '
            'referrerpolicy="strict-origin-when-cross-origin"></iframe>'
            "</div>"
        ),
        format="html",
    )

    fallback = nodes.paragraph()
    fallback += nodes.Text("Player unavailable? ")
    fallback += nodes.reference(
        "",
        "Open the temporary video in Google Drive",
        refuri=watch_url,
        internal=False,
    )
    fallback += nodes.Text(".")
    section += fallback

    note = nodes.note()
    note += nodes.paragraph(
        text=(
            "Temporary hosting: this Drive player will be replaced by the project's "
            "YouTube stream after publication; the released original will be archived "
            "on Zenodo. Google may request sign-in until public sharing is confirmed."
        )
    )
    section += note
    doctree += section


def setup(app: Sphinx) -> dict[str, object]:
    app.connect("doctree-resolved", _append_video)
    return {
        "version": "1.0",
        "parallel_read_safe": True,
        "parallel_write_safe": True,
    }
