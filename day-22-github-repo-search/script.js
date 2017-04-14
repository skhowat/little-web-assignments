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

    putOnPage(data);

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

function putOnPage(arr) {
  var template = document.querySelector('#search-results').innerHTML;

  var totalHtml = '';
  for (var i=0; i<arr.items.length; i++) {
    var html = Mustache.render(template, arr.items[i]);
    totalHtml += html;
  }

  repos.innerHTML = totalHtml;
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
