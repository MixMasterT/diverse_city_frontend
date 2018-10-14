import React from 'react';
import PropTypes from 'prop-types';
import {
  Button
} from 'reactstrap';

const ProfileSettings = ({logout}) => (
  <div className="ProfileSettings d-flex flex-column justify-content-between ">
    <div className="text-center">
      <i className="fa fa-cog fa-3x"></i>
    </div>
    <Button onClick={logout}>Logout</Button>
    {/* search bar? */}
    {/* goals go here? */}
  </div>
);

ProfileSettings.propTypes = {};


export default ProfileSettings;
