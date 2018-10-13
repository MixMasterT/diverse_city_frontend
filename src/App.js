import React, { Component } from 'react';
import createDeepstream from 'deepstream.io-client-js';
import logo from './logo.svg';
import './App.css';
import Weather from './components/weather';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.ds = createDeepstream('http://www.rhov.io:6020/deepstream');
    this.client = this.ds.login();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Weather />
      </div>
    );
  }
}

export default App;
