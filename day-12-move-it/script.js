var downButton = document.querySelector('#down-button');
var upButton = document.querySelector('#up-button');
var leftButton = document.querySelector('#left-button');
var rightButton = document.querySelector('#right-button');

var topValue = 0;
var leftValue = 0;
var theCircle = document.querySelector('.circle');


downButton.addEventListener('click', function(){
  topValue +=5;
  theCircle.style.top = topValue + 'px';
});

upButton.addEventListener('click', function(){
  topValue -=5;
  theCircle.style.top = topValue + 'px';
});
