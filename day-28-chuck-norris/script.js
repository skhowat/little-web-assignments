var nameEntered = document.querySelector('#name-input');
var jokeButton = document.querySelector('#joke-button');
var jokeDiv = document.querySelector('#joke');


var name = 'Chuck Norris';

nameEntered.addEventListener('keyup', function() {
  if (nameEntered.value === '') {
    name = 'Chuck Norris';
  }
  else {
    name = nameEntered.value;
  }
});


var jokes = [
  '{name} counted to infinity. Twice.',
  '{name} can kill two stones with one bird.',
  'When the Boogeyman goes to sleep every night he checks his closet for {name}',
  '{name} is the reason Waldo is hiding.',
  '{name} makes onions cry.',
  'The reason the Holy Grail has never been recovered is because nobody is brave enough to ask {name} to give up his favourite coffee mug.',
  'M.C. Hammer learned the hard way that {name} can touch this.',
  '{name} plays russian roulette with a fully loded revolver... and wins.',
  '{name} can build a snowman out of rain.',
  '{name} wins games of charades without moving.',
  '{name} tells Simon what to do.',
  '{name} makes fire by rubbing 2 ice cubes together.',
  'Brett Favre can throw a football over 50 yards. {name} can throw Brett Favre even further.',
  '{name} can speak braille.',
  '{name} can do a wheelie on a unicycle.',
  'Cars look both ways before {name} crosses the street.',
  '{name} can unscramble an egg.',
  'In space {name} can hear you scream.',
  '{name} can follow you into a revolving door and come out ahead of you.'
];

// console.log(jokes[0].message);

function randomJoke(arr) {
  var randomJokeIndex = Math.floor(Math.random() * arr.length);
  return arr[randomJokeIndex];
}


jokeButton.addEventListener('click', function() {
  var joke = randomJoke(jokes);

  jokeDiv.textContent = joke.replace('{name}', name);

});
