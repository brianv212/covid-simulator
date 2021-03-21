import React, {useState, useEffect} from 'react';
import './styles/covid-sim.css'
import App from './App'
import Map from './components/Map'

import PulseLoader from "react-spinners/PulseLoader";
import {Spring} from 'react-spring/renderprops'

function CovidSimulator() {
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(0);

    const [critters, setCritters] = useState([])

    const createCritter = (x, y, speed, angle) => {
        return {
            x,
            y,
            speed,
            angle,
            selected: "Healthy",
            mask: 1,
            collisionTimer: 0
        }
    }

    useEffect(() =>{
        setLoading(true)
        setTimeout(() => {
          setLoading(false)
          let crits = []
          for (let i = 0; i < 30; i++){
                console.log(i)
                crits.push(createCritter((Math.random() * (window.innerWidth - 50)), (
                                            Math.random() * (window.innerHeight - 50)),
                                            Math.random() * 5,
                                            2 * Math.PI * Math.random()))
          }
          console.log(crits)
          setCritters(crits)
        }, 2000)
      }, [])

    return (
        <div className="covidsim">
            {loading ?
              <Spring config={{duration: 2000}} from={{opacity: 0.25}} to={{opacity: 1}}>
              {props => (
                <div style={props} class="loadingscreen">
                  <div>
                    <PulseLoader
                        size={75}
                        margin={64}
                        color={"#B11124"}
                        loading={loading}
                    />
                  </div>
                  <div style={{color: 'white', fontSize: '25px', textAlign: "center"}}>Scanning for masks</div>
                </div>
              )}
            </Spring>
             : 
                <div className="covidsim">
                    {page === 0 
                    ?
                    <div>
                        <div className="overlaySectionHeader">Covid-19 Simulator</div>
                        <div className="overlaySectionOne">
                            Are you SUS? SHEEEEESH with this covid simulator you can find out!
                        </div>
                        <div className="overlaySectionTwo">
                            Created with ReactJS by Kody Khuu, Brian Ventura, and Fernando Gomez at Spring PSUHack 2021
                        </div>
                        <button onClick={() => setPage(1)} className="overlayButton">SUS</button>

                        <Map selected={"Unhealthy"} mask={1} mapSize={1} critters={critters} setCritters={setCritters} bg={"rgba(0, 0, 0, 0)"} 
                             className="background"/>
                    </div>
                    :
                    <Spring
                        config={{duration: 2000}}
                        from={{opacity: 0}}
                        to={{opacity: 1}}>
                        {props => (
                            <div style={props}>
                                <App/>
                            </div>
                        )}
                    </Spring>
                    }
                </div>
            }
        </div>
    )
}

export default CovidSimulator;