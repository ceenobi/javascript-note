//Conditional statements are used to perform different actions based on different conditions.
//In JavaScript we have the following conditional statements:

// Use if to specify a block of code to be executed, if a specified condition is true
// Use else to specify a block of code to be executed, if the same condition is false
// Use else if to specify a new condition to test, if the first condition is false

const checkSum = 1000

const marks = () => {
  if (checkSum > 18) {
    console.log('hello')
  }
}
marks()

if (checkSum > 0) {
  console.log('hell yea')
} else {
  console.log('no oo')
}

//ternary
const markA = checkSum > 900 ? 'excellent' : 'just ok'
function markScore() {
  return markA
}
console.log(markScore())

if (checkSum >= 1000) {
  console.log('you passed')
} else if (checkSum <= 500) {
  console.log('you failed')
} else {
  console.log('try again')
}

// Use switch to specify many alternative blocks of code to be executed
// This is how it works:

// The switch expression is evaluated once.
// The value of the expression is compared with the values of each case.
// If there is a match, the associated block of code is executed.
// If there is no match, the default code block is executed.

// program using switch statement
let ai = 2

switch (ai) {
  case 1:
    ai = 'one'
    break
  case 2:
    ai = 'two'
    break
  default:
    ai = 'not found'
    break
}
console.log(`The value is ${ai}`)

//In the above program, an expression a = 2 is evaluated with a switch statement.
// The expression's result is evaluated with case 1 which results in false.
// Then the switch statement goes to the second case. Here, the expression's result matches with case 2. So The value is two is displayed.
// The break statement terminates the block and control flow of the program jumps to outside of the switch block.

// program using switch statement
let ax = 1

switch (ax) {
  case '1':
    ax = 1
    break
  case 1:
    ax = 'one'
    break
  case 2:
    ax = 'two'
    break

  default:
    ax = 'not found'
    break
}
console.log(`The value is ${ax}`)
// In JavaScript, the switch statement checks the cases strictly (should be of the same data type) with the expression's result. Notice in the above example, 1 does not match with "1".// program for a simple calculator
let result

// take the operator input
//const operator = prompt('Enter operator ( either +, -, * or / ): ')

// take the operand input
// const number1 = parseFloat(prompt('Enter first number: '))
// const number2 = parseFloat(prompt('Enter second number: '))

// switch (operator) {
//   case '+':
//     result = number1 + number2
//     console.log(`${number1} + ${number2} = ${result}`)
//     break
//   case '-':
//     result = number1 - number2
//     console.log(`${number1} - ${number2} = ${result}`)
//     break
//   case '*':
//     result = number1 * number2
//     console.log(`${number1} * ${number2} = ${result}`)
//     break
//   case '/':
//     result = number1 / number2
//     console.log(`${number1} / ${number2} = ${result}`)
//     break

//   default:
//     console.log('Invalid operator')
//     break
// }

//In above program, the user is asked to enter either +, -, * or /, and two operands. Then, the switch statement executes cases based on the user input.

//In a JavaScript switch statement, cases can be grouped to share the same code.
// multiple case switch program
let fruit = 'apple';
switch(fruit) {
    case 'apple':
    case 'mango':
    case 'pineapple':
        console.log(`${fruit} is a fruit.`);
        break;
    default:
        console.log(`${fruit} is not a fruit.`);
        break;
}

switch (new Date().getDay()) {
  case 4:
  case 5:
    console.log('Soon it is Weekend')
    break
  case 0:
  case 6:
    console.log('It is Weekend')
    break
  default:
    console.log('Looking forward to the Weekend')
}
