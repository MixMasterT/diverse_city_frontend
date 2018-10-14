import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import {
  Button
} from 'reactstrap';

const buttonStyles = { margin: '1rem'};
const ProfileSettings = ({logout, history, user}) => {
  const handleLogout = () => {
    logout();
    history.push('/login');
  }
  let logoutButton = '';
  console.log('user: ', user);
  if(user) {
    logoutButton = <Button onClick={handleLogout} style={buttonStyles}>Logout</Button>
  }
  return (
  <div className="ProfileSettings d-flex flex-column justify-content-between ">
    <h3 className="text-center">Settings</h3>
    {logoutButton}
    <Button
      onClick={() => history.push('/select_language')}
      style={buttonStyles}
    >Change Preferred Language</Button>
    {/* search bar? */}
    {/* goals go here? */}
  </div>
)};

ProfileSettings.propTypes = {};

export default withRouter(ProfileSettings);
