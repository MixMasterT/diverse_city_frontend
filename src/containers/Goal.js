import React from 'react';
import { connect } from 'react-redux';

import { assignGoal } from '../actions/goalActions';

import Goal from '../components/Goal';


const mapStateToProps = (state, ownProps) => {

  const goalId = ownProps.match.params.goalId;
  // const goalId = 1;
  const userId = ownProps.match.params.userId;
  // const userId = undefined;
  const isOwner = userId !== undefined;

  let goal;
  if (isOwner){
    console.log('USER GOAL!');
    goal = state.userReducer.user.goals.find((goal) => goal.g_id === goalId);
  } else {
    console.log('CONTENT GOAL!');
    goal = state.goalReducer.goals.find((goal) => goal.g_id === goalId);
  }

  return {
      isOwner,
      goal
  };
};

const mapDispatchToProps = dispatch => ({
  assignGoal: () => dispatch(assignGoal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Goal);
