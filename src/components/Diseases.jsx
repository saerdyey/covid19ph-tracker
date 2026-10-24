import React, { useState } from 'react'
import diseaseData from '../data/diseases.json'

const TOP_N = 5
const fmt = new Intl.NumberFormat('en-PH')

// Values span 2 to ~700,000, so a linear bar would flatten most rows to nothing.
const maxLog = Math.log10(Math.max(...diseaseData.diseases.map((d) => d.value)) + 1)
const barWidth = (value) => `${Math.max((Math.log10(value + 1) / maxLog) * 100, 1.5)}%`

const Change = ({ value, previous }) => {
  if (!previous || !previous.value) return null
  const pct = ((value - previous.value) / previous.value) * 100
  const arrow = pct > 0 ? '▲' : pct < 0 ? '▼' : '•'
  const sign = pct > 0 ? '+' : ''
  return (
    <span className="change" title={`${fmt.format(previous.value)} in ${previous.year}`}>
      {arrow} {sign}
      {Math.abs(pct) >= 100 ? Math.round(pct) : pct.toFixed(1)}% vs {previous.year}
    </span>
  )
}

const Diseases = () => {
  const [showAll, setShowAll] = useState(false)
  const diseases = [...diseaseData.diseases].sort((a, b) => b.value - a.value)
  const visible = showAll ? diseases : diseases.slice(0, TOP_N)

  return (
    <div className="diseases card">
      <div className="diseases-toolbar">
        <p className="muted">
          Latest available year per disease, ranked by count. Bar length uses a log scale.
        </p>
        <div className="segmented" role="group" aria-label="How many diseases to show">
          <button type="button" aria-pressed={!showAll} onClick={() => setShowAll(false)}>
            Top {TOP_N}
          </button>
          <button type="button" aria-pressed={showAll} onClick={() => setShowAll(true)}>
            All {diseases.length}
          </button>
        </div>
      </div>

      <ol className="disease-list">
        {visible.map((d, i) => {
          // A >95% one-year drop usually means the latest year is still being reported.
          const incomplete = d.previous && d.value < d.previous.value * 0.05
          return (
            <li
              key={d.id}
              className="disease-row"
              title={`${d.name}: ${fmt.format(d.value)} ${d.metric} in ${d.year} (${d.basis}, ${d.source})`}
            >
              <span className="disease-rank">{i + 1}</span>
              <div className="disease-main">
                <div className="disease-head">
                  <span className="disease-name">{d.name}</span>
                  <span className="disease-value">{fmt.format(d.value)}</span>
                </div>
                <div className="disease-bar-track">
                  <div className="disease-bar" style={{ width: barWidth(d.value) }} />
                </div>
                <div className="disease-meta">
                  <span>
                    {d.metric} · {d.year}
                  </span>
                  <span className={`tag tag-${d.basis}`}>{d.basis}</span>
                  {incomplete && <span className="tag tag-warn">possibly incomplete</span>}
                  <Change value={d.value} previous={d.previous} />
                  <a href={d.sourceUrl} target="_blank" rel="noreferrer" className="disease-source">
                    {d.source}
                  </a>
                </div>
              </div>
            </li>
          )
        })}
      </ol>

      <p className="footnote">
        Sources: <a href="https://www.who.int/data/gho" target="_blank" rel="noreferrer">WHO Global Health Observatory</a>{' '}
        and <a href="https://opendengue.org/" target="_blank" rel="noreferrer">OpenDengue</a>. "Estimated" figures are
        WHO/UNAIDS model estimates; "reported" figures are cases notified by the Department of Health. Years differ by
        disease, so compare ranks loosely. Data refreshed{' '}
        {new Date(diseaseData.generatedAt).toLocaleDateString('en-PH', { year: 'numeric', month: 'short', day: 'numeric' })}.
      </p>
    </div>
  )
}

export default Diseases
