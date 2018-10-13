import React from 'react';
import { connect } from 'react-redux';

import { assignMilestone } from '../actions/milestoneActions';

import Browse from '../components/Browse';


const mapStateToProps = state => ({
  categories: ['financial', 'legal', 'employment', 'child']
});

const mapDispatchToProps = dispatch => ({
  assignMilestone: () => dispatch(assignMilestone())
});

export default connect(mapStateToProps, mapDispatchToProps)(Browse);
