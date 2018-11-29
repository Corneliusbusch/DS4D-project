import React, { Component } from 'react';
import './Conditions.css';
import Conditionsgraph from './images/conditions.png';

class Conditions extends Component {
  render() {
    return (
      <div className="Conditions color-white-background">
        <header className="Conditions-header row color-grey">
          <div className="col col-4">
            <h2>User Conditions</h2>
            <iframe src="//datawrapper.dwcdn.net/bDo71/1/" scrolling="no" frameborder="0" width="980" height="500"></iframe>
          </div>
        </header>
      </div>
    );
  }
}

export default Conditions;
