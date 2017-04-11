var foods = [
  'tacos',
  'cake',
  'avocados',
  'pizza',
  'cheese'
];

var foodListOL = document.querySelector('#food-list');
var input = document.querySelector('#query');

createList(foods);

input.addEventListener('keyup', function(evt) {
  // console.log(evt.keyCode);
  // console.log('key up', input.value);
  if (evt.keyCode !== 13) {
    return;
  }
  
  var newList = [];
  for (var i=0; i<foods.length; i++) {
    if (foods[i].indexOf(input.value) > -1) {
      newList.push(foods[i]);
    }
  }
  foodListOL.innerHTML = '';
  createList(newList);
});


function createList(arr) {
  for (var i=0; i<arr.length; i++) {
    var li = document.createElement('li');
    li.textContent = arr[i];
    foodListOL.appendChild(li);
  }
}
