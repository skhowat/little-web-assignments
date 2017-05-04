import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const First = () => (
  <div className="info">
    <h1>First Page</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus cursus libero finibus semper cursus. Proin et dignissim enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam et gravida augue, consectetur ullamcorper ante. Sed sit amet rutrum odio. Maecenas elementum eu sem in tristique. Suspendisse.</p>
  </div>
)

const Second = () => (
  <div className="info">
    <h1>Second Page</h1>
    <p>Suspendisse potenti. Mauris eu molestie massa. Pellentesque non arcu non augue interdum vulputate. Sed sed odio ut neque volutpat consequat. Maecenas gravida lacus quis accumsan congue. Nulla facilisi. Nullam eu porta elit, sit amet pretium lorem. Cras egestas, lacus sed aliquam efficitur, ex nulla porttitor orci, sed fermentum urna nisl.</p>
  </div>
)

// const Third = () => (
//   <div className="info">
//     <h1>Third Page</h1>
//     <p>Praesent at tempus dolor, sit amet dapibus quam. Etiam pharetra feugiat quam condimentum pulvinar. Phasellus ut lorem justo. Vestibulum tellus justo, vulputate eu libero sed, sollicitudin hendrerit metus. Sed aliquet, justo at efficitur gravida, magna arcu pellentesque lectus, eu laoreet ex elit vel libero. Quisque feugiat rutrum suscipit. Nunc semper.</p>
//   </div>
// )

class Third extends React.Component {
  render() {
    return (
    <div className="info">
      <h1>Third Page</h1>
      <p>Praesent at tempus dolor, sit amet dapibus quam. Etiam pharetra feugiat quam condimentum pulvinar. Phasellus ut lorem justo. Vestibulum tellus justo, vulputate eu libero sed, sollicitudin hendrerit metus. Sed aliquet, justo at efficitur gravida, magna arcu pellentesque lectus, eu laoreet ex elit vel libero. Quisque feugiat rutrum suscipit. Nunc semper.</p>
    </div>
    )
  }
}

const App = () => (
  <Router>
    <div>
      <nav className="list">
        <ul>
          <li><Link to="/">First</Link> </li>
          <li><Link to="/second">Second</Link></li>
          <li><Link to="/third">Third</Link></li>
        </ul>
      </nav>

      <Route path="/" exact component={First}/>
      <Route path="/second" component={Second}/>
      <Route path="/third" component={Third}/>
    </div>
  </Router>
)

export default App;
