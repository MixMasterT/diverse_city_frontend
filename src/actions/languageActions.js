/*
  Language Actions
*/

export const RECEIVE_LANGUAGE = 'RECEIVE_LANGUAGE';
export const CLEAR_LANGUAGE = 'CLEAR_LANGUAGE';

export const receiveLanguage = (language) => dispatch => {
  localStorage.setItem('language', JSON.stringify(language));
  return dispatch({
    type: RECEIVE_LANGUAGE,
    language,
  });
}

export const clearLanguage = () => dispatch => {
  localStorage.removeItem('language');
  return dispatch({
    type: CLEAR_LANGUAGE,
  });
}
