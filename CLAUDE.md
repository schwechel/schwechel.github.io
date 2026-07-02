# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A personal static website (schwechel.net, served via GitHub Pages — see `CNAME`) for Derek Schwechel: a home page, an about/résumé page, a projects page, and a Zoom redirect link. There is no build system, package manager, bundler, or test suite — every `.html` file is served as-is.

## Working locally

There is no dev server or build step. Open the HTML files directly in a browser, or serve the directory with any static file server, e.g.:

```
python -m http.server 8000
```

Note: `header.html` and `footer.html` are loaded via `fetch()` (see below), which will fail under `file://` due to CORS in most browsers — use a local HTTP server to see the real header/footer, not just the JS fallback.

## Architecture

- **Pages**: `index.html`, `about.html`, `projects.html`, `zoom.html` (a JS-based redirect to a Zoom meeting link), and `projects/minesweeper.html` (a standalone, self-contained playable project demo linked from the projects page).
- **Shared header/footer via runtime fetch, not a templating system**: `js/site.js` fetches `header.html` and `footer.html` and injects their content into the `<header>`/`<footer>` elements present on every page. If the fetch fails, it falls back to a hardcoded HTML string embedded in `site.js` itself.
  - **Important**: `header.html`/`footer.html` and the fallback strings in `js/site.js` must be kept in sync manually — the fallback is not generated from the files. When editing nav links or social links in `header.html`/`footer.html`, also update the corresponding fallback string in `js/site.js`.
  - Every page must include both `<header></header>` and `<footer></footer>` empty tags plus `<script src="./js/site.js"></script>` for this to work.
- **Styling**: single stylesheet `css/site.css` using the Milwaukee Brewers color scheme (navy `#13294b`, gold `#ffc72c`, light blue `#003da5`) and a custom `@font-face` (`Brewers`, from `BrewersIndustrial-Regular.woff`).
- **Easter egg**: `js/site.js` also listens for the Konami code (`↑↑↓↓←→←→ba`) on every page and opens a random xkcd comic in a new tab when entered.
- **Project pages** under `projects/` are standalone (own inline `<style>`/`<script>`, no shared header/footer/CSS) — treat them as independent artifacts rather than part of the main site chrome.

## Conventions to follow when editing

- Keep new pages consistent with the existing structure: `<link href="./css/site.css">`, `<script src="./js/site.js"></script>`, empty `<header></header>`/`<footer></footer>` tags, and content wrapped in `<div class="content">`.
- `about.html` contains a real résumé/timeline (Experience, Education, Side Projects) using `div.title`, `div.group` (with nested `div.dates`/`div.location`/`div.position`), and `div.gameLink` markup patterns already styled in `css/site.css` — reuse these classes rather than inventing new ones.
