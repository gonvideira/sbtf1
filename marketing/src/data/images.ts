// Central imports for processed assets (consumed by all alternatives).
import logoNavy from '@/assets/brand/btf-logo-navy.png'
import logoWhite from '@/assets/brand/btf-logo-white.png'
import naturafishWide from '@/assets/photos/naturafish-wide.jpg'
import naturafishPan from '@/assets/photos/naturafish-pan.jpg'
import naturafishFull from '@/assets/photos/naturafish-full.jpg'
import naturafishSquare from '@/assets/photos/naturafish-square.jpg'
import canyonStill from '@/assets/photos/canyon-still.jpg'
import naturafishBand from '@/assets/photos/naturafish-band.jpg'

import antonioCastelBranco from '@/assets/team/antonio-castel-branco.jpg'
import joaoReis from '@/assets/team/joao-reis.jpg'
import goncaloVideira from '@/assets/team/goncalo-videira.jpg'
import joaoFialho from '@/assets/team/joao-fialho.jpg'
import manuelAbreu from '@/assets/team/manuel-abreu.jpg'
import nathan from '@/assets/team/nathan.jpg'

import partnerForumOceano from '@/assets/partners/forum-oceano-logo.png'
import partnerFinnova from '@/assets/partners/finnova-logo.png'
import partnerBeCorporate from '@/assets/partners/be-corporate-logo.png'

import type { ImageMetadata } from 'astro'

export const brand = { logoNavy, logoWhite }

export const photos = {
  naturafishWide,
  naturafishPan,
  naturafishFull,
  naturafishSquare,
  naturafishBand,
  canyonStill,
}

export const teamPhotos: Record<string, ImageMetadata> = {
  'antonio-castel-branco': antonioCastelBranco,
  'joao-reis': joaoReis,
  'goncalo-videira': goncaloVideira,
  'joao-fialho': joaoFialho,
  'manuel-abreu': manuelAbreu,
  nathan,
}

// Trimmed to the three partners ACB confirmed (Aug 2026); more to follow from him.
// The logos for the removed entries are still in src/assets/partners/.
export const partners: { name: string; image: ImageMetadata }[] = [
  { name: 'Finnova', image: partnerFinnova },
  { name: 'BE Corporate', image: partnerBeCorporate },
  { name: 'Fórum Oceano', image: partnerForumOceano },
]
