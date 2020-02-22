// Syntax for callbacks

// This function uses another function to transform an array
const map = function(array, transform) {
  const copy = [];
  for (const element of array) {
    copy.push(transform(element));
  }
  return copy;
};

// This function can be used as the transform
const square = function(x) {
  return x ** 2;
};

// We'll use this as the original array
const numbers = [1, 2, 3, 4, 5];

// Doing the transformation
console.log(map(numbers, square));
console.log(numbers);

// Defining other transforms with arrow function
console.log(map(numbers, x => x**2));
console.log(map(numbers, x => x + 1));

// Using the array map method
console.log(numbers.map(x => x**2));
console.log(numbers.map(x => x + 1));

//practice problems
//#1
const filter = function(numbers, f){
  const n = [];
  for (const num of numbers){
    if (f(num)){
      n.push(num);
    }
  }
  return n;
};

// Write a standalone filter function that works like the array filter method,
// but with the array as its first argument and the callback as its second argument.
const filter = function(array, test) {
  const copy = [];
  for (const element of array) {
    if (test(element)) {
      copy.push(element);
    }
  }
  return copy;
};

//////////////////////////////////////////////////////////////////////////////////////

// Reverse sort this array.
const numbers = [4, 2, 5, 1, 3];
numbers.sort((a,b) => b - a);

//////////////////////////////////////////////////////////////////////////////////////

// Read majors.csv (which needs to be on your VM when you run this code).
const fs = require('fs');
const readline = require('readline');
const file = readline.createInterface({
  input: fs.createReadStream('majors.csv')
});

// Create an array of objects, so that each line of the file is represented by an object with three properties.
const rows = [];
file.on('line', function(line) {
  const columns = line.split(',');
  rows.push({
    discipline: columns[0],
    majors: Number(columns[1]),
    minors: Number(columns[2])
  });
});

// Let the popularity score for a discipline be the number of majors it has plus half the number of minors.
// Sort disciplines by (increasing) popularity.
file.on('close', function() {
  rows.sort((a,b) => (a.majors + a.minors/2) - (b.majors + b.minors/2));
});

// Suppose an asynchronous function f can be called as shown below.
f('hello', function(error, result) {
  if (error) console.error(error.stack);
  console.log(result);
});

// If f returns a promise, how can we rewrite this code to get the same effect?
f('hello')
  .then(result => console.log(result))
  .catch(error => console.error(error.stack));

//////////////////////////////////////////////////////////////////////////////////////

// Suppose q1 and q2 are Mongoose queries.
// You want to run q1 and print the result,
// and afterwards run q2 and print the result.

// How can we do this without promises?
q1.exec(function(error, r1) {
  if (error) console.log(error.stack);
  console.log(r1);

  q2.exec(function(error, r2) {
    if (error) console.log(error.stack);
    console.log(r2);
  });
});

// How can we do this with promises?
q1.exec()
  .then(function(r1) {
    console.log(r1);
    return q2.exec();
  })
  .then(r2 => console.log(r2))
  .catch(error => console.log(error.stack));

//////////////////////////////////////////////////////////////////////////////////////

// Suppose documents is an array of Mongoose documents that have been created but not saved.
//You want to save them all at once (that is, in parallel). Write some code to do this.
const saves = documents.map(d => d.save());
Promise.all(saves)
  .then(() => console.log('All saved'))
  .catch(error => console.log(error.stack));
