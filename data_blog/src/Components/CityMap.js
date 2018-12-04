import React, { Component } from 'react';
import './CityMap.css';

class CityMap extends Component {
  render() {
    return (
      <div className="CityMap color-white-background">
        <header className="CityMap-header row color-grey">
          <div className="col col-4">
            <h2>City Map</h2>
            <iframe src="CityMap.html" scrolling="no" frameborder="0" width="800" height="500"></iframe>
          </div>
        </header>
      </div>
    );
  }
}

export default CityMap;
