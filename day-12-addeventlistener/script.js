var theHeader = document.querySelector('#the-header');
theHeader.textContent = 'JavaScript changed me';

function clickTheHeader () {
  console.log('click!');
  theHeader.textContent = 'New Thing';
}

theHeader.addEventListener('click', clickTheHeader);

theHeader.addEventListener('mouseover', function() {
  theHeader.classList.add('hovery');
});

theHeader.addEventListener('mouseout', function() {
  theHeader.classList.remove('hovery');
});

var theP = document.querySelector('.the-p');

theP.addEventListener('click', function() {
  console.log('clicked the paragraph');
  theP.textContent = 'more stuff';
  theP.classList.toggle('on');
});
