import React, { Component } from 'react';
import './Whenicon.css';
import whenicon from './images/whenicon.png';

class Whenicon extends Component {
  render() {
    return (
      <div className="Whenicon color-white-background">
        <header className="Whenicon-header row">
          <div className="col col-2 color-drk-grey-background color-white text">
            <h2>When are they clicking?</h2>
            <h1 className="smaller">September</h1>
            <p>is the most active month of the year</p>
          </div>
          <div className="col col-2 icon">
            <img src={whenicon} />
          </div>
        </header>
      </div>
    );
  }
}

export default Whenicon;
