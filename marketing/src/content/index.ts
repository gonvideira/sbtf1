import type { Locale, SiteContent } from './types'
import { pt } from './pt'
import { en } from './en'

export const content: Record<Locale, SiteContent> = { pt, en }

export function getContent(locale: string): SiteContent {
  return locale === 'en' ? en : pt
}

export const locales: Locale[] = ['pt', 'en']

export * from './types'
