const db = require('../config/connection');
const { productSchema } = require('../models');

const techData = require('./techData.json');

db.once('open', async () => {
  await productSchema.deleteMany({});

  const technologies = await productSchema.insertMany(techData);

  console.log('Technologies seeded!');
  process.exit(0);
});
