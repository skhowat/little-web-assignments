var films = document.querySelector('.films');

var promise = $.ajax({
  url: 'http://swapi.co/api/films'
});

promise.done(function(data) {
  // console.log('got the data', data);

  putOnPage(data);
  // for (var i=0; i<data.results.length; i++) {
    // console.log(data.results[i]);

    // var anLI = document.createElement('li');
    //
    // var title = document.createElement('h1');
    // title.textContent = data.results[i].title;
    // anLI.appendChild(title);
    //
    // var release = document.createElement('h2');
    // release.textContent =  data.results[i].release_date.substr(0,4);
    // anLI.appendChild(release);
    //
    // var openingCrawl = document.createElement('div');
    // openingCrawl.textContent = data.results[i].opening_crawl;
    // openingCrawl.className = "opening-crawl";
    // anLI.appendChild(openingCrawl);
    //
    // films.appendChild(anLI);
  // }

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
