

//Old school looping
// function loopAndConsoleLog(arr) {
//   for (var i=0; i<arr.length; i++) {
//     console.log(arr[i]);
//   }
// }
// loopAndConsoleLog(numbers);


//Using forEach function on arrays
// numbers.forEach(function(num) {
//   console.log(num);
// });


//defining a function that will do the same as forEach
//
// function forEvery(arr, func) {
//   for (var i=0; i<arr.length; i++) {
//     func(arr[i]);
//   }
// }
//
// forEvery(numbers, function(num) {
//   console.log(num);
// })
//
// forEvery(['Bob', 'Frank'], function(name) {
//   console.log('Hi', name);
// })




// var filterOutput = [];
// numbers.forEach(function(num) {
//   if (num > 50) {
//     filterOutput.push(num);
//   }
// });
// console.log(filterOutput);
//
// var output = numbers.filter(function(num) {
//   return num > 50;
// });
//
// console.log(output);


//
// var bigger = numbers.map(function(x) {
//   return x + 100;
// })
// console.log(bigger);
//
// var lis = numbers.map(function(x) {
//   return '<li>' + x + '</li>';
// })
//
// console.log(lis);

var numbers = [1, 56, 89, 12, 45, 211, 45, 56, 31];


numbers.sort(function(a,b) {
  if (a > b) {
    return true;
  }
  else {
    return false;
  }
});

console.log(numbers);
