import $ from 'jquery';
import { store, actions } from './Store.js';

const bucketId = '7edc93a5-a4bc-47e1-9fa9-979c8a03cecd';

const Api = {

  refreshData: function() {
    $.ajax({
      url: 'https://spiffy-todo-api.herokuapp.com/api/items?bucketId=' + bucketId
    })
    .done((data) => {
      // console.log('refreshed data', data);
      store.dispatch(Object.assign({}, actions.REFRESH, { items: data.items }));
    });
  },

  delete: function(id) {
    // console.log('deleting', id);
    $.ajax({
      url: `https://spiffy-todo-api.herokuapp.com/api/item/${id}?bucketId=${bucketId}`,
      method: 'DELETE'
    })
    .done(() => this.refreshData());
  },

  createNewItem: function(inputText) {
    $.ajax({
      url: 'https://spiffy-todo-api.herokuapp.com/api/item?bucketId=' + bucketId,
      method: 'POST',
      data: {
        text: inputText
      }
    })
    .done(() => {
      store.dispatch(Object.assign({}, actions.CLEAR_INPUT));
      this.refreshData();
    });
  },

  markComplete: function(id) {
    // console.log('toggling', id);
    $.ajax({
      url: `https://spiffy-todo-api.herokuapp.com/api/item/${id}/togglestatus?bucketId=${bucketId}`,
      method: 'POST'
    })
    .done(() => this.refreshData());
  }

}

module.exports = Api;
