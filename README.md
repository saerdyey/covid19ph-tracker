# PH Health Tracker

COVID-19 cases for the Philippines and the world, the top infectious diseases in the
Philippines ranked by case count, protective measures, and health news feeds.
Light/dark mode follows your OS setting and can be toggled from the header.

Live: http://saerdyey.github.io/covid19ph-tracker

## Scripts

| Command | What it does |
|---|---|
| `npm start` | Dev server at http://localhost:5173/covid19ph-tracker/ |
| `npm run fetch:data` | Refreshes `src/data/diseases.json` from the WHO GHO API |
| `npm run build` | Refreshes disease data, then builds to `build/` |
| `npm run deploy` | Builds and publishes `build/` to GitHub Pages |

## Data sources

- **COVID-19** — [disease.sh](https://disease.sh/), fetched live in the browser.
- **Top diseases** — [WHO Global Health Observatory OData API](https://www.who.int/data/gho/info/gho-odata-api)
  (tuberculosis, HIV, malaria, measles, leprosy, tetanus, pertussis, rabies, Japanese
  encephalitis, diphtheria, rubella). The GHO API does not allow browser (CORS) requests,
  so `scripts/fetch-diseases.mjs` pulls it at build time. If WHO is unreachable the last
  saved values are kept.
- **Dengue** — [OpenDengue](https://opendengue.org/) V1.3 (static release; Philippines
  data ends in 2023, so the latest complete year is 2022).

To add a disease, add an entry to `INDICATORS` in `scripts/fetch-diseases.mjs` with a GHO
indicator code (browse them at `https://ghoapi.azureedge.net/api/Indicator`).
