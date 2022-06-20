const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/e-comm");

const productSchema = new mongoose.Schema({
    name:String,
    brand:String,
    cost:Number,
    category:String
});

const updateInDb = async ()=>{
    const ProductModel = mongoose.model('products', productSchema);
    let data = await ProductModel.updateOne(
        {brand:'redmi'},
        {
            $set:{name:'MIUI'}
        }
    )
    console.log(data);
}

const deleteInDb = async ()=>{
    const ProductModel = mongoose.model('products', productSchema);
    let data = await ProductModel.deleteOne({name:'Mi9'})
    console.log(data);
}

const findInDb = async ()=>{
    const ProductModel = mongoose.model('products', productSchema);
    let data = await ProductModel.find({name:'nord'})
    console.log(data);
}

findInDb();