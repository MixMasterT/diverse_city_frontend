/*
  Translation Reducer
*/
import { RECEIVE_TRANSLATION } from '../actions/translationActions';

const translation = (state = null, action) => {
  switch (action.type) {
    case RECEIVE_TRANSLATION:
      return {
        translation: action.translation,
      };
    default:
      return state;
  }
};

export default translation;
