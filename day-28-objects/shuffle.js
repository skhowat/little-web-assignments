var nums = [1, 18, 9, 14, 5];

var strs = ['pizza', 'bacon', 'car', 'Samson'];



Array.prototype.shuffle = function() {

  var copy = this.slice(0);
  var shuffled = [];

  while (copy.length > 0) {
    var randomIndex = Math.floor(Math.random() * copy.length);
    shuffled.push(copy[randomIndex]);
    copy.splice(randomIndex, 1);
  }
  return shuffled;
};

// Array.prototype.shuffle = function() {
//   console.log('called shuffle', this);
// }

var shuffled = nums.shuffle();
// console.log(shuffled);

var shuffledStrings = strs.shuffle();
// console.log(shuffledStrings);

function Animal(name) {
  this.name = name;
}

Animal.prototype.makeNoise = function() {
  console.log(this.name + ' goes grrrrr');
}

Animal.prototype.breath = function() {
  console.log(this.name + ' is breathing');
}

function Dog(name) {
  this.name = name;
}

Dog.prototype = new Animal();

function Cat(name) {
  this.name = name;
}

Cat.prototype = new Animal();

Cat.prototype.makeNoise = function() {
  console.log(this.name + ' goes meow');
}

Cat.prototype.attemptToMurderOwner = function() {
  console.log(this.name + ' attempts to eat owner');
}

var fido = new Dog('Fido');
fido.makeNoise();

var spot = new Dog('Spot');
spot.makeNoise();
spot.breath();

var b = new Cat('B');
b.makeNoise();
b.breath();
b.attemptToMurderOwner();
