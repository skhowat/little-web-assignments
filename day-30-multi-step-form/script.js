var questionOne = document.querySelector('#question-1');
var questionTwo = document.querySelector('#question-2');
var questionThree = document.querySelector('#question-3');
var thanks = document.querySelector('#thanks');
var prevButton = document.querySelector('#prev-button');
var nextButton = document.querySelector('#next-button');
var submitButton = document.querySelector('#submit-button');
var noTC = document.querySelector('#travel-with-no');
var yesTC = document.querySelector('#travel-with-yes');
var companionsCond = document.querySelector('#companions-conditional');
var companions = document.querySelector('#companions');

questionOne.style.display = 'block';
questionTwo.style.display = 'none';
questionThree.style.display = 'none';
thanks.style.display = 'none';
prevButton.style.display = 'none';
nextButton.style.display = 'inline';
submitButton.style.display = 'none';


function showOne() {
  questionOne.style.display = 'block';
  questionTwo.style.display = 'none';
  questionThree.style.display = 'none';
  thanks.style.display = 'none';
  prevButton.style.display = 'none';
  nextButton.style.display = 'inline';
  submitButton.style.display = 'none';
}

function showTwo() {
  questionOne.style.display = 'none';
  questionTwo.style.display = 'block';
  prevButton.style.display = 'inline';
  questionThree.style.display = 'none';
  thanks.style.display = 'none';
  // nextButton.style.display = 'inline';
  submitButton.style.display = 'none';
}

function showThree() {
  questionOne.style.display = 'none';
  questionTwo.style.display = 'none';
  questionThree.style.display = 'block';
  nextButton.style.display = 'none';
  submitButton.style.display = 'inline';
  thanks.style.display = 'none';
  prevButton.style.display = 'inline';
}

nextButton.addEventListener('click', function() {
  if (questionOne.style.display === 'block') {
    showTwo();
  }

  else if (questionTwo.style.display === 'block') {
    showThree();
  }
});

prevButton.addEventListener('click', function() {
  if (questionTwo.style.display === 'block') {
    showOne();
  }
  else if (questionThree.style.display === 'block') {
    showTwo();
  }
});


submitButton.addEventListener('click', function() {
  questionThree.style.display = 'none';
  prevButton.style.display = 'none';
  thanks.style.display = 'block';
  submitButton.style.display = 'none';
});

questionThree.addEventListener('click', function() {
  if (yesTC.checked === true) {

    companionsCond.style.display = 'block';
  }
  else {
    companionsCond.style.display = 'none';
  }
});
