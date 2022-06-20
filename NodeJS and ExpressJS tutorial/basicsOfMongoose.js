const mongoose = require('mongoose');

const main = async ()=>{
    await mongoose.connect("mongodb://localhost:27017/e-comm");
    // const productSchema = new mongoose.Schema({
    //     name:String,
    //     brand:String,
    //     cost:Number,
    //     category:String
    // });
    const productSchema = new mongoose.Schema({
        name:String,
        category:String
    });
    const ProductModel = mongoose.model('products', productSchema);
    let data = new ProductModel({name:'Mi9', brand:'redmi', cost:9000, category:'gadgets'});
    let result = await data.save();
    console.log(result);
}

main()