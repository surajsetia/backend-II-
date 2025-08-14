const fs=require('fs');
console.log("Start");                                                    
setTimeout(() => {
    console.log("Timer callback");
}
, 0);
setImmediate(() => {
    console.log("set Immediate callback");
});
fs.readFile("demo.text",(data)=>{
    console.log("poll phase callback");
    setTimeout(() => {
        console.log("Timer 2");
    }, 0);
    setImmediate(() => {
        console.log("immd 2");
    });
});
console.log("End");




// Output 1:
// START 
// END 
// Timer callback
// set Immediate callback

// Output 2:
/*Start
End
Timer callback
poll phase callback
set Immediate callback
immd 2
Timer 2
*/


// micro task queue
// 1. process.nextTick() (Higher priority than other microtasks)
// 2. Promise.resolve().then()
// 3. async/await

// macrotask queue
// 1. setTimeout()
// 2. setInterval()
// 3. setImmediate()

// The event loop will first execute all microtasks before moving on to the next macrotask.
