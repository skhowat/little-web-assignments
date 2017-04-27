import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Counter from './Counter.js';
import TickCounter from './TickCounter.js';
import Clock from './Clock.js';
import SuperClock from './SuperClock.js';

class App extends React.Component {
  render() {
    return (
      <div>
        <Counter />
        <TickCounter />
        <Clock />
        <SuperClock />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
