# SBTF1 Landing Page Implementation Plan

**Status:** Active
**Last Updated:** 2026-03-23
**Target Completion:** 3 days

---

## Executive Summary
Build an institutional-grade landing page for "Stag Blue Transformation Fund 1" using React/Vite, Tailwind CSS, and shadcn/ui. Target: MVP in 3 days.

### Confirmed Decisions:
- **Visual Assets:** Ready Day 1 - integrate immediately
- **Charts Library:** Recharts (React-native, declarative)
- **GitHub Setup:** Full setup first (milestones + all 19 issues)
- **Changelog:** GitHub Releases page

---

## Progress Tracker

| Phase | Status | Issues | Notes |
|-------|--------|--------|-------|
| Phase 1: Infrastructure | ✅ Complete | #1-6 | Vite, Tailwind v4, shadcn/ui, Vercel |
| Phase 2: Core Layout | ✅ Complete | #7-9 | VerticalAnchor, VortexO, Layout, Hero iterated |
| Phase 3: Sections | 🔄 In Progress | #10-15 | Hero done, 5 sections remaining |
| Phase 4: Polish | ⬜ Not Started | #16-18 | |
| Phase 5: Feedback | ⬜ Not Started | #19-20 | |
| Phase 6: CTAs & Analytics | ⬜ Not Started | #21-27 | |

Legend: ⬜ Not Started | 🔄 In Progress | ✅ Complete

---

## Phase 1: GitHub Setup & Project Infrastructure (Day 1 Morning)

### Milestone: `v0.1.0 - Infrastructure`

#### Issues to Create:

| # | Title | Type | Priority | Status |
|---|-------|------|----------|--------|
| 1 | `chore: Initialize Vite + React + TypeScript project` | chore | P0-critical | ✅ |
| 2 | `chore: Configure Tailwind CSS with Ice & Deep design tokens` | chore | P0-critical | ✅ |
| 3 | `chore: Install and configure shadcn/ui` | chore | P0-critical | ✅ |
| 4 | `chore: Set up Vercel deployment via GitHub` | chore | P0-critical | ✅ |
| 5 | `chore: Add GitHub templates (PR, Issues)` | chore | P1-important | ✅ |
| 6 | `chore: Create CHANGELOG.md for client visibility` | chore | P1-important | ✅ |

### Technical Implementation:

```bash
# Project creation
npm create vite@latest sbtf1-landing -- --template react-ts
cd sbtf1-landing
npm install

# Tailwind setup
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# shadcn/ui
npx shadcn@latest init

# Additional dependencies
npm install framer-motion recharts
npm install @fontsource/inter @fontsource/ibm-plex-sans @fontsource-variable/jetbrains-mono
```

### Design Tokens (tailwind.config.js):

```js
colors: {
  'ice-white': '#F8FAFC',
  'deep-navy': '#001F3F',
  'atlantic-teal': '#00A8A8',
  'glacier-blue': '#E2E8F0',
  'frost': 'rgba(255, 255, 255, 0.7)',
}
fontFamily: {
  heading: ['Inter', 'sans-serif'],
  body: ['IBM Plex Sans', 'sans-serif'],
  mono: ['JetBrains Mono', 'monospace'],
}
```

---

## Phase 2: Core Layout & Visual Device (Day 1 Afternoon)

### Milestone: `v0.1.0 - Infrastructure` (continued)

#### Issues to Create:

| # | Title | Type | Priority | Status |
|---|-------|------|----------|--------|
| 7 | `feat: Create Vertical Anchor navigation component` | feature | P0-critical | ✅ |
| 8 | `feat: Create Vortex O section marker SVG component` | feature | P0-critical | ✅ |
| 9 | `feat: Implement base layout with glassmorphism cards` | feature | P0-critical | ✅ |

### Components to Build:

1. **`VerticalAnchor.tsx`** - The scroll-linked vertical line in left gutter
2. **`VortexO.tsx`** - SVG section marker with teal highlight on active
3. **`FrostCard.tsx`** - Glassmorphism card with backdrop-blur
4. **`Layout.tsx`** - Main page structure

