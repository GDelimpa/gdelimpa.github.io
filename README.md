# Giannis Delimpaltadakis — academic website

A responsive, Jekyll-inspired visual redesign of the existing GitHub Pages site. It remains a plain HTML/CSS/JavaScript website: no Ruby, npm, theme plugins, or custom build workflow is required.

## Preview locally

From this folder, run `python3 -m http.server 8000` and open http://localhost:8000. You can also open `index.html` directly.

## Update GitHub Pages

1. Back up the existing repository or work on a new branch.
2. Copy `index.html`, `publications.html`, `research.html`, `style.css`, `site.js`, and the `assets` folder into the repository root, replacing the two existing HTML files.
3. Keep `profile.jpg`, `CVacademic.pdf`, and `cv.pdf` in place. Their contents have not changed.
4. Review the changes, then commit them to the branch used by GitHub Pages. The existing Pages configuration can remain in place.

The archive includes the original portrait and CV files for a complete local preview. No changes have been pushed to GitHub. Use the branch currently selected in your Pages settings when you are ready to publish.

## Content and appearance

- Edit the profile, research interests, background, and news in `index.html`.
- Edit publication entries in `publications.html`. The search index is derived automatically from each entry's visible text.
- Edit shared colors, spacing, typography, and responsive breakpoints in `style.css`.
- `site.js` provides publication search, type filters, and an optional persisted light/dark appearance. Content and navigation remain available without JavaScript.
- Publication links and original news destinations are retained from commit `55637b8`.

No external fonts, scripts, analytics, or build dependencies are loaded. The design uses locally available system and serif fonts.

## Design revision

Publication entries are compact and numbered in reverse within each category. Numbers remain stable during searches. The equal-contribution note is highlighted immediately before Journal Articles, below the search controls. The About page places academic background before news and opens with the supplied personal quote in small italic text and quotation marks. The introductory slogan, top tagline, and GitHub profile link have been removed.

## Research Spotlight

`research.html` contains two paper-based research summaries. The figures in `assets/` are extracted from Figure 5 of the revised information-theory paper and Figure 1(c) of the revised safe-feedback-optimization paper. Captions link them to their papers; click each figure for its full resolution. The source PDFs are not included in the deployed site.
