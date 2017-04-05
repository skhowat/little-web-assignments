var nav = document.querySelector('nav');

var navHasBackground = false;

window.addEventListener('scroll', function() {

  if (window.scrollY > 650 && navHasBackground === false) {
    nav.classList.add('nav-scroll');
    navHasBackground = true;
  }
  else if (window.scrollY <= 650 && navHasBackground === true){
    nav.classList.remove('nav-scroll');
    navHasBackground = false;
  }

});
