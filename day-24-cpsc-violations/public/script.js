var results = document.querySelector('#results');
var productQuery = document.querySelector('#product-query');
var violQuery = document.querySelector('#viol-query');
var firmQuery = document.querySelector('#firm-query');

var ajaxData;

$.ajax({
  url: '/api/violations'
})
.done(function(data) {
  console.log('got the data');
  ajaxData = data;

  for (var i=0; i<data.values.length; i++) {
    var tr = document.createElement('tr');

    var date = document.createElement('td');
    date.textContent = data.values[i].date;
    tr.appendChild(date);

    var product = document.createElement('td');
    product.textContent = data.values[i].product;
    tr.appendChild(product);

    var violation = document.createElement('td');
    violation.textContent = data.values[i].violation;
    tr.appendChild(violation);

    var firm = document.createElement('td');
    firm.textContent = data.values[i].firm;
    tr.appendChild(firm);

    results.appendChild(tr);

  }

});


var productFilter = '';
var violationFilter = '';
var firmFilter = '';


productQuery.addEventListener('keyup', function() {
  productFilter = productQuery.value.toUpperCase();
  filter();
});

violQuery.addEventListener('keyup', function() {
  violationFilter = violQuery.value.toUpperCase();
  filter();
});

firmQuery.addEventListener('keyup', function() {
  firmFilter = firmQuery.value.toUpperCase();
  filter();
});



function filter() {
  results.innerHTML = '';
  console.log('filtering', productFilter, violationFilter, firmFilter);
  var filtered = [];

  for (var i=0; i<ajaxData.values.length; i++) {
    var item = ajaxData.values[i];

    if (productFilter !== '') {
      if (item.product.indexOf(productFilter) === -1) {
        // console.log('skipping', item.product, 'for', productFilter);
        continue;
      }
    }

    if (violationFilter !== '') {
      if (item.violation.toUpperCase().indexOf(violationFilter) === -1) {
        continue;
      }
    }

    if (firmFilter !== '') {
      if (item.firm.indexOf(firmFilter) === -1) {
        continue;
      }
    }

    filtered.push(item);
  }

  for (var i=0; i<filtered.length; i++) {

    var tr = document.createElement('tr');

    var date = document.createElement('td');
    date.textContent = filtered[i].date;
    tr.appendChild(date);

    var product = document.createElement('td');
    product.textContent = filtered[i].product;
    tr.appendChild(product);

    var violation = document.createElement('td');
    violation.textContent = filtered[i].violation;
    tr.appendChild(violation);

    var firm = document.createElement('td');
    firm.textContent = filtered[i].firm;
    tr.appendChild(firm);

    results.appendChild(tr);
  }
  // console.log(filtered);
}
