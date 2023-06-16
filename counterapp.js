let counts = 0
let count = 0
// next step is to reassign and increment the count value by 1
//here our reassigned count takes in the old value of count variable and adds an increment by 1
counts = count + 2
console.log('counts', counts)

//excercise
// Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
// Decrease it down to 25, and then finally increase it to 70
// Console.log the value after each step

//solution
// let bonusPoints = 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints - 75
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 45
// console.log(bonusPoints)

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

//next step in our counter app
// Create a INCREMENT button with the id="increment-btn"

//function executes a block of code each time it's called. allows code to be reusable. eg console.log('buttton was clicked) in a function

let countEl = document.getElementById('count-el') // pass in arguments
let saveEl = document.getElementById('save-el')

console.log(countEl)

function increment() {
  count += 1
  countEl.textContent = count
  console.log('count', count)
}
function save() {
  let countStr = count + ' - '
  saveEl.textContent += countStr
  countEl.textContent = 0
  count = 0
}
increment()
