//functions
//javascript function is a block of code designed to perform a particular task and it's executed when something calls it

//This is called a declared function. Declared functions are not executed immediately. Basically, declared functions are saved for you to use them somewhere else so this means it’s not called upon or “invoked” until you call it like this:
function myFunctionNamez(parameters) {
  //some code that does something.
}

//A self-invoking function is a nameless (anonymous) function that is invoked immediately after its definition.
//An anonymous function is enclosed inside a set of parentheses followed by another set of parentheses (), which does the execution.
;(function () {
  console.log('This function is called immediately')
})()

//Self-invoking functions are useful for initialization tasks. For example, if we have a web page in which we want to attach event listeners to DOM elements and other initialization work, self-invoking functions would be the best tool for the job!

let xk = myFunctionl() // x will be the window object

function myFunctionl() {
  return this
}
console.log(myFunctionl())


//this function has no arguments
function sayMyName() {
  console.log('Charles')
  console.log('Precious')
  console.log('Austin')
}

//note a function wont run/execute unless called. we run it here
sayMyName()


//but what if we want to make it more dynamic
function sayMyDynamicName(name) {
  console.log(name)
}
//the sayMyDynamicName function takes an argument of name and so when calling the function we pass that argument and it'll run the function based off the argument given. This name variable can only live inside the function and cannot be accessed outside of it.
sayMyDynamicName('Fathia')

function greeting(name) {
  greet = 'hi ' + name + ' nice to meet you'
  console.log(greet)
}
greeting('Peter')

//however from the greeting fucntion, we used concatenate to create spaces between the words but there is a much more efficient way to to that using template literals
function greetingB(name) {
  const greet = `hi ${name}, nice to meet you`
  console.log(greet)
}
greetingB('Wisdom')

//After a function expression has been stored in a variable, the variable can be used as a function.The function above is actually an anonymous function (a function without a name).
//Functions stored in variables do not need function names. They are always invoked (called) using the variable name.

const xp = function (a, b) {
  return a * b
}
let zp = xp(4, 3)
console.log('zp', zp);
//Self-Invoking Functions
//A self-invoking expression is invoked (started) automatically, without being called.
//Function expressions will execute automatically if the expression is followed by ().
//You cannot self-invoke a function declaration.You have to add parentheses around the function to indicate that it is a function expression:

//handling multiple arguments and return statements.
//return statements stops the execution of a fucntion and returns a value
//the return statement makes functions reuseable wherever needed
function sum(a, b) {
  return a + b
}
function subtract(a, b) {
  return a - b
}
numTotal = sum(2, 4)
console.log(numTotal)

//example - calculator tip
function calcFoodTotal(food, tip) {
  const tipPercent = tip / 100
  const tipAmount = food * tipPercent
  const total = sum(food, tipAmount)
  return total
}
const txc =()=> {

}
console.log('calcFoodTotal', calcFoodTotal(600, 10))


//so far we have used the old javascript method of writing fucntions, however we have a newer way which was introduced in ES6 called arrow functions

const sumArrowFunction = (a, b) => {
  return a + b
} // explicit arrow function

//the difference between the arrow and function type is that we don't neccesarily don't have to use the return statement

const sumArrowFunctionB = (a, b) => a + b //here we keep things simple and our logic stays on the same line. Also known as implicit arrow function
console.log('sumArrowFunctionB', sumArrowFunctionB(40, 70))

//excerise
//   TODO: Write a function that sums two numbers
//   TODO: Write a function that subtracts two numbers
//   TODO: Write a function that divides two numbers.
//   TODO: Write a function that multiplies two numbers.
//   *NOTE* be sure to handle dividing by zero 😉
//   ES5 Syntax: function Add(){}
//   ES6 Syntax (Arrow function): const add = () => {}

function add(at, bt) {
  return at + bt
}
console.log('add', add(5, 7))

function sub() {
  //Subtract function here
}

function div() {
  //Divide function here
}

function mul() {
  //Multiply function here
}

console.log('hello from the SUM exercise')
/* 
  TODO: create a function that console logs the result of any of the above operations.
*/

let lap1 = 34
let lap2 = 33
let lap3 = 36

// Create a function that logs out the sum of all the lap times
function logLapTime() {
  let totalTime = lap1 + lap2 + lap3
  console.log('totaltime', totalTime)
}
logLapTime()

let lapsCompleted = 0

// Create a function that increments the lapsCompleted variable with one
// Run it three times

function incrementLap() {
  lapsCompleted = lapsCompleted++
}

// incrementLap()
// incrementLap()
incrementLap()

console.log('lapsCompleted', lapsCompleted)


const getAdvice = async () => {
  const res = await fetch('https://api.adviceslip.com/advice')
  const data = await res.json()
  console.log('advice', data)
}

getAdvice()
