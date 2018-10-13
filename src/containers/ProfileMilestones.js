import React from 'react';
import { connect } from 'react-redux';

import { markStepComplete } from '../actions/milestoneActions';

import ProfileMilestones from '../components/ProfileMilestones';


const mapStateToProps = state => ({
  user: state.userReducer.user
});

const mapDispatchToProps = dispatch => ({
  markStepComplete: () => dispatch(markStepComplete()),
  viewStep: () => console.log('view step')
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileMilestones);
