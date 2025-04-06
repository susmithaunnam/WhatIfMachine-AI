// Variables
let a = 10;       // Block scope, can be reassigned
const b = 20;     // Block scope, cannot be reassigned
var c = 30;       // Function scope, can be reassigned

// Data Types
let str = "Hello World";        // String
let num = 24;             // Number
let bool = true;          // Boolean
let arr = [1, 2, 3,4,5,6,7];      // Array
   arr.splice(1, 2);  // remove 2 elements starting at index 1
   console.log(arr);  // [1, 4,5,6,7]
   arr.splice(1, 0, 2, 3);  // at index 1, remove 0, add 2 and 3 at that index
   console.log(arr);  // [1, 2, 3, 4, 5, 6, 7]


let obj = {name: "Susmitha"};   // Object
let und = undefined;      // Undefined
let nul = null;           // Null

// Operators
// Arithmetic: +, -, *, /, %
let sum = a+b //30
let difference = a-b //-10
let product = a*b //200
let quotient = a/b //0.5
let remainder = a%b //10

// Comparison: ==, ===, !=, !==, >, <, >=, <=
let x = 10;
let y = '10';
console.log(x == y);   // true  
console.log(x === y);  // false (strict equality, types must match)
console.log(x != y);   // false
console.log(x !== y);  // true
console.log(x > 5);    // true
console.log(x < 5);    // false
console.log(x >= 10);  // true
console.log(x <= 9);   // false


// Loops
for (let i = 0; i < 5; i++) {
  console.log(i);
}

while (a > 0) {
  console.log(a);
  a++;
  break;
}

//Functions

function add(m, n){
  return m + n;
}

const multiply = (m, n) => m*n // Arrow function

// 7. Arrays
let fruits = ["apple", "banana"];
fruits.push("mango")     //Add
fruits.pop();           // Remove last
fruits.shift();         // Remove first
fruits.unshift("kiwi"); // Add at start
fruits.forEach(f => console.log(f));

//Objects
let person = {
  name: "Susmitha",
  age: 19,
  greeting: function() {
    console.log("Hi there")
  }
};
console.log(person.name);
person.greeting();

//Destructuring
const user = { name: "Susmitha", age:19};
const { name, age } = user;  // this is destructuring

//Spread Operator
const newArr = [...arr]; //newArr have same values as arr (copies)
