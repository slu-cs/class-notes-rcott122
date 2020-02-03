// Object and array syntax

// Object literal
const point = {x: 1, y: 2};
console.log(point);

// Accessing properties
console.log(point.x);

// Changing properties
point.x = 3;

// Nested object literal
const circle = {
  center: point,
  radius: 4
};

// Accessing subproperties
console.log(circle.center.x);

// Undefined subproperties
console.log(circle.color);
circle.color = 'blue';
console.log(circle);

// Array
const languages = ['HTML', 'CSS', 'JS'];
console.log(languages);

// Accessing length and elements
for (let i = 0; i < languages.length; i++) {
  console.log(languages[i]);
}

// Changing elements
languages[2] = 'JavaScript';

// Adding elements
languages.push('MongoDB');

// Iterating over elements
for (const lang of languages) {
  console.log(lang);
}
