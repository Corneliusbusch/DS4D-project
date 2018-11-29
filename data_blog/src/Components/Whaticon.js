import React, { Component } from 'react';
import './Whaticon.css';
import whaticon from './images/whaticon.png';

class Whaticon extends Component {
  render() {
    return (
      <div className="Whaticon color-white-background">
        <header className="Whaticon-header row">
          <div className="col col-2 icon">
            <img src={whaticon} />
          </div>
          <div className="col col-2 color-green-background color-white text">
            <h2>What are they clicking?</h2>
            <h1 className="smaller">Entertainment</h1>
            <p>is the most clicked button (18024)</p>
          </div>
        </header>
      </div>
    );
  }
}

export default Whaticon;
