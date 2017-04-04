/*var nameOne = document.querySelector('#nameOne');
console.log(nameOne);

nameOne.addEventListener('click', function(){
  nameOne.classList.toggle('toggle-on');
})

var nameTwo = document.querySelector('#nameTwo');
console.log(nameTwo);

nameTwo.addEventListener('click', function(){
  nameTwo.classList.toggle('toggle-on');
})

var nameThree = document.querySelector('#nameThree');
console.log(nameThree);

nameThree.addEventListener('click', function(){
  nameThree.classList.toggle('toggle-on');
})

var nameFour = document.querySelector('#nameFour');
console.log(nameFour);

nameFour.addEventListener('click', function(){
  nameFour.classList.toggle('toggle-on');
})

var nameFive = document.querySelector('#nameFive');
console.log(nameFive);

nameFive.addEventListener('click', function(){
  nameFive.classList.toggle('toggle-on');
})*/




var theButton = document.querySelector('#add-thing');
var ol = document.querySelector('ol');

ol.addEventListener('click', function(evt){
  console.log(evt);
  if (evt.target.tagName === "LI") {
  evt.target.classList.toggle('on');
  }
});

theButton.addEventListener('click', function(){

  var newLI = document.createElement('li');
  newLI.textContent = 'new';

  ol.appendChild(newLI);
})
