/*
  Language Reducer
*/
import { RECEIVE_LANGUAGE, CLEAR_LANGUAGE } from '../actions/languageActions';

let defaultLanguage = null;
const storedLanguage = JSON.parse(localStorage.getItem('language'));
if(storedLanguage) {
  defaultLanguage = storedLanguage;
}

export default (state = storedLanguage, action) => {
  switch (action.type) {
    case RECEIVE_LANGUAGE:
      return {
        language: action.language,
      };
    case CLEAR_LANGUAGE:
      return  null;
    default:
      return state;
  }
}