---

## Phase 3: Landing Page Sections (Day 2)

### Milestone: `v0.2.0 - Core MVP`

#### Issues to Create:

| # | Title | Type | Priority | Section | Status |
|---|-------|------|----------|---------|--------|
| 10 | `feat: Build Hero section with video background` | feature | P0-critical | Section 1 | ✅ |
| 11 | `feat: Build Macro Context section with data charts` | feature | P0-critical | Section 2 | ⬜ |
| 12 | `feat: Build SDG 14 Funding Gap section` | feature | P0-critical | Section 3 | ⬜ |
| 13 | `feat: Build Marine Protein Efficiency comparison` | feature | P1-important | Section 4 | ⬜ |
| 14 | `feat: Build European Deficit section with charts` | feature | P1-important | Section 5 | ⬜ |
| 15 | `feat: Build Executive Leadership team section` | feature | P1-important | Section 6 | ⬜ |

### Section Components:

#### Section 1: Hero
- Full-bleed video background
- Headline: "STAG Blue Transformation Fund 1: Investing in the Future of Global Food Security"
- Core metrics card: €125M target, 15-20% IRR, 10-year term, SDG 14

#### Section 2: Macro Context
- Production Gap bar chart (World vs Sub-Saharan Africa)
- Consumption trend area chart (14kg → 22kg per capita)
- Aquaculture vs Captures grouped bar chart

#### Section 3: SDG 14 Funding Gap
- High-impact scorecard: €147B required vs €21B current (€126B gap)
- Ocean impact statistics

#### Section 4: Marine Protein Efficiency
- FCR comparison table (Fish 1.2-1.5 vs Beef 6.0-10.0)
- Land/water usage comparison
- Carbon footprint comparison

#### Section 5: European Deficit
- Self-sufficiency decline chart (46% → 37%)
- Trade deficit evolution (€22B in 2023)
- Global consumption donut chart

#### Section 6: Team
- Grid layout with B&W portraits
- Technical bio typography
- STAG firm profile

---

## Phase 4: Polish & Animations (Day 3 Morning)

### Milestone: `v0.2.0 - Core MVP` (continued)

#### Issues to Create:

| # | Title | Type | Priority | Status |
|---|-------|------|----------|--------|
| 16 | `feat: Add scroll-linked animations with Framer Motion` | feature | P1-important | ⬜ |
| 17 | `feat: Implement responsive design for mobile/tablet` | feature | P0-critical | ⬜ |
| 18 | `chore: Optimize performance (lazy loading, image optimization)` | chore | P1-important | ⬜ |

---

## Phase 5: Client Feedback Integration (Day 3 Afternoon)

### Milestone: `v0.3.0 - Feedback & Polish`

#### Issues to Create:

| # | Title | Type | Priority | Status |
|---|-------|------|----------|--------|
| 19 | `feat: Integrate client-provided visual assets` | feature | P0-critical | ⬜ |
| 20 | `fix: Address client feedback round 1` | bug | P0-critical | ⬜ |

---

## File Structure

```
sbtf1-landing/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Layout.tsx
│   │   │   ├── VerticalAnchor.tsx
│   │   │   └── Navigation.tsx
│   │   ├── ui/                    # shadcn components
│   │   │   ├── card.tsx
│   │   │   ├── badge.tsx
│   │   │   └── ...
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── MacroContext.tsx
│   │   │   ├── FundingGap.tsx
│   │   │   ├── ProteinEfficiency.tsx
│   │   │   ├── EuropeanDeficit.tsx
│   │   │   └── Team.tsx
│   │   └── shared/
│   │       ├── VortexO.tsx
│   │       ├── FrostCard.tsx
│   │       └── MetricCard.tsx
│   ├── lib/
│   │   └── utils.ts               # shadcn utils
│   ├── styles/
│   │   └── globals.css
│   ├── data/
│   │   └── content.ts             # All copy and metrics
│   ├── App.tsx
│   └── main.tsx
├── public/
│   └── assets/                    # Video/images
├── tailwind.config.js
├── components.json                # shadcn config
└── vercel.json
```

