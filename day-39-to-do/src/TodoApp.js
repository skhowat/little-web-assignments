import React from 'react';
import Api from './Api.js';

console.log(Api);


class TodoApp extends React.Component {

  constructor() {
    super();
    this.state = {
      inputValue: '',
      items: []
    };

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
    this.refreshData();
  }

  createNewItem(inputText) {
    Api.createNewItem(inputText, () => this.refreshData());
  }

  handleKeyUp(evt) {
    if (evt.keyCode === 13) {
      this.createNewItem(this.state.inputValue);
      this.setState({
        inputValue: ''
      });
    }
  }

  handleChange(evt) {
    this.setState({
      inputValue: evt.target.value
    });
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
