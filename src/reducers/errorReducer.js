/*
  Error Reducer
*/

export default (state = {}, action) => {
  switch (action.type) {
    case 'RECEIVE_ERROR':
      return {
        apiError: action.error,
      };
    default:
      return state;
  }
}
