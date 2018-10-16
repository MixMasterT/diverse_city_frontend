/*
  User Reducer
*/
import { mockUser } from "../fixtures/mockUser";
import { RECEIVE_USER, CLEAR_USER } from '../actions/userActions';

let DEFAULT_STATE = {};
const storedUser = JSON.parse(localStorage.getItem('user'));

if(storedUser) {
  DEFAULT_STATE = { user: storedUser };
}

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case "FETCH_USER":
      return {
        ...state,
        fetching: true
      };
    case RECEIVE_USER:
      return {
        user: action.user,
      };
    case CLEAR_USER:
      return {
        user: null
      };
    default:
      return state;
  }
};
