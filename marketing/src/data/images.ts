// Central imports for processed assets (consumed by all alternatives).
import logoNavy from '@/assets/brand/btf-logo-navy.png'
import logoWhite from '@/assets/brand/btf-logo-white.png'
import naturafishWide from '@/assets/photos/naturafish-wide.jpg'
import naturafishPan from '@/assets/photos/naturafish-pan.jpg'
import naturafishFull from '@/assets/photos/naturafish-full.jpg'
import naturafishSquare from '@/assets/photos/naturafish-square.jpg'
import canyonStill from '@/assets/photos/canyon-still.jpg'

import antonioCastelBranco from '@/assets/team/antonio-castel-branco.jpg'
import joaoReis from '@/assets/team/joao-reis.jpg'
import joaoFialho from '@/assets/team/joao-fialho.jpg'
import manuelAbreu from '@/assets/team/manuel-abreu.jpg'
import nathan from '@/assets/team/nathan.jpg'

import partnerColab from '@/assets/partners/blue-bioeconomy-colab-logo.png'
import partnerS2aqua from '@/assets/partners/s2aqua-logo.png'
import partnerForumOceano from '@/assets/partners/forum-oceano-logo.png'
import partnerFinnova from '@/assets/partners/finnova-logo.png'
import partnerAllTheWay from '@/assets/partners/all-the-way-consulting-logo.png'
import partnerBeCorporate from '@/assets/partners/be-corporate-logo.png'

import type { ImageMetadata } from 'astro'

export const brand = { logoNavy, logoWhite }

export const photos = {
  naturafishWide,
  naturafishPan,
  naturafishFull,
  naturafishSquare,
  canyonStill,
}

export const teamPhotos: Record<string, ImageMetadata> = {
  'antonio-castel-branco': antonioCastelBranco,
  'joao-reis': joaoReis,
  'joao-fialho': joaoFialho,
  'manuel-abreu': manuelAbreu,
  nathan,
}

export const partners: { name: string; image: ImageMetadata }[] = [
  { name: 'Blue Bioeconomy CoLAB', image: partnerColab },
  { name: 'S2AQUA', image: partnerS2aqua },
  { name: 'Fórum Oceano', image: partnerForumOceano },
  { name: 'Finnova', image: partnerFinnova },
  { name: 'All The Way Consulting', image: partnerAllTheWay },
  { name: 'BE Corporate', image: partnerBeCorporate },
]
