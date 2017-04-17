var click = document.querySelector("#click-me");
var swapiPeopleOL = document.querySelector('#swapi-people')
var detailsDiv = document.querySelector('#details');
var detailTemplate = document.querySelector('#detail-template').innerHTML;

click.addEventListener('click', function() {
  var att = click.getAttribute('data-id');
  alert(att);
});

var ajaxData;

$.ajax({
  url: 'http://swapi.co/api/people'
})
.done(function(data) {
  ajaxData = data;
  var template = document.querySelector("#people-template").innerHTML;

  var html = '';

  for (var i=0; i<data.results.length; i++) {
    html += Mustache.render(template, {
      index: i,
      name: data.results[i].name
    });
  }
  swapiPeopleOL.innerHTML = html;

});


swapiPeopleOL.addEventListener('click', function(evt) {
  if (evt.target.tagName === 'LI') {
    var index = evt.target.getAttribute('data-index');
    var person = ajaxData.results[index];

    detailsDiv.innerHTML = Mustache.render(detailTemplate, person);
  }
});
