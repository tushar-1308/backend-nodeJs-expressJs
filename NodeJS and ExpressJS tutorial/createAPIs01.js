const http = require('http');
const data = require('./createAPIs02');

http.createServer((req,resp)=>{
    resp.writeHead(500, {'content-Type':'application\json'});
    resp.write(JSON.stringify(data));
    resp.end();
}).listen(5000);