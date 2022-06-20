const exp = require('constants');
const express = require('express');
const path = require('path');

const app = express();

const htmlFilesFoldersPath = path.join(__dirname,'makeHTMLpages');

// app.use(express.static(htmlFilesFoldersPath));

app.get('',(req, resp)=>{
    resp.sendFile(`${htmlFilesFoldersPath}/index.html`);
})

app.get('/about',(req, resp)=>{
    resp.sendFile(`${htmlFilesFoldersPath}/about.html`);
})

app.get('/contact',(req, resp)=>{
    resp.sendFile(`${htmlFilesFoldersPath}/contact.html`);
})

app.get('*',(req, resp)=>{
    resp.sendFile(`${htmlFilesFoldersPath}/404.html`);
})

app.listen(1300);