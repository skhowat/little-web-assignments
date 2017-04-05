var head = document.querySelector('h1');
var headerShrink = false;

window.addEventListener('scroll', function() {
  if (window.scrollY > 100 && headerShrink === false) {
    head.classList.add('header-transition');
    headerShrink = true;
  }
  else if (window.scrollY <= 100 && headerShrink === true) {
    head.classList.remove('header-transition');
    headerShrink = false;
  }
});

var topLeft = document.querySelector('#top-left');
var topLeftMove = false;

window.addEventListener('scroll', function() {
  if (window.scrollY > 100 && topLeftMove === false) {
    topLeft.classList.add('top-left-transition');
    topLeftMove = true;
  }
});
