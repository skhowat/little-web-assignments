import React from 'react';

class RecipeItem extends React.Component {
  render() {
    return(
      <li className="recipe-item">
        <img src={this.props.thumbnail} alt={this.props.title} />
        <div className="recipe-details">
          <h1><a href={this.props.href}>{this.props.title}</a></h1>
          <p>Ingredients: {this.props.ingredients}</p>
        </div>
      </li>
    );
  }
}

class RecipeList extends React.Component {

  render() {
    let recipes = this.props.recipes.map((x, i) => {
      return <RecipeItem thumbnail={x.thumbnail} href={x.href} title={x.title} ingredients={x.ingredients} key={i + x}/>
    });

    return(
      <ul className="recipe-list">
        {recipes}
      </ul>
    );
  }
}

module.exports = RecipeList;
