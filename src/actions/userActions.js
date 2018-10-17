import * as apiCalls from "./apiCalls";
import { receiveApiError, receiveFrontendError } from './errorActions';

const DEFAULT_LOGGED_IN_SCREEN = '/browse';
const LOGIN_PATH = '/login';

const storeUserLocally = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
};

export const RECEIVE_USER = 'RECEIVE_USER';
export const CLEAR_USER = 'CLEAR_USER';

export const postUser = (userObject, history) => async (dispatch) => {
  let postUserResponse;
  try {
    postUserResponse = await apiCalls.postUser(userObject);
  } catch(error) {
    console.log('Error posting user: ', error);
    return;
  };
  if(postUserResponse.ok) {
    const user = await postUserResponse.json();
    storeUserLocally(user);
    history.push(DEFAULT_LOGGED_IN_SCREEN);
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
    storeUserLocally(user);
    history.push(DEFAULT_LOGGED_IN_SCREEN); // redirect to home screen upon successful login
    return dispatch({
      type: RECEIVE_USER,
      user,
    });
  } else {
    const message = await (await loginUserResponse).text();
    return dispatch(receiveApiError(message));
  }
}

export const logoutUser = () => dispatch => {
  console.log('logout user called!');
  localStorage.removeItem('user');
  return dispatch({
    type: CLEAR_USER,
  })
}

export const fetchUser = (user, history) => async dispatch => {
  if(!user) {
    history.push(LOGIN_PATH);
    return;
  }
  if(!user.phone) {
    return dispatch(receiveFrontendError('Cannot fetch user with no phone number!'));
  }
  let getUserReponse;
  try {
    getUserReponse = await apiCalls.getUser(user.phone);
  } catch(error) {
    console.log('Error fetching user: ', error);
    return;
  };
  if(getUserReponse.ok) {
    const user = await getUserReponse.json();
    storeUserLocally(user);
    return dispatch({
      type: RECEIVE_USER,
      user,
    });
  } else {
    const message = await (await getUserReponse).text();
    return dispatch(receiveApiError(message));
  }
}

// export const fetchUser = () => (dispatch, getState) => {
//   const user = getState().userReducer.user;
//   if(!user) {
//
//   }
//   const userPhone = user.phone;
//   dispatch({type: "FETCH_USER"});
//
//   const config = {
//     method: 'get',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//   };
//
//   fetch(`${apiCalls.root}users/${userPhone}`, config).then((response) => {
//     const body = response.json();
//     return body.then(user => {
//       if (user) {
//         return dispatch({type: "RECEIVE_USER", user});
//       } else {
//         return dispatch({type: "RECEIVE_API_ERROR"});
//       }
//     })
//   });
// };
