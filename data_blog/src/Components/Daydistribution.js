import React, { Component } from 'react';
import './Daydistribution.css';
import daydistribution from './images/Daydistribution-graph.png';

class Daydistribution extends Component {
  render() {
    return (
      <div className="Daydistribution color-white-background">
        <header className="Daydistribution-header row color-grey">
          <div className="col col-4">
            <h2>Usage Distribution Over One Day</h2>
            <img className="graph" src={daydistribution} />
          </div>
        </header>
      </div>
    );
  }
}

export default Daydistribution;
