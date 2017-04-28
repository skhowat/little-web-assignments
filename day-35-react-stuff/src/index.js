import React from 'react';
import ReactDOM from 'react-dom';
import SwapiPeople from './SwapiPeople.js';
import './index.css';


class Toggle extends React.Component {
  constructor() {
    super();
    this.state = {
      isToggleOn: 'ON'
    };

  }

  toggle() {
    this.setState({isToggleOn: this.state.isToggleOn === 'ON' ? 'OFF' : 'ON'});
  }

  render() {
    return(
      <div className="toggle-div" onClick={this.handleClick}>
        <div onClick={() => this.toggle()}>{this.state.isToggleOn}</div>
      </div>
    );
  }
}

class App extends React.Component {

  render() {
    console.log('test');
    return (
      <div>
        <Toggle />
        <SwapiPeople />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
