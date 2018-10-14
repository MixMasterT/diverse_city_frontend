import React from "react";
import { connect } from "react-redux";

import GoalsList from "../components/GoalsList";

const mapStateToProps = state => ({
  user: state.userReducer.user,
  goals: state.goalReducer.goals
});

export default connect(
  mapStateToProps,
  {}
)(GoalsList);
