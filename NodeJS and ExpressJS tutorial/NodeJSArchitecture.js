console.log("Starting up...");

setTimeout(()=>{
    console.log("2 sec log");
},2000)

setTimeout(()=>{
    console.log("0 sec log");
},0)

console.log("Ending up...")

// PS C:\Users\tushar.c.bansal\NodeJS and ExpressJS tutorial> node .\NodeJSArchitecture.js
// Starting up...
// Ending up...
// 0 sec log
// 2 sec log


// Note: Node APIs wait in callback queue, it go to callstack after main function exist.


// =================== Event Loop ==========================    
         
//        |---------------------------------------------|
//       \/                                             |
//     Call stack   ---->     Node APIs   ---->    Callback Queue 
// 1.  main()

//
// 2.  log(starting up)       setTimeOut(2)
//     main()

// 3.  main()                 setTimeOut(2)
//                            setTimeout(0)   

// 4.  log(ending up)         setTimeOut(2)        setTimeout(0)
//     main()                 

// 5.  main()                                       setTimeout(0)
//                                                  setTimeOut(2)

// 6.  setTimeout(0)                                setTimeout(2)

// 6.  setTimeout(2)  

// 7.  