const express = require('express');
require('./config')
const Product = require('./product.js');
const app = express();

app.use(express.json());
app.get('/', async (req, res)=>{
    let data = await Product.find();
    console.log(data);
    res.send(data);
})

app.delete('/delete/:_id', async (req, res)=>{
    console.log(req.params);
    let data = await Product.deleteOne(req.params);
    res.send(data);
})

app.put('/update/:_id', async (req, res)=>{
    console.log(req.params);
    let data = await Product.updateOne(
        req.params,
        {
            $set:req.body
        }
    );
    res.send(data);
})

app.listen(1300);