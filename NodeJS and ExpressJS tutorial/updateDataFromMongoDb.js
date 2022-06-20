const dbConnect = require("./mongoDb");

const update = async ()=>{
    let data = await dbConnect();
    // data = await data.updateOne(
    //     {name:'nord'}, {
    //         $set: {brand: 'one-plus'}
    //     }
    // )
    data = await data.updateMany(
        {category:'mobile'}, {
            $set: {category: 'gadgets'}
        }
    )
    console.log(data)
}

update();