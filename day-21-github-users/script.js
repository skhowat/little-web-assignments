var users = document.querySelector('#users');

var searchQuery = document.querySelector('#search-query');

searchQuery.addEventListener('keyup', function(evt) {
  if (evt.keyCode !== 13) {
    return;
  }

  users.innerHTML = '';

  var promise = $.ajax({
    url: 'https://api.github.com/search/users?q=' + searchQuery.value
  });


  promise.done(function(data) {
    console.log('got the data!', data);

    console.log(data.items.length);



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

  });

});
