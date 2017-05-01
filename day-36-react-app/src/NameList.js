import React from 'react';
import './index.css';

class NameList extends React.Component {
  constructor() {
    super();
    this.state = {
      names: [],
      firstName: '',
      lastName: ''
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: [evt.target.value]
    });
  }

  handleClick() {
    let copy = this.state.names.slice();
    let name = this.state.firstName + ' ' + this.state.lastName;
    copy.push(name);
    this.setState({
      names: copy,
      firstName: '',
      lastName: ''
    });

  }

  render() {
    let names = this.state.names.map((name, index) => {
      return <li key={index}>{name}</li>
    })
    return(
      <div>
        <input placeholder="First Name" name="firstName" onChange={this.handleChange} value={this.state.firstName}/>
        <input placeholder="Last Name" name="lastName" onChange={this.handleChange} value={this.state.lastName}/>
        <button onClick={this.handleClick}>Add</button>

        <ul>{names}</ul>
      </div>

    )
  }
}

module.exports = NameList;
