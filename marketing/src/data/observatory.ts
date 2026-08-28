// Typed loader for the Observatory's four resource categories.
// Edit src/data/observatory.json to refresh entries — no code changes needed.
import raw from './observatory.json'
import type { Locale } from '@/content/types'

/** A field is either identical in both languages, or given per-locale. */
type Localised = string | { pt: string; en: string }
type LocalisedList = string[] | { pt: string[]; en: string[] }

const pick = (v: Localised, locale: Locale): string => (typeof v === 'string' ? v : v[locale])
const pickList = (v: LocalisedList, locale: Locale): string[] => (Array.isArray(v) ? v : v[locale])

export type CategoryKey = 'reports' | 'portugal' | 'regulation' | 'events'

/** How a category's entries are broken up on the page. */
export type GroupBy = 'none' | 'year' | 'eventStatus'

/** Whether the link goes straight to a file, to a landing page, or behind a form. */
export type LinkType = 'pdf' | 'page' | 'gated'

export interface ObservatoryEntry {
  id: string
  /** Eyebrow above the title: publisher for a report, location for an event */
  source: string
  title: string
  /** Edition and data vintage, or the event's dates */
  meta: string
  summary: string
  href: string
  linkType: LinkType
  topics: string[]
  /** Publication year, used for grouping the report library */
  year?: number
  /** Events only: ISO start date, and whether it has already happened */
  date?: string
  isPast?: boolean
}

export interface EntryGroup {
  /** Null when the category renders as one flat list */
  label: string | null
  isPast?: boolean
  entries: ObservatoryEntry[]
}

export interface ObservatoryCategory {
  key: CategoryKey
  slug: string
  title: string
  lede: string
  groupBy: GroupBy
  entries: ObservatoryEntry[]
  groups: EntryGroup[]
}

interface RawEntry {
  id: string
  source: Localised
  title: Localised
  meta: Localised
  summary: Localised
  href: string
  topics: LocalisedList
  year?: number
  date?: string
  /** Set when the publisher puts the file behind a registration form */
  gated?: boolean
}

interface RawCategory {
  key: CategoryKey
  slug: { pt: string; en: string }
  title: Localised
  lede: Localised
  groupBy?: GroupBy
  entries: RawEntry[]
}

const data = raw as unknown as { updated: string; categories: RawCategory[] }

export const observatoryUpdated: string = data.updated

/** Today, as of the build. Dated entries are split against this. */
const TODAY = new Date().toISOString().slice(0, 10)

function linkTypeOf(entry: RawEntry): LinkType {
  if (entry.gated) return 'gated'
  return /\.pdf($|\?)/i.test(entry.href) ? 'pdf' : 'page'
}

function resolve(entry: RawEntry, locale: Locale): ObservatoryEntry {
  return {
    id: entry.id,
    source: pick(entry.source, locale),
    title: pick(entry.title, locale),
    meta: pick(entry.meta, locale),
    summary: pick(entry.summary, locale),
    href: entry.href,
    linkType: linkTypeOf(entry),
    topics: pickList(entry.topics, locale),
    year: entry.year,
    date: entry.date,
    isPast: entry.date ? entry.date < TODAY : undefined,
  }
}

/**
 * Events go upcoming-first by date, then past editions most-recent-first.
 * A year-grouped library goes newest-first. Everything else keeps JSON order.
 */
function order(entries: ObservatoryEntry[], groupBy: GroupBy): ObservatoryEntry[] {
  if (groupBy === 'eventStatus') {
    const upcoming = entries.filter((e) => !e.isPast).sort((a, b) => (a.date ?? '').localeCompare(b.date ?? ''))
    const past = entries.filter((e) => e.isPast).sort((a, b) => (b.date ?? '').localeCompare(a.date ?? ''))
    return [...upcoming, ...past]
  }
  if (groupBy === 'year') return [...entries].sort((a, b) => (b.year ?? 0) - (a.year ?? 0))
  return entries
}

function group(entries: ObservatoryEntry[], groupBy: GroupBy, labels: { upcoming: string; past: string }): EntryGroup[] {
  if (groupBy === 'eventStatus') {
    const upcoming = entries.filter((e) => !e.isPast)
    const past = entries.filter((e) => e.isPast)
    const out: EntryGroup[] = []
    if (upcoming.length) out.push({ label: past.length ? labels.upcoming : null, entries: upcoming })
    if (past.length) out.push({ label: labels.past, isPast: true, entries: past })
    return out
  }
  if (groupBy === 'year') {
    const years = [...new Set(entries.map((e) => e.year).filter((y): y is number => typeof y === 'number'))].sort(
      (a, b) => b - a
    )
    return years.map((y) => ({ label: String(y), entries: entries.filter((e) => e.year === y) }))
  }
  return [{ label: null, entries }]
}

export function getObservatoryCategories(
  locale: Locale,
  labels: { upcoming: string; past: string } = { upcoming: '', past: '' }
): ObservatoryCategory[] {
  return data.categories.map((c) => {
    const groupBy = c.groupBy ?? 'none'
    const entries = order(
      c.entries.map((e) => resolve(e, locale)),
      groupBy
    )
    return {
      key: c.key,
      slug: c.slug[locale],
      title: pick(c.title, locale),
      lede: pick(c.lede, locale),
      groupBy,
      entries,
      groups: group(entries, groupBy, labels),
    }
  })
}

export function getObservatoryCategory(
  key: CategoryKey,
  locale: Locale,
  labels?: { upcoming: string; past: string }
): ObservatoryCategory {
  const found = getObservatoryCategories(locale, labels).find((c) => c.key === key)
  if (!found) throw new Error(`Unknown observatory category: ${key}`)
  return found
}

/** Path to a category's page in a given locale, e.g. "/pt/observatorio/eventos/". */
export function observatoryHref(key: CategoryKey, locale: Locale): string {
  const c = data.categories.find((x) => x.key === key)
  if (!c) throw new Error(`Unknown observatory category: ${key}`)
  const root = locale === 'pt' ? 'observatorio' : 'observatory'
  return `/${locale}/${root}/${c.slug[locale]}/`
}
