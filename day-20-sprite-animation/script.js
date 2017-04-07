var animation = document.querySelector('#animation');

var position = [
  "0px",
  "-199px",
  "-398px",
  "-597px",
  "-796px",
  "-995px",
  "-1194px",
  "-1393px",
  "-1592px",
  "-1791px",
  "-1990px",
  "-2189px"
];


var currentIndex = 0;

function animate() {
  if (currentIndex === position.length - 1) {
    currentIndex = 0;
    animation.style.backgroundPositionY = position[currentIndex];
  }
  else {
    currentIndex += 1;
    animation.style.backgroundPositionY = position[currentIndex];
  }
}

// animation.addEventListener('click', animate);

window.setInterval(animate, 110);
