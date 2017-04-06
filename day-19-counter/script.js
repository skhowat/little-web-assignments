var down = document.querySelector('.down');
var up = document.querySelector('.up');
var number = document.querySelector('div');
var counter = 0;

down.addEventListener('click', function(){
  if (counter > 0){
    counter -= 1;
    number.textContent = counter;
    }
});

up.addEventListener('click', function(){
  counter += 1;
  number.textContent = counter;
});
