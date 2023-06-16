brandName = 'Honda'
var brandName
console.log('Hello', brandName)
// input your first line
console.log('hello world')
//lesson one - variables are placeholders used to store info and data in your app
myName = 'Charles Mbachu'
console.log(myName)
sentence = 'how are you today?, i hope you are having a nice day'
console.log(sentence)
// variable is the value stored in it. Console.log(myName) is same as console.log(Charles Mbachu)

//we have var, const, let variables types
//var greeting = 'hello'
//let greeting = 'hello'
//const greeting = 'hello'
//Using nothing
//note: the use of var variable is deprecated and we only use const or let variables
//use const if you know the variable value is going to be constant - you wont change it
//use let if you might have need to change the value
//The var keyword is used in all JavaScript code from 1995 to 2015.
//The let and const keywords were added to JavaScript in 2015.
//If you want your code to run in older browsers, you must use var.

let user = 'Tobi'
user = 'Vic'
console.log(user)

const charles = 'Dev'
console.log('charles', charles)

let a, b, c // Declare 3 variables
a = 5 // Assign the value 5 to a
b = 6 // Assign the value 6 to b
c = a + b // Assign the sum of a and b to c

//JavaScript Expressions
//An expression is a combination of values, variables, and operators, which computes to a value.The computation is called an evaluation.
//For example, 5 * 10 evaluates to 50:

//Expressions can also contain variable values:
var x
x = 5
var y = x * 10
console.log('y', y)

//The values can be of various types, such as numbers and strings.

//For example, "John" + " " + "Doe", evaluates to "John Doe":

let stringType = 'John' + ' ' + 'Doe'
console.log('stringType', stringType)

//Not all JavaScript statements are "executed".
//Code after double slashes // or between /* and */ is treated as a comment.
//Comments are ignored, and will not be executed:

//Multi-line comments start with /* and end with */.

//JavaScript is Case Sensitive
let firstName, firstname
firstName = 'John'
firstname = 'Wunmi'
console.log(firstname)

//The general rules for constructing names for variables (unique identifiers) are:
//Names can contain letters, digits, underscores, and dollar signs.
//Names must begin with a letter.
//Names can also begin with $ and _ (but we will not use it in this tutorial).
//Names are case sensitive (y and Y are different variables).
//Reserved words (like JavaScript keywords) cannot be used as names

//You can declare many variables in one statement.

//Start the statement with let and separate the variables by comma:
let person = 'John Doe',
  carName = 'Volvo',
  price = 200

//Value = undefined

//variables are often declared without a value. The value can be something that has to be calculated, or something that will be provided later, like user input.

//A variable declared without a value will have the value undefined.

//The variable carName will have the value undefined after the execution of this statement:

let mobileName

//Re-Declaring JavaScript Variables

//If you re-declare a JavaScript variable declared with var, it will not lose its value.
//The variable carName will still have the value "Volvo" after the execution of these statements:
var bookName = 'Harry Pottter'
var bookName

//You cannot re-declare a variable declared with let or const.
let laptopBrand = 'Hp'
//  let laptopBrand

//you can do arithmetic with JavaScript variables, using operators like = and +

let addUp = 5 + 2 + 3
console.log('addUp', addUp)

//You can also add strings, but strings will be concatenated:

let addString = 'John' + ' ' + 'Doe'
console.log('addString', addString)

//If you put a number in quotes, the rest of the numbers will be treated as strings, and concatenated.
let addStringNum = '5' + 2 + 3
console.log('addStringNum', addStringNum)

//here, the number gets evaluated before adding the string concatination
let addNumString = 2 + 3 + '5'
console.log('addNumString ', addNumString)

//JavaScript Dollar Sign $
let $ = 'Hello World'
let $$$ = 2
let $myMoney = 5

//JavaScript Underscore (_)
//JavaScript treats underscore as a letter, identifiers containing _ are valid variable names:
let _lastName = 'Johnson'
let _x = 2
let _100 = 5

//Variables defined with let cannot be Redeclared.
//Variables defined with let must be Declared before use.
//Variables defined with let have Block Scope.

//example of how let don't let you redeclare a variable
//let x = "John Doe";
//let x = 0;
// SyntaxError: 'x' has already been declared

//unlike var , you can redeclare a variable
var x = 'John Doe'

var x = 0

//Block Scope
//Before ES6 (2015), JavaScript had only Global Scope and Function Scope.
//ES6 introduced two important new JavaScript keywords: let and const.
//These two keywords provide Block Scope in JavaScript.
//Variables declared inside a { } block cannot be accessed from outside the block:
{
  let e = 2
}
// e can NOT be used here

//Variables declared with the var keyword can NOT have block scope.
//Variables declared inside a { } block can be accessed from outside the block.

{
  var e = 2
}
// e CAN be used here

//Redeclaring Variables
//Redeclaring a variable using the var keyword can impose problems.
//Redeclaring a variable inside a block will also redeclare the variable outside the block:

var r = 10
// Here x is 10

{
  var r = 2
  // Here x is 2
}
// Here x is 2

//Redeclaring a variable using the let keyword can solve this problem.
//Redeclaring a variable inside a block will not redeclare the variable outside the block:

let t = 20
// Here x is 20

{
  let t = 2
  // Here x is 2
}

// Here x is 10

//With let, redeclaring a variable in the same block is NOT allowed:
// var x = 2 // Allowed
// let x = 3 // Not allowed

// {
//   let x = 2 // Allowed
//   let x = 3 // Not allowed
// }

// {
//   let x = 2 // Allowed
//   var x = 3 // Not allowed
// }

//Redeclaring a variable with let, in another block, IS allowed:

let p = 2 // Allowed

{
  let p = 3 // Allowed
}

{
  let p = 4 // Allowed
}

//Let Hoisting
//Variables defined with var are hoisted to the top and can be initialized at any time.
//Meaning: You can use the variable before it is declared:

//const variable
//Variables defined with const cannot be Redeclared.
//Variables defined with const cannot be Reassigned.
//Variables defined with const have Block Scope.

//A const variable cannot be reassigned:
//const Me = 55;
//Me = 30;      // This will give an error
//Me = Me + 10;   // This will also give an error

//JavaScript const variables must be assigned a value when they are declared:
const bookwarm = 'googles'
// const bookly
// bookly = 'googles'

//Always declare a variable with const when you know that the value should not be changed.

//Use const when you declare:
// A new Array
// A new Object
// A new Function
// A new RegExp

//The keyword const is a little misleading.
//It does not define a constant value. It defines a constant reference to a value.
// Because of this you can NOT:

// Reassign a constant value
// Reassign a constant array
// Reassign a constant object
// But you CAN:

// Change the elements of constant array
// Change the properties of constant object

// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");
console.log('cars', cars)

// But you can NOT reassign the array:

// const cars = ["Saab", "Volvo", "BMW"];

// cars = ["Toyota", "Volvo", "Audi"];    // ERROR
