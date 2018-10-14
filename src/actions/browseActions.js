import {root} from "./apiCalls";
import {RECEIVE_API_ERROR} from './errorActions';

export const fetchAllGoals = () => (dispatch) => {
  dispatch({type: "FETCH_GOALS"});

  const config = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json'
    },
  };

  fetch(`${root}goals`, config).then((response) => {
    const goals = response.json();
    return goals.then(goalArray => {
      if (goalArray) {
        return dispatch({type: "UPDATE_GOALS", goals: goalArray});
      } else {
        return dispatch({type: RECEIVE_API_ERROR});
      }
    })
  });
};
