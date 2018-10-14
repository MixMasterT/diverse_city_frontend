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
  // console.log('postUserResponse: ', postUserResponse.body;
  if(postUserResponse.ok) {
    const user = await postUserResponse.json();
    return dispatch({
      type: RECEIVE_USER,
      user,
    });
  } else {
    const message = await (await postUserResponse).text();
    console.log('postUserResponse.body: ', message);
    console.log('message: ', message);
    return dispatch(receiveApiError(message));
  }
}

export const loginUser = (credentials) => async (dispatch) => {
  let loginUserResponse;
  try {
    loginUserResponse = await apiCalls.loginUser(credentials);
  } catch(error) {
    console.log('Error logging user in: ', error);
    return;
  };
  if(loginUserResponse.ok) {
    const user = await loginUserResponse.json();
    console.log('user: ', user);
    return dispatch({
      type: RECEIVE_USER,
      user,
    });
  } else {
    return receiveApiError(loginUserResponse.statusText);
  }
}