---

## Workflow Summary

### Commit Strategy
- Commit after each issue is completed locally
- Create PR only after local testing confirmed
- Use conventional commit messages: `feat:`, `fix:`, `chore:`

### Branch Strategy
```
main (protected)
  └── feat/infrastructure        # Issues 1-6
  └── feat/core-layout           # Issues 7-9
  └── feat/landing-sections      # Issues 10-15
  └── feat/animations            # Issues 16-18
  └── feat/client-feedback       # Issues 19-20
```

---

## Client-Facing Changelog

### Visibility: GitHub Releases
- Use GitHub's releases feature for each milestone
- Client can follow releases at: `github.com/[repo]/releases`
- Each release includes: version tag, summary of changes, link to preview

### Format:
```markdown
# SBTF1 Landing Page Changelog

## [0.2.0] - YYYY-MM-DD
### Added
- Hero section with video background
- Macro Context section with production gap charts
- SDG 14 Funding Gap scorecard

## [0.1.0] - YYYY-MM-DD
### Added
- Initial project setup
- Design system (Ice & Deep theme)
- Vercel deployment
```

---

## Asset & Content Request Schedule

I will proactively ask you for specific assets at each phase.

### Day 1 - Infrastructure Phase

| Request | Description | Format/Specs |
|---------|-------------|--------------|
| **Logo files** | STAG fund logo, SBTF1 logo | SVG preferred, PNG fallback |
| **Brand assets** | Any existing brand guidelines or color swatches | PDF/Figma/Image |

### Day 1 - Layout Phase

| Request | Description | Format/Specs |
|---------|-------------|--------------|
| **Hero video** | Fish vortex / ocean footage for hero section | MP4, 1920x1080+, <10MB, muted/loopable |
| **Hero fallback image** | Static image for mobile/slow connections | JPG/WebP, 1920x1080 |

### Day 2 - Sections Phase

| Request | Description | Format/Specs |
|---------|-------------|--------------|
| **Section 2 - Macro Context** | | |
| - Background media | Ocean currents or abstract blue water | Video (MP4) or image |
| - Chart data | Confirm exact values for production gap, consumption trends | I'll provide a data template |
| **Section 3 - SDG 14** | | |
| - Background media | Slow-motion water surface | Video or image |
| - SDG 14 icon/badge | Official SDG logo if available | SVG/PNG |
| **Section 4 - Efficiency** | | |
| - Comparison data | Confirm FCR, land/water usage, CO2 values | Spreadsheet or confirmation of brief values |
| **Section 5 - European Deficit** | | |
| - Chart data | Self-sufficiency % by year, trade deficit by year | Spreadsheet or confirmation |
| **Section 6 - Team** | | |
| - Team photos | António, João Reis, João Fialho, Manuel | B&W, square crop, 400x400px+ |
| - STAG company logo | For firm profile section | SVG preferred |
| - Bio text | Confirm or update bio text from brief | Text confirmation |

### Day 3 - Polish Phase

| Request | Description | Format/Specs |
|---------|-------------|--------------|
| **Social/meta images** | OG image for social sharing | 1200x630px |
| **Favicon** | Site favicon | ICO or SVG, 32x32 and 16x16 |

### Asset Request Workflow:

1. **I will ping you** at the start of each phase with specific requests
2. **You provide assets** via file upload or file path
3. **I integrate immediately** and commit changes
4. **You test locally** before I create PR

### Data Template:

For chart data, I'll create a `src/data/content.ts` file with placeholder values from the brief. You can:
- Confirm the values are correct, OR
- Provide updated numbers

Example:
```typescript
export const macroData = {
  productionGap: {
    world: 48.6,        // % increase needed by 2050
    subSaharan: 112.4,  // % increase needed
  },
  consumption: {
    1990: 14,  // kg per capita
    2020: 22,  // kg per capita
  }
}
```

