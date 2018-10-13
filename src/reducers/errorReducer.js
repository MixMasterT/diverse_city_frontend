/*
  Error Reducer
*/

export default (state = {}, action) => {
  switch (action.type) {
    case 'RECEIVE_ERROR':
      return {
        error: action.error,
      };
    default:
      return state;
  }
}
