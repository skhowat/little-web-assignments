var users = document.querySelector('#users');

var searchQuery = document.querySelector('#search-query');
var nextButton = document.querySelector('#next-button');
var previousButton = document.querySelector('#previous-button');

var page = 1;
var totalResults;
var pageCount;


function makeAjaxCall() {
  users.innerHTML = '';

  var promise = $.ajax({
    url: 'https://api.github.com/search/users?q=' + searchQuery.value + '&page=' + page
  });


  promise.done(function(data) {
    console.log('got the data!', data);

    console.log(data.items.length);

    totalResults = data.total_count;
    pageCount = Math.ceil(totalResults/30);



    for(i=0; i<data.items.length; i++) {

      var anLI = document.createElement('li');

      var avatar = document.createElement('img');
      avatar.src = data.items[i].avatar_url;

      anLI.appendChild(avatar);

      var userLink = document.createElement('a');
      userLink.href = data.items[i].html_url;
      userLink.textContent = data.items[i].login;
      anLI.appendChild(userLink);

      users.appendChild(anLI);
    }

    if (page === 1) {
      previousButton.style.display = 'none';
    }
    else {
      previousButton.style.display = 'inline';
    }

    if (page >= pageCount) {
      nextButton.style.display = 'none';
    }
    else {
      nextButton.style.display = 'inline';
    }

  });
}

searchQuery.addEventListener('keyup', function(evt) {
  if (evt.keyCode !== 13) {
    return;
  }

  makeAjaxCall();
  anLI = document.createElement('li');
});


nextButton.addEventListener('click', function() {
  page += 1;
  makeAjaxCall();
});

previousButton.addEventListener('click', function() {
  page -= 1;
  makeAjaxCall();
});
