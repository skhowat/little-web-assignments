var sodaListUL = document.querySelector('#favorite-sodas');

$.ajax({
  url: 'api/favoritesoda'
})
.done(function(data) {
  console.log('got the data', data);

  for (var i=0; i<data.sodas.length; i++) {
    var li = document.createElement('li');
    li.textContent = data.sodas[i];
    sodaListUL.appendChild(li);
  }
});
