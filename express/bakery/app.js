//hello world web server
const express = require('express');

//create the server
const app = express();

//ignore icon requests
app.get('/favicon.ico', function(request, response) {
  response.status(204).end();
});

//respond to requests
app.use(function(request, response, next){
  console.log('---------------', new Date().toLocaleTimeString());
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

//routing
app.use('/cakes', require('./cakes.js'));
app.use('/pies', require('./pies.js'));

//handle undefined routes (middle ware)
app.use(function(request, response, next){
  console.log('Replied with 404');
  response.status(404).end();
});

//handle other errors
app.use(function(error, request, response, next){
  console.error(error.stack);
  response.status(500).send(error.message);
});

//start the server
app.listen(3000); //port address
console.log('server is ready.');
