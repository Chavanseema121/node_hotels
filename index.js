const express = require("express");
const app = express();

const db = require("./db");
require('dotenv').config();



const bodyParser = require("body-parser");
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000

//app.use(express.json());

app.get("/", (req, res) => {
  res.send("helllo world");
});



// Import the router files

const personRoutes = require("./routes/personRoutes");
const menuItemRoutes = require("./routes/menuItemRoutes")
// use the router
app.use("/person",personRoutes);
app.use("/menu",menuItemRoutes);

 
app.listen(PORT, () => {
  console.log("server is running 3000");
});
