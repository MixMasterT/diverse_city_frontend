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
    const body = response.json();
    console.log(body);
    body.then(goals => {
      console.log(goals);
      return dispatch({type: "UPDATE_GOALS", goals})
    })
    .catch(
      (e) => dispatch({type: RECEIVE_API_ERROR, error: e})
    );
  });
};
