import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <h1>Home</h1>
    );
  }
}

// class App extends Component {
//   render() {
//     return (
//       <Router>
//         <ul>
//           <li><Link to="/"></Link>Home</li>
//         </ul>
//         <div>Test</div>
//         <Route path="/" component={Home} />
//       </Router>
//     );
//   }
// }

const App = () => (
  <Router>
    <div>Test</div>
  </Router>
)

export default App;
