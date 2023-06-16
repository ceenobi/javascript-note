// JavaScript Strings
// A string (or a text string) is a series of characters like "John Doe".

// Strings are written with quotes. You can use single or double quotes:
let stringMthd = 'hello, how are you'

//You can use quotes inside a string, as long as they don't match the quotes surrounding the string:

// Single quote inside double quotes:
let answer1 = "It's alright"

// Single quotes inside double quotes:
let answer2 = "He is called 'Johnny'"

// Double quotes inside single quotes:
let answer3 = 'He is called "Johnny"'

//JavaScript String Methods
// String length
// String slice()
// String substring()
// String substr()
// String replace()
// String replaceAll()
// String toUpperCase()
// String toLowerCase()
// String concat()
// String trim()
// String trimStart()
// String trimEnd()
// String padStart()
// String padEnd()
// String charAt()
// String charCodeAt()
// String split()

let text = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let lengthNum = text.length
console.log('lgth', lengthNum)

//Extracting String Parts
//There are 3 methods for extracting a part of a string:

// javaScript String slice()
// slice() extracts a part of a string and returns the extracted part in a new string.

// The method takes 2 parameters: start position, and end position (end not included).

let textA = 'Apple, Banana, Kiwi'
let part = textA.slice(7, 13)
console.log('part1', part)

//If you omit the second parameter, the method will slice out the rest of the string:
part = textA.slice(7)
console.log('part2', part)

//If a parameter is negative, the position is counted from the end of the string:
part = textA.slice(-12)
console.log('part3', part)

//substring() is similar to slice().
//The difference is that start and end values less than 0 are treated as 0 in substring().
part = textA.substring(7, 13)
console.log('part4', part)

//substr() is similar to slice().
//The difference is that the second parameter specifies the length of the extracted part.
part = textA.substr(7, 4)
console.log('part5', part)

//If you omit the second parameter, substr() will slice out the rest of the string.
part = textA.substr(7)
console.log('part6', part)

//Converting to Upper and Lower Case
// A string is converted to upper case with toUpperCase():
// A string is converted to lower case with toLowerCase():

let text1 = 'Hello World Order!'
let text2 = text1.toUpperCase()
console.log(text2)

//JavaScript String trim()
//The trim() method removes whitespace from both sides of a string:
let text3 = '      Hello Samsung!      '
let text4 = text3.trim()
console.log('text4', text4)

//The trimStart() method works like trim(), but removes whitespace only from the start of a string.
text4 = text3.trimStart()
//The trimEnd() method works like trim(), but removes whitespace only from the end of a string.

//convert num to string
let numb = 5
let numString = numb.toString()
console.log('numstr', numString)

//Converting a String to an Array
const stringArray = 'Dog, Cat'
const ssss = stringArray.split(',')
console.log('ssss', ssss)
//If the separator is omitted, the returned array will contain the whole string in index [0].
//If the separator is "", the returned array will be an array of single characters:

// JavaScript Search Methods
// String indexOf()
// String lastIndexOf()
// String search()
// String match()
// String matchAll()
// String includes()
// String startsWith()
// String endsWith()

//The indexOf() method returns the index of (position of) the first occurrence of a string in a string:

let str = "Please locate where 'locate' occurs!"
let pos = str.indexOf('locate')
console.log('ppp',pos)

//The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:
pos = str.lastIndexOf('locate')
console.log(pos)

//Both indexOf(), and lastIndexOf() return -1 if the text is not found:
//Both methods accept a second parameter as the starting position for the search:
pos = str.indexOf('locate', 15)
console.log(pos)

//The lastIndexOf() methods searches backwards (from the end to the beginning), meaning: if the second parameter is 15, the search starts at position 15, and searches to the beginning of the string.pos = str.lastIndexOf('locate')
pos = str.lastIndexOf('locate', 15)
console.log(pos)

let textR = 'The rain in SPAIN stays mainly in the plain'
let textP = textR.match('ain')
console.log(textP)

textP = textR.match(/ain/)
console.log(textP)

//Perform a global search for "ain":
textP = textR.match(/ain/g)
console.log(textP)

//Perform a global, case-insensitive search for "ain":
textP = textR.match(/ain/gi)
console.log(textP)
//If a regular expression does not include the g modifier (global search), match() will return only the first match in the string.

//The matchAll() method returns an iterator containing the results of matching a string against a string (or a regular expression).

let speech = 'I love cats. Cats are very easy to love. Cats are very popular.'
let matching = speech.matchAll('Cats')
console.log(Array.from(matching))
console.log(Array.from(/matching/g))
console.log(Array.from(/matching/gi))

//The includes() method returns true if a string contains a specified value. Otherwise it returns false.
let textB = 'Hello world, welcome to the universe.'
console.log(textB.includes('world'))
console.log(textB.includes('world', 12))
//includes() is case sensitive. includes() is an ES6 feature.

//The startsWith() method returns true if a string begins with a specified value. Otherwise it returns false:
console.log(textB.startsWith('world'))
console.log(textB.startsWith('Hello'))
console.log(textB.startsWith('world', 5))
console.log(textB.startsWith('world', 6))
//startsWith() is case sensitive. startsWith() is an ES6 feature.

//The endsWith() method returns true if a string ends with a specified value. Otherwise it returns false:
console.log(textB.endsWith('world'))
console.log(textB.endsWith('world', 11))
//endsWith() is case sensitive. endsWith() is an ES6 feature.

//JavaScript Template Literals
// Template Literals
// Template Strings
// String Templates
// Back-Tics Syntax

//Template Literals use back-ticks (``) rather than the quotes ("") to define a string:
let textC = `Check me out!`
//With template literals, you can use both single and double quotes inside a string:
textC = `He's often called "Johnny"`
//template literals allows multiple strings
textC = `The quick
brown fox
jumps over
the lazy dog`

//Template literals allow variables in strings:
let anyName = 'David'
let yourName = 'Doe'

let ourName = `Welcome ${anyName}, ${yourName}!`

//Template literals allow expressions in strings:
let priced = 10
let VAT = 0.25

let total = `Total: ${(priced * (1 + VAT)).toFixed(2)}`