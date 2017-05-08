import React from "react";
import { store, counterActions } from './Store.js';

class Counter extends React.Component {

  constructor() {
    super();
    this.state = store.getState();
  }

  componentDidMount() {
    store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  down() {
    store.dispatch(counterActions.DECREMENT);
  }

  up() {
    store.dispatch(counterActions.INCREMENT);
  }

  // reset() {
  //   store.dispatch(RESET);
  // }

  render() {
    return (
      <div>
        <button onClick={() => this.down()}>-</button>
        <div>{this.state.number}</div>
        <button onClick={() => this.up()}>+</button>

        <div>
          <button onClick={() => store.dispatch(counterActions.RESET)}>Reset</button>
        </div>
      </div>

    );
  }
}

export default Counter;
