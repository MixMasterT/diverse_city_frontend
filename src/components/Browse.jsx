import React from 'react';
import PropTypes from 'prop-types';

import {FormGroup, Input} from 'reactstrap';


const Browse = ({searchText, goals, searchGoals}) => (
  <div className="browse">
    <h4>Home</h4>
    <FormGroup>
      <Input
        id="goal-search"
        placeholder="Search"
        value={searchText}
        onChange={searchGoals}
        type="search"
        name="search"
      />
    </FormGroup>
    <h5>{`What are your goals?`}</h5>
    <div className="list-group">
      {goals.map((goal) => (
          <div key={goal.id} className="list-group-item">{goal.name}</div>
      ))}
    </div>
  </div>
);

Browse.propTypes = {
  searchText: PropTypes.string,
  goals: PropTypes.arrayOf(PropTypes.object),
  searchGoals: PropTypes.func
};

export default Browse;
