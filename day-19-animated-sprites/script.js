//
// for (var i=0; i <10; i++) {
//
// }

var link = document.querySelector('#link');
var stopButton = document.querySelector('#stop-button');
var startButton = document.querySelector('#start-button');
var positionX = 0;
var positionY = -650;


window.addEventListener('keydown', function(evt) {
  console.log(evt.keyCode);
  if (evt.keyCode === 37) {
    positionY = -650;
  }
  else if (evt.keyCode === 39) {
    positionY = -800;
  }
});




function animate(){
  positionX -= 120;

  link.style.backgroundPositionX = positionX + 'px';
  link.style.backgroundPositionY = positionY + 'px';
}

var intervalId = setInterval(animate, 50);

startButton.addEventListener('click', function(){
  intervalId = setInterval(animate, 50);
});

stopButton.addEventListener('click', function(){
  console.log('stop');
  clearInterval(intervalId);
});
