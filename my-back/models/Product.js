const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    discount: { type: Number },
    stock: { type: Number, default: 0 },
    hoverImage: { type: String },
    status: { type: String, enum: ['new', 'sale', 'pre-order', 'subscription'], default: 'new' }
});

module.exports = mongoose.models.Product || mongoose.model('Product', ProductSchema);



