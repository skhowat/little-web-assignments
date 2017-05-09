import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import TodoApp from './TodoApp.js';

const Home = () => <div>Home Stuff Goes Here</div>;
const Gallery = () => <div>Gallery Stuff Goes Here</div>;

class App extends React.Component {

  render() {
    return (

      <Router>
        <div>
          <div><Link to="/app">ToDo List</Link></div>
          <Route path="/" exact component={Home} />
          <Route path="/app" component={TodoApp} />
          <Route path="/gallery" component={Gallery} />
        </div>
      </Router>

    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
