import React, { Component } from 'react';
import './Main.css';
import GraphDiv from "./GraphDiv";
import whitelogo from './images/cleverclogs-logo-white.png';

class Main extends Component {
  render() {
    return (
      <div className="Main color-pink-background color-white">
        <header className="Main-header">
          <h2>Data Visulisation</h2>
          <img className="logo" src={whitelogo} />
          <p>Nicole, Mojca, Qinru, Zoe</p>
        </header>
      </div>
    );
  }
}

export default Main;
