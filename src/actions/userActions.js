import * as apiCalls from './apiCalls';
import { receiveApiError } from './errorActions';
export const RECEIVE_USER = 'RECEIVE_USER';

export const postUser = (userObject) => async (dispatch) => {
  let postUserResponse;
  try {
    postUserResponse = await apiCalls.postUser(userObject);
  } catch(error) {
    console.log('Error posting user: ', error);
    return;
  };
  if(postUserResponse.ok) {
    const user = await postUserResponse.json();
    return dispatch({
      type: RECEIVE_USER,
      user,
    });
  } else {
    const message = await (await postUserResponse).text();
    return dispatch(receiveApiError(message));
  }
}

export const loginUser = (credentials, history) => async (dispatch) => {
  let loginUserResponse;
  try {
    loginUserResponse = await apiCalls.loginUser(credentials);
  } catch(error) {
    console.log('Error logging user in: ', error);
    return;
  };
  if(loginUserResponse.ok) {
    const user = await loginUserResponse.json();
    console.log('history: ', history);
    history.push('/home'); // redirect to home screen upon successful login
    return dispatch({
      type: RECEIVE_USER,
      user,
    });
  } else {
    const message = await (await loginUserResponse).text();
    return dispatch(receiveApiError(message));
  }
}
