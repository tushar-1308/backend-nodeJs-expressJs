const express = require('express');

const app = express();
const route = express.Router();


// const reqFilter = (req, resp, next)=>{
//     if(!req.query.age){
//         resp.send('Please provide age');
//     }
//     else if(req.query.age<18){
//         resp.send('Invalid age');
//     }
//     else{
//         next();
//     }
// }

// route middleware from diffrent file
// const reqFilter = require('./routeMiddlewareDiffFile')

// app.get('',(req, res)=>{
//     res.send('Welcome to home page');
// })

// app.get('/about', reqFilter, (req, res)=>{
//     res.send('Welcome to about page');
// })

// app.get('/help',(req, res)=>{
//     res.send('Welcome to help page');
// })


// route middleware in a group
const reqFilter = require('./routeMiddlewareDiffFile')
route.use(reqFilter);

app.get('',(req, res)=>{
    res.send('Welcome to home page');
})

route.get('/about', (req, res)=>{
    res.send('Welcome to about page');
})

route.get('/contact',(req, res)=>{
    res.send('Welcome to contact page');
})

app.get('/help',(req, res)=>{
    res.send('Welcome to help page');
})

app.use('/', route);

app.listen(1300);
