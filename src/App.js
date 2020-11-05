import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {

  const url = 'https://disease.sh/v3/covid-19/countries/Philippines?yesterday=true&twoDaysAgo=true&strict=true';

  useEffect(() =>{
    getData()
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
    const response = await fetch(url)
    const data = await response.json();
    console.log(data)
    setToday(data.todayCases)
    setDeath(data.todayDeaths)
    setTests(data.tests)
    setConfirmed(data.cases)
    setRecovered(data.recovered)
    setAtdeaths(data.deaths)
    setActive(data.active)
  }

  return (
    <div className="App">
      <header>
        <h1>Philipines Covid19 Cases Tracker</h1>
      </header>

      <section id="cases">
        <div className="ph-section">

          <div className="today">
            <h2>Today {date}</h2>
            <div className="today-container">
              <div className="today-confirm">
                <h4>CONFIRMED CASES</h4>
                <h1>{today}</h1>
              </div>
              <div className="today-deaths">
                <h4>DEATHS</h4>
                <h1>{death}</h1>
              </div>
            </div>
          </div>

          <div className="all-time">
            <h2>All Time since day 1 of confirmed cases</h2>
            <div className="all-time-container">
              <div className="all-time-test">
                <h4>TESTS CONDUCTED</h4>
                <h1>{tests}</h1>
              </div>
              <div className="all-time-confirmed">
                <h4>CONFIRMED CASES</h4>
                <h1>{confirmed}</h1>
              </div>
              <div className="all-time-recovered">
                <h4>RECOVERED</h4>
                <h1>{recovered}</h1>
              </div>
              <div className="all-time-deaths">
                <h4>DEATHS</h4>
                <h1>{atDeaths}</h1>
              </div>
              <div className="all-time-active">
                <h4>ACTIVE CASES</h4>
                <h1>{active}</h1>
              </div>
            </div>
          </div>

        </div>

      </section>



      <footer>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></footer>
    </div>
  );
}

export default App;
