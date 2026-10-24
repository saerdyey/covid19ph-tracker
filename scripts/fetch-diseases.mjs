// Builds src/data/diseases.json from the WHO Global Health Observatory (GHO) OData API.
//
// The GHO API does not send CORS headers, so browsers cannot call it directly.
// This script runs at build time (npm run build / npm run fetch:data) and the
// result is bundled with the app. If WHO is unreachable, the last saved values are kept.
//
// API docs: https://www.who.int/data/gho/info/gho-odata-api

import { readFile, writeFile } from 'node:fs/promises'

const OUT = new URL('../src/data/diseases.json', import.meta.url)
const GHO = 'https://ghoapi.azureedge.net/api'
const COUNTRY = 'PHL'

// metric: what the number counts. basis: reported surveillance counts vs modelled estimates.
const INDICATORS = [
  { id: 'tuberculosis', name: 'Tuberculosis', code: 'TB_e_inc_num', metric: 'new cases', basis: 'estimated' },
  { id: 'hiv', name: 'HIV', code: 'HIV_0000000026', metric: 'new infections', basis: 'estimated' },
  { id: 'malaria', name: 'Malaria', code: 'MALARIA_CONF_CASES', metric: 'confirmed cases', basis: 'reported' },
  { id: 'measles', name: 'Measles', code: 'WHS3_62', metric: 'cases', basis: 'reported' },
  { id: 'leprosy', name: 'Leprosy', code: 'WHS3_45', metric: 'new cases', basis: 'reported' },
  { id: 'tetanus', name: 'Tetanus', code: 'WHS3_46', metric: 'cases', basis: 'reported' },
  { id: 'pertussis', name: 'Pertussis (whooping cough)', code: 'WHS3_43', metric: 'cases', basis: 'reported' },
  { id: 'rabies', name: 'Rabies', code: 'NTD_RAB2', metric: 'deaths', basis: 'reported' },
  { id: 'japanese-encephalitis', name: 'Japanese encephalitis', code: 'WHS3_42', metric: 'cases', basis: 'reported' },
  { id: 'diphtheria', name: 'Diphtheria', code: 'WHS3_41', metric: 'cases', basis: 'reported' },
  { id: 'rubella', name: 'Rubella', code: 'WHS3_57', metric: 'cases', basis: 'reported' },
]

// OpenDengue publishes versioned CSV releases, not an API. Its Philippines series
// (V1.3) ends in Nov 2023, so 2022 is the latest complete year.
// https://opendengue.org/data.html
const DENGUE = {
  id: 'dengue',
  name: 'Dengue',
  metric: 'cases',
  basis: 'reported',
  year: 2022,
  value: 220020,
  previous: { year: 2021, value: 79592 },
  source: 'OpenDengue V1.3',
  sourceUrl: 'https://opendengue.org/',
}

async function fetchIndicator({ code }) {
  const query = new URLSearchParams({
    $filter: `SpatialDim eq '${COUNTRY}' and NumericValue ne null`,
    $orderby: 'TimeDim desc',
    $select: 'TimeDim,NumericValue',
    $top: '2',
  })
  const res = await fetch(`${GHO}/${code}?${query}`, { signal: AbortSignal.timeout(30000) })
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  const [latest, previous] = (await res.json()).value
  if (!latest) throw new Error('no data for PHL')
  return {
    year: latest.TimeDim,
    value: Math.round(latest.NumericValue),
    previous: previous ? { year: previous.TimeDim, value: Math.round(previous.NumericValue) } : null,
  }
}

async function readExisting() {
  try {
    const { diseases } = JSON.parse(await readFile(OUT, 'utf8'))
    return new Map(diseases.map((d) => [d.id, d]))
  } catch {
    return new Map()
  }
}

const existing = await readExisting()
const results = await Promise.all(
  INDICATORS.map(async (indicator) => {
    const { code, ...rest } = indicator
    try {
      const data = await fetchIndicator(indicator)
      return {
        ...rest,
        ...data,
        source: 'WHO GHO',
        sourceUrl: `https://www.who.int/data/gho/data/indicators/indicator-details/GHO/${code}`,
      }
    } catch (err) {
      console.warn(`[diseases] ${code}: ${err.message} — keeping last saved value`)
      return existing.get(indicator.id) ?? null
    }
  }),
)

const diseases = [...results.filter(Boolean), DENGUE].sort((a, b) => b.value - a.value)
await writeFile(OUT, JSON.stringify({ generatedAt: new Date().toISOString(), diseases }, null, 2) + '\n')
console.log(`[diseases] wrote ${diseases.length} diseases to src/data/diseases.json`)
