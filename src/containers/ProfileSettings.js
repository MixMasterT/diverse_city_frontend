import React from 'react';
import { connect } from 'react-redux';

import { logoutUser } from '../actions/userActions';

import ProfileSettings from '../components/ProfileSettings';

const mapStateToProps = state => ({
  user: state.userReducer.user
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileSettings);
