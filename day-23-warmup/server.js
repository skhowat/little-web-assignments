var express = require('express');
var fs = require('fs');
var app = express();

app.use(express.static('public'));

app.get('/api/favoritefoods', function(req, res) {
  console.log('Calling favorite foods api');

  var output = {
    foods: ['tacos', 'cake', 'cheese', 'pizza']
  };

  res.send(output);
});

app.get('/api/favoritesoda', function(req, res) {
  console.log('Calling favorite soda api');

  var output = {
    sodas: ['Coke', 'Dr Pepper', 'Root Beer']
  };

  res.send(output);
});


app.get('/api/halloffame', function(req, res) {
  console.log('Calling Hall of Fame API');
  fs.readFile('HallOfFame.csv', 'utf-8', function(err, data) {
    var lines = data.split('\r\n');

    var output = [];

    for (var i=1; i<lines.length; i++) {
      var line = lines[i];
      var values = line.split(',');

      var person = values[0];
      var year = values[1];
      var votes = values[5];

      output.push({
        personID: person,
        year: year,
        votes: votes
      });

    }

    res.send({
      stats: output
    });

  });
});

app.listen(3100, function() {
  console.log('Listening on port 3100.');
});
