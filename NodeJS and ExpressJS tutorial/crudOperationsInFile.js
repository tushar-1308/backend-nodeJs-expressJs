const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, 'AllFiles');
const filePath = `${dirPath}/hello0.txt`;

// fs.readFile(filePath, 'utf8', (err, item)=>{
//     console.log(item);
// })

// fs.appendFile(filePath, ' and file name is hello0.txt', (err)=>{
//     if(!err){
//         console.log('file is updated');
//     }
// })

// fs.readFile(filePath, 'utf8', (err, item)=>{
//     console.log(item);
// })

// PS C:\Users\tushar.c.bansal\NodeJS and ExpressJS tutorial> node .\crudOperationsInFile.js
// a sample text file and file name is hello0.txt
// file is updated
// a sample text file and file name is hello0.txt

// fs.rename(filePath, `${dirPath}/fruit.txt`, (err)=>{
//     if(!err){
//         console.log("file name is updated");
//     }
// })
// file name is updated

fs.unlinkSync(`${dirPath}/fruit.txt`);