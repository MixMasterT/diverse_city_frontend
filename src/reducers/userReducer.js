/*
  User Reducer
*/
import { mockUser }  from "../fixtures/mockUser";
const WHICH_STATE = "Prod";
var DEFAULT_STATE = {};
if(WHICH_STATE == "Dev"){
    DEFAULT_STATE = { user: mockUser || {}};
} 

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'RECEIVE_USER':
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
}
