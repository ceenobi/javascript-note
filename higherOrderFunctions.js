//In Javascript, functions can be assigned to variables in the same way that strings or arrays can. They can be passed into other functions as parameters or returned from them as well. A “higher-order function” is a function that accepts functions as parameters and/or returns a function.

//Functions Assigned to Variables
//In JavaScript, functions are a data type just as strings, numbers, and arrays are data types. Therefore, functions can be assigned as values to variables, but are different from all other data types because they can be invoked.

let plusFive = (number) => {
  return number + 5
}
// f is assigned the value of plusFive
let f = plusFive
plusFive(3) // 8
// Since f has a function value, it can be invoked.
console.log(f(9)) // 14

//Callback Functions
//In JavaScript, a callback function is a function that is passed into another function as an argument. This function can then be invoked during the execution of that higher order function (that it is an argument of).
//Since, in JavaScript, functions are objects, functions can be passed as arguments

//We need callback functions because many JavaScript actions are asynchronous, which means they don't really stop the program (or a function) from running until they're completed, as you're probably used to. Instead, it will execute in the background while the rest of the code runs.

//When to Use the Callback Function
//Callbacks ensure that the function will not run before the task is completed but will run right after the task is completed. It develops asynchronous JavaScript code and keeps them safe from errors. In JavaScript, the way to create a callback function is to pass it as a parameter to another function and then call it back after the task is completed.

//Higher-Order Functions
//In Javascript, functions can be assigned to variables in the same way that strings or arrays can. They can be passed into other functions as parameters or returned from them as well.

//A “higher-order function” is a function that accepts functions as parameters and/or returns a function.

//JavaScript Functions: First-Class Objects
//JavaScript functions are first-class objects. Therefore:

//They have built-in properties and methods, such as the name property and the .toString() method.
//Properties and methods can be added to them.
//They can be passed as arguments and returned from other functions.
//They can be assigned to variables, array elements, and other objects.

//Assign a function to a variable originalFunc
const originalFunc = (num) => {
  return num + 2
}

//Re-assign the function to a new variable newFunc
const newFunc = originalFunc

//Access the function's name property
newFunc.name //'originalFunc'

//Return the function's body as a string
newFunc.toString() //'(num) => { return num + 2 }'

//Add our own isMathFunction property to the function
newFunc.isMathFunction = true

//Pass the function as an argument
const functionNameLength = (func) => {
  return func.name.length
}
functionNameLength(originalFunc) //12

//Return the function
const returnFunc = () => {
  return newFunc
}
returnFunc() //[Function: originalFunc]

//we have the map method, filter method, and reduce method

//The .reduce() Method
//The .reduce() method iterates through an array and returns a single value.

//In the above code example, the .reduce() method will sum up all the elements of the array. It takes a callback function with two parameters (accumulator, currentValue) as arguments. On each iteration, accumulator is the value returned by the last iteration, and the currentValue is the current element. Optionally, a second argument can be passed which acts as the initial value of the accumulator.

const arrayOfNumbers = [1, 2, 3, 4]

const sumup = arrayOfNumbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
})

console.log(sumup) // 10

const sumArrayReduce = (numbers) => {
  const reduceResult = numbers.reduce((prev, curr) => prev + curr)
  return reduceResult
}
console.log(sumArrayReduce([1, 2, 3, 4, 5, 6]))

function reduceMultiply(a, b) {
  return a * b
}
const multiply = [2, 3, 4, 5]
const multiReduce = multiply.reduce(reduceMultiply)
console.log('multiReduce', multiReduce)

const actors = [
  { name: 'The Rock', networth: 350000 },
  { name: 'Johnny Depp', networth: 300000 },
  { name: 'Will Smith', networth: 250000 },
  { name: 'Sandra Bullock', networth: 450000 },
]

const sumNetworth = actors.reduce((a, b) => a + b.networth, 0)
console.log(sumNetworth)

//The .map() Method
//The .map() method executes a callback function on each element in an array. It returns a new array made up of the return values from the callback function.
//The original array does not get altered, and the returned array may contain different elements than the original array.
//In the example code above, the .map() method is used to add ' joined the contest.' string at the end of each element in the finalParticipants array.

const finalParticipants = ['Taylor', 'Donald', 'Don', 'Natasha', 'Bobby']

// add string after each final participant
const announcements = finalParticipants.map((member) => {
  return member + ' joined the contest.'
})

console.log(announcements)

let resultDouble = [1, 2, 3, 4, 5, 6].map((number) => number * 2)
console.log('result', resultDouble)
//map method loops and returns an array

const tripleNumbers = (numbers) => {
  return numbers.map((number) => number * 3)
}
console.log(tripleNumbers([2, 3, 4]))

const actorNames = actors.map((actor) => actor.name).join(', ')
console.log(actorNames)

//The .filter() Method - loops and returns an array with matching conditons
//The .filter() method executes a callback function on each element in an array. The callback function for each of the elements must return either true or false. The returned array is a new array with any elements for which the callback function returns true.
//In the above code example, the array filteredArray will contain all the elements of randomNumbers but 4.

const filter = (numbers, greaterThan) => {
  let result = []
  for (const number of numbers) {
    if (number > greaterThan) {
      result.push(number)
    }
  }
  return result
}
console.log(filter([1, 2, 3, 4, 5, 6], 3))

const nums = [1, 2, 3, 4, 5, 6, 7]
const numsFilter = nums.filter((num) => num > 3 || num < 2)
console.log('numsFilter', numsFilter)
//using logical OR denoted by || only needs to match one of both conditions in order to be true

const filterNetworth = actors.filter((actor) => actor.networth >= 300000)
console.log(filterNetworth.networth)

const randomNumbers = [4, 11, 42, 14, 39]
const filteredArray = randomNumbers.filter((n) => n >= 10)

console.log(filteredArray)

//The .forEach() Method
//The .forEach() method executes a callback function on each of the elements in an array in order.
//In the above example code, the callback function containing a console.log() method will be executed 5 times, once for each element.

const numbered = [28, 77, 45, 99, 27]

numbered.forEach((number) => {
  console.log(number)
}) 
numbered.forEach((number) => {
  console.log(number + 2)
}) 
