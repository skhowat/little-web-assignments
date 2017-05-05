import React from 'react';
import $ from 'jquery';

const bucketId = '7edc93a5-a4bc-47e1-9fa9-979c8a03cecd';

class TodoApp extends React.Component {

  constructor() {
    super();
    this.state = {
      inputValue: ''
    };
  }

  createNewItem(inputText) {
    console.log(inputText);
    $.ajax({
      url: 'https://spiffy-todo-api.herokuapp.com/api/item?bucketId=' + bucketId,
      method: 'POST',
      data: {
        text: inputText
      }
    })
    .done((data) => {
      console.log('what do I get back?', data);
    });
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

  render() {
    return (
      <div>
        <input
          onKeyUp={(evt) => this.handleKeyUp(evt)}
          onChange={(evt) => this.handleChange(evt)}
          value={this.state.inputValue} />
      </div>
    );
  }
}

module.exports = TodoApp;
