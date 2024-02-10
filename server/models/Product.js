const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    code: String,
    image: String,
    category: String,
    size: String,
    finish: String,
})

module.exports = mongoose.model('Product', productSchema);