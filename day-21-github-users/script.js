var promise = $.ajax({
  url: 'https://api.github.com/search/users?q=stevie'
});

console.log(promise);

promise.done(function(data) {
  console.log('got the data!', data);

  console.log(data.items.length);


  var users = document.querySelector('#users');
    for(i=0; i<data.items.length; i++) {

      var anLI = document.createElement('li');

      var avatar = document.createElement('img');
      avatar.src = data.items[i].avatar_url;
      // avatar.height = "50";
      // avatar.width = "50";
      anLI.appendChild(avatar);

      var userLink = document.createElement('a');
      userLink.href = data.items[i].html_url;
      userLink.textContent = data.items[i].login;
      anLI.appendChild(userLink);

      users.appendChild(anLI);
    }

});
