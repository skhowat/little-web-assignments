import $ from 'jquery';
import { store, actions } from './Store.js';

const bucketId = '7edc93a5-a4bc-47e1-9fa9-979c8a03cecd';

const Api = {

  refreshData: function() {
    $.ajax({
      // Making the GET request.
      url: 'https://spiffy-todo-api.herokuapp.com/api/items?bucketId=' + bucketId
    })
    .done((data) => {
      // console.log('refreshed data', data);
      // Using store.dispatch to call the reducer with the REFRESH action and the updated array of items returned by the api GET call.
      // store.dispatch(Object.assign({}, actions.REFRESH, { items: data.items }));
      store.dispatch({ type: 'REFRESH', items: data.items });
    });
  },

  delete: function(id) {
    // console.log('deleting', id);
    $.ajax({
      // Making the DELETE request.
      url: `https://spiffy-todo-api.herokuapp.com/api/item/${id}?bucketId=${bucketId}`,
      method: 'DELETE'
    })
    // Passing in a function to make a GET request that will return the udated data and then update the data in the store.
    .done(() => this.refreshData());
  },

  createNewItem: function(inputText) {
    $.ajax({
      // Creating a new item with POST.
      url: 'https://spiffy-todo-api.herokuapp.com/api/item?bucketId=' + bucketId,
      method: 'POST',
      data: {
        text: inputText
      }
    })
    .done(() => {
      // Using store.dispatch with the CLEAR_INPUT action to clear the current input value.
      store.dispatch(Object.assign({}, actions.CLEAR_INPUT));
      // Making a GET request that will return the udpated data and then update the datat in the store.
      this.refreshData();
    });
  },

  markComplete: function(id) {
    // console.log('toggling', id);
    $.ajax({
      // Toggling isComplete value with POST.
      url: `https://spiffy-todo-api.herokuapp.com/api/item/${id}/togglestatus?bucketId=${bucketId}`,
      method: 'POST'
    })
    // Passing in a function to make a GET request that will return the udated data and then update the data in the store.
    .done(() => this.refreshData());
  }

}

module.exports = Api;
