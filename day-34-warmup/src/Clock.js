import React from 'react';

class Clock extends React.Component {
  constructor() {
    super();
    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    setInterval(() => this.setState({date: new Date()}), 1000);
  }

  render() {

    var currentTime = this.state.date.toLocaleTimeString();
    var currentHour = currentTime.slice(0,1);
    if (currentTime.length === 10) {
      currentHour = currentTime.slice(0,1);
    }
    if (currentTime.length === 11) {
      currentHour = currentTime.slice(0,2);
    }


    return (
      <div className="clock-div">{currentTime}</div>
    )
  }
}

module.exports = Clock;
