let a = 10;
let b = 0;

let waitingResult = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(20);
    },2000)
})

waitingResult.then((data)=>{
    let b = data;
    console.log(a+b);
})