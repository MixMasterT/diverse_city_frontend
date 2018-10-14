import React from 'react';
import { connect } from 'react-redux';

import { assignGoal, markMilestoneComplete } from '../actions/goalActions';

import Goal from '../components/Goal';


const mapStateToProps = (state, ownProps) => {

  const goalId = ownProps.match.params.goalId;
  const userPhone = ownProps.match.params.userId;

  console.log('goalID',goalId);
  console.log('userID',userPhone);

  const isOwned = userPhone !== undefined;

  let goal;
  if (isOwned){
    goal = state.userReducer.user.goals.find((goal) => goal.g_id === goalId);
  } else {
    goal = state.goalReducer.goals.find((goal) => goal.g_id === goalId);
  }

  return {
    userPhone,
    isOwned,
    goal,
  };
};

const mapDispatchToProps = dispatch => ({
  assignGoal: (goalId) => () => dispatch(assignGoal(goalId)),
  markMilestoneComplete: (milestoneId, goalId) => dispatch(markMilestoneComplete(milestoneId, goalId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Goal);
