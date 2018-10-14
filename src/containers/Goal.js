import React from 'react';
import { connect } from 'react-redux';

import { assignGoal } from '../actions/goalActions';

import Goal from '../components/Goal';


const mapStateToProps = (state, ownProps) => {

  const goalId = ownProps.match.params.goalId;
  // const goalId = 1;
  const userIdProvided = ownProps.match.params.userId;
  // const userId = undefined;
  const isOwner = userIdProvided !== undefined;

  let goal;
  if (isOwner){
    goal = state.userReducer.user.goals.find((goal) => goal.g_id === goalId);
  } else {
    goal = state.goalReducer.goals.find((goal) => goal.g_id === goalId);
  }

  return {
    userPhone: state.userReducer.user.phone,
    isOwner,
    goal,
  };
};

const mapDispatchToProps = dispatch => ({
  assignGoal: (goalId) => () => dispatch(assignGoal(goalId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Goal);
