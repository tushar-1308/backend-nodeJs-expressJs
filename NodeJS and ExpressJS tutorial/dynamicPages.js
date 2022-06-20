const express = require('express');
const app = express();

app.get('',(req, res)=>{
    res.send('<h1>Home Page<h1/>')
});

app.get('/profile',(req, res)=>{
    const user = {
        name:'Tushar',
        email:'tushar@test.com',
        country:'india',
        skills:['php','c','c++','node']
    }
    res.render('profile',{user})
});

app.get('/login',(req, res)=>{
    res.render('login')
});

app.listen(1300);