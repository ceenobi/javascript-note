//We use the async keyword with a function to represent that the function is an asynchronous function. The async function returns a promise.

// async function example

async function fs() {
  console.log('Async function.')
  return Promise.resolve(1)
}

fs()

async function fc() {
  console.log('Async function.')
  return Promise.resolve(1)
}

fc().then(function (result) {
  console.log(result)
})

//The await keyword is used inside the async function to wait for the asynchronous operation.
//The use of await pauses the async function until the promise returns a result (resolve or reject) value. For example,

// a promise
let promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve('Promise resolved')
  }, 10000)
})

// async function
async function asyncFunc() {
  // wait until the promise resolves
  let result = await promise

  console.log(result)
  console.log('hello')
}

// calling the async function
asyncFunc()

//The async function allows the asynchronous method to be executed in a seemingly synchronous way. Though the operation is asynchronous, it seems that the operation is executed in synchronous manner.
//This can be useful if there are multiple promises in the program. For example,

// let promise1
// let promise2
// let promise3

// async function asyncFunc() {
//   let result1 = await promise1
//   let result2 = await promise2
//   let result3 = await promise3

//   console.log(result1)
//   console.log(result1)
//   console.log(result1)
// }

//Error Handling
//While using the async function, you write the code in a synchronous manner. And you can also use the catch() method to catch the error. For example,

async function asyncFuncv() {
    try {
        // wait until the promise resolves 
        let result = await promise; 

        console.log(result);
    }   
    catch(error) {
        console.log(error);
    }
}

// calling the async function
asyncFuncv(); // Promise resolved

