var searchQuery = document.querySelector('#search-query');
var repos = document.querySelector('#repos');


searchQuery.addEventListener('keyup', function(evt) {

  console.log(searchQuery.value);
  if (evt.keyCode !== 13) {
    return;
  }

  repos.innerHTML = '';

  var promise = $.ajax({
    url: 'https://api.github.com/search/repositories?q=' + searchQuery.value
  });

  promise.done(function(data){
    console.log('got the data', data);
    // console.log(data.items.length);
    for (var i=0; i<data.items.length; i++) {
      var anLI = document.createElement('li');

      var repoName = document.createElement('a');
      repoName.href = data.items[i].html_url;
      repoName.textContent = data.items[i].name;
      repoName.id = 'repo-name';
      anLI.appendChild(repoName);

      var owner = document.createElement('a');
      owner.href = data.items[i].owner.html_url;
      owner.textContent = 'by ' + data.items[i].owner.login;
      owner.id = 'owner';
      anLI.appendChild(owner);

      repos.appendChild(anLI);
    }

  });

});
