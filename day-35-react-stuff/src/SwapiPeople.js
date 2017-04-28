import React from 'react';
import $ from 'jquery';


class Person extends React.Component {
  render() {
    return(
      <li>
        <div>Name: {this.props.name}</div>
        <div>Birth Year: {this.props.birthYear}</div>
      </li>
    );
  }
}


class SwapiPeople extends React.Component {
  constructor() {
    super();

    this.state = {
      people: []
    };
  }

  componentDidMount() {
    $.ajax({
      url: 'http://swapi.co/api/people'
    })
    .done((data) => {
      console.log(data)
      this.setState({
        people: data.results
      })
    });
  }

  render() {
    console.log('rendering, but what is my state?', this.state);

    let people = this.state.people.map((x) => <Person key={x.url} name={x.name} birthYear={x.birth_year} />);

    return (
      <div>
        <ol>
          {people}
        </ol>
      </div>
    );
  }
}

module.exports = SwapiPeople;
