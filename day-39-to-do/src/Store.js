import { createStore } from 'redux';

const INPUT = { type: 'INPUT' };
const REFRESH = { type: 'REFRESH' };
const CLEAR_INPUT = { type: 'CLEAR_INPUT'};

const initialState = {
  inputValue: '',
  items: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INPUT':
      // console.log('input', action.inputValue);
      return {...state, inputValue: action.inputValue}
    case 'REFRESH':
      return {...state, items: action.items}
    case 'CLEAR_INPUT':
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
