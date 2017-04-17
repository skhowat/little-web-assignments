var someStrings = ['milk', 'bread', 'eggs', 'butter', 'cheese'];

// someStrings.forEach(function(str) {
//   console.log(str);
// });
//
// var containE = someStrings.filter(function(str) {
//   return str.indexOf('e') !== -1;
// });
// console.log(containE);
//
// var longerThan5 = someStrings.filter(function(str) {
//   if (str.length > 5) {
//     return true;
//   }
// });
// console.log(longerThan5);
//
// var longerThan5Part2 = someStrings.filter(function(str) {
//   return str.length > 5;
// });
// console.log(longerThan5Part2);

var extraText = someStrings.map(function(x) {
  return 'Pick up some ' + x;
});

console.log(extraText);
