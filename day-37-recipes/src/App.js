import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Query from './Query.js';
import RecipeList from './RecipeList.js';
import Filter from './Filter.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      recipes: [
        {
          thumbnail: "http://img.recipepuppy.com/296547.jpg",
          href: "http://www.food.com/recipe/chicken-goulash-chicken-stew-187816",
          title: "Chicken Goulash",
          ingredients: "bacon, chicken, chicken broth, cream, dill pickle, flour, garlic, mushroom, olive oil, onions, paprika, salt"
        },
        {
          thumbnail: "no-image-available.png",
          href: "http://recipe.aol.com/recipe/hunky-steak-serbian-steak-/126419",
          title: "Serbian Steak",
          ingredients: "sirloin steak, onions, ketchup, vegetable oil"
        }
      ],

      filters: ['pepper', 'cream', 'tomato']
    }
  }

  render() {
    return (
      <div>
        <Header />
        <div className="App">
          <Query />
          <RecipeList recipes={this.state.recipes}/>
          <Filter filters={this.state.filters}/>
          <Footer />
        </div>
    </div>
    );
  }
}

export default App;
