import React, { Component } from 'react';
import createDeepstream from 'deepstream.io-client-js';
import logo from './logo.svg';
import './App.css';
import { Jumbotron, Button, Modal } from 'reactstrap';

import Weather from './components/weather';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false

    };
    this.ds = createDeepstream('http://www.rhov.io:6020/deepstream');
    this.client = this.ds.login();
    this.toggle = this.toggle.bind(this);
    
  }

toggle() {
  this.setState({
    modal: !this.state.modal,
  });
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
        <Jumbotron>
          <h1 className="display-3">Proof of Bootstrap</h1>
          <p>This is mere proof that bootstrap was loaded correctly</p>
          <Button color="primary" onClick={this.toggle}>Click Me</Button>
        </Jumbotron>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
        >
          Modal content...
        </Modal>
      </div>
    );
  }
}

export default App;