---

## Verification & Testing

1. **Local Development:**
   ```bash
   npm run dev
   # Test at http://localhost:5173
   ```

2. **Pre-PR Checklist:**
   - [ ] All sections render correctly
   - [ ] Responsive on mobile/tablet/desktop
   - [ ] Vertical Anchor scrolls correctly
   - [ ] Charts display with correct data
   - [ ] Glassmorphism effects visible
   - [ ] No console errors

3. **Vercel Preview:**
   - Each PR generates preview URL
   - Share with client for feedback

---

## Timeline Summary

| Day | Morning | Afternoon |
|-----|---------|-----------|
| **1** | Issues 1-6: Vite, Tailwind, shadcn, Vercel, Templates | Issues 7-9: Layout, Anchor, Cards |
| **2** | Issues 10-12: Hero, Macro, SDG14 | Issues 13-15: Efficiency, Deficit, Team |
| **3** | Issues 16-18: Animations, Responsive, Performance | Issues 19-20: Assets, Client Feedback |

---

## Document Recommendations

### 1. CONTRIBUTING.md
- **Current state:** Solid workflow guide
- **Suggestion:** Add project-specific labels: `frontend`, `design-system`, `charts`

### 2. Design Brief
- **Current state:** Excellent aesthetic direction
- **Suggestion:** Add exact Tailwind utility classes for common patterns:
  ```
  Frost Card: "bg-white/70 backdrop-blur-[12px] border border-glacier-blue shadow-sm"
  ```

### 3. Landing Page Brief
- **Current state:** Comprehensive content
- **Suggestion:** Add priority tiers:
  - **MVP (Day 1-2):** Hero, Macro Context, Funding Gap
  - **Complete (Day 3):** Efficiency, Deficit, Team

---

## Addendum A: Email CTA Forms

### Overview
Add email capture CTAs throughout the landing page to collect investor interest. Forms are client-side only for MVP (no backend integration yet).

### CTA Placements

| Location | CTA Type | Context |
|----------|----------|---------|
| Hero Section | Primary CTA | "Get the Investment Thesis" - prominent, above fold |
| After SDG 14 Section | Inline CTA | "Stay Updated on Blue Economy Opportunities" |
| After Team Section | Footer CTA | "Request a Meeting" - softer, end of page |

### Component Design

```typescript
// src/components/shared/EmailCTA.tsx
interface EmailCTAProps {
  variant: 'hero' | 'inline' | 'footer'
  headline: string
  subtext?: string
  buttonText: string
  ctaId: string  // For analytics tracking
}
```

### Variants

**Hero (Primary):**
- Glassmorphism card on video background
- Large input + prominent button
- Copy: "Get the Investment Thesis" / "Access Now"

**Inline:**
- Full-width section break
- Centered, minimal design
- Copy: "Stay Updated" / "Subscribe"

**Footer:**
- Part of footer section
- Smaller, secondary styling
- Copy: "Request a Meeting" / "Get in Touch"

### Form Behavior (MVP)
- Email validation (format only)
- On submit: Show success toast, store in localStorage
- Track `cta_submit` event to GA4
- No backend integration yet (Phase 2: Supabase)

### Issues to Add

| # | Title | Type | Priority |
|---|-------|------|----------|
| 21 | `feat: Create EmailCTA component with variants` | feature | P1-important |
| 22 | `feat: Add Hero CTA for investment thesis` | feature | P1-important |
| 23 | `feat: Add inline and footer CTAs` | feature | P2-normal |

---

## Addendum B: Google Analytics 4 Implementation

### 1. Recommendation Summary

**Approach:** Lightweight, single-file analytics wrapper with typed event helpers.

**Why this approach:**
- No external dependencies (gtag is loaded via script tag)
- Type-safe event tracking
- Easy to extend, hard to mess up
- Works with React Router / client-side routing
- Clear separation: analytics logic lives in one place

