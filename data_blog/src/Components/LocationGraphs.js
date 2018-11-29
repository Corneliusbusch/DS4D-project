import React, { Component } from 'react';
import './LocationGraphs.css';
import chart1 from './images/chart1.png';
import chart2 from './images/chart2.png';
import chart3 from './images/chart3.png';
import chart4 from './images/chart4.png';

class LocationGraphs extends Component {

  render() {
    return (
      <div className="LocationGraphs color-white-background">
        <header className="LocationGraphs-header color-grey">
          <h2>LOCATION AND USAGE</h2>
          <div className="row">
            <div className="col col-2">
              <img className="graph" src={chart1} alt="" />
            </div>

            <div className="col col-2">
              <img className="graph" src={chart2} alt="" />
            </div>
          </div>
          <div className="row">
            <div className="col col-2">
              <img className="graph" src={chart3} alt="" />
            </div>

            <div className="col col-2">
              <img className="graph" src={chart4} alt="" />
            </div>
          </div>    
          
        </header>
      </div>
    );
  }
}

export default LocationGraphs;
