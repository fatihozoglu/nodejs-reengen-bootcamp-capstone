const mongoose = require("mongoose");

// Declaring the database connection function and exporting it to use in app.js
exports.connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Successfully connected to database");
  } catch (err) {
    console.log("Database connection failed. Exiting now...");
    console.error(err.message);
    process.exit(1);
  }
};
