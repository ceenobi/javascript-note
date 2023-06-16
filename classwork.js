//exercise 1 -variables

// Create two variables, name and greeting. The name variable should store your name,
// and the greeting should store e.g. "Hi, my name is "

// Create a third variable, myGreeting, that contatenates the two strings
// Log myGreeting to the console
const myNamez = 'Holding'
const greetMe = 'Hi, my name is '
const myGreets = greetMe + ' ' + myNamez
console.log(myGreets)

//exercise 2 - string methods
//output a string value and check its length
//slice your string variable and extract the third syllable word
//findthe index of the fourth syllable
let stringAss = 'I know what you did last night'
console.log('stringAss', stringAss.length)
//slice your string variable and extract the third syllable word
console.log('slice3rdword', stringAss.slice(7, 12))
//findthe index of the fourth syllable
console.log('indexof', stringAss.indexOf('you'))
//exercise 3 - string methods
//create an two arrays of what you like and merge them
const food = ['Amala', 'Fufu', 'Rice', 'Egusi']
const ingredients = ['Pepper', 'Maggi', 'Onions', 'Salt']
const edibles = food.concat(ingredients)
console.log('edibles', edibles)
const edibles2 = [...food,...ingredients]
console.log('edibles2',edibles2)

//exercise 3 - string methods
//a- create an two arrays of what you like and merge them
//b- sample data below
let employeeList = [
  {
    first_name: 'Tunde',
    last_name: 'Banire',
    designation: 'CEO, Co-Founder',
    tags: ['Finance', 'Lagos', 'Mentor', 'Top Management'],
    age: 45,
  },

  {
    first_name: 'Isaac',
    last_name: 'Ayomikun',
    designation: 'CTO, Co-Founder',
    tags: ['Engineering', 'Ogun', 'Mentor', 'Top Management'],
    age: 34,
  },

  {
    first_name: 'Mubarak',
    last_name: 'Goodman',
    designation: 'CFO',
    tags: ['Operations', 'Ogun', 'Mentor', 'Top Management'],
    age: 31,
  },

  {
    first_name: 'Emeka',
    last_name: 'Obi',
    designation: 'CMO',
    tags: ['People', 'Anambra', 'Mentor', 'Top Management'],
    age: 39,
  },

  {
    first_name: 'Emmanuel',
    last_name: 'Peters',
    designation: 'COO',
    tags: ['Product', 'Cross River', 'Mentor', 'Top Management'],
    age: 43,
  },
]

// Print first name, last name and designation of every employee on the list

employeeList.forEach(({ first_name, last_name, designation }) => {
  console.log(`${first_name} ${last_name} is the ${designation}`)
})

// "Eleanor Bolton is the CEO, Co-Founder"
// "Caspian Shields is the CTO, Co-Founder"
// "Marek Goodman is the CFO"
// "Lisa Whitehouse is the CMO"
// "Buster Mackenzi is the COO"

// Create new array from employeeList with all employee names

const employeeNames = employeeList.map(
  ({ first_name, last_name }) => first_name + ' ' + last_name
)

console.log(employeeNames)

// ["Eleanor Bolton", "Caspian Shields", "Marek Goodman", "Lisa Whitehouse", "Buster Mackenzi"]

// Add "name" property to all the objects in the list

employeeList = employeeList.map((employee) => {
  return { ...employee, name: employee.first_name + ' ' + employee.last_name }
})

console.log(employeeList)

// Delete "tags" property from all the objects in employeeList

// employeeList.forEach((employee)=> {delete employee.tags});

// console.log(employeeList);

// Calculate total age to find the average age of employee list

const empTotal = employeeList.reduce(
  (total, { age }) => {
    total.age = total.age + age
    return total
  },
  { age: 0 }
)

console.log(empTotal) //{age: 192}

const avgAge = empTotal.age / employeeList.length

console.log(`Average age of employees are: ${avgAge}`)

// "Average age of employees are: 38.4"

// Search employee with first name as "Caspian"

const searchedEmployee = employeeList.find(
  (employee) => employee.first_name == 'Isaac'
)
console.log(searchedEmployee)

// {first_name:"Caspian", last_name:"Shields", designation:"CTO, Co-Founder",
// tags:["Engineering", "San Francisco", "Mentor", "Top Management"], age:34}

// Find subset of employees who are from New York

const employeesInOgun = employeeList.filter(
  (employee) => employee.tags.indexOf('Ogun') != -1
)
console.log(employeesInOgun)

// [{first_name:"Marek", last_name:"Goodman", designation:"CFO",
// tags:["Operations","New York", "Mentor", "Top Management"], age:31},

// {first_name:"Lisa", last_name:"Whitehouse", designation:"CMO",
// tags:["People","San Francisco", "Mentor", "Top Management"], age:39},

// {first_name:"Buster", last_name:"Mackenzi", designation:"COO",
// tags:["Product","New York", "Mentor", "Top Management"], age:43}]

// Sort employees by ascending order of age

employeeList.sort((emp1, emp2) => emp1.age - emp2.age)

console.log(employeeList)

// Check if every employee are over 18 years

const areEmployeesOver18 = employeeList.every((employee) => employee.age > 18)

if (areEmployeesOver18) {
  console.log('All the employees are over 18 years')
} else {
  console.log('1 or more employees are underaged')
}

//Write a JavaScript function that accept a list of country names as input and returns the longest country name as output

// Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output : "United States of America"

function Longest_Country_Name(country_name) {
  return country_name.reduce(function(lname, country) {
    return lname.length > country.length ? lname : country});
}
console.log(Longest_Country_Name(["Australia", "Germany", "United States of America"]));
