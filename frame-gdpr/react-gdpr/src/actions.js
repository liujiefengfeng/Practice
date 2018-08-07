import {SEARCH_CARD} from "./actionTypes";

export const searchByCard = (cardNumber) => {
  console.log('cardNumber  -----   ', cardNumber);
  return {
    type: SEARCH_CARD,
    cardNumber: '123'
  }
};