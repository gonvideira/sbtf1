// Locale-independent data series shared by all three design alternatives.
// Labels/captions live in src/content/{pt,en}.ts; numbers live here.

/** EU seafood self-sufficiency ratio, % — Source: EUMOFA (public data) */
export const euSelfSufficiency = [
  { year: 2014, value: 46.1 },
  { year: 2015, value: 44.2 },
  { year: 2016, value: 43.8 },
  { year: 2017, value: 43.1 },
  { year: 2018, value: 42.4 },
  { year: 2019, value: 41.8 },
  { year: 2020, value: 40.2 },
  { year: 2021, value: 39.1 },
  { year: 2022, value: 37.5 },
]

/** EU seafood trade deficit, €B — Source: EUMOFA */
export const euTradeDeficit = [
  { year: 2014, value: 18.2 },
  { year: 2016, value: 19.1 },
  { year: 2018, value: 20.3 },
  { year: 2020, value: 20.8 },
  { year: 2022, value: 21.5 },
  { year: 2023, value: 22.0 },
]

/** Feed conversion ratio ranges, kg feed / kg protein — Source: FAO / BlueInvest */
export const fcrComparison = [
  { key: 'aquaculture', min: 1.2, max: 1.5 },
  { key: 'chicken', min: 1.7, max: 2.0 },
  { key: 'pork', min: 2.7, max: 5.0 },
  { key: 'beef', min: 6.0, max: 10.0 },
]

/** Carbon footprint, kg CO2e / kg protein — Source: FAO / BlueInvest */
export const carbonFootprint = [
  { key: 'farmedFish', value: 5 },
  { key: 'chicken', value: 8 },
  { key: 'pork', value: 12 },
  { key: 'beef', value: 27 },
]

/** Fund allocation by vertical, % of the €126M target fund size.
 *  `amount` is PT-formatted, `amountEn` EN — same convention as research-stats.json.
 *  The three amounts must always sum to the fund size quoted in content/{pt,en}.ts. */
export const fundAllocation = [
  { key: 'aquaculture', pct: 50, amount: '€63M', amountEn: '€63M' },
  { key: 'processing', pct: 35, amount: '€44,1M', amountEn: '€44.1M' },
  { key: 'bluetech', pct: 15, amount: '€18,9M', amountEn: '€18.9M' },
]
