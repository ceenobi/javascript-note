//excercise3
//Create 3 variables: month, dayOfMonth, year whose value are in strings. Use these variables to console.log today's date in one line in this format: "February 9, 2023"
let month = 'February'
let dayOfMonth = '10'
let year = '2023'
console.log(`${month} ${dayOfMonth} ${year}`)

//excercise4
//Write a function named toUpper takes a parameter 'str' whose function converts a word to uppercase. log to console.
function toUpper(str) {
  console.log(str.toUpperCase())
}
toUpper('Simon')

//excercise5
//Write a function toUpperB that takes a parameter who's function converts words to uppercase. log your result to a new variable which should be an empty array initially.
function toUpperB(stringArr) {
  let result = []
  result.push(stringArr[0].toUpperCase())
  result.push(stringArr[1].toUpperCase())
  console.log(result)
}
toUpperB(['ADD ME', 'TO THE GROUP'])

//excercise6
//write a function cartTotal that takes in a parameter - cartArray which multiplies the value of each item in an array. it should be an array of two objects - each object should have a price and quantity value. write a function that gets the total of the sum of the value of the two objects and log to console.

const summApp = (a, b) => {
  return a + b
}
function cartTotal(cartArray) {
  let total
  const cartA = cartArray[0].price * cartArray[0].quantity
  const cartB = cartArray[1].price * cartArray[1].quantity
  total = summApp(cartA, cartB)
  console.log(total)
  return total
}
cartTotal([
  { name: 'Apple', price: 4, quantity: 2 },
  { name: 'Orange', price: 3, quantity: 3 },
])

//excercise7
//create a todos array with object properties - title, dueDate, and id - their values should be in strings. write a function that lets you add a new todo item to the todos array. Use the date gettime method as a value for the id and ensure it ouptputs it as a string. log todos to the console.
let todos = [
  {
    title: 'Get groceries',
    dueDate: '2021-10-04',
    id: 'id1',
  },
  {
    title: 'Wash car',
    dueDate: '2021-02-03',
    id: 'id2',
  },
  {
    title: 'Make dinner',
    dueDate: '2021-03-04',
    id: 'id3',
  },
]

function createTodo(title, dueDate) {
  const id = new Date().getTime().toString()
  todos.push({
    title: title,
    dueDate: dueDate,
    id: id,
  })
}
createTodo('Play game', 'Tommorrow')
console.log(todos)

//excercise8
//Write a code which asks for a question using prompt method.
//the question should say 'Who's there?'
//if the question reply is 'Dami', it should prompt for a password
//if the password reply is 'javascript', use the alert method in javascript and output 'Welcome'
//if there is no password, alert 'cancelled'
//if the password is not 'javascript', alert 'wrong password'
//if there is no question, alert 'cancelled'
//if the question reply is not 'Dami', alert 'I don't know you'

//let question = prompt("Who's there?")

if (question == 'Dami') {
  let password = prompt('Password')
  if (password == 'javascript') {
    alert('Welcome!')
  } else if (!password) {
    alert('Canceled')
  } else if (password !== 'javascript') {
    alert('Wrong Password')
  }
} else if (!question) {
  alert('Canceled')
} else if (question !== 'Dami') {
  alert("I don't know you!")
}

//excercise 9
//refer to our calcFoodTotal function, write a function that splits the bill among users. if the user is less than or equal to 1, the bill should return the total, but if the user is more than 1, then the bill should be shared amoung the users. log to console.

const calcBill = (bill, tip) => {
  const billz = bill
  const tipShare = tip / 100
  const tipTotal = billz * tipShare
  const total = summApp(billz, tipTotal)
  // const perPersonTotal = total / perPerson
  // console.log(perPersonTotal)
  return total
}
const totalBill = calcBill(40000, 5)
console.log(totalBill)

const splitBill = (totalBill, b) => {
  if (b <= 1) {
    return totalBill
  } else {
    return totalBill / b
  }
}
console.log(splitBill(totalBill, 2))
