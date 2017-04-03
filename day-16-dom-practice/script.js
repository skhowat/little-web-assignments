var clickMeButton = document.querySelector('#click-me');
var count = 0;
var countDisplay = document.querySelector('#count-display');

clickMeButton.addEventListener('click', function() { //alert('clicked');
  count++;
  console.log('Click count', count);
  countDisplay.textContent = 'You clicked ' + count + ' times.';
});

var addToListButton = document.querySelector('#add-to-list');
var listOfStuff = document.querySelector('#list-of-stuff');

addToListButton.addEventListener('click', function() {
  var newItem = document.createElement('li');
  newItem.textContent = 'steak';
  listOfStuff.appendChild(newItem);
});



var favoriteFoodsList = document.querySelector('#favorite-foods');

var foods = ['steak', 'cake', 'tacos', 'cheese', 'ice cream'];

for (var i=0; i<foods.length; i++) {
  var newItem = document.createElement('li');
  newItem.textContent = foods[i];
  favoriteFoodsList.appendChild(newItem);
}


var books = [
  {
    name: "Intelligent Person's Guide to Mud",
    author: "Frank Lyn",
    pageCount: 60
  },
  {
    name: 'Tao of Steak',
    author: 'Eric Sowell',
    pageCount: 135
  },
  {
    name: 'Books are Great',
    author: 'Guy Pants',
    pageCount: 190
  },
  {
    name: 'How to be a Sucker',
    author: 'Frank Lyn',
    pageCount: 83
  }
];

var bookList = document.querySelector('#books');

for (i=0; i<books.length; i++) {
  var li = document.createElement('li');
  li.textContent = books[i].name + ' (' + books[i].author + ' - ' + books[i].pageCount + ')';
  bookList.appendChild(li);
}


var pages = document.querySelector('#pages');

var pageTotal = '';
for (var i=0; i>books.length; i++) {
  pageTotal += books[i].pageCount;
}

pages.textContent = pageTotal / books.length;
