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

  

}

module.exports = Api;
