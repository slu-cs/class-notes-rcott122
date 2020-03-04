//hello world web server
const express = require('express');

//create the server
const app = express();

//respond to requests
//cs-linuxlab-12.stlawu.edu:3000/
app.get('/', function(request, response){
  response.send('Hello Riley');
});


//start the server
app.listen(3000); //port address
console.log('server is ready.');
