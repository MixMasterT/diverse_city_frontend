import React from 'react';
import { withRouter } from "react-router-dom";
import PropTypes from 'prop-types';

const ProfileMilestones = ({ user }) => (
  (user) ? ( 
    <div className="profile-milestones-view">
    <div className="text-center">
      <i className="fa fa-th-list fa-3x"></i>
    </div>
    { (user.milestones && user.milestones.length > 0) ? 
      (
        <ul >
        {
          user.milestones.map((milestone) => (
            <div key={milestone.id} className="list-group">
              <h5>{milestone.name}</h5>
              <p>{milestone.description}</p>
            </div>
          ))
        }
        </ul>
      ) : (
      <span>No Milestones yet. Please add one <a href="add-milestone">here</a></span>
    )
    }
    
  </div>
  ) : (
    <span>Please Login <a href="login">here</a></span>
  ) 
);

ProfileMilestones.propTypes = {
  milestones: PropTypes.arrayOf(PropTypes.object)
};

export default withRouter(ProfileMilestones);
