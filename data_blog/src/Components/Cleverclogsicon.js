import React, { Component } from 'react';
import './Cleverclogsicon.css';
import cleverclogsicon from './images/tablet.png';

class Cleverclogsicon extends Component {
  render() {
    return (
      <div className="Cleverclogsicon color-white-background">
        <header className="Cleverclogsicon-header row">
          <div className="col col-2 icon">
            <img src={cleverclogsicon} />
          </div>
          <div className="col col-2 color-light-grey-background color-grey text">
            <h2>What is CleverClogs?</h2>
            <h1>Tablet</h1>
            <p>cleverclogs is a tablet application for people who need care</p>
          </div>
        </header>
      </div>
    );
  }
}

export default Cleverclogsicon;
