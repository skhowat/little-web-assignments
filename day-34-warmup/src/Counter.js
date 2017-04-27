import React from 'react';

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
    };
  }

  up() {
    this.setState({
      value: this.state.value + 1
    });
  }

  down() {
    if (this.state.value === 0)
      {
        return;
      }
    else  {
      this.setState({
        value: this.state.value - 1
      });
    }
  }

  render() {
    return (
      <div className='counter-div'>
        <button onClick={() => {this.down();}}>Down</button>
        <span>{this.state.value}</span>
        <button onClick={() => {this.up();}}>Up</button>
      </div>
    )
  }
}


module.exports = Counter;
