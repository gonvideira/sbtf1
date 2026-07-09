# BTF Redesign — three design alternatives

Full rebuild of the Blue Transformation Fund site (Astro 5, static output),
delivering three complete, tested design alternatives over one shared
bilingual content layer.

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
| `/a/pt/` · `/a/en/` | **Alternative A — Atlântico** (light editorial, serif, annual-report register) |
| `/b/pt/` · `/b/en/` | **Alternative B — Corrente Profunda** (dark cinematic, scroll descent) |
| `/c/pt/` · `/c/en/` | **Alternative C — Sistema Azul** (Swiss-technical, dossier density) |

At ship time the chosen alternative's page component is promoted to root
`/pt/` + `/en/` routes (move the two files in `src/pages/<x>/` to
`src/pages/{pt,en}/`, update `path`/`altPath` in the component, drop the
other two alternatives and the review index).

## Architecture

- **Platform**: Astro 5 static output — zero-JS by default, tiny progressive-
  enhancement scripts only (nav toggle, chart hover, reveals/counters).
  SEO-first: crawlable `/pt/`+`/en/` HTML, hreflang pairs + canonical +
  OG/Twitter + JSON-LD in `src/layouts/BaseLayout.astro`, sitemap via
  `@astrojs/sitemap`, `public/robots.txt`.
- **Content**: single typed bilingual layer in `src/content/` (`pt.ts` is the
  brief's copy verbatim; `en.ts` is the institutional localization). All three
  alternatives render the same `SiteContent` contract — copy edits happen once.
- **Charts**: server-rendered SVG components in `src/components/charts/`
  (line chart with hover layer + data-table fallback, range bars, allocation
  stripe), themed per alternative via CSS custom properties. Palettes
  validated with the dataviz six-checks validator (CVD-safe on each surface).
- **Assets**: processed images in `src/assets/` (brand lockups trimmed from
  the 5500px masters; NaturaFish aerial crops; team photos 4:5). Rendered
  responsive AVIF/WebP at build by `astro:assets`.

## Blue Ocean Hub — research slot

The Hub's "Observatório" grid is a swappable data module:

- **Data**: `src/data/research-stats.json` — edit this file to refresh the
  figures; no code changes needed. Each entry carries value, PT/EN labels,
  exact report edition, source URL, reference year, and date added.
- Seeded from the PDFs in `/research` (FAO SOFIA 2026, EUMOFA EU Fish Market
  2025, EU Blue Economy Report 2025).
- The interim stat cards (from the current live site's content) live in
  `src/content/{pt,en}.ts` under `hub.statCards`.

## Verification tooling

```bash
node scripts/shots.mjs <outDir> /a/pt/ ...   # full-page screenshots @390/1440
node scripts/a11y.mjs /a/pt/ /b/pt/ ...      # axe-core WCAG 2.1 AA scan
node scripts/verify.mjs                       # functional checks (nav, lang, EN)
```

Note: Chromium *full-page* captures rasterize some offscreen images blank
(filters/lazy interplay) — a capture artifact, not a site bug; use viewport
screenshots to verify image-heavy sections.

Last verified results: `astro check` 0 errors · axe 0 violations (all 6
pages) · Lighthouse (mobile, preview server): A 97/100/100/100 ·
B 99/100/100/100 · C 99/100/100/100, CLS 0 on all.

## Known content gaps / ship-time decisions

- **Missing team photos**: Diogo Saraiva Ponte, António Pereira, Gisela
  Martins — the designs render an explicit placeholder treatment; real
  photography needed before launch.
- **Contact form**: CTAs are `mailto:` to investor.relations@ with prefilled
  subjects. If a hosted form is wanted (name/organisation/e-mail/indicative
  amount/message per the brief), wire a provider (e.g. Formspree/Basin) or a
  serverless endpoint at deploy time.
- **Privacy / Terms pages**: footer links point at `/pt/privacidade/`,
  `/pt/termos/` (and EN equivalents) — legal copy needed.
- **Hub deep-page**: at ship time the Hub section can be given a dedicated
  `/pt/hub/` route (its sections are already componentizable) to rank
  independently for sector queries.
