/*
  Translation Reducer
*/
import { RECEIVE_TRANSLATION, CLEAR_LANGUAGE } from '../actions/translationActions';

const translation = (state = null, action) => {
  switch (action.type) {
    case RECEIVE_TRANSLATION:
      return {
        translation: action.translation,
      };
    case CLEAR_LANGUAGE:
      return null;
    default: 
      return state;
  }
};

export default translation;
