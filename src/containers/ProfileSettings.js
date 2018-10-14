import React from 'react';
import { connect } from 'react-redux';

import { logoutUser } from '../actions/userActions';
import { assignMilestone } from '../actions/milestoneActions';

import ProfileSettings from '../components/ProfileSettings';

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutUser()),
});

export default connect(null, mapDispatchToProps)(ProfileSettings);
