import React, { useEffect, useRef } from 'react'

const accounts = [
  { handle: 'WHOPhilippines', name: 'WHO Philippines' },
  { handle: 'DOHgovph', name: 'Department of Health' },
  { handle: 'Covid19Ph', name: 'COVID-19 PH' },
]

const Twitter = ({ theme }) => {
  const containerRef = useRef(null)

  // widgets.js swaps each <a> for an iframe with a fixed theme, so the timelines
  // are re-mounted (via key) and re-rendered whenever the theme changes.
  useEffect(() => {
    window.twttr?.widgets?.load(containerRef.current)
  }, [theme])

  return (
    <div className="twitter-container" ref={containerRef}>
      <div className="twitters" key={theme}>
        {accounts.map(({ handle, name }) => (
          <div className="twitter card" key={handle}>
            <a
              className="twitter-timeline"
              data-height="500"
              data-theme={theme}
              data-chrome="noheader transparent"
              href={`https://twitter.com/${handle}?ref_src=twsrc%5Etfw`}
            >
              Posts by {name} (@{handle})
            </a>
          </div>
        ))}
      </div>
      <p className="muted twitter-fallback">
        Feeds not loading? Visit{' '}
        {accounts.map(({ handle }, i) => (
          <React.Fragment key={handle}>
            {i > 0 && (i === accounts.length - 1 ? ' or ' : ', ')}
            <a href={`https://x.com/${handle}`} target="_blank" rel="noreferrer">
              @{handle}
            </a>
          </React.Fragment>
        ))}{' '}
        on X.
      </p>
    </div>
  )
}

export default Twitter
