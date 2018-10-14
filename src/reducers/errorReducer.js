/*
  Error Reducer
*/
import { RECEIVE_API_ERROR, RESOLVE_ERROR } from '../actions/errorActions';

export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_API_ERROR:
      console.log('API_ERROR recieved');
      return {
        apiError: action.error,
      };
    case RESOLVE_ERROR:
      return {};
    default:
      return state;
  }
}
