import React, { Component } from 'react';
import './LocationGraphs2.css';
import location1 from './images/location1.png';
import location2 from './images/location2.png';
import location3 from './images/location3.png';
import location4 from './images/location4.png';
import location5 from './images/location5.png';
import location6 from './images/location6.png';

class LocationGraphs2 extends Component {

  render() {
    return (
      <div className="LocationGraphs2 color-white-background">
        <header className="LocationGraphs2-header color-grey">
          <h2>LOCATION AND USAGE</h2>
          <div className="row">
            <div className="col col-2">
              <img className="graph" src={location1} alt="" />
            </div>

            <div className="col col-2">
              <img className="graph" src={location2} alt="" />
            </div>
          </div>
          <div className="row">
            <div className="col col-2">
              <img className="graph" src={location3} alt="" />
            </div>

            <div className="col col-2">
              <img className="graph" src={location4} alt="" />
            </div>
          </div>   

          <div className="row">
            <div className="col col-2">
              <img className="graph" src={location5} alt="" />
            </div>

            <div className="col col-2">
              <img className="graph" src={location6} alt="" />
            </div>
          </div>   
          
        </header>
      </div>
    );
  }
}

export default LocationGraphs2;
