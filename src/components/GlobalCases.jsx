import React, { useState } from 'react';
import CountUp from 'react-countup'

const GlobalCases = () => {

    const urlGB = 'https://disease.sh/v3/covid-19/all'

    //? GLOBAL DATA
    const [Gtests, setGtests] = useState(0)
    const [Gcases, setGcases] = useState(0)
    const [Grecovered, setGrecovered] = useState(0)
    const [Gdeaths, setGdeaths] = useState(0)
    const [Gactive, setGactive] = useState(0)
    const [Gaffected, setGaffected] = useState(0)

    const getDataGlobal = async () => {
        const response = await fetch(urlGB)
        const globaldata = await response.json();
        setGtests(globaldata.tests)
        setGcases(globaldata.cases)
        setGrecovered(globaldata.recovered)
        setGdeaths(globaldata.deaths)
        setGactive(globaldata.active)
        setGaffected(globaldata.affectedCountries)
    }

    getDataGlobal()

    return(
        <div className="globalcases">
            <div className="box-container">
                <div className="box">
                    <h4>TESTS CONDUCTED</h4>
                    <h1><CountUp separator="," end={Gtests}/></h1>
                </div>
                <div className="box">
                    <h4>CONFIRMED CASES</h4>
                    <h1 className="num"><CountUp separator="," end={Gcases}/></h1>
                </div>
                <div className="box">
                    <h4>RECOVERED</h4>
                    <h1 className="num"><CountUp separator="," end={Grecovered}/></h1>
                </div>
                <div className="box">
                    <h4>DEATHS</h4>
                    <h1 className="num"><CountUp separator="," end={Gdeaths}/></h1>
                </div>
                <div className="box">
                    <h4>ACTIVE CASES</h4>
                    <h1 className="num"><CountUp separator="," end={Gactive}/></h1>
                </div>
                <div className="box">
                    <h4>AFFECTED COUNTRIES</h4>
                    <h1 className="num"><CountUp separator="," end={Gaffected}/></h1>
                </div>
            </div>
        </div>
    )
}

export default GlobalCases;