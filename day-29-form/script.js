var firstNameInput = document.querySelector('#first-name');
var lastNameInput = document.querySelector('#last-name');
var clearButton = document.querySelector('#clear');
var submitButton = document.querySelector('#submit');
var alertMessage = document.querySelector('#alert-message');

clearButton.addEventListener('click', function(evt) {
  evt.preventDefault();

  firstNameInput.value = '';
  lastNameInput.value = '';
});

submitButton.addEventListener('click', function(evt) {
  if (firstNameInput.value === '' || lastNameInput.value === '') {
    evt.preventDefault();
    alertMessage.style.display = 'block';
  }

});
