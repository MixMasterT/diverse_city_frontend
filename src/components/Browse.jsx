import React from 'react';
import PropTypes from 'prop-types';

import {Link} from "react-router-dom";

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
        <h3>Home</h3>
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
          { !this.props.goalsReducer.fetching && this.props.goalsReducer.goals ? (
          <div className="list-group">
            {this.props.goalsReducer.goals.map((goal) => (
              <Link key={goal.g_id} className="list-group-item goal-link" to={buildGoalLink(goal)}>
                {goal.name}
              </Link>

            ))}
          </div>
        ) : (
          <div className="flex">
            <div><i className="fa fa-spinner fa-spin fa-1x fa-fw" /> </div>
            Loading Goals
          </div>
        )}
      </div>
    );
  }
}

Browse.propTypes = {
  searchText: PropTypes.string,
  goalsReducer: PropTypes.object,
  searchGoals: PropTypes.func
};

export default Browse;
