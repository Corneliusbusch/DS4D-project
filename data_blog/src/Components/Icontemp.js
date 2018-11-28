import React, { Component } from 'react';
import './Icontemp.css';
import gendericon from './images/gendericon.png';

class Icontemp extends Component {
  render() {
    return (
      <div className="Icontemp color-white-background">
        <header className="Icontemp-header row">
          <div className="col col-2 color-drk-grey-background color-white text">
            <h2>Gender ratio</h2>
            <h1>4:3</h1>
            <p>female to male users ratio before merging datasets</p>
          </div>
          <div className="col col-2 icon">
            <img src={gendericon} />
          </div>
        </header>
      </div>
    );
  }
}

export default Icontemp;
