import React, { Component } from 'react';
import './Heatmap.css';

class Heatmap extends Component {
render() {
    return (
      <div className="Heatmap">
        <header className="heatmap">
            <div className="clickheatmap">
              <h2>Click Distribution</h2>
                <iframe src="Heatmap.html" scrolling="no" frameborder="0" width="1024" height="500"></iframe>
              </div>
            </header>
          </div>
        );
      }
    }
export default Heatmap;
