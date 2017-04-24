var winMessage = document.querySelector('#win');
var allTheThings = document.querySelector('#all-the-things');


function animation(selector) {
  this.el = document.querySelector(selector);

  var self = this;

  self.animating = false;

  this.el.addEventListener('click', function() {
    if(self.animating === false) {
      var speeds = ['.3s', '.5s', '.75s', '1s', '1.25s'];
      var randomSpeed = speeds[Math.floor(Math.random() * speeds.length)];

      self.el.classList.add('animated');
      self.el.style.animationIterationCount = Math.floor(Math.random() * 15);
      self.el.style.animationDuration = randomSpeed;
    }
  });



  this.el.addEventListener('animationstart', function() {
    self.animating = true;
  });

  this.el.addEventListener('animationend', function() {
    self.animating = false;
    self.el.classList.remove('animated');
  });
}


var ladybug1 = new animation('#ladybug-1');
var ladybug2 = new animation('#ladybug-2');
var ladybug3 = new animation('#ladybug-3');
var ladybug4 = new animation('#ladybug-4');
var ladybug5 = new animation('#ladybug-5');
var ladybug6 = new animation('#ladybug-6');
var ladybug7 = new animation('#ladybug-7');
var ladybug8 = new animation('#ladybug-8');
var ladybug9 = new animation('#ladybug-9');
var allLadybugs = document.querySelector('.pictures');




var check = setInterval(function() {
  if(ladybug1.animating === true && ladybug2.animating === true && ladybug3.animating === true && ladybug4.animating === true && ladybug5.animating === true && ladybug6.animating === true && ladybug7.animating === true & ladybug8.animating === true && ladybug9.animating === true) {
      allTheThings.style.display = 'none';
      winMessage.style.display = 'block';
    }
}, 10);
