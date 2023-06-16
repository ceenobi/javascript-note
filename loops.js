// loops are handy if you want to run the same code over and over again, each time with a different value.
//to print out pine or any other fruit here in the array we would need to do
//for loop method is javascript
const fruity = ['avocado', 'lettuce', 'pine', 'orange', 'apple']
console.log(fruity)
console.log(fruity[2])
//the above method would not be an efficient method to print out all fruity if we had a long list of items in the array. in order to achieve efficiengly, we introduce the loop methods which will loop over the items and run the same function on each item in the array

//different kinds of loops
//for - loops through a block of code a number of times
// for/in - loops through the properties of an object
// for/of - loops through the values of an iterable object
// while - loops through a block of code while a specified condition is true
// do/while - also loops through a block of code while a specified condition is true

//for loop
for (let i = 0; i < fruity.length; i++) {
  console.log(i, fruity[i]) //for loop
}
//i = 0, here above in the forloop method, we take the index and give it a starting of 0 and then it will run the function based on the items but will give each item it's own index.
// i < fruity.length; is saying run the function based on the number of items in our fruit array which is 4. i is less than 4 so the forloop will run up until 4 and then stop

const pointers = [1, 2, 3, 4, 5, 6]
for (let i = 0; i < pointers.length; i++) {
  console.log(pointers[i])
}
for (let i = 0; i < pointers.length; i++) {
  console.log(pointers[i] * 2)
}

//a more cleaner way of writing the forloop function is shown here-  for of loop in JavaScript allows you to iterate over iterable objects (arrays, sets, maps, strings etc).
for (const fruitt of fruity) {
  console.log(fruitt)
}
for (const point of pointers) {
  console.log(point * 2)
}

//to store the number * 2 result in an array of it's own, we use a previous array method we discused earlier and it's called the push method.
//first we create a new varaible and initialise it with an empty array
let resultB = []
for (const point of pointers) {
  resultB.push(point + 4)
}
console.log(resultB)

const summNumbers = (numbers) => {
  let result = 0
  for (const number of numbers) {
    result = result + number
  }
  return { result }
}
console.log(summNumbers([3, 5, 7, 9, 11]))
//here the result starts at 0 and adds the number argument begining with 3. 0 + 3 = 3 and 3 becoms the result. the result gets passed and added to the next number as an argument and performs the computation to give the new result until the loop is complete.

let language = 'JavaScript'

let rsp = ''
for (let x of language) {
  rsp += x + '<br>'
}
console.log(rsp)

const carlo = ['BMW', 'Volvo', 'Mini']

let texty = ''
for (let x of carlo) {
  texty += x
}
console.log(texty)

//a function that triples our number
const tripleNumber = (tripleNumbers) => {
  let tripleResult = []
  for (const triple of tripleNumbers) {
    tripleResult.push(triple * 3)
  }
  return tripleResult
}
console.log(tripleNumber([3, 4, 5, 6]))

function maxNum(numbers) {
  let result = numbers[4]
  for (const number of numbers) {
    if (number > result) {
      result = number
    }
  }
  return { result }
}

console.log(maxNum([1, 3, 4, 6, 7]))

//for in loops through the properties of an object
const phrase = 'Can you please turn on the lights?'
const letterCounter = (countletters) => {
  let result = 0
  for (const letter in countletters) {
    result = Number(letter) + 1
  }
  return { result: result }
}
console.log(letterCounter(phrase))
//short method
console.log(phrase.length)

const personas = { fname: 'John', lname: 'Gbolahan', age: 10 }
let txtp = ''
for (let x in personas) {
  txtp += personas[x] + ' '
}
console.log(txtp)

const numObjects = {1: 22, 2:34, 3: 46, 4: 58}
for(const num in numObjects) {
  console.log(numObjects[num]* 2)
}


//while loop - loops through a block of code if a specified condition is true
let textZ = ''
let i = 0
while (i < 10) {
  textZ += i
  i++
}
console.log(textZ)

const someNumbers = [22, 34, 46, 58]
let arrow = 0
while (arrow < someNumbers.length) {
  console.log(someNumbers[arrow] * 3)
  arrow++
}

//do while loop - the code is executed one time before checking the condition. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.
const otherNum = [34,44,54,65]
let ew = 0
do{
  console.log(otherNum[ew] * 2)
  ew++
} while (ew <  otherNum.length)


let textq = ''
let iq = 0
do {
  textq += iq
  iq++
} while (iq < 20) 
console.log(textq)

const letterFrequency = (phrase) => {
  let frequency = {}
  for (const letter of phrase) {
    if (letter in frequency) {
      frequency[letter] += 1
      // frequency[letter] ++
    } else {
      frequency[letter] = 1
    }
  }
  return frequency
}
console.log(letterFrequency('There once was a boy'))

//incremental operators ++, --, +=

// const wordFrequency = (phrase) => {
//   // let frequency = {}
//   const words = phrase.split(' ')
//   return letterFrequency(words)
//   // for (const word of words) {
//   //   if (word in frequency) {
//   //     frequency[word] += 1
//   //   } else {
//   //     frequency[word] = 1
//   //   }
//   // }

//   // return frequency
// }
// console.log(wordFrequency('Real Madrid is the best club club in in the world'))
