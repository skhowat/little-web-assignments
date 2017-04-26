

function Counter() {
  this.count = 0;
}

//can add something universal to all instances of Counter like this:
Counter.elementCount = 0;

Counter.prototype.createDOM = function(x, y) {
  //can keep track of the number of Counters created using the non-instance-specific counter we created above:
  Counter.elementCount += 1;
  console.log('how many have we made?', Counter.elementCount);

  //create a dom element
  var div = document.createElement('div');
  div.textContent = '0';
  div.style.left = x + 'px';
  div.style.top = y + 'px';

  //when someone clicks, increment count and update div text
  var self = this;
  div.addEventListener('click', function() {
    self.count += 1;
    div.textContent = self.count;
  });

  return div;
}


//add an event listener to the body to call the counter.createDOM function:
document.body.addEventListener('click', function(evt) {

  if (evt.target.tagName === "DIV") {

  }
  else {
    var counter = new Counter();
    var div = counter.createDOM(evt.pageX, evt.pageY);
    document.body.appendChild(div);
  }

});
