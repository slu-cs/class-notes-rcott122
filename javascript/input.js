//syntax for console and file input
const fs = require('fs');
const readline = require('readline');

//console configuration
const user = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//console input
user.question('Filename: ', function(filename) {

  //file configuration
  const file = readline.createInterface({
    input: fs.createReadStream(filename);
  });

  //asycnchronous line by line input
  file.on('line', function(line) {
    console.log(line);
  });

  //end the program when the file closes
  file.on('close', function() {
    process.exit(0);
  });

});
