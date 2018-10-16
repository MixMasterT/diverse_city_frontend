import React from "react";
import { connect } from "react-redux";

import {fetchUser} from "../actions/userActions";

import ProfileGoals from "../components/ProfileGoals";

const mapStateToProps = state => ({
  user: state.userReducer.user
});

const mapDispatchToProps = dispatch => ({
  loadUser: (user, history) => dispatch(fetchUser(user, history)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileGoals);
