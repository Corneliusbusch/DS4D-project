import React, { Component } from 'react';
import './Gendericon.css';
import gendericon from './images/gendericon.png';

class Gendericon extends Component {
  render() {
    return (
      <div className="Gendericon color-white-background">
        <header className="Gendericon-header row">
          <div className="col col-2 color-drk-grey-background color-white text">
            <h2>gender proportion?</h2>
            <h1>4:3</h1>
            <p>ratio of female to male users</p>
          </div>
          <div className="col col-2 icon">
            <img src={gendericon} />
          </div>
        </header>
      </div>
    );
  }
}

export default Gendericon;
