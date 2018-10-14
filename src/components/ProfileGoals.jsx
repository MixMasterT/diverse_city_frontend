import React from "react";
import PropTypes from "prop-types";

const ProfileGoals = ({ user }) =>
  user ? (
    <div className="profile-goals">
      <div className="text-center">
        <i className="fa fa-th-list fa-5x" />
        <h3>Goals</h3>
      </div>
      {user.goals && user.goals.length > 0 ? (
        <ul>
          {user.goals.map(goal => (
            <div key={goal._id} className="list-group">
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

ProfileGoals.propTypes = {
  user: PropTypes.object,
  loadUserGoals: PropTypes.func
};

export default ProfileGoals;
