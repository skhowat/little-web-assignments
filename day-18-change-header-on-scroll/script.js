var head = document.querySelector('h1');
var topLeft = document.querySelector('#top-left');
var topRight = document.querySelector('#top-right');
var bottomLeft = document.querySelector('#bottom-left');
var bottomRight = document.querySelector('#bottom-right');
var moveStuff = false;

window.addEventListener('scroll', function() {
  if (window.scrollY > 100 && moveStuff === false) {
    head.classList.add('header-transition');
    topLeft.classList.add('top-left-transition');
    topRight.classList.add('top-right-transition');
    bottomLeft.classList.add('bottom-left-transition');
    bottomRight.classList.add('bottom-right-transition');
    moveStuff = true;
  }
  else if (window.scrollY <= 100 && moveStuff === true) {
    head.classList.remove('header-transition');
    topLeft.classList.remove('top-left-transition');
    topRight.classList.remove('top-right-transition');
    bottomLeft.classList.remove('bottom-left-transition');
    bottomRight.classList.remove('bottom-right-transition');
    moveStuff = false;
  }
});
