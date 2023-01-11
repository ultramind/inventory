const express = require("express");
require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
require("./db");

// middlewares
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(bodyParser.json())

// Routes
app.get("/", (req, res)=>{
  res.send("Home Page")
})


const PORT = process.env.PORT;
app.listen(PORT, () => console.log("Server runing on port " + PORT));
