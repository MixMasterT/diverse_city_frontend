import React from "react";
import { connect } from "react-redux";

import ProfileGoals from "../components/ProfileGoals";

const mapStateToProps = state => ({
  user: state.userReducer.user
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileGoals);
