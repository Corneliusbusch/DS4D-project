import React, { Component } from 'react';
import './Userdataicon.css';
import userdataicon from './images/userdata.png';

class Userdataicon extends Component {
  render() {
    return (
      <div className="Userdataicon color-white-background">
        <header className="Userdataicon-header row">
          <div className="col col-2 color-green-background color-white text">
            <h2>DataFrame 1</h2>
            <h1>User</h1>
            <p>userID, gender, condition, location, DOB</p>
          </div>
          <div className="col col-2 icon">
            <img src={userdataicon} />
          </div>
        </header>
      </div>
    );
  }
}

export default Userdataicon;
