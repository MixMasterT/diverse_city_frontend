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
    body.then(goals => {
      return dispatch({type: "UPDATE_GOALS", goals})
    })
    .catch(
      (e) => dispatch({type: RECEIVE_API_ERROR, error: e})
    );
  });
};


export const assignGoal = (goalId) => (dispatch, getState) => {
  const userPhone = getState().userReducer.user.phone;

  const config = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      phone: userPhone,
      goalId: goalId
    })
  };

  fetch(`${root}users/assign`, config).then((response) => {
    const body = response.json();
    body.then(user => {
      return dispatch({type: "RECEIVE_USER", user})
    })
    .catch(
      (e) => dispatch({type: RECEIVE_API_ERROR, error: e})
    );
  });
  return null;
};
