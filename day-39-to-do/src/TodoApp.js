import React from 'react';
import Api from './Api.js';
import { store, actions } from './Store.js';


class TodoApp extends React.Component {

  constructor() {
    super();
    this.state = store.getState();
  }


  componentDidMount() {
    store.subscribe(() => this.setState(store.getState()));
    Api.refreshData();
  }

  handleKeyUp(evt) {
    if (evt.keyCode === 13 && this.state.inputValue !== '') {
      Api.createNewItem(this.state.inputValue);
    }
  }

  handleChange(evt) {
    store.dispatch(Object.assign({}, actions.INPUT, {inputValue: evt.target.value}));
  }

  handleDelete(id, evt) {
    evt.stopPropagation();
    Api.delete(id);
  }

  markComplete(id) {
    Api.markComplete(id);
  }

  render() {
    // console.log('state', this.state);

    const items = this.state.items.map((x) => {
        const className = x.isComplete ? 'complete' : '';

        return <li key={x.id} onClick={() => this.markComplete(x.id)} className={className}>
                  {x.text}
                  <button onClick={(evt) => this.handleDelete(x.id, evt)}>Delete</button>
                </li>});
    return (
      <div>
        <input
          onKeyUp={(evt) => this.handleKeyUp(evt)}
          onChange={(evt) => this.handleChange(evt)}
          value={this.state.inputValue}
          className="listInput"/>
        <ol className="itemList">
          {items}
        </ol>
      </div>
    );
  }
}

module.exports = TodoApp;
