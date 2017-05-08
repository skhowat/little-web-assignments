import React from 'react';
import { store, actions } from './AffirmationsStore.js';


class Affirmations extends React.Component {
  constructor() {
    super();
    this.state = store.getState();
  }

  componentDidMount() {
    store.subscribe(() => this.setState(store.getState()));
  }

  render() {
    return(
      <div>
        <p>{this.state.messages[this.state.index]}</p>
        <div>
          <button onClick={() => store.dispatch(actions.PREV)}>Prev</button>
          <button onClick={() => store.dispatch(actions.NEXT)}>Next</button>
        </div>
      </div>
    );
  }
}

export default Affirmations;
