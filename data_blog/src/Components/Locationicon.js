import React, { Component } from 'react';
import './Locationicon.css';
import gendericon from './images/locationicon.png';

class Locationicon extends Component {
  render() {
    return (
      <div className="Locationicon color-white-background">
        <header className="Locationicon-header row">
          <div className="col col-2 icon">
            <img src={gendericon} />
          </div>
          <div className="col col-2 color-green-background color-white text">
            <h2>WHERE ARE THEY FROM?</h2>
            <h1>Scotland</h1>
            <p>100% of users live in Scotland</p>
          </div>
        </header>
      </div>
    );
  }
}

export default Locationicon;
