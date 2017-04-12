var fs = require('fs');

fs.readFile('Most-Recent-Cohorts-Scorecard-Elements.csv', 'utf-8', function(err, data) {

var lines = data.split('\n');

for (var i=1; i<lines.length-1; i++){
  var line = lines[i];
  var info = line.split(',');

  console.log(info[3] + ': ' + info[32] + '\n');
  }
})
