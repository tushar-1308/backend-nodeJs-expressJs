const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:String,
    brand:String,
    cost:Number,
    category:String
});

module.exports = mongoose.model('products', productSchema);