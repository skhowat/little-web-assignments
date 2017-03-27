var peeps = ['Stevie', 'Ali', 'Haley', 'Monica', 'Nikki', 'Sam', 'Brian', 'David'];

//var randomNumber = Math.random();
//randomNumber = randomNumber * peeps.length;
//randomNumber = Math.floor(randomNumber);


//var randomNumber = Math.floor(Math.random() * peeps.length);

//console.log(randomNumber, peeps[randomNumber]);

var randomPeeps = [];
var totalCount = peeps.length;

for (var i = 0; i < totalCount; i++) {

  var randomNumber = Math.random();
  randomNumber = randomNumber * peeps.length;
  randomNumber = Math.floor(randomNumber);

  randomPeeps.push(peeps[randomNumber]);
  peeps.splice(randomNumber, 1);
}

//console.log(randomPeeps);

while (peeps.length > 0) {
  var randomNumber = Math.random();
  randomNumber = randomNumber * peeps.length;
  randomNumber = Math.floor(randomNumber);

  randomPeeps.push(peeps[randomNumber]);
  peeps.splice(randomNumber, 1);
}

console.log (randomPeeps);
