import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {
  Jumbotron,
  Container,
  Navbar,
  NavLink } from 'reactstrap';

import BootstrapProof from './components/BootstrapProof';
import Weather from './components/weather';

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
      <Router>
        <div className="app">
          <Jumbotron>
            <Container fluid>
              <Route exact path="/" component={BootstrapProof} />
              <Route exact path="/weather" component={Weather} />
            </Container>
          </Jumbotron>
          <Navbar>
            <NavLink href="/"><i className="fa fa-home fa-3x"></i></NavLink>
            <NavLink href="/weather">Weather</NavLink>
          </Navbar>
        </div>
      </Router>
    );
  }
}

export default App;
