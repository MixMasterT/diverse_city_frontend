/*
  User Reducer
*/
import { mockUser } from "../fixtures/mockUser";
import { RECEIVE_USER, CLEAR_USER } from '../actions/userActions';

const WHICH_STATE = "Prod";
var DEFAULT_STATE = {};
if (WHICH_STATE === "Dev") {
  DEFAULT_STATE = { user: mockUser || {} };
}
const storedUser = JSON.parse(localStorage.getItem('user'));
if(storedUser) {
  DEFAULT_STATE = { user: storedUser };
}

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
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
