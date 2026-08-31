# Changelog

All notable changes to SBTF1 Landing Page will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- **`/marketing` — dedicated fund page at `/pt/fundos/sbtf-1/` and `/en/funds/sbtf-1/`**: the fund's seven approved chapters (`#tese #verticais #portfolio #sustentabilidade #estrutura #equipa #investir`, plus the European-context band) moved verbatim out of the root page into a new `FundPage.astro`, reached from the hub homepage's Fundos rail and from the header's Investir CTA. The page follows the Observatory's satellite pattern — a slim sticky header with the logo, a "← Voltar ao Hub" back link, the language switch pointing at the paired fund URL, the inert "Área do Investidor" badge and the Investir CTA — with a compact deep-navy masthead (kicker, H1, standfirst; no video hero) in place of the vortex. The existing sticky `.fund-subnav` moved with the content and is now the page's section nav. `<title>` is "SBTF 1 · Blue Transformation Fund" and the meta description is the fund-centric one the root page used to carry; hreflang pairs the two fund URLs with each other and both appear in the sitemap
- **`/marketing` — "Fundos" rail on the hub homepage** (`#fundos`, between the resource cards and the partner strip): a deep-navy card in the site's existing inverse-plate language positioning SBTF 1 as fund #1 of a growing platform — "Fundo #1" mono label, fund name, the hero subheadline as its blurb, a terms strip drawn from the approved Structure & Terms rows ("€126M dimensão-alvo · 3 verticais · 20% IRR¹ · 2026–2034"), the manager line, and a "Conhecer o Fundo →" call to action, with the IRR footnote rendered below the card so the ¹ resolves on the same page as required
- **`/marketing` — "A nossa abordagem sustentável" section**: new light block between Portfolio and Structure & Terms (`#sustentabilidade`, added to the fund subnav) carrying the distinction ACB asked for — an investment fund *with* impact, not an impact fund — over three pillars: sustainability rating measured at entry and exit, a sustainability upgrade plan alongside every financial plan, and independent third-party verification. No certification body, framework, SFDR classification or verifier is named, since none has been confirmed
- **`/marketing` — Observatory resource pages**: one `ObservatoryPage.astro` template serving all four "Recursos do sector" categories in both locales (8 routes) — Relatórios de Referência, Dados Portugal, Regulação & Financiamento and Eventos. Each entry shows its source, title, edition or dates, a summary, topic tags and a link to the official page; every page carries a back link to the Hub in the header and at the foot, plus cross-links to the other three categories. The Events calendar splits upcoming from already-held editions against the viewer's current date and orders them accordingly. Content lives in `src/data/observatory.json` behind a typed loader, with per-locale fields collapsing to a plain string where both languages match; card links resolve through `observatoryHref()` so they cannot drift from the routes. Reference Reports carries the full 28-title library from ACB's Research_Reports_Index (2015–2026), grouped by year newest-first, with his summaries edited for the site and translated to pt-PT; the button reads "Descarregar PDF" where the link is a file, "Abrir na fonte oficial" for a landing page, and "Aceder (exige registo)" for the one publication behind a registration form. Portugal Data and Regulation & Funding use sources already cited in the repo, plus dgrm.pt and docapesca.pt verified against their live sites; Events comes from ACB's 2026-08-26 email
- **`/marketing` — final site (Cardume) with client-feedback round**: new positive hero claim "O mar já é nosso. / A escala é o próximo passo." at a quieter, more elegant scale; European-context stats returned to the canyon as a full-bleed dark band ("Regresso à profundidade"); fund subnav hidden on mobile; vortex autoplay bug fixed (AV1 attached only on proven decode support + play retries on canplay/gesture/visibility); standalone Astro app with root `/` → `/pt/` redirect. Verified: axe 0 violations, Lighthouse 95 perf / 100 a11y / 100 BP / 100 SEO, CLS 0 (PT + EN)
- **BTF redesign — refinement round on the immersive alternatives**: Cardume's Fund section now alternates light and abyss (full-bleed NaturaFish estuary band with overlaid text, deep-navy Structure & Terms and final CTA); Abissal lightened after the dolphin dive (contrast-verified navy "shelf"); Corrente dropped and replaced by Cardume-Scrub — the dolphin dive as a 120-frame scroll-scrubbed sequence; hard, marked section transitions across all alternatives; footer logo reduced and right-aligned; hero video and dive frames deferred out of the load window (Lighthouse perf green with full-quality 1920/AV1 media, axe 0 violations)
- **BTF redesign — three immersive design alternatives** in `redesign/` (Astro 5 static app, SEO-first, bilingual PT/EN with hreflang + JSON-LD + sitemap): A "Cardume" (luminous immersive), B "Abissal" (continuous dark descent with live depth gauge), C "Corrente" (kinetic editorial with data ticker); fish-vortex video hero (35 MB → 3 MB web copy + poster) and dolphin-video parallax dive carrying the Blue Ocean Hub; Fund section staged as a "back to the future" heritage narrative (1500 → Hoje → 2034); palette derived from the logo navy #043F7F; shared typed content layer with the redesign brief's PT copy verbatim and professional EN localization; swappable research-slot module seeded from `/research` PDFs; video pause controls (WCAG 2.2.2) and full reduced-motion fallbacks; CMVM disclaimer and IRR risk caveats; internal review index at `/`. Verified: axe 0 violations (full-scroll scan), Lighthouse A 98 / B 99 / C 99 perf with 100 a11y/BP/SEO, CLS 0
- LinkedIn profile links for all team members in Section 06
- `AGENTS.md` as the tool-agnostic source of truth for repo workflow, architecture, and conventions

