# Pranjal Drall's website

This is a static Jekyll site. Edit the biography in `_pages/about.md`, research
in `_pages/publications.md`, and CV in `_pages/cv.md`.

Run `bundle install`, then `bundle exec jekyll serve` to preview locally.
No npm install, JavaScript bundler, or minification step is needed.

The shared script only follows the visitor's color preference. Navigation is
ordinary HTML; publication abstracts use a small inline script. MathJax,
Mermaid, and Plotly load only on pages that set `math: true`, `mermaid: true`,
or `plotly: true` in their front matter (currently the Markdown demo).

`images/profile.webp` is the web-sized portrait; `images/profile.png` is the
original. Paper PDFs remain in `files/` and download only when opened.
Development logs, scripts, notebooks, and preview folders are excluded from
the published site.
