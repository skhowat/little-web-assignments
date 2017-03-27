


//querySelector will grab the first thing it matchces
var theParagraph = document.querySelector('p');
console.log(theParagraph);
theParagraph.textContent = 'Pants';


var secondParagraph = document.querySelector('#second');
console.log(secondParagraph);
secondParagraph.textContent = 'different thing!';



var theOl = document.querySelector('ol');
console.log('the children', theOl.children);

theOl.innerHTML = '<li>lol</li>';

var anLI = document.querySelector('li');
console.log('the li has a parent', anLI.parentElement);
anLI.parentElement.parentElement.parentElement;

//querySelectorAll will grab all the things it matches
var allThePs = document.querySelectorAll('p');
console.log(allThePs);
