var incomplete = document.querySelector('#incomplete');
var questionOne = document.querySelector('#question-1');
var questionTwo = document.querySelector('#question-2');
var questionThree = document.querySelector('#question-3');
var thanks = document.querySelector('#thanks');
var prevButton = document.querySelector('#prev-button');
var nextButton = document.querySelector('#next-button');
var submitButton = document.querySelector('#submit-button');
var noTC = document.querySelector('#travel-with-no');
var yesTC = document.querySelector('#travel-with-yes');

incomplete.style.display = 'none';
questionOne.style.display = 'block';
questionTwo.style.display = 'none';
questionThree.style.display = 'none';
thanks.style.display = 'none';
prevButton.style.display = 'none';
nextButton.style.display = 'inline';
submitButton.style.display = 'none';

nextButton.addEventListener('click', function() {

  if (questionOne.style.display === 'block') {
    questionOne.style.display = 'none';
    questionTwo.style.display = 'block';
    prevButton.style.display = 'inline';
  }

  else if (questionTwo.style.display === 'block') {
    questionTwo.style.display = 'none';
    questionThree.style.display = 'block';
    nextButton.style.display = 'none';
    submitButton.style.display = 'inline';
  }

});

submitButton.addEventListener('click', function() {
  questionThree.style.display = 'none';
  prevButton.style.display = 'none';
  thanks.style.display = 'block';
  submitButton.style.display = 'none';
});
