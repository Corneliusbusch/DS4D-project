import React, { Component } from 'react';
import './Network.css';

class Network extends Component {
  render() {
    return (
      <div className="Network color-white-background">
        <header className="Network-header row color-grey">
          <div className="col col-4">
            <h2>Network Chart</h2>
            <iframe src="network.html" frameborder="0" width="800" height="500"></iframe>
          </div>
        </header>
      </div>
    );
  }
}

export default Network;
