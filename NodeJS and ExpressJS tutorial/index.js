const app = require('./app');

var a = '10';
if(a==10){
    console.log("matched");
}
else{
    console.log("unmatched");
}

const arr = [1,2,3,4,5];
for(var i=0; i<arr.length; i++){
    console.log(arr[i]);
}
console.log(arr);

console.log(app);

console.log(app.z());