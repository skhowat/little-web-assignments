import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



class Clicker extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0
    };
  }

  handleClick() {
    this.setState({
      value: this.state.value + 1
    });
  }

  render() {
    console.log('state?', this.state);
      return (
        <div className="clicker" onClick={() => {this.handleClick();}}>{this.state.value }</div>
      )
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Clicker />
        <Clicker />
        <Clicker />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
