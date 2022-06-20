const express = require('express');
const app = express();
const EventEmitter = require('events');
const event = new EventEmitter();

let count = 0;

event.on("countAPI",()=>{
    count++;
    console.log("Event called",count);
})

app.get('/',(req, resp)=>{
    resp.send('api called')
    event.emit("countAPI")
})

app.get('/search',(req, resp)=>{
    resp.send('search api called')
    event.emit("countAPI")
})

app.get('/update',(req, resp)=>{
    resp.send('update api called')
    event.emit("countAPI")
})

app.listen(1300)