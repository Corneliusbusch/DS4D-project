import React, { Component } from 'react';
import './FWgraphtemp.css';
import agedengen from './images/age-den-gen.png';

class FWgraphtemp extends Component {
  render() {
    return (
      <div className="FWgraphtemp color-white-background">
        <header className="FWgraphtemp-header row color-grey">
          <div className="col col-4">
            <h2>Age Density by Gender</h2>
            <img className="graph" src={agedengen} />
          </div>
        </header>
      </div>
    );
  }
}

export default FWgraphtemp;
