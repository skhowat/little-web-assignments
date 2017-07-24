var nameInput = document.querySelector('#name-input');
var response = document.querySelector('#response');
response.textContent = 'test';

nameInput.addEventListener('keyup', function(x) {
  console.log(nameInput.value);
  if (x.keyCode === 13) {
    console.log('enter');

  }
});

function flipCard(card) {
  card.addEventListener('click', function() {
    card.classList.toggle('flipped');
  });
}

var cards = document.querySelectorAll('.card');
console.log(cards);

for (var i = 0; i < cards.length; i++) {
  var card = cards[i];
  flipCard(card);
}
