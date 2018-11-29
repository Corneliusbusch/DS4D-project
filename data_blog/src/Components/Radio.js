import React, { Component } from 'react';
import './Radio.css';
import radiochart from './images/radiochart.png';

class Radio extends Component {
  render() {
    return (
      <div className="Radio color-white-background">
        <header className="Radio-header row color-grey">
          <div className="col col-4">
            <h2>Radio Clicks</h2>
            <img className="graph" src={radiochart} />
          </div>
        </header>
      </div>
    );
  }
}

export default Radio;
