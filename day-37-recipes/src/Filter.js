import React from 'react';

class Filter extends React.Component {
  render() {
    let filteredItems = this.props.filters.map((x, i) => <li key={i + x}>{x}</li>);
    return(
      <div className="filter-list">
        <p>Would you also like to filter by ingredients?</p>
        <input placeholder="ingredient" />
        <ul>
          {filteredItems}
        </ul>
      </div>
    );
  }
}

module.exports = Filter;
