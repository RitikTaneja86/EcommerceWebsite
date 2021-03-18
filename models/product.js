const mongoose = require('mongoose');

const multer = require('multer');
const path = require('path');
const PRODUCT_PATH = path.join('/uploads/products/avatars');

const productSchema = new mongoose.Schema({
    productimage: {
        type: String
    },
    name:{
        type: String,
        required: true
    },
    weight:{
        type: String,
        required: true
    },
    flavour:{
        type: String,
        required: true
    },
    price:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    bakeryname:{
        type: mongoose.Schema.Types.String,
        ref: 'Profile'
    }
});

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '..', PRODUCT_PATH));
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
})

productSchema.statics.uploadedProductImage = multer({ storage: storage }).single('productimage');
productSchema.statics.productpath = PRODUCT_PATH;

const Product = mongoose.model('product', productSchema);
module.exports = Product;