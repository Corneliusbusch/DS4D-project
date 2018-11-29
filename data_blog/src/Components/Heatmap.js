import React, { Component } from 'react';
import './Heatmap.css';

class Heatmap extends Component {
  render() {
    return (
      <div className="Heatmap color-white-background">
        <header className="Heatmap-header row color-grey">
          <div className="col col-4">
            <h2>Heatmap</h2>
            <iframe src="Heatmap.html" frameborder="0" width="800" height="500"></iframe>
          </div>
        </header>
      </div>
    );
  }
}

export default Heatmap;
