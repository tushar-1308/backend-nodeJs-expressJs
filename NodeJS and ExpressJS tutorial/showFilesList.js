const fs = require('fs');
const path = require('path');

console.log(__dirname);
const dirPath = path.join(__dirname, 'AllFiles');

for(var i=0; i<5; i++){
    fs.writeFileSync(dirPath + "/hello" + i + ".txt", 'a sample text file');
}

fs.readdir(dirPath, (err, files)=>{
    files.forEach((item)=>{
        console.log(item)
    })
})