import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Query from './Query.js';
import RecipeList from './RecipeList.js';
import Filter from './Filter.js';
import $ from 'jquery';

class App extends Component {
  constructor() {
    super();
    this.state = {
      recipes: [],
      filters: []
    };
    this.recipeFilter = '';

    this.handleRecipeFilter = this.handleRecipeFilter.bind(this);
    this.handleIngredientFilter = this.handleIngredientFilter.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  makeAjaxCall() {
    let toCall;
    console.log('calling', this.state.filters, toCall);
    if (this.recipeFilter !== '' || this.state.filters.length !== 0) {
      console.log(this.state.filters);
      toCall = `/api/?i=${this.state.filters}&q=${this.recipeFilter}`;
    }
    else {
      this.setState({recipes: []});
      return;
    }

    $.ajax({
      url: toCall
    })
    .done((data) => {
      data = JSON.parse(data);
      let fixedData = data.results.map((x) => {
        if (x.thumbnail === "") {
          return {
            thumbnail: "no-image-available.png",
            href: x.href,
            title: x.title,
            ingredients: x.ingredients
          }
        }
        return {
          thumbnail: x.thumbnail,
          href: x.href,
          title: x.title,
          ingredients: x.ingredients
        }
      });
      this.setState({
        recipes: fixedData
      });
    });
  }

  componentDidMount() {
    this.makeAjaxCall();
  }

  handleRecipeFilter(input) {
    this.recipeFilter = input;
    this.makeAjaxCall();
  }

  handleIngredientFilter(input) {
    let copy = this.state.filters.slice();
    copy.push(input);
    this.setState({filters: copy}, () => this.makeAjaxCall());

  }

  handleClick(index) {
    let copy = this.state.filters.slice();
    copy.splice(index, 1);
    this.setState({filters: copy}, () => this.makeAjaxCall());
  }

  render() {
    return (
      <div>
        <Header />
        <div className="App">
          <Query onFilter={this.handleRecipeFilter}/>
          <RecipeList recipes={this.state.recipes} recipeFilter={this.recipeFilter}/>
          <Filter filters={this.state.filters} onFilter={this.handleIngredientFilter} onClick={this.handleClick}/>
          <Footer />
        </div>
    </div>
    );
  }
}

export default App;
