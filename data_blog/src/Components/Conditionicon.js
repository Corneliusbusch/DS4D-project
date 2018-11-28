import React, { Component } from 'react';
import './Conditionicon.css';
import Conditionicon from './images/conditionicon.png';

class Conditionicon extends Component {
  render() {
    return (
      <div className="Conditionicon color-white-background">
        <header className="Conditionicon-header row">
          <div className="col col-2 color-drk-grey-background color-white text">
            <h2>How many people have a condition?</h2>
            <h1>60%</h1>
            <p>over half of the users of CleverClogs have a medical condition</p>
          </div>
          <div className="col col-2 icon">
            <img src={Conditionicon} />
          </div>
        </header>
      </div>
    );
  }
}

export default Conditionicon;
