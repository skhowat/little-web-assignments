var peeps = [
  { firstName: 'Jane', lastName: 'Jones', age: 12 },
  { firstName: 'John', lastName: 'Smith', age: 18 },
  { firstName: 'Fred', lastName: 'Johnson', age: 11 },
  { firstName: 'Jaime', lastName: 'Oliver', age: 9 },
  { firstName: 'Ragan', lastName: 'Perkinson', age: 1 },
  { firstName: 'Chris', lastName: 'Smith', age: 5 },
  { firstName: 'George', lastName: 'Jungle', age: 17 },
  { firstName: 'Mike', lastName: 'Tyson', age: 16 },
  { firstName: 'Jimmy', lastName: 'Smith', age: 21 },
  { firstName: 'Chris', lastName: 'Thompson', age: 17 }
];

// peeps.forEach(function(obj) {
//   console.log(obj.firstName);
// });

var youngerThan15 = peeps.filter(function(x) {
  return x.age < 15;
});
// console.log(youngerThan15);

var olderThan15 = peeps.filter(function(x) {
  return x.age >= 15;
});
// console.log(olderThan15);

var namedChris = peeps.filter(function(x) {
  return x.firstName === 'Chris';
});
// console.log('named Chris', namedChris);

var containsI = peeps.filter(function(x) {
  return x.firstName.indexOf('i') !== -1;
});
// console.log('first name contains the letter i', containsI);

// var hasIandE = peeps.filter(function(x) {
//   return x.firstName.indexOf('i') !== -1 && x.firstName.indexOf('e') !== -1;
// })
// console.log(hasIandE);

var firstNamesOnly = peeps.map(function(x) {
  return x.firstName;
});
// console.log(firstNamesOnly);

var firstAndLastNames = peeps.map(function(x) {
  return x.firstName + ' ' + x.lastName;
});
// console.log(firstAndLastNames);

var moreInfo = peeps.map(function(x) {
  // x.fullName = x.firstName + ' ' + x.lastName;
  // return x; <------don't do it this way! causes side effect of changing the original object
  return {
    firstName: x.firstName,
    lastName: x.lastName,
    fullName: x.firstName + ' ' + x.lastName,
    age: x.age
  }
});
// console.log(moreInfo);


//to sort an array of objects, copy it into a new array first using .slice
var copy = peeps.slice(0);
copy.sort(function(a,b) {
  if (a.age > b.age) {
    return true;
  }
  else {
    return false;
  }
});
console.log(copy);
