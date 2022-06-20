const express = require('express');
const app = express();
const dbConnect = require('./mongoDb');

app.use(express.json());

// http://localhost:1300/
// app.put('/', async (req, res)=>{
//     console.log(req.body)
//     let data = await dbConnect();
//     let result = await data.updateOne(
//         {name: req.body.name},
//         {
//             $set:req.body
//         }
//     )
//     res.send(result);
// })


// http://localhost:1300/Mi9
app.put('/:name', async (req, res)=>{
    console.log(req.body)
    let data = await dbConnect();
    let result = await data.updateOne(
        {name: req.params.name},
        {
            $set:req.body
        }
    )
    res.send(result);
})

app.listen(1300);