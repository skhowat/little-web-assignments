


function myLog() {
  var arr = Array.prototype.slice.call(arguments, 0);
  arr.forEach(function(x) {
    console.log(x);
  })
}

myLog('hello', 'Monica');
