import React from 'react';

class Query extends React.Component {

  handleKeyUp(evt) {
    if(evt.keyCode !== 13) {
      return;
    }
    this.props.onFilter(evt.target.value);
    evt.target.value = '';
  }

  render() {
    return (
      <div className="query-div">
        <input placeholder="Search Query" onKeyUp={(evt) => this.handleKeyUp(evt)}/>
      </div>

    );
  }
}

module.exports = Query;
