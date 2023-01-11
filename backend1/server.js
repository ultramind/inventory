const dotenv = require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
require("./db");

const app = express();

const PORT = process.env.PORT || 8000;

//  connect to DataBase and start server
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
