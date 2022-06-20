const http = require('http');
console.log('Https core modules');

http.createServer((req, res)=>{
    res.write('<h1>Hi, I am Tushar Bansal</h1>');
    res.end();
}).listen(4500);