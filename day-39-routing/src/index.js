import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import List from './List.js';
import About from './About.js';
import Detail from './Detail.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      people: [
        {
          name: 'Bob Smith',
          id: 1234,
          description: 'Some guy'
        },
        {
          name: 'Jane Doe',
          id: 3456,
          description: 'Some lady'
        }
      ]
    }
  }

  render() {
    return(
      <div>

        <nav>
          <ol>
            <li><Link to="/">List</Link></li>
            <li><Link to="/detail">Detail</Link></li>
            <li><Link to="/about">About</Link></li>
          </ol>
        </nav>

        <Route path="/" exact render={() => <List people={this.state.people} />} />
        <Route path="/detail/:id" render={(props) => {return <Detail people={this.state.people} id={props.match.params.id} />}} />
        <Route path="/about" component={About} />

      </div>
    );
  }
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
