const dbConnect = require('./mongoDb');

const deleted = async () => {
    let data = await dbConnect();
    // data = await data.deleteOne({category:'gadget'})
    data = await data.deleteMany({brand:'Oppo'})
    console.log(data);
}

deleted();