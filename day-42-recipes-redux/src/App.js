import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Query from './Query.js';
import RecipeList from './RecipeList.js';
import Filter from './Filter.js';
import $ from 'jquery';
import store from './store.js';

class App extends Component {
  constructor() {
    super();
    this.state = store.getState();
      // recipes: [],
      // filters: []

    // this.recipeFilter = '';

    this.handleRecipeFilter = this.handleRecipeFilter.bind(this);
    this.handleIngredientFilter = this.handleIngredientFilter.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  // componentDidMount() {
  //   store.subscribe(() => this.setState(store.getState()));
  // }

  makeAjaxCall() {
    let toCall;
    console.log('calling', this.state);
    if (this.state.recipeFilter !== '' || this.state.filters.length !== 0) {
      console.log(this.state);
      toCall = `/api/?i=${this.state.filters}&q=${this.state.recipeFilter}`;
      console.log(toCall);
    }
    else {
      // this.setState({recipes: []});
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
      store.dispatch({ type: 'REFRESH',
        recipes: fixedData
      });
    });
  }

  componentDidMount() {
    store.subscribe(() => this.setState(store.getState()));
    this.makeAjaxCall();
  }

  handleRecipeFilter(input) {
    // this.setState({recipeFilter: input});
    store.dispatch({ type: 'QUERY', recipeFilter: input});
    // this.recipeFilter = input;
    this.makeAjaxCall();
  }

  handleIngredientFilter(input) {
    let copy = this.state.filters.slice();
    copy.push(input);
    store.dispatch({ type: 'ADD_FILTER', filters: copy });
    this.makeAjaxCall();
    // this.setState({filters: copy}, () => this.makeAjaxCall());
  }

  handleClick(index) {
    let copy = this.state.filters.slice();
    copy.splice(index, 1);
    store.dispatch({ type: 'REMOVE_FILTER', filters: copy});
    this.makeAjaxCall();
    // this.setState({filters: copy}, () => this.makeAjaxCall());
  }

  render() {
    return (
      <div>
        <Header />
        <div className="App">
          <Query onFilter={this.handleRecipeFilter}/>
          <RecipeList recipes={this.state.recipes} recipeFilter={this.state.recipeFilter}/>
          <Filter filters={this.state.filters} onFilter={this.handleIngredientFilter} onClick={this.handleClick}/>
          <Footer />
        </div>
    </div>
    );
  }
}

export default App;
