//An array is a special variable, which can hold more than one value:

const phones = ['Iphone', 'Tecno', 'Infinix']
console.log(phones)

//Why Use Arrays?
//If you have a list of items (a list of car names, for example), storing the cars in single variables could look like this:

let car1 = 'Saab'
let car2 = 'Volvo'
let car3 = 'BMW'

//However, what if you want to loop through the cars and find a specific one? And what if you had not 3 cars, but 300?
//The solution is an array!
//An array can hold many values under a single name, and you can access the values by referring to an index number.
//You can also create an array, and then provide the elements:
const carsz = []
carsz[0] = 'Honda'
carsz[1] = 'Lexus'
carsz[2] = 'Benz'
console.log(carsz)

//Using the JavaScript Keyword new
//The following example also creates an Array, and assigns values to it:
const laptopss = new Array('HP', 'MAC', 'DELL')
//The two examples above do exactly the same. There is no need to use new Array().

//Accessing Array Elements. You access an array element by referring to the index number:
let carPosition = carsz[1]
console.log(carPosition)

//Changing an Array Element
phones[1] = 'Samsung'
console.log(phones)

//Arrays are Objects
//Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays. But, JavaScript arrays are best described as arrays.

//Arrays use numbers to access its "elements". Objects use names to access its "members"
//You should use objects when you want the element names to be strings (text).
//You should use arrays when you want the element names to be numbers.

//Array Elements Can Be Objects
//JavaScript variables can be objects. Arrays are special kinds of objects.

//Because of this, you can have variables of different types in the same Array.
//You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array:

//Aray Methods

//toString() converts an array to a string of (comma separated) array values.
const clubs = ['Chelsea', 'Liverpool', 'Arsenal', 'Man United']
console.log(clubs.toString())

//The join() method also joins all array elements into a string. It behaves just like toString(), but in addition you can specify the separator:

console.log(clubs.join(' - '))

//Popping and Pushing - push adds elements to the end of an array, while pop removes the last item from the array
//When you work with arrays, it is easy to remove elements and add new elements.
//Popping items out of an array, or pushing items into an array.
console.log(clubs.pop())
console.log(clubs) //the new array relects the pop value
console.log(clubs.push('Man City'))
console.log(clubs) //reflects Man City added

//Shifting is equivalent to popping, but working on the first element instead of the last.
console.log(clubs.shift())
console.log(clubs) //reflects item removed at start

//The length property provides an easy way to append a new element to an array:
console.log('club length', clubs.length)
clubs[clubs.length] = 'Tottenham'
console.log(clubs) //reflects new cub added

const dynamicArray = [
  'Shoe',
  'Movie',
  {
    color: 'purple',
    type: 'minivan',
    registration: new Date('2023-02-07'),
    capacity: 7,
  },
]

console.log(dynamicArray)

//Arrays of objects don't stay the same all the time. We almost always need to manipulate them. So let's take a look at how we can add objects to an already existing array.
//To add an object at the first position, use Array.unshift.

let cara = {
  color: 'red',
  type: 'cabrio',
  registration: new Date('2023-02-07'),
  capacity: 2,
}
dynamicArray.unshift(cara)
console.log(dynamicArray)

//change elements position using their index
let country = {
  name: 'Nigeria',
  population: '200m',
  states: 36,
  capital: 'Abuja',
}

dynamicArray[0] = country
console.log('yyy', dynamicArray)

//Add a new object at the end - Array.push

let movieList = ['Black Panther', 'Avatar', 'Doctor Strange']
dynamicArray.push(movieList)
console.log(dynamicArray)
//get indexed value
console.log(dynamicArray[3])

//Splicing and Slicing Arrays
//The splice() method adds new items to an array.
//The slice() method slices out a piece of an array.

//Add a new object in the middle - Array.splice. To add an object in the middle, use Array.splice. This function is very handy as it can also remove items.
// Array.splice(
//   {index where to start},
//   {how many items to remove},
//   {items to add}
// );

let ninReg = {
  name: 'Pepe',
  location: 'Lagos',
  nationality: 'Nigerian',
}
dynamicArray.splice(2, 0, ninReg)
console.log(dynamicArray)

//you can use splice() to remove elements without leaving "holes" in the array
let fruits = ['Banana', 'Orange', 'Apple', 'Mango']
fruits.splice(0, 1)
console.log(fruits)
//The first parameter (0) defines the position where new elements should be added (spliced in).
//The second parameter (1) defines how many elements should be removed.
//The rest of the parameters are omitted. No new elements will be added.

//The slice() method slices out a piece of an array into a new array.
//This example slices out a part of an array starting from array element 1 ("Orange"):
fruits.slice(1)
console.log('slice', fruits)

//The slice() method creates a new array.
//The slice() method does not remove any elements from the source array.

fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
console.log('new slice', fruits.slice(3))
//The slice() method can take two arguments like slice(1, 3). The method then selects elements from the start argument, and up to (but not including) the end argument.
console.log('new Rslice', fruits.slice(1, 3))

//If the end argument is omitted, like in the first examples, the slice() method slices out the rest of the array.
console.log('new Tslice', fruits.slice(2))

//Merging (Concatenating) Arrays
const mergeMyArrays = clubs.concat(dynamicArray)
console.log('mergeMyArrays', mergeMyArrays)
//The concat() method does not change the existing arrays. It always returns a new array.
//The concat() method can take any number of array arguments:

//sorting arrays
//The sort() method allows you to sort elements of an array in place. Besides returning the sorted array, the sort() method changes the positions of the elements in the original array.
console.log('sort', fruits.sort())
//The reverse() method reverses the elements in an array. You can use it to sort an array in descending order:
console.log('reverse sort', fruits.reverse())

//Numeric Sort
//By default, the sort() function sorts values as strings. if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1". You can fix this by providing a compare function:

let points = [40, 100, 1, 5, 25, 10]
console.log('pointers', points.sort())

points.sort(function (a, b) {
  return a - b
})
console.log('ascending', points)

points.sort(function (a, b) {
  return b - a
})
console.log('descending', points)

//Sorting Object Arrays
let employees = [
  { name: 'John', salary: 90000, hireDate: 'July 1, 2010' },
  { name: 'David', salary: 75000, hireDate: 'August 15, 2009' },
  { name: 'Ana', salary: 80000, hireDate: 'December 12, 2011' },
]
employees.sort(function (a, b) {
  return a.salary - b.salary
})

console.table(employees);
