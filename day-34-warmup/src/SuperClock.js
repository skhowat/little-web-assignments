import React from 'react';

class SuperClock extends React.Component {
  constructor() {
    super();
    this.state = {
      date: new Date()
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        date: new Date()
      });
    }, 1000);
  }

  render() {
    return (
      <div className = "super-clock-div">
        <Clock date={this.state.date} offset={-2} timezone="California" />
        <Clock date={this.state.date} offset={0} timezone="Dallas"/>
        <Clock date={this.state.date} offset={1} timezone="New York"/>
      </div>
    );
  }
}

class Clock extends React.Component {

  render() {

    var hour = this.props.date.getHours() + this.props.offset;
    if (hour > 12) {
      hour -= 12;
    }

    var seconds = this.props.date.getSeconds();
    if (seconds < 10) {
      seconds = '0' + seconds;
    }

    return (
      <div>
        {this.props.timezone}: {hour}:{this.props.date.getMinutes()}:{seconds}
      </div>
    );
  }
}

module.exports = SuperClock;
