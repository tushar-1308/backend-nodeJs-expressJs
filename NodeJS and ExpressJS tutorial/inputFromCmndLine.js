console.log(process.argv);

// PS C:\Users\tushar.c.bansal\NodeJS and ExpressJS tutorial> node .\inputFromCmndLine.js hi tushar
// [
//   'C:\\Program Files\\nodejs\\node.exe',
//   'C:\\Users\\tushar.c.bansal\\NodeJS and ExpressJS tutorial\\inputFromCmndLine.js',
//   'hi',
//   'tushar'
// ]

console.log(process.argv[3]);

// PS C:\Users\tushar.c.bansal\NodeJS and ExpressJS tutorial> node .\inputFromCmndLine.js hi tushar
// tushar

const input = process.argv;
const fs = require('fs');
if(input[2]=='add'){
    fs.writeFileSync(input[3], input[4]);
}
else{
    fs.unlinkSync(input[3]);
}