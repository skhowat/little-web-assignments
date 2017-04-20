function View(selector) {
  this.el = document.querySelector(selector);
}

View.prototype.text = function(txt) {
  this.el.textContent = txt;
}

View.prototype.hide = function() {
  this.el.style.display = 'none';
}

View.prototype.show = function() {
  this.el.style.display = 'block';
}

View.prototype.click = function(func) {
  var self = this;
  this.el.addEventListener('click', function() {
    func.call(self)
  });
}

var aDiv = new View('#a-div');
aDiv.text('I have text!');
aDiv.hide();
aDiv.show();

var anotherDiv = new View('#another-div');
anotherDiv.text('I also have text!');

anotherDiv.click(function() {
  this.text('I clicked on it');
})
