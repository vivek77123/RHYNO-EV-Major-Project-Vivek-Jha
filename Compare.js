import React,{ } from 'react';
import Blues from './blue.png';

import Red from './red.png';

import './compare.css';
function All(){
    return(

<div className="comparison-container">
      <div className="comparison-card">
        <b><h2>Rhyno SE03 Lite</h2></b>
        <div className="specification">Battery: 1.8Kwh</div>
        <div className="specification">Battery Features: LFP with 1500 cycles, Active Balancing, Waterproof (IP67)</div>
        <div className="specification">Battery Warranty: 3 years</div>
        <div className="specification">Charging Time: 3 hours (12A)</div>
        <div className="specification">Motor: 1500W</div>
        <div className="specification">Max Speed: 55 km/h</div>
        <div className="specification">Warranty on Electronics: 1 year</div>
        <div className="specification">Max Range (@30km/h): 100 km</div>
        <div className="specification">Max Range (@45km/h): 90 km</div>
        <div className="specification">Max Range (@full speed): 60 km</div>
        <div className="specification">Other Key Benefits: Fire-safe battery, Range prediction, Comfortable ride, Stable and safe</div>
      </div>
      {/* Repeat for other two vehicles */}
      <div className="comparison-card">
        <b><h2>Rhyno SE03 </h2></b>
        <div className="specification">Battery: 1.8 Kwh</div>
        <div className="specification">Battery Features: LFP with 1500 cycles, Active Balancing, Waterproof (IP67)</div>
        <div className="specification">Battery Warranty: 3 years</div>
        <div className="specification">Charging Time: 3 hours (12A)</div>
        <div className="specification">Motor: 1500W</div>
        <div className="specification">Max Speed: 55 km/h</div>
        <div className="specification">Warranty on Electronics: 1 year</div>
        <div className="specification">Max Range (@30km/h): 100 km</div>
        <div className="specification">Max Range (@45km/h): 90 km</div>
        <div className="specification">Max Range (@full speed): 60 km</div>
        <div className="specification">Other Key Benefits: Fire-safe battery, Range prediction, Comfortable ride, Stable and safe</div>
      </div>

      {/*third veh*/}
      <div className="comparison-card">
        <b><h2>Rhyno SE03 Max </h2></b>
        <div className="specification">Battery: 2.7 Kwh</div>
        <div className="specification">Battery Features: LFP with 1500 cycles, Active Balancing, Waterproof (IP67)</div>
        <div className="specification">Battery Warranty: 3 years</div>
        <div className="specification">Charging Time: 4 hours (12A)</div>
        <div className="specification">Motor: 2000W</div>
        <div className="specification">Max Speed: 65 km/h</div>
        <div className="specification">Warranty on Electronics: 1 year</div>
        <div className="specification">Max Range (@30km/h): 120 km</div>
        <div className="specification">Max Range (@45km/h): 100 km</div>
        <div className="specification">Max Range (@full speed): 80 km</div>
        <div className="specification">Other Key Benefits: Fire-safe battery, Range prediction, Comfortable ride, Stable and safe</div>
      </div>
      <h2>Available in Multi-color</h2>
      <ul class="bullet">
  <li class="black"></li>
  <li class="white"></li>
  <li class="yellow"></li>
  <li class="dark-grey"></li>
</ul>
      <div class="cont">

<img src={Blues} width={410} alt="" class="image"></img>
<img src={Red}width={410} alt="" class="image"></img>

    </div>
</div>


    )
}

export default All;
