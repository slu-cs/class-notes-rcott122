//hello world web server
const express = require('express');

//create the server
const app = express();

//respond to requests
//cs-linuxlab-12.stlawu.edu:3000/
app.get('/', function(request, response){
  response.send('Hello Riley');
});

//cs-linuxlab-12.stlawu.edu:3000/foo
app.get('/foo', function(request, response){
  response.send('Hello foo');
});

//cs-linuxlab-12.stlawu.edu:3000/foo/bar
app.get('/foo/bar', function(request, response){
  response.send('Hello bar');
});

//cs-linuxlab-12.stlawu.edu:3000/zap/z (for any z)
app.get('/zap/:z', function(request, response){
  response.send(`Hello ${request.params.z}`);
});

//cs-linuxlab-12.stlawu.edu:3000/zap?x=1&y=2
app.get('/zap', function(request, response){
  response.send(`Hello zap with ${request.query.x} and ${request.query.y}`);
});

//start the server
app.listen(3000); //port address
console.log('server is ready.');
