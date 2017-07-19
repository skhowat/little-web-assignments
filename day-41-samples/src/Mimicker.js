import React from 'react';
import { createStore } from 'redux';

const reducer = (state = { value: '' }, action) => {

  switch(action.type) {
    case 'INPUT_CHANGE':
      return {...state, value: action.value};
    default: return state;
  }

}

const store = createStore(reducer);

class Mimicker extends React.Component {
  constructor() {
    super();

    this.state = store.getState();
  }

  componentDidMount() {
    store.subscribe(() => this.setState(store.getState));
  }

  handleChange(evt) {
    store.dispatch({ type: 'INPUT_CHANGE', value: evt.target.value});
  }

  render() {
    return (
      <div>
        <input onChange={(evt) => this.handleChange(evt)}/>
        <p style={{color: 'red', fontWeight: 'bold', fontSize: '2em'}}>{this.state.value}</p>
      </div>
    );
  }
}

module.exports = Mimicker;
