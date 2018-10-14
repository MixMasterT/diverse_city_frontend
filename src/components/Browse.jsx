import React from 'react';
import PropTypes from 'prop-types';

import {FormGroup, Input} from 'reactstrap';


class Browse extends React.Component {
  componentDidMount() {
      this.props.loadGoals();
  }

  render () {
    var buildGoalLink = goal => {
      return `goal/${goal.g_id}`;
    };

    return (
      <div className="browse">
        <h4>Home</h4>
        <FormGroup>
          <Input
          id="goal-search"
          placeholder="Search"
          value={this.props.searchText}
          onChange={this.props.searchGoals}
          type="search"
          name="search"
          />
        </FormGroup>
        <h5>{`What are your goals?`}</h5>
          { !this.props.goalsFetching && this.props.goals ? (
          <div className="list-group">
            {this.props.goals.map((goal) => (
              <a key={goal.g_id} className="list-group-item goal-link" href={buildGoalLink(goal)}>
                {goal.name}
              </a>

            ))}
          </div>
        ) : (
          <div><i className="fa fa-spinner fa-spin fa-1x fa-fw" /> Loading Goals</div>
        )}
      </div>
    );
  }
}

Browse.propTypes = {
  searchText: PropTypes.string,
  goals: PropTypes.arrayOf(PropTypes.object),
  goalsFetching: PropTypes.bool,
  searchGoals: PropTypes.func
};

export default Browse;
