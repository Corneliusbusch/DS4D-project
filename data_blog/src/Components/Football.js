import React, { Component } from 'react';
import './Football.css';
import footballgraph from './images/football-graph.png';

class Football extends Component {
  render() {
    return (
      <div className="Football color-white-background">
        <header className="Football-header row color-grey">
          <div className="col col-4">
            <h2>Football Team Clicks</h2>
            <img className="graph" src={footballgraph} />
          </div>
        </header>
      </div>
    );
  }
}

export default Football;
