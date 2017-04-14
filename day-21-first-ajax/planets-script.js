var planets = document.querySelector('.planets-list');

var promise = $.ajax({
  url: 'http://swapi.co/api/planets'
});

promise.done(function(data){
  console.log('got the data', data);

  putOnPage(data);

  // for (var i=0; i<data.results.length; i++) {
  //   var anLI = document.createElement('li');
  //
  //   var planetName = document.createElement('h1');
  //   planetName.textContent = data.results[i].name;
  //   anLI.appendChild(planetName);
  //
  //   var films = document.createElement('div');
  //   if (data.results[i].films.length !== 1) {
  //     films.textContent = 'Appears in ' + data.results[i].films.length + ' films';
  //   }
  //   else {
  //     films.textContent = 'Appears in ' + data.results[i].films.length + ' film';
  //   }
  //   anLI.appendChild(films);
  //
  //   var population = document.createElement('div');
  //   population.textContent = 'Population: ' + data.results[i].population;
  //   anLI.appendChild(population);
  //
  //   var terrain = document.createElement('div');
  //   terrain.textContent = 'Terrain: ' + data.results[i].terrain;
  //   anLI.appendChild(terrain);
  //
  //   planets.appendChild(anLI);
  // }
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
