const express = require('express');

const app = express();

app.get('',(req, res)=>{
    console.log("request from browser is: ",req.query.name);
    res.send('Welcome, This is home page' + req.query.name)
});

app.get('/about',(req,res)=>{
    res.send('Welcome, This is About Us page')
});

app.get('/contact',(req,res)=>{
    res.send('Welcome, This is Contact Us page')
});

app.listen(1300);