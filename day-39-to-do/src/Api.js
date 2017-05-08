import $ from 'jquery';

const bucketId = '7edc93a5-a4bc-47e1-9fa9-979c8a03cecd';

const Api = {

  refreshData: function(cb) {
    $.ajax({
      url: 'https://spiffy-todo-api.herokuapp.com/api/items?bucketId=' + bucketId,
    })
    .done((data) => {
      console.log('refreshed data', data);
      cb(data);
    });
  },

  delete: function(id, cb) {
    console.log('deleting', id);
    $.ajax({
      url: `https://spiffy-todo-api.herokuapp.com/api/item/${id}?bucketId=${bucketId}`,
      method: 'DELETE'
    })
    .done(cb);
  },

  createNewItem: function(inputText, cb) {
    $.ajax({
      url: 'https://spiffy-todo-api.herokuapp.com/api/item?bucketId=' + bucketId,
      method: 'POST',
      data: {
        text: inputText
      }
    })
    .done(cb);
  },

  markComplete: function(id, cb) {
    $.ajax({
      url: `https://spiffy-todo-api.herokuapp.com/api/item/${id}/togglestatus?bucketId=${bucketId}`,
      method: 'POST'
    })
    .done(cb);    
  }

}

module.exports = Api;
