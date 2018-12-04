import React, { Component } from 'react';
import './LinkType.css';

class LinkType extends Component {
  render() {
    return (
      <div className="LinkType color-white-background">
        <header className="LinkType-header row color-grey">
          <div className="col col-4">
            <h2>Link Type</h2>
            <iframe src="LinkType.html" scrolling="no" frameborder="0" width="800" height="500"></iframe>
          </div>
        </header>
      </div>
    );
  }
}

export default LinkType;
