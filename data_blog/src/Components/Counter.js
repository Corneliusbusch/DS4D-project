import React, { Component } from 'react';
import './Counter.css';
import CountUp from './animations/CountUp.js';


class Counter extends Component {
  render() {
    return (
      <div className="Counter color-white-background">
        <header className="Counter-header row color-grey">
          <div className="col col-1 color-pink" id="counter">
              <CountUp className="bigtext" end={9} />
            <p>months</p>
          </div>
          <div className="col col-1 color-grey">
            <CountUp className="bigtext" end={92} />
            <p>users</p>
          </div>
          <div className="col col-2 color-green">
            <CountUp className="bigtext" end={121634} />
            <p>clicks</p>
          </div>
        </header>
      </div>
    );
  }
}

export default Counter;
