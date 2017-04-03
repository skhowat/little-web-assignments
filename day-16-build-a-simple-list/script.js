var theList = document.querySelector('#the-list');

var groceryList = [
  'sausage',
  'shrimp',
  'Texjoy',
  'Dr Pepper',
  'steak',
  'Tostitos',
  'cheese',
  'gum'
];

for (var i=0; i<groceryList.length; i++) {
  var li = document.createElement('li');
  li.textContent = groceryList[i];
  theList.appendChild(li);
}
