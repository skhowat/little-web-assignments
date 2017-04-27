import React from 'react';

class TickCounter extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
    }
  }

  componentDidMount() {
    setInterval(() => this.setState({value:this.state.value +1}), 1000);
  }

  render() {
    return (
      <div className='tick-counter-div'>{this.state.value}</div>
    )
  }
}

module.exports = TickCounter;
