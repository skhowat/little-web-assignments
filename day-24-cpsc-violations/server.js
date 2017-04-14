var express = require('express');
var fs = require('fs');
var app = express();

app.use(express.static('public'));

app.get('/api/violations', function(req, res) {

  fs.readFile('violation-data.csv', 'utf-8', function(err, data) {
    console.log('got data');

    var lines = data.split('\n')
    var violations = [];

    for (var i=1; i<lines.length-1; i++) {
      var pieces = lines[i].split(',');
      var date = pieces[0];
      var product = pieces[1];
      var viol = pieces[2];
      var firm = pieces[3];

      violations.push({
        date: date,
        product: product,
        violation: viol,
        firm: firm
      });
    }

    res.send({
      values: violations
    });
  })


});


app.listen(8000, function(){
  console.log("Listening on port 8000");
});
