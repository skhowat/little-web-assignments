var promise = $.ajax({
  url: 'http://swapi.co/api/people'
});

promise.done(function(data) {
  console.log('got the data!', data);
  console.log(data.count);
  console.log('results', data.results);

  var peopleList = document.querySelector('#people-list');

  for (var i=0; i<data.results.length; i++) {
    console.log('each object', data.results[i]);

    var anLI = document.createElement('li');
    var name = document.createElement('h2');
    name.textContent = data.results[i].name;
    anLI.appendChild(name);


    var genderDiv = document.createElement('div');
    genderDiv.textContent = data.results[i].gender;
    anLI.appendChild(genderDiv);

    var hairColor = document.createElement('div');
    hairColor.textContent = data.results[i].hair_color;
    anLI.appendChild(hairColor);

    peopleList.appendChild(anLI);
  }
});
