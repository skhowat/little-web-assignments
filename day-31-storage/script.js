var count = Number(localStorage.getItem('current count'));
var clickMe = document.querySelector('#click-me');
clickMe.innerHTML = count;

clickMe.addEventListener('click', function() {
  count += 1;
  localStorage.setItem('current count', count);
  clickMe.innerHTML = count;
});
