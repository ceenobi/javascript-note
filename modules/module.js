import { greetPerson, name, sum } from './hi.js'
import greet from './hi.js'
//As our application grows bigger, we want to split it into multiple files, so called “modules”. A module may contain a class or a library of functions for a specific purpose.
//A module is just a file. One script is one module. As simple as that.

//Modules can load each other and use special directives export and import to interchange functionality, call functions of one module from another one:

//export keyword labels variables and functions that should be accessible from outside the current module.
//import allows the import of functionality from other modules.
// importing greetPerson from greet.js file

//Then, we imported greetPerson() in another file using the import keyword. To import functions, objects, etc., you need to wrap them around { }.
let displayName = greetPerson('Jack');

console.log(displayName); // Hello Jack

console.log(name);
let add = sum(4, 9);
console.log(add); // 13

let displayNameB = greet('Foyin')
console.log(displayNameB)