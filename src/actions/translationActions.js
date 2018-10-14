import { getTranslation } from './apiCalls';
import { receiveApiError } from './errorActions';

export const RECEIVE_TRANSLATION = 'RECEIVE_TRANSLATION';

export const fetchTranslation = (textArray, targetLanguage, key) => async (dispatch) => {
  let translationResult;
  try {
    translationResult = await getTranslation(textArray, targetLanguage);
  } catch(error) {
    console.log('Error translating: ', error);
    return;
  };
  if(translationResult.ok) {
    const translation = await translationResult.json();
    console.log('tranlsated text: ', translation);
    console.log('translation: ', translation);
    return dispatch({
      type: RECEIVE_TRANSLATION,
      translation,
    });
  } else {
    const message = await (await translationResult).text();
    return dispatch(receiveApiError(message));
  }
}
