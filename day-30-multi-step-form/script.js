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
var form = document.querySelector('.form-area');
var newForm = document.querySelector('#new-form');
var formData = document.querySelector('input');

console.log(formData);

var currentPage = Number(localStorage.getItem('current page'));

nextButton.addEventListener('click', function() {
  currentPage += 1;
  checkPage();
});

prevButton.addEventListener('click', function() {
  currentPage -= 1;
  checkPage();
});


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

function showEnd() {
  questionThree.style.display = 'none';
  prevButton.style.display = 'none';
  thanks.style.display = 'block';
  submitButton.style.display = 'none';
}

submitButton.addEventListener('click', function() {
  currentPage += 1;
  showEnd();
});

questionThree.addEventListener('click', function() {
  if (yesTC.checked === true) {
    companionsCond.style.display = 'block';
  }
  else {
    companionsCond.style.display = 'none';
  }
});

newForm.addEventListener('click', function() {
  loadPage();
});



function checkPage() {
  if(currentPage === 1) {
    showOne();
  }

  if(currentPage === 2) {
    showTwo();
  }

  if(currentPage === 3) {
    showThree();
  }

  if(currentPage === 4) {
    showEnd();
  }
}

function loadPage() {
  if (currentPage === 0) {
    currentPage = 1;
  }
  if (currentPage === 4) {
    currentPage = 1;
  }
  checkPage();
  localStorage.setItem('current page', currentPage);
}


form.addEventListener('click', function() {
  console.log(currentPage);
});

window.onLoad = loadPage();
