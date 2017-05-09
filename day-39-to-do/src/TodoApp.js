import React from 'react';
import Api from './Api.js';
import { store, actions } from './Store.js';


class TodoApp extends React.Component {

  constructor() {
    super();
    //Setting state to reflect the store.
    this.state = store.getState();
  }


  componentDidMount() {
    //Calling subscribe method on store to update the state any time the store changes.
    store.subscribe(() => this.setState(store.getState()));
    //Calling the api to get the current data.
    Api.refreshData();
  }

  handleKeyUp(evt) {
    //Setting up a conditional. If enter is pressed and the current input value is not blank, call the api function to create a new item. That function will then update the data.
    if (evt.keyCode === 13 && this.state.inputValue !== '') {
      Api.createNewItem(this.state.inputValue);
    }
  }

  handleChange(evt) {
    //Sending the new input information to the reducer to update the store.
    store.dispatch(Object.assign({}, actions.INPUT, {inputValue: evt.target.value}));
  }

  handleDelete(id, evt) {
    //stopPropogation method stops the rest of the code from running on the parent elements during bubbling
    evt.stopPropagation();
    //Calling delete function on the api. That function will then update the data.
    Api.delete(id);
  }

  markComplete(id) {
    //Calling the markComplete function on the api to toggle the isComplete value on this item. That function will then update the data. 
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
