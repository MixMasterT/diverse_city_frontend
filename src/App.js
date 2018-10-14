import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Jumbotron, Container, Navbar, NavLink } from "reactstrap";

import Browse from "./components/Browse";
import ProfileGoals from "./containers/ProfileGoals";
import ProfileSettings from "./containers/ProfileSettings";
import GoalsContainer from "./containers/GoalsContainer";
import Signup from "./components/Signup";

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
      modal: !this.state.modal
    });
  }
  render() {
    return (
      <Router>
        <div className="app">
          <Jumbotron>
            <Container fluid>
              <Route exact path="/" component={Browse} />
              <Route exact path="/profile" component={ProfileGoals} />
              <Route exact path="/settings" component={ProfileSettings} />
              <Route exact path="/goals" component={GoalsContainer} />
              <Route exact path="/signup" component={Signup} />
            </Container>
          </Jumbotron>
          <Navbar>
            <NavLink href="/">
              <i className="fa fa-home fa-2x" />
            </NavLink>
            <NavLink href="/profile">
              <i className="fa fa-th-list fa-2x" />
            </NavLink>
            <NavLink href="/">
              <i className="fa fa-comments fa-2x" />
            </NavLink>
            <NavLink href="/settings">
              <i className="fa fa-cog fa-2x" />
            </NavLink>
          </Navbar>
        </div>
      </Router>
    );
  }
}

export default App;
