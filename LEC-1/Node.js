
const fs = require('fs');
console.log("Hello World!");
function add(a,b){
    return a + b;
}
function subtract(a,b){
    return a - b;
}
function multiply(a,b){
    return a * b;
}
fs.readFile("demo.txt", "utf-8", (data) => {
    console.log(data);
});
add(2,3);
subtract(5,6);
multiply(3,2);
console.log("exit");

// Convert into process then each task convert into a thread 
// Process = Set of task 


// Thread = NON TASK 
// Process = RUNNING PROGRAM 

// Node.js is single threaded and synchonous by default
// HOW Node.js achieved NON-BLOCKING I/O operations? -> Because of EVENT LOOP and Thread Pool (by default it is 4 threads)
// Thread Pool is use for CPU intensive work like, file read, write, cryptography, DNS etc. Event loop delegates the I/O operations to the thread pool, allowing the main thread to continue executing other code without waiting for these operations to complete. (in which order call back will be executed will be decided by the event loop)

//Event loop phases:
// 1. Expired Timers: Executes callbacks scheduled by setTimeout() and setInterval().
// 2. I/O callbacks: Executes callbacks for I/O operations like file reads/writes.
// 3. Setimmediate: Executes callbacks scheduled by setImmediate().
// 4. Close callbacks: Executes callbacks for closed resources, like sockets.
// 5. Exit: Cleans up and exits the event loop if there are no more callbacks to execute.
// 6. Restart the loop: The event loop starts over, checking for new events and executing their callbacks in the next iteration.



// Node.js uses an event-driven architecture and a non-blocking I/O model.
// This means that operations like reading files, making network requests, or querying databases do not block the execution of other code. Instead of waiting for these operations to complete, Node.js continues executing other code and uses callbacks, promises, or async/await to handle the results when they are ready.
// This allows Node.js to handle many connections simultaneously without being blocked by slow I/O operations, making it highly efficient for I/O-heavy applications like web servers and real-time applications.
// Node.js uses an event loop to manage asynchronous operations. The event loop continuously checks for events and executes the associated callbacks when the events occur. This allows Node.js to handle multiple operations concurrently without blocking the main thread.

// Two components of Node.js
// 1. V8 Engine: The V8 engine is the JavaScript engine developed by Google for Chrome. It compiles JavaScript code into machine code, allowing Node.js to execute JavaScript efficiently.
// 2. Libuv: Libuv is a library that provides Node.js with an eventloop and non-blocking I/O operations. It handles asynchronous operations like file system access, network requests, and timers, allowing Node.js to perform these tasks without blocking the main thread.
// Node.js is built on the V8 JavaScript engine, which compiles JavaScript codeinto machine code for execution. This allows Node.js to run JavaScript code efficiently on the server side.
