const express = require("express");
const app = express();

const db = require("./db");



const bodyParser = require("body-parser");
app.use(bodyParser.json());
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


app.listen(3000, () => {
  console.log("server is running 3000");
});
