//data types includes anything
//JavaScript has 8 Datatypes
// 1. String
// 2. Number
// 3. Bigint
// 4. Boolean
// 5. Undefined
// 6. Null
// 7. Symbol
// 8. Object

// The Object Datatype
// The object data type can contain:

// 1. An object
// 2. An array
// 3. A date
//numbers - 1,2, 3, 5, 5.4
//strings - text values are called text strings. 'hello, how are you', 'hello, how are you'
//arrays - []
//objects - {}
//boolean - true / false

// Numbers:
let length = 16
let weight = 7.5

// Strings:
let color = 'Yellow'
let lastName = 'Johnson'

// Booleans
let xw = true
let yw = false

// Object can contain either:
const persona = { firstName: 'John', lastName: 'Doe' }
// Array object:
const carss = ['Saab', 'Volvo', 'BMW']
// Date object:
const date = new Date('2022-03-25')

// Note
// A JavaScript variable can hold any type of data.

// The Concept of Data Types
// In programming, data types is an important concept.
// To be able to operate on variables, it is important to know something about the type.
// Without data types, a computer cannot safely solve this:

let xavier = 16 + 'Volvo'
// Does it make any sense to add "Volvo" to sixteen? Will it produce an error or will it produce a result?

// Note
// When adding a number and a string, JavaScript will treat the number as a string.

//JavaScript evaluates expressions from left to right. Different sequences can produce different results:
let octopus = 16 + 4 + 'Volvo'

let xautos = 'Volvo' + 16 + 4 // since the first operand is a string, all operands are treated as strings.

//JavaScript has dynamic types. This means that the same variable can be used to hold different data types:

let xander // Now x is undefined
xander = 5 // Now x is a Number
xander = 'John' // Now x is a String



// JavaScript Numbers
// All JavaScript numbers are stored as decimal numbers (floating point).

// Numbers can be written with, or without decimals:

// With decimals:
let x1 = 34.0

// Without decimals:
let x2 = 34

// Most programming languages have many number types:

// Whole numbers (integers):
// byte (8-bit), short (16-bit), int (32-bit), long (64-bit)

// Real numbers (floating-piont):
// float (32-bit), double (64-bit).

// Javascript are always one type:
// double (64-bit floating point).

//JavaScript BigInt
// All JavaScript numbers are stored in a a 64-bit floating-point format.

// JavaScript BigInt is a new datatype (2020) that can be used to store integer values that are too big to be represented by a normal JavaScript Number.

let xnit = BigInt('123456789012345678901234567890')

// JavaScript Booleans
// Booleans can only have two values: true or false.

let xi = 5
let yi = 5
let zi = 6
const pi = xi == yi
console.log('pi', pi) // Returns true
console.log('xi', xi == zi) // Returns false
//Booleans are often used in conditional testing.

//JavaScript Arrays
// JavaScript arrays are written with square brackets.

// Array items are separated by commas.

// The following code declares (creates) an array called cars, containing three items (car names):

//arrays allows one to store multiple values inside them
//Array indexes are zero-based, which means the first item is [0], second is [1], and so on.
const groceries = ['banana', 'apple', 'pineapple', 'grape']
console.log('groceries', groceries)
//so how do we get the apple only? we do that by counting from 0. in code, counting starts from 0 rather than from 1. in otherwords, we call it indexinig
console.log('apple only', groceries[1])

//array methods
//push array method allows you to add a new item to an array and returns the new length of the array
groceries.push('pear')
console.log('new groceries', groceries)
//slice array method returns the portion of the array that you want in a new array
console.log(groceries.slice(0, 2)) //starts from 0 up till 2 [0,1] not inclusive of 2 itself but 2 in index
//what if we want the starting index to begin from pineapple?
console.log(groceries.slice(2, 4))
//indexOf array method
console.log(groceries.indexOf('grape'))
//length array method returns the number of elements in a given array
console.log(groceries.length) //in length the starting index begins with 1 rather than 0

//JavaScript Objects
// JavaScript objects are written with curly braces {}.

// Object properties are written as name:value pairs, separated by commas.
//objects are a type of variable, similar to arrays but the come with key- value pairs
//objects are created using the curly brackets
const identityy = {
  name: 'Clark Kent',
  job: 'Superman',
  place: 'Metropolis',
}
//to access the properties of the person object, we have the dot notation and the bracket notation
console.log(identityy.name)
console.log(identityy.job)
console.log(identityy['place']) //-bracket notation

//assign property to person object
identityy.ability = 'fly'
console.log(identityy)

//The typeof Operator
//You can use the JavaScript typeof operator to find the type of a JavaScript variable.

//The typeof operator returns the type of a variable or an expression:

typeof '' // Returns "string"
console.log('typestring', typeof '')
typeof 'John' // Returns "string"
typeof 'John Doe' // Returns "string"

//Undefined
//In JavaScript, a variable without a value, has the value undefined. The type is also undefined.
let room // Value is undefined, type is undefined

//Any variable can be emptied, by setting the value to undefined. The type will also be undefined.
room = undefined // Value is undefined, type is undefined

// Empty Values
// An empty value has nothing to do with undefined.

// An empty string has both a legal value and a type.
let carz = '' // The value is "", the typeof is "string"

//math operators
//multiply - *
//divide - /
//exponent - **
//Modulo or Remainder - % eg 5%2 = 1
//Add - +
//substract - -

//math methods
//floor - Math.floor() rounds a number down to the nearest integer and returns the result
const floorMathsEg = Math.floor(110.25)
console.log('floorMathsEg', floorMathsEg)

//ceil - Math.ceil() rounds a number up to the nearest integer and returns the result
const floorCeilEg = Math.floor(110.79)
console.log('floorCeilEg', floorCeilEg)

//random - Math.random()returns a random number between 0 (inclusive) and 1 (exclusive)

const mathRandom = Math.random()
console.log('mathRandom', mathRandom)

//you can generate a random between 0 and whatever range you want, he we use 3
const mathRandom3 = Math.random() * 3
console.log('mathRandom3', mathRandom3)

//how do round down the number from mathRandom?
const mathRandom3A = Math.floor(Math.random() * 3)
console.log('mathRandom3A', mathRandom3A)
