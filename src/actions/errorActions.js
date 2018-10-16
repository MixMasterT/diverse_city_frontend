/*
  Error Actions
*/

export const RECEIVE_API_ERROR = 'RECEIVE_API_ERROR';
export const RESOLVE_ERROR = 'RESOLVE_ERROR';
export const RECEIVE_FRONTEND_ERROR = 'RECEIVE_FRONTEND_ERROR';

export const receiveApiError = (error) => {
  console.log('receiveApiError called with error: ', error);
  return ({
    type: RECEIVE_API_ERROR,
    error,
  });
}

export const receiveFrontendError = (error) => {
  console.log('Frontend error triggered: ', error);
  return ({
    type: RECEIVE_FRONTEND_ERROR,
    error,
  });
}

export const resolveError = () => {
  return ({
    type: RESOLVE_ERROR,
  });
}
