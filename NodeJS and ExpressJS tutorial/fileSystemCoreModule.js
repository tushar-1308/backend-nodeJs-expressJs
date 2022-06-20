const fs = require('fs');
fs.writeFileSync('code.txt', 'Hello world');
console.log(__dirname);
console.log(__filename);