**What we're NOT doing:**
- No GTM (overkill for solo builder)
- No analytics abstraction layer (we're committed to GA4)
- No server-side tracking (not needed yet)
- No custom dimensions overload (start simple)

### 2. Proposed Architecture

```
src/
├── lib/
│   └── analytics.ts        # Single file: init, track, identify
├── hooks/
│   └── usePageView.ts      # Auto-track route changes
├── components/
│   └── shared/
│       └── TrackClick.tsx  # Optional: wrapper for click tracking
```

**Core principle:** Analytics code is a utility, not a framework.

### 3. Implementation Plan

#### Step 1: GA4 Setup
```html
<!-- index.html - before </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX', { send_page_view: false }); // We'll send manually
</script>
```

**Why `send_page_view: false`?** SPAs need manual pageview tracking on route change.

#### Step 2: Analytics Module

```typescript
// src/lib/analytics.ts

type EventParams = Record<string, string | number | boolean | undefined>

// Core tracking function
export function trackEvent(eventName: string, params?: EventParams) {
  if (typeof window.gtag === 'undefined') return
  window.gtag('event', eventName, params)
}

// Page view (call on route change)
export function trackPageView(path: string, title?: string) {
  trackEvent('page_view', {
    page_path: path,
    page_title: title || document.title,
  })
}

// Identify user (call after auth)
export function identifyUser(userId: string, traits?: EventParams) {
  if (typeof window.gtag === 'undefined') return
  window.gtag('config', 'G-XXXXXXXXXX', {
    user_id: userId,
    ...traits,
  })
  trackEvent('login', { method: 'supabase' })
}

// Clear identity (call on logout)
export function clearIdentity() {
  if (typeof window.gtag === 'undefined') return
  window.gtag('config', 'G-XXXXXXXXXX', { user_id: undefined })
}

// Typed event helpers (add as needed)
export const events = {
  ctaView: (ctaId: string) =>
    trackEvent('cta_view', { cta_id: ctaId }),

  ctaClick: (ctaId: string) =>
    trackEvent('cta_click', { cta_id: ctaId }),

  ctaSubmit: (ctaId: string, email: string) =>
    trackEvent('cta_submit', { cta_id: ctaId, email_domain: email.split('@')[1] }),

  sectionView: (sectionId: string) =>
    trackEvent('section_view', { section_id: sectionId }),

  chartInteract: (chartId: string, action: string) =>
    trackEvent('chart_interact', { chart_id: chartId, action }),

  externalLink: (url: string) =>
    trackEvent('external_link_click', { link_url: url }),
}
```

#### Step 3: Page View Hook

```typescript
// src/hooks/usePageView.ts
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom' // or wouter, etc.
import { trackPageView } from '@/lib/analytics'

export function usePageView() {
  const location = useLocation()

  useEffect(() => {
    trackPageView(location.pathname)
  }, [location.pathname])
}
```

**Usage:** Call once in App.tsx or Layout component.

#### Step 4: Section View Tracking (Scroll-based)

```typescript
// In each section component, use IntersectionObserver
import { useEffect, useRef } from 'react'
import { events } from '@/lib/analytics'

export function useSectionView(sectionId: string) {
  const ref = useRef<HTMLElement>(null)
  const tracked = useRef(false)

  useEffect(() => {
    if (!ref.current || tracked.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !tracked.current) {
          events.sectionView(sectionId)
          tracked.current = true
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [sectionId])

  return ref
}
```

### 4. Event Taxonomy

**Naming Convention:** `snake_case`, verb_noun pattern

#### Page Events
| Event | Parameters | When |
|-------|------------|------|
| `page_view` | `page_path`, `page_title` | Route change |

#### CTA Funnel
| Event | Parameters | When |
|-------|------------|------|
| `cta_view` | `cta_id` | CTA enters viewport |
| `cta_click` | `cta_id` | User clicks input/button |
| `cta_submit` | `cta_id`, `email_domain` | Form submitted |

#### Content Engagement
| Event | Parameters | When |
|-------|------------|------|
| `section_view` | `section_id` | Section 50% visible |
| `chart_interact` | `chart_id`, `action` | Hover/click on chart |
| `video_play` | `video_id` | Hero video plays |

#### Authentication (Phase 2)
| Event | Parameters | When |
|-------|------------|------|
| `login` | `method` | User logs in |
| `signup` | `method` | User creates account |
| `logout` | - | User logs out |

#### CTA IDs for this project:
- `hero_thesis` - Hero section CTA
- `inline_updates` - Mid-page subscription
- `footer_meeting` - Footer contact form

### 5. Anonymous vs Authenticated Tracking

**Anonymous users:**
- Tracked via GA4 client ID (automatic)
- No `user_id` set
- Full event tracking works

**Authenticated users (Phase 2):**
- Call `identifyUser(supabaseUserId)` after login
- GA4 links sessions via `user_id`
- Call `clearIdentity()` on logout

**Important:** Never send PII (email, name) as event parameters. Only send:
- `email_domain` for segmentation
- `user_id` (opaque identifier)

### 6. Rollout Priorities

**MVP (Now):**
1. GA4 script in index.html
2. `analytics.ts` with core functions
3. Page view tracking
4. CTA events (`cta_view`, `cta_click`, `cta_submit`)

**After Launch:**
5. Section view tracking (scroll depth)
6. Chart interaction tracking
7. Video engagement

**Phase 2 (Auth):**
8. User identification
9. Authenticated user events

### 7. Risks / Mistakes to Avoid

| Risk | Mitigation |
|------|------------|
| Tracking before consent (GDPR) | Add cookie banner before EU launch |
| Event parameter explosion | Stick to defined taxonomy, review monthly |
| Tracking PII | Never send email/name, only domains |
| Silent failures | Check `typeof window.gtag` before calls |
| Over-tracking | Start with funnel events only, add more based on questions |
| Forgetting to track SPA navigation | Use `usePageView` hook in root component |

### 8. File Changes Summary

| File | Action |
|------|--------|
| `index.html` | Add GA4 script tag |
| `src/lib/analytics.ts` | Create analytics module |
| `src/hooks/usePageView.ts` | Create page view hook |
| `src/hooks/useSectionView.ts` | Create section tracking hook |
| `src/components/shared/EmailCTA.tsx` | Create with analytics integration |
| `src/App.tsx` | Add `usePageView()` call |

### 9. Issues to Add

| # | Title | Type | Priority |
|---|-------|------|----------|
| 24 | `chore: Add GA4 script and analytics module` | chore | P1-important |
| 25 | `feat: Add page view tracking for SPA` | feature | P1-important |
| 26 | `feat: Add CTA event tracking` | feature | P1-important |
| 27 | `feat: Add section view tracking` | feature | P2-normal |

---

## Updated Progress Tracker

| Phase | Status | Issues | Notes |
|-------|--------|--------|-------|
| Phase 1: Infrastructure | ✅ Complete | #1-6 | Done |
| Phase 2: Core Layout | ✅ Complete | #7-9 | VerticalAnchor, VortexO, Layout |
| Phase 3: Sections | 🔄 In Progress | #10-15 | Hero ✅, 5 sections remaining |
| Phase 4: Polish | ⬜ Not Started | #16-18 | |
| Phase 5: Feedback | ⬜ Not Started | #19-20 | |
| **Phase 6: CTAs & Analytics** | ⬜ Not Started | #21-27 | New |

---

## Updated File Structure

```
sbtf1/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   ├── ui/
│   │   ├── sections/
│   │   └── shared/
│   │       ├── FrostCard.tsx
│   │       ├── MetricCard.tsx
│   │       └── EmailCTA.tsx          # NEW
│   ├── lib/
│   │   ├── utils.ts
│   │   └── analytics.ts              # NEW
│   ├── hooks/
│   │   ├── usePageView.ts            # NEW
│   │   └── useSectionView.ts         # NEW
│   ├── data/
│   │   └── content.ts
│   ├── App.tsx
│   └── main.tsx
├── public/
├── index.html                        # GA4 script added
└── ...
```
