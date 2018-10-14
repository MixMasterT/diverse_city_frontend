import React from "react";
import PropTypes from "prop-types";

const ProfileMilestones = ({ user }) =>
  user ? (
    <div className="profile-milestones-view">
      <div className="text-center">
        <i className="fa fa-th-list fa-3x" />
      </div>
      {user.goals && user.goals.length > 0 ? (
        <ul>
          {user.goals.map(goal => (
            <div key={goal.id} className="list-group">
              <h5>{goal.name}</h5>
              <p>{goal.description}</p>
            </div>
          ))}
        </ul>
      ) : (
        <span>
          No Goals yet. Please check them out here <a href="goals">here</a>
        </span>
      )}
    </div>
  ) : (
    <span>
      Please Login <a href="login">here</a>
    </span>
  );

ProfileMilestones.propTypes = {
  milestones: PropTypes.arrayOf(PropTypes.object)
};

export default ProfileMilestones;
