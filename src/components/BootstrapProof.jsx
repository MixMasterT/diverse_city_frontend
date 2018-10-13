import React, { Component } from 'react';
import {
  Button,
  Modal, } from 'reactstrap';
import logo from '../logo.svg';
import '../App.css';

class App extends Component {
  constructor(props) {
  super(props);
  this.state = {
    modal: false
  };
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
        <h1 className="display-3">Proof of Bootstrap</h1>
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
        <p>This is mere proof that bootstrap was loaded correctly</p>
        <Button color="primary" onClick={this.toggle}>Click Me</Button>

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
