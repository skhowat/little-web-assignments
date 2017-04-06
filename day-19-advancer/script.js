var previousButton = document.querySelector('#previous-button');
var nextButton = document.querySelector('#next-button');
var display = document.querySelector('#display');

var currentMesageIndex = 0;
var messages = [
  'Nice thing',
  'Another thing',
  'So many things',
  'Yet another thing'
];

display.textContent = messages[0];

nextButton.addEventListener('click', function() {
  currentMesageIndex += 1;

  if (currentMesageIndex === messages.length) {
    currentMesageIndex = 0;
  }

  display.textContent = messages[currentMesageIndex];
});
