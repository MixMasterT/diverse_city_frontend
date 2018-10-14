/*
  Translation Reducer
*/
import { RECEIVE_TRANSLATION } from '../actions/userActions';

export default (state = null, action) => {
  switch (action.type) {
    case RECEIVE_TRANSLATION:
      return {
        translation: action.translation,
      };
    default:
      return state;
  }
};
