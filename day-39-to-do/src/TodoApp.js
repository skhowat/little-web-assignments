import React from 'react';
import $ from 'jquery';
import Api from './Api.js';

console.log(Api);
const bucketId = '7edc93a5-a4bc-47e1-9fa9-979c8a03cecd';


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
    // console.log(inputText);
    $.ajax({
      url: 'https://spiffy-todo-api.herokuapp.com/api/item?bucketId=' + bucketId,
      method: 'POST',
      data: {
        text: inputText
      }
    })
    .done((data) => {
      console.log('what did I post?', data);
    });
  }

  handleKeyUp(evt) {
    if (evt.keyCode === 13) {
      this.createNewItem(this.state.inputValue);
      this.setState({
        inputValue: ''
      });
      this.refreshData();
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
    console.log('clicked', id)
    $.ajax({
      url: `https://spiffy-todo-api.herokuapp.com/api/item/${id}/togglestatus?bucketId=${bucketId}`,
      method: 'POST'
    })
    .done(() => {
      this.refreshData();
    });
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
