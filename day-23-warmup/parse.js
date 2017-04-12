var fs = require('fs');

fs.readFile('HallOfFame.csv', 'utf-8', function(err, data) {
  var lines = data.split('\n');

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

    console.log(output);

  }

});
