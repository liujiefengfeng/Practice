import {SEARCH_CARD} from "./actionTypes";

export const searchPage = (state = {}, action) => {
  switch (action.type) {
    case SEARCH_CARD:
      return Object.assign({}, state, action.payload);
    default:
      return state
  }
};