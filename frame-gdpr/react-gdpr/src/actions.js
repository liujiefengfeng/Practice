import {SEARCH_CARD} from "./actionTypes";
import axios from "axios";

export const searchByCard = (cardNumber) => dispatch => {
  axios.get(`/api/infos/${cardNumber}`)
    .then(response => dispatch(receiveSearchResult(response)))
    .catch(error => console.log('error', error))
};

const receiveSearchResult = (response) => ({
  type: SEARCH_CARD,
  payload: response
});