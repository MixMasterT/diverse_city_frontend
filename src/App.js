import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {
  Jumbotron,
  Container,
  Navbar,
  NavLink } from 'reactstrap';

import Browse from './components/Browse';
import ProfileMilestones from './containers/ProfileMilestones';
import ProfileSettings from './containers/ProfileSettings';
import Signup from './components/Signup';
import Login from './components/Login';

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
              <Route exact path="/" component={Browse} />
              <Route exact path="/profile" component={ProfileMilestones} />
              <Route exact path="/settings" component={ProfileSettings} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/login" component={Login} />
            </Container>
          </Jumbotron>
          <Navbar>
            <NavLink href="/"><i className="fa fa-home fa-2x"></i></NavLink>
            <NavLink href="/profile"><i className="fa fa-th-list fa-2x"></i></NavLink>
            <NavLink href="/"><i className="fa fa-comments fa-2x"></i></NavLink>
            <NavLink href="/settings"><i className="fa fa-cogs fa-2x"></i></NavLink>
          </Navbar>
        </div>
      </Router>
    );
  }
}

export default App;
