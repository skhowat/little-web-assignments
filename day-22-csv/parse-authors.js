var fs = require('fs');
// console.log(fs);

// This is the synchronous example
var fileData = fs.readFileSync('authors.csv', 'utf-8');
// console.log(fileData);

var lines = fileData.split('\n');
// console.log(lines);

for (var i=1; i<lines.length-1; i++) {
  var line = lines[i];
  var pieces = line.split(',');
  console.log('name -', pieces[0]);
}

console.log('--------------------------------------');

fileData = fs.readFile('authors.csv', 'utf-8', function(err, data) {
  console.log('async err', err);
  console.log('async data', data);

  var lines = data.split('\n');

  for (var i=1; i<lines.length-1; i++) {
    var line = lines[i];
    var pieces = line.split(',');
    console.log('name -', pieces[0]);
  }
})
