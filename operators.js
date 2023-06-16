//operators are used to assign values, compare values and also perform arithmetic operations
//basically stuff in maths (+-*/)
//The Assignment Operator (=) assigns a value to a variable.

// Assign the value 5 to x
let xl = 5
// Assign the value 2 to y
let yr = 2
// Assign the value x + y to z:
let z = xl + yr

//The Addition Operator (+) adds numbers:
let ar = 5
let br = 2 
let cr = ar + br
//The Multiplication Operator (*) multiplies numbers.

//There are different types of JavaScript operators:

// Arithmetic Operators
// Assignment Operators
// Comparison Operators
// Logical Operators
// Conditional Operators
// Type Operators

//Arithmetic Operators are used to perform arithmetic on numbers:

// +	Addition
// -	Subtraction
// *	Multiplication
// **	Exponentiation (ES2016)
// /	Division
// %	Modulus (Division Remainder)
// ++	Increment
// --	Decrement

//Assignment operators assign values to JavaScript variables.

let d = 10
d += 5

//The + operator can also be used to add (concatenate) strings.
let text11 = 'John'
let text22 = 'Doe'
let text33 = text11+ ' ' + text22

//The += assignment operator can also be used to add (concatenate) strings:
let text44 = 'What a very '
text44 += 'nice day'
//When used on strings, the + operator is called the concatenation operator.

//Adding two numbers, will return the sum, but adding a number and a string will return a string:
let xa = 5 + 5
let yb = '5' + 5
let zc = 'Hello' + 5

//JavaScript Comparison Operators
// ==	equal to
// ===	equal value and equal type
// !=	not equal
// !==	not equal value or not equal type
// >	greater than
// <	less than
// >=	greater than or equal to
// <=	less than or equal to
// ?	ternary operator

//JavaScript Logical Operators
// &&	logical and
// ||	logical or
// !	logical not

//The &&= Operator The &&= operator is an ES2020 feature.
//The Logical AND assignment operator is used between two values.
//If the first value is true, the second value is assigned.

//The ||= Operator
//The Logical OR assignment operator is used between two values.
//If the first value is false, the second value is assigned.


//JavaScript Type Operators
// typeof	Returns the type of a variable
// instanceof	Returns true if an object is an instance of an object type

let foodd = 20
let tipPercent = 0.2
tipAmounts = foodd * tipPercent
console.log(tipAmounts)

//first js app excercise - calc user input
//using prompt()- a js functionality that user input through the browser

// foodAmount = Number(prompt('How much was the food?'))
// tipPercent = Number(prompt('tip amount')) / 100
// tipAmount = foodAmount * tipPercent
// totalBuy = foodAmount + tipAmount
// console.log('tipAmount', tipAmount)
// console.log('totalBuy', totalBuy)

//we can output the result to the screen also using alert which is the opposite of prompt
// alert(`Your total purchase is ${totalBuy}`)

//normally we do not use prompt to get user input in js, we use forms
//if we console.log(totalBuy) we would get a concate string as the result cos the prompt views the result as a string. To force it as a mumber we would wrap the food variable with the number function
//we can make the console output more descriptive by using the sting function as denoted up

//Operator Precedence
//Operator precedence describes the order in which operations are performed in an arithmetic expression.
let xb = 100 + 50 * 3
//As in traditional school mathematics, the multiplication is done first.
//Multiplication (*) and division (/) have higher precedence than addition (+) and subtraction (-).
//When using parentheses, the operations inside the parentheses are computed first:
let xc = (100 + 50) * 3

//When many operations have the same precedence (like addition and subtraction or multiplication and division), they are computed from left to right:
let xd = 100 + 50 - 3
let xe = (100 / 50) * 3



