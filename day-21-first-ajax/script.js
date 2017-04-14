var peopleList = document.querySelector('#people-list');

var promise = $.ajax({
  url: 'http://swapi.co/api/people'
});

promise.done(function(data) {
  console.log('got the data!', data);
  console.log(data.count);
  console.log('results', data.results);


  putOnPage(data);

});

function putOnPage(arr) {
  var templatePlural = document.querySelector('#people-template-plural').innerHTML;

  var templateSingular = document.querySelector('#people-template-singular').innerHTML;

  var totalHtml = '';

  for (var i = 0; i < arr.results.length; i++) {

    if (arr.results[i].films.length !== 1) {
      var html = Mustache.render(templatePlural, arr.results[i]);
      totalHtml += html;
    }

    else {
      var html = Mustache.render(templateSingular, arr.results[i]);
      totalHtml += html;
    }

  }
  peopleList.innerHTML = totalHtml;
}
