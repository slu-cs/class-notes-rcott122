//hello world web server
const express = require('express');

//create the server
const app = express();

//respond to requests
app.use(function(request, response, next){
  console.log('---------------', new Date().toLocateString());
  console.log(request.method, request.url);
  console.log('Body =', request.body);
  next(); // keeps handling this request
});

//give this app a homepage
app.get('/', function(request, response){
  response.send(`
    <h1>Bakery</h1>
    <ul>
      <li><a href="/cakes">Cakes</a></li>
      <li><a href="/pies">Pies</a></li>
    </ul>
  `);
});

//handle undefined routes (middle ware)
app.use(function(request, response, next){
  console.log('Replied with 404');
  response.status(404).end();
});

//handle other errors
app.use(error, request, response, next){
  console.error(error.stack);
  response.status(500).send(error.message);
});

//start the server
app.listen(3000); //port address
console.log('server is ready.');
