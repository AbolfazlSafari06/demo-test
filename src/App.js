import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 }
  }
  render() {
    return (
      <div data-test="component-app" className="App" >
        <h1 data-test="counter-display" >count {this.state.counter.toString()}</h1>
        <button data-test="increment-button" onClick={() => { this.setState({ counter: this.state.counter + 1 }) }}>increment counter</button>
      </div >
    );
  }
}

export default App;
