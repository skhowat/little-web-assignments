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
      filters: [],
    };
    this.recipeFilter = '';
    this.filters = [];

    this.handleRecipeFilter = this.handleRecipeFilter.bind(this);
    this.handleIngredientFilter = this.handleIngredientFilter.bind(this);
  }

  makeAjaxCall() {
    var toCall;
    if (this.filters.length === 0 && this.recipeFilter === '') {
      toCall = "/api/";
    }
    if (this.filters.length === 0 && this.recipeFilter !== '') {
      toCall = "/api/?q=" + this.recipeFilter;
    }
    if (this.filters.length !== 0 && this.recipeFilter !== '') {
      toCall = "/api/?i=" + this.filters + "&q=" + this.recipeFilter;
    }
    $.ajax({
      url: toCall
    })
    .done((data) => {
      data = JSON.parse(data);
      console.log('do I have data?', data);
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
    this.filters = copy;
    this.setState({filters: copy});
    this.makeAjaxCall();
  }

  render() {
    return (
      <div>
        <Header />
        <div className="App">
          <Query onFilter={this.handleRecipeFilter}/>
          <RecipeList recipes={this.state.recipes}/>
          <Filter filters={this.state.filters} onFilter={this.handleIngredientFilter}/>
          <Footer />
        </div>
    </div>
    );
  }
}

export default App;
