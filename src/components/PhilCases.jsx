import React from 'react'
import StatCard from './StatCard'
import useFetchJson from '../hooks/useFetchJson'

const urlPH = 'https://disease.sh/v3/covid-19/countries/Philippines?strict=true'

const formatDate = (ms) =>
  new Date(ms).toLocaleDateString('en-PH', { year: 'numeric', month: 'long', day: 'numeric' })

const PhilCases = () => {
  const { data, error, loading } = useFetchJson(urlPH)

  if (error) return <p className="error-note">Couldn't load Philippine data right now. Please try again later.</p>

  return (
    <div className="philcases">
      <div className="stat-group">
        <div className="stat-group-head">
          <h3>Latest daily report</h3>
          <p className="muted">{data ? `Updated ${formatDate(data.updated)}` : 'Loading…'}</p>
        </div>
        <div className="stat-grid">
          <StatCard label="New cases" value={data?.todayCases} tone="cases" loading={loading} />
          <StatCard label="New deaths" value={data?.todayDeaths} tone="deaths" loading={loading} />
        </div>
      </div>

      <div className="stat-group">
        <div className="stat-group-head">
          <h3>All time</h3>
          <p className="muted">Since the first confirmed case</p>
        </div>
        <div className="stat-grid">
          <StatCard label="Tests conducted" value={data?.tests} loading={loading} />
          <StatCard label="Confirmed cases" value={data?.cases} tone="cases" loading={loading} />
          <StatCard label="Recovered" value={data?.recovered} tone="recovered" loading={loading} />
          <StatCard label="Deaths" value={data?.deaths} tone="deaths" loading={loading} />
          <StatCard label="Active cases" value={data?.active} tone="active" loading={loading} />
        </div>
      </div>
    </div>
  )
}

export default PhilCases
