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
