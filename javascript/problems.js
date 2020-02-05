//practice problems

//Print the sum of the squares of the integers from 1 through 10.
let sum = 0;
let sq = 0;

for (let i = 0; i<11; i++) {
  sq = i*i;
  sum += sq;
}
console.log(sum);

//Print the first Fibonacci number that is greater than 1000.
let sum = 0;
let fib = 0;
let hold = 0;

for (let i = 0; sum<1001; i++) {
  fib = (i-2)*(i-1);
  hold = i;
  sum += fib;
}
console.log(sum);

//Print the number of integers from 1 through 100 that are divisible by 3 or 5 but not both.
let count = 0;
let not = 0;

for (let i = 1; i<101; i++) {
  if (((i / 3) % 1) || ((i / 5) % 1) === 0){
    count++;
 }
}
console.log(count);

//Print the smallest integer that is divisible by all the integers from 1 through 10.
let count = 0;

for (let j = 1; j < 3000; j++) {
for (let i = 1; i < 11; i++) {
  while (((j/i)%1) === 0){
    if (i = 10){
      count = j;
      break;
    }
  }
}
}
console.log(count);

//finding biggest number in a array object
const courses = [
  {cl: 'web', num: 332},
  {cl: 'langs', num: 364},
  {cl: 'biochem', num: 309},
  {cl: 'RM', num: 394}
];

let x = 0;
for (const number of courses) {
  if (number.num > x) {
    x = number.num;
  }
}
console.log(x);

//Define a constructor function for Book objects.
//Each book should have a title and an array of authors.
//Define a shared method for books that lets you check whether a given author was one of the authors in this book.
const Book = function(title,authors){
  this.title = title;
  this.authors = authors;
};

Book.prototype.isAuthor = function(name) {
  for (const author of this.authors){
    if (name === author){
      return true;
    }
  }
  return false;
};

const book = new Book('Big Red Barn', ['Margaret Wise Brown', 'Felicia Bond']);
console.log(book.isAuthor('Margaret Wise Brown')); // true
console.log(book.isAuthor('Felicia Bond')); // true
console.log(book.isAuthor('Clement Hurd')); // false

//Define a function that works like the range function in Python.
//For example, range(5) returns [0,1,2,3,4] and range(3,8) returns [3,4,5,6,7].
const range = function(low, high) {
  const nums = [];
  for (let i = low; low < high; i++) {
    nums.push[i];
  }
  return nums;
};
