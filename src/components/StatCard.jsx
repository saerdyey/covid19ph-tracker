import React from 'react'
import useCountUp from '../hooks/useCountUp'

const fmt = new Intl.NumberFormat('en-PH')

const CountUp = ({ end }) => <>{fmt.format(useCountUp(end))}</>

// tone: neutral | cases | recovered | deaths | active — sets the accent stripe.
const StatCard = ({ label, value, tone = 'neutral', loading }) => (
  <div className={`stat-card tone-${tone}`}>
    <p className="stat-label">{label}</p>
    <p className="stat-value">
      {loading ? <span className="skeleton" aria-label="Loading" /> : value == null ? '—' : <CountUp end={value} />}
    </p>
  </div>
)

export default StatCard
