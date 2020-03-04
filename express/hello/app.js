//hello world web server
const express = require('express');

//create the server
const app = express();

//respond to requests
app.get('/', function(request, response){
  response.send('Hello Lisa');
});

//start the server
app.listen(3000); //port address
console.log('server is ready.');
