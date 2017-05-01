import React from 'react';
import './index.css';

class List extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],
      value: ''
    }

    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    this.setState({value: evt.target.value});
  }

  handleKeyUp(evt) {
    if (evt.keyCode === 13) {
      let copy = this.state.items.slice();
      copy.push(this.state.value);
      this.setState({items: copy, value: ''});
    }
  }

  handleClick(index) {
    let copy = this.state.items.slice();
    copy.splice(index, 1);
    this.setState({items: copy});
  }

  render() {
    let items = this.state.items.map((item, index) => {
      return <li onClick={() => this.handleClick(index)} key={index}>{item}</li>
    });

    return (
      <div className="simple-list">
        <input
          onKeyUp={this.handleKeyUp} onChange={this.handleChange} value={this.state.value}/>
        <ul>
          {items}
        </ul>
      </div>
    )
  }
}

module.exports = List;
