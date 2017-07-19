import { createStore } from 'redux';

const initialState = {
  recipes: [],
  filters: [],
  recipeFilter: ''
};

const reducer = (state = initialState, action) => {
  console.log('store', action);
  switch(action.type) {
    case 'QUERY':
      return {...state, recipeFilter: action.recipeFilter}
    case 'REFRESH':
      return {...state, recipes: action.recipes}
    case 'ADD_FILTER':
      return {...state, filters: action.filters}
    case 'REMOVE_FILTER':
      return {...state, filters: action.filters}

    default: return state;
  }

};

const store = createStore(reducer);

module.exports = store;
