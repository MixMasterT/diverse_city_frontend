import React from 'react';
import { connect } from 'react-redux';

import { assignMilestone } from '../actions/milestoneActions';

import Browse from '../components/Browse';


const mapStateToProps = state => ({
  searchText: '',
  goals: [
    {id:1, name: 'What is a goal?'},
    {id:2, name: 'What is a goal?'},
    {id:3, name: 'What is a goal?'},
    {id:4, name: 'What is a goal?'}
  ]
});

const mapDispatchToProps = dispatch => ({
  searchGoals: () => console.log('trying to search')
});

export default connect(mapStateToProps, mapDispatchToProps)(Browse);
