import { createStore } from 'redux';

const INPUT = { type: 'INPUT' }; // Handles any change from the input box
const REFRESH = { type: 'REFRESH' }; // Updates the current state with any new items from the ajax call
const CLEAR_INPUT = { type: 'CLEAR_INPUT'}; // Resets the current inputValue

const initialState = {
  inputValue: '',
  items: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INPUT':
      // console.log('input', action.inputValue);
      // Updates the current inputValue
      return {...state, inputValue: action.inputValue}
    case 'REFRESH':
      // Updates the items array to reflect the items returned by the api
      return {...state, items: action.items}
    case 'CLEAR_INPUT':
        // Resets the current inputValue 
        return {...state, inputValue: ''}
    default: return state;
  }

};

const store = createStore(reducer);

module.exports = {
  store: store,
  actions: {
    INPUT: INPUT,
    REFRESH: REFRESH,
    CLEAR_INPUT: CLEAR_INPUT
  }
}
