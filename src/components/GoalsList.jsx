import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';

var buildGoalLink = goal => {
  return `goals/${goal._id}`;
};

const GoalsList = ({ user, goals }) => (
  <div className="profile-milestones-view">
    <div className="text-center">
      <i className="fa fa-th-list fa-3x" />
    </div>
    <h2>What are your goals?</h2>
    <ul>
      {goals.map(goal => (
        <div key={goal._id} className="list-group">
          <span>
            <Link className="goal-link" to={buildGoalLink(goal)}>
              {goal.description}
            </Link>
          </span>
        </div>
      ))}
    </ul>
  </div>
);

GoalsList.propTypes = {
  goals: PropTypes.arrayOf(PropTypes.object),
  user: PropTypes.object
};

export default GoalsList;
