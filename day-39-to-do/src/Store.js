import { createStore } from 'redux';

const NEW = {type: 'NEW'};
const INPUT = {type: 'INPUT'};
const COMPLETE_TOGGLE = 'COMPLETE_TOGGLE';
const DELETE = 'DELETE';

const initialState = {
  inputValue: '',
  items: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INPUT':
      console.log('input', action.inputValue);
      return {...state, inputValue: action.inputValue}
    case 'NEW':
      return {...state, items: action.items, inputValue: ''}
  }

  return state;
};

const store = createStore(reducer);

module.exports = {
  store: store,
  actions: {
    NEW: NEW,
    COMPLETE_TOGGLE: COMPLETE_TOGGLE,
    DELETE: DELETE,
    INPUT: INPUT
  }
}
