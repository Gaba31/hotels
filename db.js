const mongoose = require('mongoose');

// MongoDB connection URL (corrected format)
const mongoURL = 'mongodb+srv://brijeshgaba99:qwerty12345@cluster0.w3b43.mongodb.net/';



mongoose.connect(mongoURL, {
  useNewUrlParser: true,  // Optional in Mongoose 6+
  useUnifiedTopology: true  // Optional in Mongoose 6+
});

const db = mongoose.connection;

db.on('connected', () => {
  console.log("MongoDB Connected");
});

db.on('error', (e) => {
  console.log("Error Occurred", e);
});

db.on('disconnected', () => {
  console.log("MongoDB Disconnected");
});

module.exports = db;
