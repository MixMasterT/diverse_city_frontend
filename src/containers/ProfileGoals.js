import React from "react";
import { connect } from "react-redux";

import {fetchUser} from "../actions/userActions";

import ProfileGoals from "../components/ProfileGoals";

const mapStateToProps = state => ({
  user: state.userReducer.user
});

const mapDispatchToProps = dispatch => ({
  loadUserGoals: () => dispatch(fetchUser())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileGoals);
