import React, { Component } from 'react';
import './Wordmap.css';

class Wordmap extends Component {
  render() {
    return (
      <div className="Wordmap color-white-background">
        <header className="Wordmap-header row color-grey">
          <div className="col col-4">
            <h2>Wordmap of Keywords</h2>
            <iframe src="WordCloud.html" frameborder="0" width="800" height="500"></iframe>
          </div>
        </header>
      </div>
    );
  }
}

export default Wordmap;
