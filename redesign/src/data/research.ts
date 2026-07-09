// Typed loader for the Hub's swappable research slot.
// Edit src/data/research-stats.json to refresh figures — no code changes needed.
import raw from './research-stats.json'
import type { Locale } from '@/content/types'

export interface ResearchStat {
  id: string
  value: string
  label: string
  report: string
  sourceUrl: string
  asOf: string
}

interface RawStat {
  id: string
  value: string
  valueEn?: string
  label: { pt: string; en: string }
  report: string
  sourceUrl: string
  asOf: string
  added: string
}

export const researchUpdated: string = (raw as { updated: string }).updated

export function getResearchStats(locale: Locale): ResearchStat[] {
  return (raw.stats as RawStat[]).map((s) => ({
    id: s.id,
    value: locale === 'en' && s.valueEn ? s.valueEn : s.value,
    label: s.label[locale],
    report: s.report,
    sourceUrl: s.sourceUrl,
    asOf: s.asOf,
  }))
}
