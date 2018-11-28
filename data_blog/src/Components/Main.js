import React, { Component } from 'react';
import './Main.css';
import GraphDiv from "./GraphDiv";

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <header className="Main-header">
          <h1>Hello World</h1>
            <GraphDiv/>
        </header>
      </div>
    );
  }
}

export default Main;
