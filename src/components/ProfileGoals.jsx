import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';

class ProfileGoals extends React.Component {
  componentDidMount() {
      this.props.loadUser();
  }

  render () {
    var buildGoalLink = (userId, goalId) => {
      return `goal/${userId}/${goalId}`;
    };
    var milestonesComplete = goal => {
        return goal.milestones.reduce((accum, value, index) => {
          if (value.completed){
              return (accum + 1);
          }
          return accum;
        }, 0);
    };

    return (
      this.props.user ? (
        <div className="profile-goals">
          <div className="text-center">
            <i className="fa fa-th-list fa-5x" />
            <h3>Goals</h3>
          </div>
          {this.props.user.goals && this.props.user.goals.length > 0 ? (
            <div className="list-group">
              {this.props.user.goals.map(goal => (
                <Link key={goal.g_id} className="list-group-item goal-link" to={buildGoalLink(this.props.user.phone, goal.g_id)}>
                  <div>{goal.name}</div>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" aria-valuenow={milestonesComplete(goal)} aria-valuemin="0" aria-valuemax={goal.milestones.length}></div>
                    </div>
                </Link>
              ))}
            </div>
          ) : (
            <span>
              No Goals yet. Please check them out here <Link to="browse">here</Link>
            </span>
          )}
        </div>
      ) : (
        <span>
          Please Login <Link to="login">here</Link>
        </span>
      )
    );
  }
}


ProfileGoals.propTypes = {
  user: PropTypes.object,
  loadUser: PropTypes.func
};

export default ProfileGoals;
