import React, { Component } from 'react';
import './Clickdataicon.css';
import clickdataicon from './images/clickdata.png';

class Clickdataicon extends Component {
  render() {
    return (
      <div className="Clickdataicon color-white-background">
        <header className="Clickdataicon-header row">
          <div className="col col-2 icon">
            <img src={clickdataicon} />
          </div>
          <div className="col col-2 color-pink-background color-white text">
            <h2>DataFrame 2</h2>
            <h1>Click</h1>
            <p>time, date, userID, link title, link type</p>
          </div>
        </header>
      </div>
    );
  }
}

export default Clickdataicon;
