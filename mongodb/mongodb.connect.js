const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

async function connect() {
  try {
    await mongoose.connect(process.env.MONGO_DB_CONNECTION_STRING, { useNewUrlParser: true });
  } catch(err) {
    console.error('Error connecting to mongodb');
  }
}

module.exports = { connect };
