const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    brand: String,
    price: Number,
    discountPrice: Number,
    colors: [String],
    sizes: [String],
    tags: [String],
    material: String,
    availability: String,
    imageUrl: String,
    createdAt: { type: Date, default: Date.now }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
