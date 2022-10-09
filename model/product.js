const {Schema, model} = require('mongoose')

const productSchema = new Schema({
    name: {
        type: String,
        required: true  
    },
    price: Number,
    categoryId: {
        type: String,
        unique: true
    }
})

module.exports = model('product', productSchema)