# BTF Redesign — three immersive design alternatives

Full rebuild of the Blue Transformation Fund site (Astro 5, static output):
three highly immersive, animated alternatives over one shared bilingual
content layer, all drawn from the logo palette (#043F7F navy + white).

## Run

```bash
cd redesign
npm install
npm run dev        # dev server
npm run build      # astro check + production build → dist/
npm run preview    # serve dist/
```

## Routes (review phase)

| Path | What |
|---|---|
| `/` | Internal review index (noindex, excluded from sitemap) |
| `/a/pt/` · `/a/en/` | **A — Cardume**: luminous immersive; bright aspirational site with a dark dolphin-dive Hub; heritage told as an era timeline |
| `/b/pt/` · `/b/en/` | **B — Abissal**: one continuous descent; live depth gauge, marine snow, sea-floor Fund with monumental era watermarks (1500 → Hoje → 2034) |
| `/c/pt/` · `/c/en/` | **C — Corrente**: kinetic editorial; data ticker, numeral-chaptered dive, film-title era cards, institutional dossier |

At ship time the chosen alternative's page component is promoted to root
`/pt/` + `/en/` routes; the other two and the review index are dropped.

## Shared immersive machinery

- **Hero video**: `public/media/fish-vortex.mp4` (compressed from
  `public/assets/fish-vortex-animated-improved.mp4`, 35 MB → 3.0 MB, poster
  preloaded so LCP stays on the poster). Loops muted; a pause/play control
  satisfies WCAG 2.2.2; `prefers-reduced-motion` shows the poster instead.
- **Hub dive**: `public/media/dolphin-deep.mp4` (24 MB → 0.8 MB) inside a
  sticky viewport; content chapters scroll over it (parallax); scroll
  progress drives a subtle video zoom and the depth readout. Video lazy-loads
  (`preload="none"`) and plays only while on screen.
- **Runtime**: `src/scripts/immersive.ts` — reveals, parallax
  (`data-parallax`), section scrub (`data-scrub` → `--p`), count-up
  (`data-count`), ambient-video management (`data-ambient` +
  `data-video-toggle`). Everything is progressive enhancement and fully
  gated on `prefers-reduced-motion`.
- **Palette**: sampled from the logo (#043F7F); all UI hues are tints/depths
  of it. Chart ramps validated (dataviz ordinal checks) per surface:
  light `#6FA5DC → #2E6CB5 → #043F7F`, dark `#A9CAEC → #6FA5DC → #3D7EC6`.

## Content & SEO (unchanged foundations)

- Typed bilingual content layer in `src/content/` — PT verbatim from the
  redesign brief; EN professional localization. All three alternatives render
  the same contract.
- The Fund's thesis is staged as a "back to the future" heritage narrative
  (era labels only — the brief's copy is untouched).
- SEO: hreflang pairs, canonicals, OG/Twitter, JSON-LD, sitemap, robots.txt
  via `src/layouts/BaseLayout.astro`.
- **Hub research slot**: `src/data/research-stats.json` — swappable data
  module seeded from the PDFs in `/research` (FAO SOFIA 2026, EUMOFA 2025,
  EU Blue Economy Report 2025). Edit the JSON to refresh; no code changes.

## Verification tooling

```bash
node scripts/shots.mjs <outDir> /a/pt/ ...   # full-page screenshots @390/1440
node scripts/a11y.mjs /a/pt/ /b/pt/ ...      # axe WCAG 2.1 AA (scrolls first)
node scripts/verify2.mjs                      # immersion checks (dive, toggles)
```

Note: Chromium *full-page* captures rasterize some offscreen images blank —
a capture artifact, not a site bug; verify image-heavy sections with
viewport screenshots.

Last verified: `astro check` 0 errors · axe 0 violations on all 6 pages
(full-scroll scan) · Lighthouse mobile A 98 / B 99 / C 99 performance,
100 accessibility / best-practices / SEO, CLS 0 on all.

## Known content gaps / ship-time decisions

- **Missing team photos**: Diogo Saraiva Ponte, António Pereira, Gisela
  Martins — explicit placeholder treatments; real photography needed.
- **Contact form**: CTAs are `mailto:` with prefilled subjects; wire a form
  provider or serverless endpoint at deploy time if wanted.
- **Privacy / Terms pages**: footer links expect `/pt/privacidade/`,
  `/pt/termos/` (+ EN) — legal copy needed.
