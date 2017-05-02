import React from 'react';
import './index.css';

class Clock extends React.Component {

  constructor(props) {
    super();

    console.log('props', props);

    let theDate = props.date !== undefined ? props.date : new Date();

    this.state = {
      date: theDate
    };

  }

  componentDidMount() {
    console.log('Has props?', this.props);

    if (this.props.date === undefined) {
      setInterval(() => {
        this.setState({
          date: new Date()
        });
      }, 1000);
    }

  }

  render() {

    let date = this.props.date ? this.props.date : this.state.date;

    return(
      <div className="clock">{date.toLocaleTimeString()}</div>
    );
  }
}

module.exports = Clock;
