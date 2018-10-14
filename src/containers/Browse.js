import React from 'react';
import { connect } from 'react-redux';

import {fetchAllGoals} from "../actions/browseActions";

import Browse from '../components/Browse';


const mapStateToProps = state => ({
  searchText: '',
  goals: state.goalReducer.goals,
  goalsFetching: state.goalReducer ? state.goalReducer.fetching : false
});

const mapDispatchToProps = dispatch => ({
  searchGoals: () => console.log('trying to search'),
  loadGoals: () => dispatch(fetchAllGoals())
});

export default connect(mapStateToProps, mapDispatchToProps)(Browse);
