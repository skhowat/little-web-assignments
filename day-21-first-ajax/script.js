var peopleList = document.querySelector('#people-list');

var promise = $.ajax({
  url: 'http://swapi.co/api/people'
});

promise.done(function(data) {
  console.log('got the data!', data);
  console.log(data.count);
  console.log('results', data.results);


  putOnPage(data);


  // for (var i=0; i<data.results.length; i++) {
  //   console.log('each object', data.results[i]);
  //
  //   var anLI = document.createElement('li');
  //   var name = document.createElement('h2');
  //   name.textContent = data.results[i].name;
  //   anLI.appendChild(name);
  //
  //   var films = document.createElement('div');
  //
  //     if (data.results[i].films.length !== 1){
  //       films.textContent = 'Appears in ' + data.results[i].films.length + ' films';
  //     }
  //     else {
  //       films.textContent = 'Appears in ' + data.results[i].films.length + ' film';
  //     }
  //
  //   anLI.appendChild(films);
  //
  //   var genderDiv = document.createElement('div');
  //   genderDiv.textContent = data.results[i].gender;
  //   anLI.appendChild(genderDiv);
  //
  //   var hairColor = document.createElement('div');
  //   hairColor.textContent = data.results[i].hair_color;
  //   anLI.appendChild(hairColor);
  //
  //   peopleList.appendChild(anLI);
  // }
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
