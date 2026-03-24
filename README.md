# SBTF1 - STAG Blue Transformation Fund 1

A single-page landing site for SBTF1, a private equity fund focused on Portugal's blue economy and sustainable seafood sector.

## Live Site

🌐 **Production:** [Coming Soon - Vercel Deployment]

## Tech Stack

- **Framework:** React 19 + TypeScript + Vite
- **Styling:** Tailwind CSS v4 with custom "Ice & Deep" design system
- **Charts:** Recharts
- **Animations:** Framer Motion
- **Deployment:** Vercel

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── App.tsx                 # Main app with Hero section
├── components/
│   ├── layout/            # Layout wrapper, navigation
│   ├── sections/          # Page sections (MacroContext, FundingGap, etc.)
│   ├── shared/            # Reusable components (FadeIn, FrostCard)
│   └── ui/                # Base UI primitives
├── data/content.ts        # All section content centralized
├── lib/utils.ts           # Utility functions
└── index.css              # Tailwind + design system tokens
```

## Sections

1. **Hero** - Fund overview with animated video background
2. **Macro Context** - Global food systems and seafood market data
3. **Funding Gap** - SDG 14 investment opportunity
4. **Protein Efficiency** - Marine vs terrestrial protein comparison
5. **European Deficit** - EU seafood trade imbalance
6. **Leadership** - Executive team profiles

## Design System

Custom "Ice & Deep" theme with:
- **Colors:** `ice-white`, `deep-navy`, `atlantic-teal`, `glacier-blue`
- **Fonts:** Inter (headings), IBM Plex Sans (body), JetBrains Mono (mono)
- **Effects:** Glassmorphism frost cards with backdrop blur

## Documentation

- [CHANGELOG.md](./CHANGELOG.md) - Version history and updates
- [GitHub Releases](https://github.com/gonvideira/sbtf1/releases) - Tagged releases

## License

Private - All rights reserved.
