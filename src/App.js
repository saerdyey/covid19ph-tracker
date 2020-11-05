import React, { useEffect, useState } from 'react';
import './App.css';
import './coronavirus.png'

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
    setToday(data.todayCases.toLocaleString('en'))
    setDeath(data.todayDeaths.toLocaleString('en'))
    setTests(data.tests.toLocaleString('en'))
    setConfirmed(data.cases.toLocaleString('en'))
    setRecovered(data.recovered.toLocaleString('en'))
    setAtdeaths(data.deaths.toLocaleString('en'))
    setActive(data.active.toLocaleString('en'))
  }

  return (
    <div className="App">
      <header>
        <h1>Philipines Co<span><img src="coronavirus.png" alt=""/></span>vid19 Cases Tracker</h1>
      </header>

      <section id="cases">
        <div className="cases-wrapper">
          <div className="ph-section">

            <div className="today">
              <h2>Today</h2>
              <p>{date}</p>
              <div className="box-container">
                <div className="box">
                  <h4>CONFIRMED CASES</h4>
                  <h1>{today}</h1>
                </div>
                <div className="box">
                  <h4>DEATHS</h4>
                  <h1>{death}</h1>
                </div>
              </div>
            </div>

            <div className="all-time">
              <h2>All Time</h2>
              <p>since day 1 of confirmed cases</p>
              <div className="box-container">
                <div className="box">
                  <h4>TESTS CONDUCTED</h4>
                  <h1>{tests}</h1>
                </div>
                <div className="box">
                  <h4>CONFIRMED CASES</h4>
                  <h1>{confirmed}</h1>
                </div>
                <div className="box">
                  <h4>RECOVERED</h4>
                  <h1>{recovered}</h1>
                </div>
                <div className="box">
                  <h4>DEATHS</h4>
                  <h1>{atDeaths}</h1>
                </div>
                <div className="box">
                  <h4>ACTIVE CASES</h4>
                  <h1>{active}</h1>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>



      <footer>
        <p>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></p>
        <p>&#60;/&#62; by Jay Anton Roblico</p>
      </footer>
    </div>
  );
}

export default App;
