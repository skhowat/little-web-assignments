import { createStore } from 'redux';


const NEXT = { type: 'NEXT' };
const PREV = { type: 'PREV' };
const messages = [
  'You totally deserve a cookie',
  'Your hair looks awesome', 'People are always glad to hear from you, even when it takes you 3 days to return their calls',
  'You write great affirmations'
];

const initialState = {
  index: 0,
  messages: messages
};

const affirmationReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'NEXT':
      if (state.index === state.messages.length - 1) {
        return {...state, index: 0 };
      }
      return {...state, index: state.index + 1 };

    case 'PREV':
      if (state.index === 0) {
        return {...state, index: state.messages.length - 1 }
      }
      return {...state, index: state.index -1 };

    default: return state;
  }
}


const store = createStore(affirmationReducer);

module.exports = {
  store: store,
  actions: {
    NEXT: NEXT,
    PREV: PREV
  }
}
