# AGENTS.md

This file is the source of truth for any AI coding agent (Claude Code, Codex, Cursor, etc.) working in this repository. Tool-specific files (e.g. `CLAUDE.md`) point back here rather than duplicating content.

## ⚠️ CRITICAL WORKFLOW RULES

### 🚫 NEVER WORK ON MAIN
`main` is protected — never push directly to it. Before making ANY changes, ALWAYS create a feature branch first:
```bash
git checkout -b feat/your-feature-name   # or fix/, chore/, refactor/, docs/
```
If you find yourself on `main` with uncommitted changes, immediately run:
```bash
git checkout -b <branch-name>  # This preserves your changes on the new branch
```

### 📝 ALWAYS UPDATE CHANGELOG
When completing a feature, fix, or closing an issue:
1. Add an entry to `CHANGELOG.md` under the `[Unreleased]` section
2. Use the correct category: `Added`, `Changed`, `Fixed`, `Removed`
3. Keep entries concise but descriptive

### Branch Naming
- `feat/` - New features
- `fix/` - Bug fixes
- `chore/` - Maintenance tasks
- `refactor/` - Code refactoring
- `docs/` - Documentation

### Squash-Merge Only
Branches are short-lived (hours to a few days). Commit as messily as you like on a branch — on merge, everything is squashed into a single clean commit on `main`.

### Full Workflow
```bash
# 1. Create branch (NEVER skip this!)
git checkout -b feat/your-feature-name

# 2. Make changes, test locally
npm run build

# 3. Update CHANGELOG.md

# 4. Commit and push
git add <files> CHANGELOG.md
git commit -m "feat: description"
git push -u origin feat/your-feature-name

# 5. Create PR (squash-merge once approved)
gh pr create
```

## Issues, Labels & Milestones

Every piece of work starts as a GitHub issue. Use `gh issue list` to see open tasks. Always reference issue numbers in commits/PRs with `Closes #XX`.

**Issue anatomy:**
- **What:** One sentence describing the goal
- **Why:** One sentence describing the user/business value
- **Tasks:** A markdown checklist of acceptance criteria

**Labels:** assign one from each category — Type (`feature`/`bug`/`chore`/`spike`), Area (e.g. `frontend`, `content`, `design`), Priority (`P0-critical`/`P1-important`/`P2-normal`).

**Milestones:** issues are grouped into milestones. Don't pull issues outside the current active milestone.

Repository templates already enforce this: [.github/pull_request_template.md](.github/pull_request_template.md), [.github/ISSUE_TEMPLATE/feature_request.md](.github/ISSUE_TEMPLATE/feature_request.md), [.github/ISSUE_TEMPLATE/bug_report.md](.github/ISSUE_TEMPLATE/bug_report.md).

## Release Tags (SemVer)

Tag releases when a milestone closes, not on every merge. Format: `0.MILESTONE.PATCH`
- `0.1.0` → Milestone complete
- `0.1.1` → Hotfix merged into an already-completed milestone
- `1.0.0` → Public launch

## Commands

```bash
npm run dev      # Start development server (Vite)
npm run build    # TypeScript check + production build
npm run lint     # ESLint
npm run preview  # Preview production build locally
```

**Before opening a PR:** the app MUST run cleanly on `localhost` (`npm run dev`) and `npm run build` must pass — if it hasn't run locally, it doesn't get a PR.

## Architecture

This is a **single-page landing site** for SBTF1 (STAG Blue Transformation Fund 1), a private equity fund focused on Portugal's blue economy/seafood sector.

### Tech Stack
- React 19 + TypeScript + Vite
- Tailwind CSS v4 (using `@theme` directive in CSS, not tailwind.config.js)
- Recharts for data visualizations
- Framer Motion for animations
- Lucide React for icons

### Project Structure
```
src/
├── App.tsx                    # Main app with Hero section inline, imports other sections
├── components/
│   ├── layout/               # Layout wrapper + VerticalAnchor navigation
│   ├── sections/             # Page sections (MacroContext, FundingGap, etc.)
│   ├── shared/               # Reusable components (FrostCard, VortexO)
│   └── ui/                   # Base UI primitives (card, badge)
├── data/content.ts           # All section content/copy centralized here
├── lib/utils.ts              # cn() utility for Tailwind class merging
└── index.css                 # Tailwind imports + design system theme
```

### Design System ("Ice & Deep")
Custom theme defined in `src/index.css` using Tailwind v4's `@theme` directive:
- **Colors**: `ice-white`, `deep-navy`, `atlantic-teal`, `glacier-blue`, `frost`
- **Fonts**: Inter (headings), IBM Plex Sans (body), JetBrains Mono (monospace)
- **Pattern**: Glassmorphism "frost cards" with backdrop blur

### Key Patterns
- **Path alias**: Use `@/` to import from `src/` (configured in vite.config.ts)
- **Content separation**: All text, metrics, and chart data live in `src/data/content.ts`
- **Section IDs**: Each section has an `id` attribute for anchor navigation (hero, macro-context, funding-gap, protein-efficiency, european-deficit, team)
- **Assets**: Static assets served from `public/assets/` (images, videos, SVGs)

### Sections Flow
1. Hero (inline in App.tsx) - Fund overview with video background
2. MacroContext - Global food systems data
3. FundingGap - SDG 14 investment gap
4. ProteinEfficiency - Marine protein vs other proteins comparison
5. EuropeanDeficit - EU seafood trade imbalance
6. Leadership - Team profiles

## Local-Only Folders (gitignored but accessible)

These folders exist locally but are NOT tracked by git. **Agents should read these for context:**

### `/documents/` - Project Documentation
Contains confidential project specs and planning documents:
- `IMPLEMENTATION_PLAN.md` - Phased development roadmap with GitHub issues
- `SBTF1_ Public Landing Page Development Brief.md` - Content requirements
- `SBTF1_ Web Design Brief & UI_UX Specification.md` - Design system specs

### `/assets/` - Source Assets (root level)
Contains original/source assets not needed in production. Different from `public/assets/` which serves production assets.

## GitHub Issues

Track work via GitHub issues. Use `gh issue list` to see open tasks. Always reference issue numbers in commits/PRs with `Closes #XX`.
