const dbConnect = require('./mongoDb.js');

// dbConnect().then((resp)=>{
//     resp.find().toArray().then((data)=>{
//         console.log(data);
//     })
// })
// console.warn(dbConnect());

const read = async ()=>{
    let data = await dbConnect();
    data = await data.find().toArray();
    console.warn(data);
}

read();