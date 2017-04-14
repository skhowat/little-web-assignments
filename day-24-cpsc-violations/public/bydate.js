var dateList = document.querySelector('#dates');
var tbody = document.querySelector('tbody');
var ajaxData;

$.ajax({
  url: '/api/violations'
})
.done(function(data){
  ajaxData = data;
  // console.log('data?', data);
  var dates = [];

  for (var i=0; i<data.values.length; i++) {
    var date = data.values[i].date;
    if (dates.indexOf(date) === -1) {
      dates.push(data.values[i].date);
    }
  }
  console.log(dates);

  for (var i=0; i<dates.length; i++) {
    var li = document.createElement('li');
    li.textContent = dates[i];
    dateList.appendChild(li);
  }

});


var dateClicked;
dateList.addEventListener('click', function(evt) {
  dateClicked = evt.target.textContent;
  console.log('You clicked on', dateClicked);
  // filter();
  var filtered = [];
  for (var i=0; i < ajaxData.values.length; i++) {
    if (ajaxData.values[i].date === dateClicked) {
      filtered.push(ajaxData.values[i])
    }
  }
  console.log('what do i have?', filtered);


  putItOnThePage(filtered);
})



function putItOnThePage(arr) {

  var template = document.querySelector('#row-template').innerHTML;

  tbody.innerHTML = '';

  var totalHtml = '';
  for (var i=0; i < arr.length; i++) {
    // console.log(arr[i]);

    var html = Mustache.render(template, arr[i]);
    totalHtml += html;

    // console.log(html);
  }
  tbody.innerHTML = totalHtml;
}
