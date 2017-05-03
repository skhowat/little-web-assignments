import React from 'react';

class Filter extends React.Component {
  handleKeyUp(evt) {
    if (evt.keyCode !== 13) {
      return;
    }
    this.props.onFilter(evt.target.value);
    evt.target.value = '';
  }

  handleClick(i) {
    this.props.onClick(i);
  }

  render() {
    let filteredItems = this.props.filters.map((x, i) => <li key={i + x} onClick={() => this.handleClick(i)}>{x}</li>);
    return(
      <div className="filter-list">
        <p>Would you also like to filter by ingredients?</p>
        <input placeholder="ingredient" onKeyUp={(evt) => this.handleKeyUp(evt)}/>
        <ul>
          {filteredItems}
        </ul>
      </div>
    );
  }
}

module.exports = Filter;
