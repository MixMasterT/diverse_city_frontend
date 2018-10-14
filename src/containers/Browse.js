import React from 'react';
import { connect } from 'react-redux';

import {fetchAllGoals} from "../actions/goalActions";

import Browse from '../components/Browse';


const mapStateToProps = state => ({
  searchText: '',
  goalsReducer: state.goalReducer
});

const mapDispatchToProps = dispatch => ({
  searchGoals: () => console.log('trying to search'),
  loadGoals: () => dispatch(fetchAllGoals())
});

export default connect(mapStateToProps, mapDispatchToProps)(Browse);
