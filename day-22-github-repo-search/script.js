var searchQuery = document.querySelector('#search-query');
var nav = document.querySelector('#navigation');
var previous = document.querySelector('#previous');
var next = document.querySelector('#next');
var pageNumber = document.querySelector('#page-number');
var repos = document.querySelector('#repos');

var page = 1;
var totalResults;
var pageCount;


function ajaxCall() {
  repos.innerHTML = '';

  var promise = $.ajax({
    url: 'https://api.github.com/search/repositories?q=' + searchQuery.value + '&page=' + page
  });

  promise.done(function(data){
    console.log('got the data', data);
    totalResults = data.total_count;
    pageCount = Math.ceil(totalResults/30);

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

    nav.style.display = 'block';
    pageNumber.innerHTML = page;

    if (page === 1) {
      previous.classList.add('grayed');
    }

    if (page === 2) {
      previous.classList.remove('grayed');
    }

    if (page === pageCount) {
      next.classList.add('grayed');
    }

    if (page === (pageCount - 1)) {
      next.classList.remove('grayed');
    }

  });
}


searchQuery.addEventListener('keyup', function(evt) {
  console.log(searchQuery.value);
  if (evt.keyCode !== 13) {
    return;
  }
  ajaxCall();
});

next.addEventListener('click', function() {
  if (page < pageCount) {
    page += 1;
    ajaxCall();
  }
});

previous.addEventListener('click', function() {
  if (page > 1) {
    page -= 1;
    ajaxCall();
  }
});
