import React, { useEffect } from 'react';
import './App.css';
import coronavirus from './img/coronavirus.png'
import PhilCases from './components/PhilCases'
import GlobalCases from './components/GlobalCases'
import ProtectiveMeasures from './components/ProtectiveMeasures'
import Twitter from './components/Twitter'

const App = () => {

  useEffect(() =>{
    console.log("effect")
  }, [])

  return (
    <div className="App">
      <header>
        <h1>PHL C<img src={coronavirus} alt="" width="50" id="logo"/>VID19 CASES TRACKER</h1>
      </header>

      <section id="cases">
        <div className="cases-wrapper">
          <div className="ph-section">
            <h1 id="PH">PHILIPPINES</h1>
            <PhilCases/>
          </div>
          <div className="global-section">
            <h1 id="PH">GLOBAL</h1>
            <GlobalCases/>
          </div>
        </div>
      </section>

      <section id="protective">
        <h2 id="bpm">Basic Protective Measures</h2>
        <ProtectiveMeasures/>
      </section>

      <section id="twitter">
        <h2 id="bpm">Latest Covid 19 News</h2>
        <Twitter/>
      </section>

      <footer>
        <p>&#60;/&#62; by Jay Anton Roblico</p>
        <p>API by <a href="https://disease.sh/">Novel Covid19</a></p>
        <p>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></p>
        <p>Inspired by Mark Uy's <a href="https://covid19.com.ph/">COVID 19 PH Tracker</a></p>
      </footer>
    </div>
  );
}

export default App;
