import {combineReducers} from 'redux'
import {SEARCH_CARD} from "./actionTypes";

const searchPage = (state = {}, action) => {
  switch (action.type) {
    case SEARCH_CARD:
      return Object.assign({}, state, action.payload);
    default:
      return state
  }
};

const reactGDPR = combineReducers({searchPage});

export default reactGDPR;