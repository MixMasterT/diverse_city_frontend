/*
  Goal Reducer
*/
import { mockGoals } from "../fixtures/mockGoals";
const WHICH_STATE = "Prod";
var DEFAULT_STATE = {};
if (WHICH_STATE === "Dev") {
  DEFAULT_STATE = { goals: mockGoals || {} };
}

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case "FETCH_GOALS":
      return {
        ...state,
        fetching: true,
      }
    case "UPDATE_GOALS":
      return {
        ...state,
        goals: action.goals,
        fetching: false
      };
    default:
      return state;
  }
};
