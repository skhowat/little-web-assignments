import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Counter from './Counter.js';
import Affirmations from './Affirmations.js';
import Mimicker from './Mimicker.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <Link to="/counter">Counter</Link><span>      </span>
          <Link to="/affirmations">Affirmations</Link>
          <Link to="/mimicker">Mimicker</Link>


          <Route path="/counter" component={Counter} />
          <Route path="/affirmations" component={Affirmations} />
          <Route path="/mimicker" component={Mimicker} />
        </div>
      </Router>

    );
  }
}

export default App;
