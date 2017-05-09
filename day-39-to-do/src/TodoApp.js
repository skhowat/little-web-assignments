import React from 'react';
import Api from './Api.js';
import { store, actions } from './Store.js';

// console.log(Api);


class TodoApp extends React.Component {

  constructor() {
    super();
    this.state = store.getState();
  }

  refreshData() {
    const cb = (data) => {
      this.setState({
        items: data.items
      });
    };
    Api.refreshData(cb);
  }

  componentDidMount() {
    store.subscribe(() => this.setState(store.getState()));
    // this.refreshData();
  }

  // createNewItem(inputText) {
  //   Api.createNewItem(inputText);
  // }

  handleKeyUp(evt) {
    if (evt.keyCode === 13) {
      Api.createNewItem(this.state.inputValue);
      // this.setState({
      //   inputValue: ''
      // });
    }
  }

  handleChange(evt) {
    // this.setState({
    //   inputValue: evt.target.value
    // });
    store.dispatch(Object.assign({}, actions.INPUT, {inputValue: evt.target.value}));
  }

  handleDelete(id, evt) {
    evt.stopPropagation();
    Api.delete(id, () => this.refreshData());
  }

  markComplete(id) {
    Api.markComplete(id, () => this.refreshData());
  }

  render() {
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
