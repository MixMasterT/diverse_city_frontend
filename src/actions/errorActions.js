/*
  Error Actions
*/

export const RECEIVE_ERROR = 'RECEIVE_ERROR';

export const receiveError = (error) => ({
  type: RECEIVE_ERROR,
  error,
});
