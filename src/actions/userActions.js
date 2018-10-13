import * as apiCalls from './apiCalls';

export const POST_USER = 'POST_USER';

export const postUser = (userObject) => async (dispatch) => {
  let postUserResponse;
  try {
    postUserResponse = await apiCalls.postUser(userObject);
  } catch(error) {
    console.log('Error posting user: ', error);
    return;
  };
  console.log('postUserResponse: ', postUserResponse);
  if(postUserResponse.ok) {    
    const user = await postUserResponse.json();
    console.log('user: ', user);
    return dispatch({
      type: POST_USER,
      user,
    });
  }
}

export const loginUser = (credentials) => async (dispatch) => {
  let loginUserResponse;
  try {
    loginUserResponse = await apiCalls.loginUser(credentials);
  } catch(error) {
    console.log('Error posting user: ', error);
    return;
  };
  const user = await loginUserResponse.json();
  console.log('user: ', user);
  return dispatch({
    type: POST_USER,
    user,
  });
}
