// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// Logical operators
// *************************************

let name;
// name = "";
// name = false;
// name = 0;
// name = "Tripti";
// name = NaN;

let result = name || 'Bishnu';
console.log(result);

// OR "||" finds the first truthy value
// --------------------------------------------

// The OR || operator does the following:

// Given multiple OR’ed values:

// result = value1 || value2 || value3;

//  a. Evaluates operands from left to right.
//  b. For each operand, converts it to boolean. If the result is true, stops and returns the original value of that operand.
//  c. If all operands have been evaluated (i.e. all were false), returns the last operand.

let firstName;
let middleName = '';
let lastName = 'George';

result = firstName || middleName || lastName;
console.log(result); // George

// && (AND)
// --------------------------------------------

// In classical programming, AND returns true if both operands are truthy and false otherwise;

// let a = "", b = 21;
// let a = null, b = 21;
// let a, b = 21;
// let a = 0, b = 21;
// let a = false, b = 21;
// let a = NaN, b = 21;
let a = 12,
  b = 21;

result = a && b;
console.log('Result: ' + result);

// AND “&&” finds the first falsy value
// Given multiple AND’ed values:

// result = value1 && value2 && value3;

// The AND && operator does the following:

// a. Evaluates operands from left to right.
// b. For each operand, converts it to a boolean. If the result is false, stops and returns the original value of that operand.
// c. If all operands have been evaluated (i.e. all were truthy), returns the last operand.
// d. In other words, AND returns the first falsy value or the last value if none were found.

// The rules above are similar to OR. The difference is that AND returns the first falsy value while OR returns the first truthy one.

// if the first operand is truthy,
// AND returns the second operand:
console.log(1 && 0); // 0
console.log(1 && 5); // 5

// if the first operand is falsy,
// AND returns it. The second operand is ignored
console.log(null && 5); // null
console.log(0 && 'no matter what'); // 0

//We can also pass several values in a row. See how the first falsy one is returned:
console.log(1 && 2 && null && 3); // null

// When all values are truthy, the last value is returned:
console.log(1 && 2 && 3); // 3, the last one

// Tasks : https://javascript.info/logical-operators
// ***************************************************

console.log(null || 2 || undefined); // 2

console.log(console.log(1) || 2 || console.log(3));
//explanation
// The call to alert does not return a value. Or, in other words, it returns undefined.

// a. The first OR || evaluates its left operand alert(1). That shows the first message with 1.
// b. The alert returns undefined, so OR goes on to the second operand searching for a truthy value.
// c. The second operand 2 is truthy, so the execution is halted, 2 is returned and then shown by the outer alert.

// There will be no 3, because the evaluation does not reach alert(3).

// What is the result of AND'ed ?
console.log(1 && null && 2); //null

//The result of OR AND OR
console.log(null || (2 && 3) || 4); //3;

// Check the range between
let age = 90;
// age = 14;
// age = 50;
// age = 7;
// if (age >= 14 && age <= 90) {
//   console.log(`${age} lies between 14 and 90.`);
// } else {
//   console.log(`${age} does not lie between 14 and 90.`);
// }

// Check the range outside
let myAge = 90;
// myAge = 14;
// myAge = 50;
// myAge = 7;
// if (myAge <= 14 || myAge >= 90) {
//   console.log(`${myAge} does not lie between 14 and 90.`);
// } else {
//   console.log(`${myAge} lies between 14 and 90.`);
// }

if (!(age >= 14 && age <= 90)){
  console.log(`${age} does not lie between 14 and 90.`);
} else {
  console.log(`${age} lies between 14 and 90.`);
}
