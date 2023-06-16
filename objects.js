// JavaScript objects are written with curly braces {}.
// Object properties are written as name:value pairs, separated by commas.
//objects are a type of variable, similar to arrays but the come with key- value pairs
//objects are created using the curly brackets
const identity = {
  name: 'Clark Kent',
  job: 'Superman',
  place: 'Metropolis',
}
//to access the properties of the person object, we have the dot notation and the bracket notation
console.log(identity.name)
console.log(identity.job)
console.log(identity['place']) //-bracket notation

//assign property to person object
identity.ability = 'fly'
console.log(identity)

//You can also define an object in a single line.
const human = { name: 'John', age: 20 }

// nested object
const student = {
  name: 'John',
  age: 20,
  marks: {
    science: 70,
    math: 75,
  },
}
// accessing property of student object
console.log(student.marks) // {science: 70, math: 75}

// accessing property of marks object
console.log(student.marks.science) // 70



// What is this?
// In JavaScript, the this keyword refers to an object.
// Which object depends on how this is being invoked (used or called).
// The this keyword refers to different objects depending on how it is used:

// In an object method, this refers to the object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), apply(), and bind() can refer this to any object.

//this is not a variable. It is a keyword. You cannot change the value of this.

//this in a Method
// When used in an object method, this refers to the object.
// In the example below, this refers to the humantype object.
// Because the fullName method is a method of the humantype object.

const humantype = {
  firstName: 'Jack',
  lastName: 'Daugh',
  id: 5566,
  fullName: function () {
    return this.firstName + ' ' + this.lastName
  },
}
console.log(humantype.fullName())

//When used alone, this refers to the global object.
// Because this is running in the global scope.
// In a browser window the global object is [object Window]:
let o = this
console.log(o)
;('use strict')
let pl = this
console.log(pl)

// In a function, the global object is the default binding for this.

// In a browser window the global object is [object Window]:
function myFunction() {
  return this
}
console.log(myFunction())

// JavaScript strict mode does not allow default binding.

// So, when used in a function, in strict mode, this is undefined.
;('use strict')
function myFunctions() {
  return this
}
console.log(myFunctions())

//In HTML event handlers, this refers to the HTML element that received the event:
{
  /* <button onclick="this.style.display='none'">
  Click to Remove Me!
</button> */
}

// Explicit Function Binding
// The call() and apply() methods are predefined JavaScript methods.

// They can both be used to call an object method with another object as argument.

//The example below calls person1.fullName with person2 as an argument, this refers to person2, even if fullName is a method of person1:
const person1 = {
  fullName: function () {
    return this.firstName + ' ' + this.lastName
  },
}

const person2 = {
  firstName: 'Jill',
  lastName: 'Dillian',
}

// Return "John Doe":
const yyy = person1.fullName.call(person2)
console.log(yyy)

//Function Borrowing
// With the bind() method, an object can borrow a method from another object.

// This example creates 2 objects (person and member).

// The member object borrows the fullname method from the person object:

const persons = {
  firstName: 'John',
  lastName: 'Doe',
  fullName: function () {
    return this.firstName + ' ' + this.lastName
  },
}

const member = {
  firstName: 'Hege',
  lastName: 'Nilsen',
}

let fullNamez = persons.fullName.bind(member)
console.log(fullNamez());

//creating a function with an object using es6 javascript arrow functions and template literals
const introducer = (name, job, place) => {
  const whoAmI = {
    name: name,
    job: job,
    place: place,
    assets: 100000,
    liability: 40000,
  }
  const intro = `Hi, I'm ${whoAmI.name} and my occupation is ${
    whoAmI.job
  }. I live in ${whoAmI.place} and my networth is #${
    whoAmI.assets - whoAmI.liability
  } `
  return intro
}
console.log(introducer('Diana', 'Wonder Woman', 'Theymisciara'))

//creating methods - a method is a property containing a function definition
const myClub = (club, ucl) => {
  const myTeam = {
    club: club,
    ucl: ucl,
    registeredFans: 300000000,
    unregisteredFans: 1000000,
    fanbase: function () {
      return this.registeredFans - this.unregisteredFans
    },
  }
  const myClubInfo = `My favorite football club is ${
    myTeam.club
  } and we have won the ucl title ${
    myTeam.ucl
  } times and our fanbase is ${myTeam.fanbase()}`
  return myClubInfo
}
console.log(myClub('Real Madrid', 14))
