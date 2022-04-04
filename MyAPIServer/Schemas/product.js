const mongooseLib = require('mongoose');

const Schema = mongooseLib.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    shortDescription: {
        type: String
    },
    longDescription : {
        type: String
    },
    imageUrls: {
        type: [String]
    },
    active : {
        type: Boolean
    }
})

module.exports = mongooseLib.model('Product', productSchema);