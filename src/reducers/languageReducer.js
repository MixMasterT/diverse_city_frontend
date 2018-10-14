/*
  Language Reducer
*/
import { RECEIVE_LANGUAGE, CLEAR_LANGUAGE } from '../actions/languageActions';

export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_LANGUAGE:
      return {
        language: action.language,
      };
    case CLEAR_LANGUAGE:
      return null;
    default:
      return state;
  }
}
