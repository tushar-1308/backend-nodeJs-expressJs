const express = require('express');
const app = express()

// this middleware applicable to all routes, it is also called application middleware
const reqFilter = (req,res,next)=>{
    if(!req.query.age){
        res.send('Please provide age')
    }
    else if(req.query.age<18){
        res.send('InValid age');
    }
    else{
        next();
    }
    console.log('reqFilter');
    
}

app.use(reqFilter);

app.get('/',(req,res)=>{
    res.send('welcome to home page')
})

app.get('/about',(req,res)=>{
    res.send('welcome to about page')
})

app.listen(1500);