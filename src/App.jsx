import React from 'react'
import './App.css'
import coronavirus from './img/coronavirus.png'
import PhilCases from './components/PhilCases'
import GlobalCases from './components/GlobalCases'
import Diseases from './components/Diseases'
import ProtectiveMeasures from './components/ProtectiveMeasures'
import Twitter from './components/Twitter'
import ThemeToggle from './components/ThemeToggle'
import useTheme from './hooks/useTheme'

const navLinks = [
  { href: '#cases', label: 'COVID-19' },
  { href: '#diseases', label: 'Top Diseases' },
  { href: '#protective', label: 'Protection' },
  { href: '#news', label: 'News' },
]

const App = () => {
  const [theme, toggleTheme] = useTheme()

  return (
    <div className="App">
      <header className="site-header">
        <div className="container header-inner">
          <a href="#top" className="brand">
            <img src={coronavirus} alt="" width="28" height="28" id="logo" />
            <span>
              PH <strong>Health Tracker</strong>
            </span>
          </a>
          <nav className="site-nav" aria-label="Sections">
            {navLinks.map(({ href, label }) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}
          </nav>
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container">
            <p className="eyebrow">Philippines · Public health</p>
            <h1>COVID-19 cases and the country's top diseases, in one place.</h1>
            <p className="lede">
              Live COVID-19 counts for the Philippines and the world, plus the most common notifiable diseases ranked by
              case count.
            </p>
          </div>
        </section>

        <section id="cases" className="section">
          <div className="container">
            <div className="section-head">
              <h2>COVID-19 Cases</h2>
            </div>
            <div className="cases-wrapper">
              <div className="region card">
                <h2 className="region-title">
                  Philippines
                </h2>
                <PhilCases />
              </div>
              <div className="region card">
                <h2 className="region-title">
                  Global
                </h2>
                <GlobalCases />
              </div>
            </div>
          </div>
        </section>

        <section id="diseases" className="section">
          <div className="container">
            <div className="section-head">
              <h2>Top Diseases in the Philippines</h2>
              <p className="muted">Infectious diseases tracked by WHO, sorted by number of cases.</p>
            </div>
            <Diseases />
          </div>
        </section>

        <section id="protective" className="section">
          <div className="container">
            <div className="section-head">
              <h2>Basic Protective Measures</h2>
            </div>
            <ProtectiveMeasures />
          </div>
        </section>

        <section id="news" className="section">
          <div className="container">
            <div className="section-head">
              <h2>Latest Health News</h2>
            </div>
            <Twitter theme={theme} />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>&#60;/&#62; by Jay Anton Roblico</p>
          <p>
            COVID-19 data by <a href="https://disease.sh/">disease.sh</a> · Disease data by{' '}
            <a href="https://www.who.int/data/gho">WHO GHO</a> and <a href="https://opendengue.org/">OpenDengue</a>
          </p>
          <p>
            Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from{' '}
            <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
          </p>
          <p>
            Inspired by Mark Uy's <a href="https://covid19.com.ph/">COVID 19 PH Tracker</a>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
