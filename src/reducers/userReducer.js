/*
  User Reducer
*/

export default (state = {}, action) => {
  switch (action.type) {
    case 'RECEIVE_USER':
      return {
        user: action.user,
      };
    default:
      return state;
  }
}
