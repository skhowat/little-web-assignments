var planets = document.querySelector('.planets-list');

var promise = $.ajax({
  url: 'http://swapi.co/api/planets'
});

promise.done(function(data){
  console.log('got the data', data);

  putOnPage(data); 

});

function putOnPage(arr) {
  var templatePlural = document.querySelector('#planets-template-plural').innerHTML;

  var templateSingular = document.querySelector('#planets-template-singular').innerHTML;

  var totalHtml = '';

  for (var i=0; i<arr.results.length; i++) {
    if (arr.results[i].films.length !== 1) {
      var html = Mustache.render(templatePlural, arr.results[i]);
      totalHtml += html;
    }
    else {
      var html = Mustache.render(templateSingular, arr.results[i]);
      totalHtml += html;
    }
  }
  planets.innerHTML = totalHtml;
}
