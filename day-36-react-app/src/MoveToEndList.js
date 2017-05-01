import React from 'react';
import './index.css';

class MoveToEndList extends React.Component {
  constructor() {
    super();
    this.state = {
      items: []
    }
  }

  handleKeyUp(evt) {
    if (evt.keyCode === 13) {
      let copy = this.state.items.slice();
      copy.push(evt.target.value);
      this.setState({items: copy});
      evt.target.value = '';
    }
  }

  handleClick(index) {
    let copy = this.state.items.slice();
    let item = copy.splice(index, 1);
    copy.push(item);
    this.setState({items:copy});
  }

  render() {
    let items = this.state.items.map((item, index) => {
      return <li onClick={() => this.handleClick(index)} key={index}>{item}</li>
    });

    return (
      <div>
        <input
          onKeyUp={(evt) => this.handleKeyUp(evt)}
        />

        <ul>{items}</ul>
      </div>
    )
  }
}

module.exports = MoveToEndList;
