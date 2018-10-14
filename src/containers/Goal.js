import React from 'react';
import { connect } from 'react-redux';

import { assignGoal } from '../actions/goalActions';

import Goal from '../components/Goal';


const mapStateToProps = (state, ownProps) => {
  const goalId = state.match.params.goalId;
  const userId = state.match.params.userId;

  let goal;
  if (userId){
    console.log('USER GOAL!');
    goal = state.userReducer.user.goals.find((goal) => goal.g_id === goalId);
  } else {
    console.log('CONTENT GOAL!');
    goal = state.goalReducer.goals.find((goal) => goal.g_id === goalId);
  }

  return {
      isOwner: userId !== undefined,
      goal: goal
  };
};

const mapDispatchToProps = dispatch => ({
  assignGoal: () => dispatch(assignGoal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Goal);
