import React from 'react'
import StatCard from './StatCard'
import useFetchJson from '../hooks/useFetchJson'

const urlGB = 'https://disease.sh/v3/covid-19/all'

const GlobalCases = () => {
  const { data, error, loading } = useFetchJson(urlGB)

  if (error) return <p className="error-note">Couldn't load global data right now. Please try again later.</p>

  return (
    <div className="globalcases">
      <div className="stat-group">
        <div className="stat-group-head">
          <h3>All time</h3>
          <p className="muted">Worldwide totals</p>
        </div>
        <div className="stat-grid">
          <StatCard label="Tests conducted" value={data?.tests} loading={loading} />
          <StatCard label="Confirmed cases" value={data?.cases} tone="cases" loading={loading} />
          <StatCard label="Recovered" value={data?.recovered} tone="recovered" loading={loading} />
          <StatCard label="Deaths" value={data?.deaths} tone="deaths" loading={loading} />
          <StatCard label="Active cases" value={data?.active} tone="active" loading={loading} />
          <StatCard label="Affected countries" value={data?.affectedCountries} loading={loading} />
        </div>
      </div>
    </div>
  )
}

export default GlobalCases
