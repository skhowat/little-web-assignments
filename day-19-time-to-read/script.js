var content = document.getElementById('content').innerHTML;
var words = content.split(" ");
console.log(words.length);

var wpm = Math.floor(words.length/230);
console.log(wpm);

var widget = document.querySelector('#widget');

widget.textContent = 'Approx. ' + wpm + ' minutes to read';
