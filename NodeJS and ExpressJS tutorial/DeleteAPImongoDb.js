const express = require('express');
const mongoDb = require('mongodb')
const app = express();
const dbConnect = require('./mongoDb');

app.use(express.json());

app.delete('/:id', async (req, resp)=>{
    console.log(req.params.id);
    let data = await dbConnect();
    let result = await data.deleteOne({_id: new mongoDb.ObjectId(req.params.id)})
    resp.send(result);
})

app.listen(1300);