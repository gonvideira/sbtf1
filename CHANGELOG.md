# Changelog

All notable changes to SBTF1 Landing Page will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- LinkedIn profile links for all team members in Section 06

### Changed
- Section 02: Dolphin video now appears below copy on mobile (side-by-side on desktop)
- Section 04: Chart containers now have consistent heights
- Section 05: Chart containers now have consistent heights
- Section 05: KPI boxes are more transparent for better background visibility

### Fixed
- Recharts ResponsiveContainer console warnings (added minWidth={0})

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
