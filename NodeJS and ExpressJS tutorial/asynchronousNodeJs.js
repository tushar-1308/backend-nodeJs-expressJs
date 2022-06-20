console.log("First command");

setTimeout(()=>{
    console.log("Second command");
}, 2000)

console.log("Third command");

// PS C:\Users\tushar.c.bansal\NodeJS and ExpressJS tutorial> node .\asynchronousNodeJs.js First command
// Third command
// Second command


// asynchronous lang. drawback

var a = 10;
var b = 0;

setTimeout(()=>{
    b = 20;
}, 2000)

console.log(a+b);

// PS C:\Users\tushar.c.bansal\NodeJS and ExpressJS tutorial> node .\asynchronousNodeJs.js
// 10