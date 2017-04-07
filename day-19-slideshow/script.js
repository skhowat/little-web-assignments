var leftButton = document.querySelector('#left-button');
var rightButton = document.querySelector('#right-button');
var playButton = document.querySelector('#play-button');
var imageBox = document.querySelector('#image-box');

var pics = [
  "url('pic1.jpg')",
  "url('pic2.jpg')",
  "url('pic3.jpg')",
  "url('pic4.jpg')",
  "url('pic5.jpg')"
];

var currentPicIndex = 0;

function forward() {
  if (currentPicIndex === pics.length-1) {
    currentPicIndex = 0;
    imageBox.style.backgroundImage = pics[currentPicIndex];
  }
  else {
    currentPicIndex += 1;
    imageBox.style.backgroundImage = pics[currentPicIndex];
  }
  console.log(currentPicIndex);
}

rightButton.addEventListener('click', forward);

leftButton.addEventListener ('click', function() {
  if (currentPicIndex === 0) {
    currentPicIndex = pics.length - 1;
    imageBox.style.backgroundImage = pics[currentPicIndex];
  }
  else {
    currentPicIndex -= 1;
    imageBox.style.backgroundImage = pics[currentPicIndex];
  }
  console.log(currentPicIndex);
});


var autoPlay
var playing = false;

playButton.addEventListener('click', function() {
  if (playing === false) {
    autoPlay = setInterval(forward, 2500);
    playing = true;
    playButton.textContent = 'Stop';
  }
  else if (playing === true) {
    clearInterval(autoPlay);
    playing = false;
    playButton.textContent = 'Play';
  }
  console.log(playing);
});
