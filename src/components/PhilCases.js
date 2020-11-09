import React, {useState, useEffect} from 'react';
import ChartsPage from './chart'
import CountUp from 'react-countup'

const PhilCases = () => {

    useEffect(() =>{
        getData()
      }, [])

    var todayD = new Date();
    var date = (todayD.getMonth()+1)+'/'+todayD.getDate()+'/'+todayD.getFullYear();

    const urlPH = 'https://disease.sh/v3/covid-19/countries/Philippines?yesterday=true&twoDaysAgo=true&strict=true';
    //? Current Day Data
    const [today, setToday] = useState(0)
    const [death, setDeath] = useState(0)
    
    //? All Time Data
    const [tests, setTests] = useState(0)
    const [confirmed, setConfirmed] = useState(0)
    const [recovered, setRecovered] = useState(0)
    const [atDeaths, setAtdeaths] = useState(0)
    const [active, setActive] = useState(0)

    const getData = async () => {
        const response = await fetch(urlPH)
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

    return(
        <div className="philcases">

            <div className="today">
                <h2>Today</h2>
                <p>{date}</p>
                <div className="box-container">
                    <div className="box">
                        <h4>CONFIRMED CASES</h4>
                        <h1><CountUp separator="," end={today}/></h1>
                    </div>
                    <div className="box">
                        <h4>DEATHS</h4>
                        <h1 className="num"><CountUp separator="," end={death}/></h1>
                    </div>
                </div>
            </div>

            <div className="all-time">
                <h2>All Time</h2>
                <p>since day 1 of confirmed cases</p>
                <div className="box-container">
                    <div className="box">
                        <h4>TESTS CONDUCTED</h4>
                        <h1 className="num"><CountUp separator="," end={tests}/></h1>
                    </div>
                    <div className="box">
                        <h4>CONFIRMED CASES</h4>
                        <h1 className="num"><CountUp separator="," end={confirmed}/></h1>
                    </div>
                    <div className="box">
                        <h4>RECOVERED</h4>
                        <h1 className="num"><CountUp separator="," end={recovered}/></h1>
                    </div>
                    <div className="box">
                        <h4>DEATHS</h4>
                        <h1 className="num"><CountUp separator="," end={atDeaths}/></h1>
                    </div>
                    <div className="box">
                        <h4>ACTIVE CASES</h4>
                        <h1 className="num"><CountUp separator="," end={active}/></h1>
                    </div>
                </div>
            </div>

            {/* <ChartsPage tests={tests} confirmed={confirmed} recovered={recovered} atDeaths={atDeaths} active={active}/> */}

        </div>
    )
}

export default PhilCases;