### Changed
- **`/marketing` — the root pages are now the Hub da Economia Azul landing page**: `/pt/` and `/en/` keep the video hero, the dive into the Hub and the sector resource cards, and gain the Fundos rail; the fund's chapters left for their own page (see Added). No approved copy was rewritten — everything moved or was reused verbatim. The main nav is now Hub (`#hub`) · Recursos (`#recursos`, an id added to the resources section) · Fundos (`#fundos`), with the Investir CTA pointing at `/pt/fundos/sbtf-1/#investir`; the hero's "Conhecer o Fundo" now opens the fund page while "Aceder ao Hub" still scrolls to `#hub`. The hero kicker changed from "STAG BLUE TRANSFORMATION FUND 1" to "STAG · ECONOMIA AZUL" / "STAG · BLUE ECONOMY" — flagged in `pt.ts`/`en.ts` as a draft pending ACB/JAP sign-off; the old kicker survives verbatim as the fund page masthead's label. The homepage `<title>` is unchanged and its meta description is now the opening sentence of the Hub intro, since the fund-centric description belongs to the fund page. An inline head script redirects the eight legacy fund anchors (`#fundo #tese #verticais #portfolio #sustentabilidade #estrutura #equipa #investir`) to the locale's fund page before paint, so existing bookmarks and links still land on the right chapter
- **`/marketing` — content contract splits the fund out of `SiteContent`**: the `fund` object became `funds: [FundContent]` (an array, so fund #2 is purely additive), gaining `slug`, `path`, `pageTitle`, `metaDescription`, `masthead` and `teaser` fields; `nav.metaDescription` moved to `hub.metaDescription` and `funds[0].metaDescription`; `hub.fundsRail` carries the rail's label, title and CTA. The fund chapters themselves are byte-identical to their previous form in both locales, pre-AO90 orthography included. `MarketingPage.astro` shed the fund markup, styles and content bindings; `FundPage.astro` carries them, duplicating the shared tokens, buttons, partners, footer and reveal styles rather than extracting them to a global sheet, which would have leaked those selectors onto the Observatory pages
- **`/marketing` — thesis equation now resolves to value creation (ACB, Aug 2026)**: the equation under the thesis ended on "Liderança europeia em qualidade" / "European leadership in quality", which read as an outcome disconnected from the fund's own work. On the client's note, the result is now "Valor criado, sustentabilidade verificada" / "Value created, sustainability verified" — value creation as what the equation produces, with sustainability as its verified consequence rather than an input, matching the Sustainability section's "a fund with impact, not an impact fund" framing. The European-leadership claim was kept, moved into the closing sentence of the third thesis paragraph. Applied in both locales across `marketing/` and `redesign/`; the longer result pill gets `text-wrap: balance` so it splits evenly when it wraps on narrow screens
- **`/marketing` — client feedback round (ACB, Aug 2026), phase 1**: hero claim replaced with "Crescer com o Mar / dar escala à economia azul." (the previous "O mar já é nosso" read as ownership of the sea, at odds with the fund's sustainability positioning) — EN carries a working translation pending sign-off; the stat band under the hero was removed, as it mixed fund figures (size, target IRR, verticals) with macro data and put the fund ahead of the information hub; the Hub intro was rewritten to the client's copy, framing the site as a collaborative resource that centralises a scattered sector's information, and now carries an open invitation to send in missing material at hub@bluetransformationfund.com; the "Uma imersão em quatro capítulos" chapter kicker was dropped; an "Área do Investidor" / "Investor Area" placeholder was added to the header beside the Invest CTA, rendered inert (no destination) and badged "Brevemente" / "Coming soon" until the gated area exists; the partner strip was trimmed to Finnova, BE Corporate and Fórum Oceano (the other logos remain in `src/assets/partners/` for when more are confirmed); Gonçalo Videira was added to the SBTF 1 team group as Fund Advisor, positioned on commercial strategy and route to market so the three advisors cover distinct mandates (operations, capital and policy, demand), with his portrait cut out of its office background and composited onto the same flat #E8EBF0 the other team photos already use, padded to the section's 4:5 crop; the self-sufficiency chart and the Observatory panel now share one hub chapter side by side above 1080px and stack chart-first below it, split 5/7 so the Observatory keeps three stat cards per row (two rows rather than three), and the chart is drawn in a new vertical orientation (time running top→bottom, value on the horizontal axis) which brings the two panels to exactly the same height. `LineChart` takes an `orientation` prop and still renders the conventional horizontal form by default; the vertical form caps its width once it stops sharing a row, since its height scales with its width
- **`/marketing` — header nav now collapses at 1100px instead of 900px**: adding the investor-area item left the horizontal bar too crowded between those widths, where "Área do Investidor" wrapped onto two lines and pushed the header out of alignment. Below 1100px the whole nav, investor item included, moves into the existing drawer
- **`/marketing` — investor-review corrections**: Hub and European-context stats realigned to the Observatory's data vintages (EU seafood trade deficit €22B/2023 → €21.6B/2024 per EUMOFA 2025 edition; global production 223.2 Mt/2022 → 235 Mt/2024 per FAO SOFIA 2026), so the same metric no longer appears twice on the page with two different values; the 57% aquaculture share now states the same denominator ("for human consumption") in both places it appears; the thesis no longer describes the €22B trade *deficit* as seafood *imports*; Structure & Terms row relabelled "Total committed capital" → "Target fund size" (PT: "Dimensão-alvo do fundo"), since nothing is committed yet
- Section 02: Dolphin video now appears below copy on mobile (side-by-side on desktop)
- Section 04: Chart containers now have consistent heights
- Section 05: Chart containers now have consistent heights
- Section 05: KPI boxes are more transparent for better background visibility
- `CLAUDE.md` is now tracked in git and trimmed to a short pointer to `AGENTS.md`

### Fixed
- **`/marketing` — Observatory review fixes**: event status now refreshes in the browser and respects multi-day end dates; resource labels and the California Ocean Summit source were corrected; narrow-screen overflow and keyboard focus visibility were fixed
- **`/marketing` — count-up animation rendered wrong numbers on the EN site**: the counter stripped every `.` before parsing (correct for PT thousands groups, but it ate the EN decimal point), so decimals animated to ten times their value before snapping back — "37.5%" self-sufficiency counted up through **375.0%**, "223.2 Mt" through **2231.7 Mt**, "1.7M km²" through **17.0M km²**. Separators are now taken from the document language instead of guessed from the string
- **`/marketing` — fund allocation did not sum to the fund size**: verticals were quoted at €62.5M + €43.75M + €18.75M = €125M against a €126M fund (the amounts were 50/35/15% of €125M). Now €63M + €44.1M + €18.9M = €126M. The allocation legend also rendered PT decimal commas ("€62,5M") on the EN page next to EN body copy ("€62.5M"); `fundAllocation` now carries `amount`/`amountEn` like `research-stats.json`
- **`/marketing` — the fund subnav was unreachable everywhere**: `position: sticky; top: 0` parked it behind the 139px fixed header once stuck, so clicking Thesis/Verticals/Portfolio/Structure/Team/Invest hit the site logo instead; it is `display:none` on mobile, so the nav worked on no screen size. The header and subnav heights are now published as `--header-h`/`--subnav-h` at runtime and drive both the subnav offset and the anchor `scroll-margin-top` (previously a hardcoded 70px, less than the header)
- Recharts ResponsiveContainer console warnings (added minWidth={0})

### Removed
- `documents/CONTRIBUTING.md` — its workflow content was merged into `AGENTS.md`

## [0.2.0] - 2026-03-24

### Added
- **Scroll-linked animations** with Framer Motion
  - FadeIn component with configurable direction and delay
  - StaggerContainer and StaggerItem for sequential animations
  - Viewport-triggered animations using whileInView
- **Responsive design** for all screen sizes
  - Mobile-first typography and spacing
  - Responsive chart sizes
  - Hero metrics grid (2x2 mobile, inline desktop)
  - Mobile scroll indicator
- **Performance optimizations**
  - Lazy loading for images (`loading="lazy"`)
  - Video poster attributes for immediate visual feedback

### Changed
- All sections now use FadeIn animations
- Team photos have grayscale-to-color hover effect

## [0.1.0] - 2026-03-23

### Added
- **Core sections implemented:**
  - Hero section with animated video background
  - Section 02: Macro Context with dolphin video and stats
  - Section 03: SDG 14 Funding Gap with scorecard
  - Section 04: Marine Protein Efficiency with FCR and carbon charts
  - Section 05: European Deficit with self-sufficiency, trade deficit, and consumption charts
  - Section 06: Executive Leadership with team profiles
- **Design system ("Ice & Deep"):**
  - Custom colors: ice-white, deep-navy, atlantic-teal, glacier-blue
  - Typography: Inter (headings), IBM Plex Sans (body), JetBrains Mono (mono)
  - Glassmorphism frost cards with backdrop blur
- **Data visualization:**
  - Recharts integration for area, bar, and pie charts
  - Consistent chart styling with custom tooltips
- **Layout components:**
  - Vertical anchor navigation
  - Responsive Layout wrapper
- **Content management:**
  - Centralized content in `src/data/content.ts`
- SBTF1 logo integration (navy and ice-white SVG variants)
- GitHub issue and PR templates

### Infrastructure
- Vite + React 19 + TypeScript setup
- Tailwind CSS v4 with `@theme` directive
- Path aliases (`@/` for src)
- ESLint configuration

---

## Releases

View all releases: [GitHub Releases](https://github.com/gonvideira/sbtf1/releases)
