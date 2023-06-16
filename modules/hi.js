// exporting a function
//The greetPerson() function is exported using the export keyword
export function greetPerson(name) {
  return `Hello ${name}`
}

// exporting the variable
export const name = 'JavaScript';

// exporting the function
export function sum(x, y) {
    return x + y;
}

// default export
export default function greet(name) {
    return `Hello ${name}`;
}

