/*
  Language Actions
*/

export const RECEIVE_LANGUAGE = 'RECEIVE_LANGUAGE';
export const CLEAR_LANGUAGE = 'CLEAR_LANGUAGE';

export const receiveLanguage = (language) => dispatch => {
  console.log('receiveLangauge callse');
  return dispatch({
    type: RECEIVE_LANGUAGE,
    language,
  });
}

export const clearLanguage = () => dispatch => {
  return dispatch({
    type: CLEAR_LANGUAGE,
  });
}
