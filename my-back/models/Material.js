const mongoose = require('mongoose');

const materialSchema = new mongoose.Schema({
    id: String,
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

const Material = mongoose.model('Material', materialSchema);

module.exports = Material;
