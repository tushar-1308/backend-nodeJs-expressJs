const express = require('express');
const app = express();

app.get('',(req,res)=>{
    res.send(`
    <input type="text" placeholder="enter value" value="${req.query.name}"/>
    <button>Click Me</button>
    <a href='/about'>Go to about page</a>
    `);
})

app.get('/about',(req,res)=>{
    res.send(`
    var object = [
        {name: 'Tushar', email: 'tushar@test.com'},
        {name: 'Sam', email: 'sam@test.com'}
    ]
    <a href='/'>Go to home page</a>
    `);
})

app.get('/contact',(req,res)=>{
    res.send('Contact Page');
})

app.listen(1300);