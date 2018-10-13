import React from 'react';
import PropTypes from 'prop-types';

const ProfileMilestones = ({milestones}) => (
  <div className="profile-milestones-view">
    <div className="text-center">
      <i className="fa fa-th-list fa-3x"></i>
    </div>
    <ul>
      {
        milestones.map((milestone) => (
          <div key={milestone.id} className="list-group">
            <h5>{milestone.name}</h5>
            <p>{milestone.description}</p>
          </div>
        ))
      }
    </ul>
  </div>
);

ProfileMilestones.propTypes = {
  milestones: PropTypes.arrayOf(PropTypes.object)
};

export default ProfileMilestones;
