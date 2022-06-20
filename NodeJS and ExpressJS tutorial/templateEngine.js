const express = require('express');

const app = express();

app.get('',(req, res)=>{
    res.send('Home Page');
    console.log('Home Page');
})

app.get('/profile',(req, res)=>{
    // const user={
    //     name:'Tushar Bansal',
    //     email:'tushar@test.com',
    //     city:'barnala'
    // }
    // res.render('profile',{user});
    res.render('profile');
})

app.listen(1300);