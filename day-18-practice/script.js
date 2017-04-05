var specialDiv = document.querySelector('#special-div');

window.addEventListener('scroll', function(evt) {
  console.log(window.scrollY);

  if (window.scrollY > 1000) {
    specialDiv.style.display = 'none';
  }
  else {
    specialDiv.style.display = 'block';
  }
});


window.addEventListener('resize', function() {
  console.log('resizing');
});
