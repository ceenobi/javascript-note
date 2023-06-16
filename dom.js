//document object module, it's just the manipulating stuff on the screen rather than console
//When a web page is loaded, the browser creates a Document Object Model of the page.
//With the object model, JavaScript gets all the power it needs to create dynamic HTML:

// JavaScript can change all the HTML elements in the page
// JavaScript can change all the HTML attributes in the page
// JavaScript can change all the CSS styles in the page
// JavaScript can remove existing HTML elements and attributes
// JavaScript can add new HTML elements and attributes
// JavaScript can react to all existing HTML events in the page
// JavaScript can create new HTML events in the page

//The HTML DOM is a standard object model and programming interface for HTML. It defines:

// The HTML elements as objects
// The properties of all HTML elements
// The methods to access all HTML elements
// The events for all HTML elements
// In other words: The HTML DOM is a standard for how to get, change, add, or delete HTML elements.

//HTML DOM Methods
//HTML DOM methods are actions you can perform (on HTML Elements).
//HTML DOM properties are values (of HTML Elements) that you can set or change.
//document.getElementById("demo").innerHTML = "Hello World!";
//In the example above, getElementById is a method, while innerHTML is a property.

//The getElementById Method
//The most common way to access an HTML element is to use the id of the element.
//In the example above the getElementById method used id="demo" to find the element.

let club = document.getElementById('club')
//in order to change the og out on the scrren we can simply
club.innerText = 'Real Madrid'
console.log(club.innerText)
club.innerHTML = '<h2>Barcelona</h2>'

//The innerHTML Property
//The easiest way to get the content of an element is by using the innerHTML property.
//The innerHTML property is useful for getting or replacing the content of HTML elements.

//Finding HTML Elements
// Often, with JavaScript, you want to manipulate HTML elements.

// To do so, you have to find the elements first. There are several ways to do this:

// Finding HTML elements by id
// Finding HTML elements by tag name
// Finding HTML elements by class name
// Finding HTML elements by CSS selectors
// Finding HTML elements by HTML object collections

//Finding HTML Elements by Tag Name
//This example finds all <p> elements:
const element = document.getElementsByTagName('h6')
//If you want to find all HTML elements with the same class name, use getElementsByClassName().
const pixel = document.getElementsByClassName('pixel')
for (box of pixel) {
  box.style.border = '1px solid black'
  box.style.width = '100px' // Apply border to boxes only
  box.style.padding = '10px'
}

const redBoxes = document.getElementsByClassName('box red')
console.log(redBoxes.length) // 2

for (box of redBoxes) {
  box.style.border = '4px solid red'
  box.style.width = '100px' // Add border to the elements that have box and red classes only.
}

//Finding HTML Elements by CSS Selectors
//If you want to find all HTML elements that match a specified CSS selector (id, class names, types, attributes, values of attributes, etc), use the querySelectorAll() method.
const ty = document.querySelectorAll('.apple')
ty.forEach((box) => {
  box.style.color = 'red'
})

//Changing the Value of an Attribute
document.getElementById('myImage').src =
  'https://res.cloudinary.com/ceenobi/image/upload/v1627987057/Gadgets/airpodpro_lrbv4y.jpg'

//Changing HTML Style
document.getElementById('blue').style.color = 'blue'
//A JavaScript can be executed when an event occurs, like when a user clicks on an HTML element.
//To execute code when a user clicks on an element, add JavaScript code to an HTML event attribute:
//chnage col using event listeners
//Examples of HTML events:

// When a user clicks the mouse
// When a web page has loaded
// When an image has been loaded
// When the mouse moves over an element
// When an input field is changed
// When an HTML form is submitted
// When a user strokes a key

function changeCol() {
  const tt = (document.getElementById('id1').style.color = 'green')
  return tt
}
const changeText = (id) => {
  const dd = (document.getElementById('changeme').innerHTML = id)
  return dd
}
function displayDate() {
  document.getElementById('demo').innerHTML = Date()
}

function upperCase() {
  const x = document.getElementById('fname')
  x.value = x.value.toUpperCase()
}

const du = document.getElementById('stylediv')
du.style.height = '40px'
du.style.width = '100px'
du.style.backgroundColor = 'pink'

function mOver(obj) {
  obj.innerHTML = 'Thank You'
}

function mOut(obj) {
  obj.innerHTML = 'Mouse Over Me'
}

//The addEventListener() method attaches an event handler to the specified element.
// The addEventListener() method attaches an event handler to an element without overwriting existing event handlers.
// You can add many event handlers to one element.
// You can add many event handlers of the same type to one element, i.e two "click" events.
document.getElementById('myBtn').addEventListener('click', function () {
  alert('Hello World!')
})
