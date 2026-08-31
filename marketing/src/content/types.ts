// Shared content contract consumed by all three design alternatives.
// PT is the primary narrative source (verbatim from the redesign brief);
// EN is a professional localization of the same narrative.

export type Locale = 'pt' | 'en'

export interface Stat {
  value: string
  label: string
  /** Cited source, shown with the stat (e.g. "EUMOFA 2022") */
  source?: string
  sourceUrl?: string
  /** Date the figure refers to / was last verified */
  asOf?: string
}

export interface NavContent {
  /** Browser tab / <title> base */
  pageTitle: string
  items: { label: string; anchor: string }[]
  cta: { label: string; anchor: string }
  /** Announced but not yet built — renders as inert text, no destination */
  investorArea: { label: string; badge: string }
}

export interface HeroContent {
  kicker: string
  /** Two lines, rendered separately for typographic rhythm */
  headlineLine1: string
  headlineLine2: string
  subheadline: string
  ctaPrimary: { label: string; anchor: string }
  ctaSecondary: { label: string; anchor: string }
  /** Accessible description of the background imagery */
  imageAlt: string
}

/** Observatory category this card opens; the path is resolved from the data. */
export type ObservatoryCategoryKey = 'reports' | 'portugal' | 'regulation' | 'events'

export interface HubResourceCard {
  category: ObservatoryCategoryKey
  title: string
  description: string
  pageLabel: string
}

export interface HubContent {
  sectionLabel: string
  title: string
  intro: string
  /** Open invitation for readers to send in sector information the hub is missing */
  contribution: { prompt: string; email: string }
  /** Sourced, dated stat cards — interim data now, refreshed from /research later */
  statCardsTitle: string
  statCards: Stat[]
  /** The clearly-marked swappable research slot */
  researchSlot: {
    title: string
    note: string
    updatedLabel: string
  }
  chart: {
    title: string
    subtitle: string
    sourceNote: string
    yUnit: string
  }
  resourcesTitle: string
  resourceCards: HubResourceCard[]
  /** The "Fundos" teaser rail that opens each fund's own page */
  fundsRail: {
    /** Accessible name of the rail section */
    label: string
    /** Visible heading */
    title: string
    ctaLabel: string
  }
  /** Meta description of the hub homepage — the opening of `intro`, verbatim */
  metaDescription: string
}

export interface ThesisContent {
  sectionLabel: string
  title: string
  paragraphs: [string, string, string]
  equation: { blocks: [string, string, string]; result: string }
}

export interface EuContextContent {
  title: string
  intro: string
  stats: Stat[]
}

export interface VerticalContent {
  number: string
  title: string
  allocationPct: number
  allocationLabel: string
  copy: string
  bullets: string[]
}

export interface VerticalsContent {
  sectionLabel: string
  title: string
  intro: string
  items: [VerticalContent, VerticalContent, VerticalContent]
}

export interface PortfolioContent {
  sectionLabel: string
  title: string
  anchorTitle: string
  anchorTag: string
  copy: string
  farms: { name: string; specs: string }[]
  pipelineNote: string
  imageAlt: string
}

export interface TermsContent {
  sectionLabel: string
  title: string
  rows: { label: string; value: string; caveat?: string }[]
  managerLine: string
  irrCaveat: string
}

export interface SustainabilityContent {
  sectionLabel: string
  title: string
  /** The "with impact, not an impact fund" distinction — the load-bearing paragraph */
  lede: string
  pillars: { title: string; copy: string }[]
  note: string
}

export interface TeamMember {
  name: string
  role: string
  bio: string
  /** filename under src/assets/team, undefined = photo pending (content gap) */
  photo?: string
  linkedIn?: string
}

export interface TeamContent {
  sectionLabel: string
  title: string
  groups: { title: string; members: TeamMember[] }[]
  photoPendingLabel: string
}

export interface ProcessContent {
  sectionLabel: string
  title: string
  intro: string
  steps: { title: string; description: string }[]
  contact: {
    name: string
    role: string
    email: string
    phone: string
    generalEmail: string
  }
  ctaPrimary: string
  ctaSecondary: string
  formNote: string
}

export interface FooterContent {
  disclaimer: string
  links: { label: string; href: string; external?: boolean }[]
  address: string
  contactLine: string
  copyright: string
}

/** One fund, rendered on its own page and teased from the hub homepage. */
export interface FundContent {
  slug: 'sbtf-1'
  /** Absolute path of this fund's page in this locale, trailing slash included */
  path: string
  /** Browser tab / <title> of the fund page */
  pageTitle: string
  /** Meta description of the fund page */
  metaDescription: string
  /** Compact band that replaces the video hero on the fund page */
  masthead: {
    kicker: string
    title: string
    standfirst: string
  }
  /** Card shown in the hub homepage's "Fundos" rail */
  teaser: {
    /** Position in the platform's fund series, e.g. "Fundo #1" */
    number: string
    name: string
    blurb: string
    /** Headline terms strip, assembled from `terms.rows` */
    terms: string
  }
  sectionLabel: string
  title: string
  subnav: { label: string; anchor: string }[]
  thesis: ThesisContent
  euContext: EuContextContent
  verticals: VerticalsContent
  portfolio: PortfolioContent
  sustainability: SustainabilityContent
  terms: TermsContent
  team: TeamContent
  process: ProcessContent
}

export interface SiteContent {
  locale: Locale
  htmlLang: string
  nav: NavContent
  hero: HeroContent
  hub: HubContent
  /** An array so fund #2 is additive; funds[0] is SBTF 1. */
  funds: [FundContent]
  footer: FooterContent
  a11y: {
    skipToContent: string
    langSwitchLabel: string
    menuOpen: string
    menuClose: string
  }
}
