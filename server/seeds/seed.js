const db = require('../config/connection');
const { productSchema } = require('../models');

const productData = require('./productData.json');

db.once('open', async () => {
  await productSchema.deleteMany({});

  // const products = 
  await productSchema.insertMany(productData);

  console.log('Products seeded!');
  process.exit(0);
});
