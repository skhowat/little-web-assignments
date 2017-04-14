var films = document.querySelector('.films');

var promise = $.ajax({
  url: 'http://swapi.co/api/films'
});

promise.done(function(data) {
  // console.log('got the data', data);

  putOnPage(data);

});

function putOnPage(arr) {
  var template = document.querySelector('#film-template').innerHTML;

  for (var i=0; i<arr.results.length; i++) {
    arr.results[i].release_date = arr.results[i].release_date.substr(0,4);
  }

  var totalHtml = '';

  for (var i=0; i<arr.results.length; i++) {
    var html = Mustache.render(template, arr.results[i]);
    totalHtml += html;
  }

  films.innerHTML = totalHtml;
}
