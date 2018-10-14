import React, { Component } from "react";
import {connect} from 'react-redux';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { Jumbotron, Container, Navbar } from "reactstrap";

import Browse from "./containers/Browse";
import ProfileGoals from "./containers/ProfileGoals";
import ProfileSettings from "./containers/ProfileSettings";
import GoalsContainer from "./containers/GoalsContainer";
import Signup from "./components/Signup";
import Login from './components/Login';
import SelectLanguage from './components/SelectLanguage';
import Goal from "./containers/Goal";
import Objective from "./components/Objective";

import {fetchAllGoals} from "./actions/goalActions";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    this.props.init();
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
              <Route exact path="/browse" component={Browse} />
              <Route exact path="/profile" component={ProfileGoals} />
              <Route exact path="/settings" component={ProfileSettings} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/" component={SelectLanguage} />
              <Route exact path="/select_language" component={SelectLanguage} />
              <Route exact path="/goal/:goalId" component={Goal} />
							<Route exact path="/goal/:userId/:goalId" component={Goal} />
							<Route exact path="/objective/:userId/:goalId/:objectiveId" component={Objective} />
							<Route exact path="/objective/:goalId/:objectiveId" component={Objective} />
            </Container>
          </Jumbotron>
          <Navbar>
            <NavLink to="/browse">
              <i className="fa fa-home fa-2x" />
            </NavLink>
            <NavLink to="/profile">
              <i className="fa fa-th-list fa-2x" />
            </NavLink>
            <NavLink to="/">
              <i className="fa fa-comments fa-2x" />
            </NavLink>
            <NavLink to="/settings">
              <i className="fa fa-cog fa-2x" />
            </NavLink>
          </Navbar>
        </div>
      </Router>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  init: () => {
    dispatch(fetchAllGoals);
  },
});

export default connect(null, mapDispatchToProps)(App);
