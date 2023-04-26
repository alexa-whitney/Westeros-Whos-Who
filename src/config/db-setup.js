const mongoose = require('mongoose');
require('dotenv/config')

// connect to mongo db
const mongoUri = process.env.MONGODB_URI
mongoose.connect(mongoUri)
mongoose.connect("mongodb://localhost:27017/messages-db?authSource=admin", { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('error', () => {
  console.log(error);
  throw new Error(`unable to connect to database: ${mongoUri}`)
})

module.exports = mongoose.connection