const mongoose = require('mongoose');

async function connect() {
  try {
    await mongoose.connect('mongodb://admin:admin@localhost:27017/admin', { useNewUrlParser: true });
  } catch(err) {
    console.error('Error connecting to mongodb');
    console.error(err);
  }
}

module.exports = { connect };

/**
 * Connection string used to connect on docker mongo container (localhost)
 * mongodb://admin:admin@localhost:27017/admin
 */
