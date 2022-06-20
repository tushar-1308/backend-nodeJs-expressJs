const dbConnect = require('./mongoDb');

const insert = async ()=>{
    let data = await dbConnect();
    // data = await data.insertOne(
    //     {name:'iphone 12', brand:'apple', cost:50000, category:'mobile'}
    // )
    data = await data.insertMany([
        {name:'nord', brand:'1+', cost:40000, category:'mobile'},
        {name:'A51', brand:'samsung', cost:3000, category:'mobile'},
    ])
    console.log(data);
}

insert();