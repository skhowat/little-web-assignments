import React from 'react';
import './index.css';

class SimpleList extends React.Component {
  constructor() {
    super();
    this.state = {
      items: ['First', 'Second', 'Third']
    }
  }

  render() {
    return (
      <ul>
        {this.state.items.map((item, index) => <li className="simple-list" key={index}>{item}</li>)}
      </ul>
    )
  }
}

module.exports = SimpleList;
