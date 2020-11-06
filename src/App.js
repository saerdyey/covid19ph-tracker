import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup'
import './App.css';
import coronavirus from './coronavirus.png'

const App = () => {

  const urlPH = 'https://disease.sh/v3/covid-19/countries/Philippines?yesterday=true&twoDaysAgo=true&strict=true';
  const urlGB = 'https://disease.sh/v3/covid-19/all'

  useEffect(() =>{
    getData()
    getDataGlobal()
  }, [])

  var todayD = new Date();
  var date = (todayD.getMonth()+1)+'/'+todayD.getDate()+'/'+todayD.getFullYear();

  //? Current Day Data
  const [today, setToday] = useState()
  const [death, setDeath] = useState()
  
  //? All Time Data
  const [tests, setTests] = useState()
  const [confirmed, setConfirmed] = useState()
  const [recovered, setRecovered] = useState()
  const [atDeaths, setAtdeaths] = useState()
  const [active, setActive] = useState()

  const getData = async () => {
    const response = await fetch(urlPH)
    const data = await response.json();
    console.log(data)
    setToday(data.todayCases.toLocaleString('en'))
    setDeath(data.todayDeaths.toLocaleString('en'))
    setTests(data.tests.toLocaleString('en'))
    setConfirmed(data.cases.toLocaleString('en'))
    setRecovered(data.recovered.toLocaleString('en'))
    setAtdeaths(data.deaths.toLocaleString('en'))
    setActive(data.active.toLocaleString('en'))
  }

  //? GLOBAL DATA
  const [Gtests, setGtests] = useState()
  const [Gcases, setGcases] = useState()
  const [Grecovered, setGrecovered] = useState()
  const [Gdeaths, setGdeaths] = useState()
  const [Gactive, setGactive] = useState()
  const [Gaffected, setGaffected] = useState()

  const getDataGlobal = async () => {
    const response = await fetch(urlGB)
    const globaldata = await response.json();
    setGtests(globaldata.tests.toLocaleString('en'))
    setGcases(globaldata.cases.toLocaleString('en'))
    setGrecovered(globaldata.recovered.toLocaleString('en'))
    setGdeaths(globaldata.deaths.toLocaleString('en'))
    setGactive(globaldata.active.toLocaleString('en'))
    setGaffected(globaldata.affectedCountries)

  }

  return (
    <div className="App">
      <header>
        <h1>PHL C<img src={coronavirus} alt="" width="50" id="logo"/>VID19 CASES TRACKER</h1>
      </header>

      <section id="cases">
        <div className="cases-wrapper">
          <div className="ph-section">
          <h1 id="PH">PHILIPPINES</h1>
            <div className="today">
              <h2>Today</h2>
              <p>{date}</p>
              <div className="box-container">
                <div className="box">
                  <h4>CONFIRMED CASES</h4>
                  <h1 className="num">{today}</h1>
                </div>
                <div className="box">
                  <h4>DEATHS</h4>
                  <h1 className="num">{death}</h1>
                </div>
              </div>
            </div>

            <div className="all-time">
              <h2>All Time</h2>
              <p>since day 1 of confirmed cases</p>
              <div className="box-container">
                <div className="box">
                  <h4>TESTS CONDUCTED</h4>
                  <h1 className="num">{tests}</h1>
                </div>
                <div className="box">
                  <h4>CONFIRMED CASES</h4>
                  <h1 className="num">{confirmed}</h1>
                </div>
                <div className="box">
                  <h4>RECOVERED</h4>
                  <h1 className="num">{recovered}</h1>
                </div>
                <div className="box">
                  <h4>DEATHS</h4>
                  <h1 className="num">{atDeaths}</h1>
                </div>
                <div className="box">
                  <h4>ACTIVE CASES</h4>
                  <h1 className="num">{active}</h1>
                </div>
              </div>
            </div>

          </div>

          <div className="global-section">
          <h1 id="PH">GLOBAL</h1>
          <div className="box-container">
                <div className="box">
                  <h4>TESTS CONDUCTED</h4>
                  <h1 className="num">{Gtests}</h1>
                </div>
                <div className="box">
                  <h4>CONFIRMED CASES</h4>
                  <h1 className="num">{Gcases}</h1>
                </div>
                <div className="box">
                  <h4>RECOVERED</h4>
                  <h1 className="num">{Grecovered}</h1>
                </div>
                <div className="box">
                  <h4>DEATHS</h4>
                  <h1 className="num">{Gdeaths}</h1>
                </div>
                <div className="box">
                  <h4>ACTIVE CASES</h4>
                  <h1 className="num">{Gactive}</h1>
                </div>
                <div className="box">
                  <h4>AFFECTED COUNTRIES</h4>
                  <h1 className="num">{Gaffected}</h1>
                </div>
              </div>
          </div>
        </div>
      </section>

      <footer>
        <p>&#60;/&#62; by Jay Anton Roblico</p>
        <p>API by <a href="https://disease.sh/docs/#/COVID-19%3A%20Worldometers/get_v3_covid_19_countries__country_">Novel Covid19 API</a></p>
        <p>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></p>
      </footer>
    </div>
  );
}

export default App;
