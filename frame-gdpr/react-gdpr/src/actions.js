import {SEARCH_CARD} from "./actionTypes";
import axios from "axios";

export const searchByCard = (cardNumber) => dispatch => {
  axios.get(`http://localhost:3000/infos/${cardNumber}`)
    .then(response => {
      dispatch(() => ({
        type: SEARCH_CARD,
        payload: response
      }))
    })
    .catch(error => console.log('error', error))
};