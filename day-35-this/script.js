//looking at bind and call

function Dude(name) {
  this.name = name;
}

Dude.prototype.sayMyName = function() {
  var self = this;
  setTimeout(function() {
    console.log('My name is', self.name);
  }, 0);
}

Dude.prototype.sayMyName2 = function() {
  let callback = function() {
    console.log('My name is', this.name);
  }
  setTimeout(callback.bind(this), 0);
};

let theDude = new Dude('Stevie');
theDude.sayMyName();
theDude.sayMyName2();

let otherDude = {
  name: 'Heisenberg'
};

Dude.prototype.sayMyName.call(otherDude);

function addStuff() {
  console.log('arguments', arguments);
  var args = Array.prototype.slice.call(arguments);
  console.log('args?', args);
}

addStuff(6,4,3,0,87,4);
