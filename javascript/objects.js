//objects, arrays, and function syntax

//object literal
const point = {x:1, y:2};
console.log(point);

//accessing properties
console.log(point.x);

//changing properties
point.x = 3;

//nested object literal
const circle = {
  center: point,
  radius: 4
};

//accessing subproperties
console.log(circle.center.x);

//undefined subproperties
console.log(circle.color);
circle.color = 'blue';
console.log(circle);

//array
const languages = ['HTML', 'CSS', 'JS'];
console.log(languages);

//accessing length and elements
for (let i=0; i<languages.length; i++){
  console.log(languages[i]);
}

//changing elements
languages[2] = 'javascript'

//adding elements
languages.push('MongoDB')

//iterating over elements
for (const lang of languages) {
  console.log(lang);
}

//function definitions
const avg = function(a, b){
  return (a + b)/2;
};

//calling functions
console.log(avg(5,6));

//another definition
const print = function(a, b){
  console.log(`a=${a}, b=${b}`);
};

//undefined values
const result = print(7,8);
console.log(result);
print(9); //b would be set to undefined
print(); //both a & b will be set to undefined

//objects literal with a method
const rectangle = {
  width: 10,
  height: 20,
  area: function() {
    return this.width * this.height;
  }
};

//method calling
console.log(rectangle.area());

//constructor definition
const Rect = function(width,height){
  this.width = width;
  this.height = height;
};

//shared method for all Rects
Rect.prototype.area = function() {
  return this.width * this.height;
};

//constructing objects
const small = new Rect(1,2);
const large = new Rest(10,20);

//method calls
console.log(small).area());
console.log(large.area());

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
  for (const author of authors){
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
  for (let i = low; low < high; low++){
    nums.push[i];
  }
  return nums;
};
