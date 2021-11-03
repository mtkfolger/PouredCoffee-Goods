const { Schema, model } = require('mongoose');

const productSchema = new Schema({

  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true
  },
  roast: {
    type: String,
    required: false
  },

});

const Product = model('Product', productSchema);

module.exports = Product;


