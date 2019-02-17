import faker from 'faker';
import moment from 'moment';

export const GET_LISTS_START = 'GET_LISTS_START';
export const GET_LISTS = 'GET_LISTS';
export const MOVE_CARD = 'MOVE_CARD';
export const MOVE_LIST = 'MOVE_LIST';
export const TOGGLE_DRAGGING = 'TOGGLE_DRAGGING';

const randomTransaction = () => {
  const transactions = ['Invoice', 'Sales Order', 'Transfer'];
  const transactionID = Math.floor(Math.random() * 30000) + 20000;
  const transactionType = transactions[Math.floor(Math.random() *3)];
  return `${transactionType} ${transactionID}`;
};

/**
 * @function getDate - Returns a moment.js date
 * @param {*} numberOfDays
 */
const getDate = (numberOfDays) => moment().add(numberOfDays, 'days').format('ll');

export function getLists(quantity) {
  return dispatch => {
    dispatch({ type: GET_LISTS_START, quantity });
    setTimeout(() => {
      const lists = [];
      let count = 0;
      for (let i = 0; i < quantity; i++) {
        const cards = [];
        const randomQuantity = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
        for (let ic = 0; ic < randomQuantity; ic++) {
          cards.push({
            id: count,
            companyName: faker.company.companyName(),
            city: faker.address.city(),
            title: randomTransaction()// faker.name.jobTitle()
          });
          count = count + 1;
        }
        lists.push({
          id: i,
          name: getDate(i), // faker.commerce.productName(),
          cards
        });
      }
      dispatch({ type: GET_LISTS, lists, isFetching: true });
    }, 1000); // fake delay
    dispatch({ type: GET_LISTS_START, isFetching: false });
  };
}

export function moveList(lastX, nextX) {
  return (dispatch) => {
    dispatch({ type: MOVE_LIST, lastX, nextX });
  };
}

export function moveCard(lastX, lastY, nextX, nextY) {
  return (dispatch) => {
    dispatch({ type: MOVE_CARD, lastX, lastY, nextX, nextY });
  };
}

export function toggleDragging(isDragging) {
  return (dispatch) => {
    dispatch({ type: TOGGLE_DRAGGING, isDragging });
  };
}
