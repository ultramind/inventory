const mongoose = require("mongoose");

const mongoConnect = mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Database Connected"))
  .catch((error) => console.log(error.message));

module.exports = mongoConnect;
