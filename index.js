const express = require("express");
const app = express();

const db = require("./db");
require('dotenv').config();
const passport = require('./auth');



const bodyParser = require("body-parser");
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000

// Middleware fuction

const logReq=(req,res,next) => {
  console.log(`[${new Date().toLocaleString()}] requext made to : ${req.originalUrl}`);
  next();
}
app.use(logReq);

//app.use(express.json());

app.use(passport.initialize());
const localAuthMiddleware = passport.authenticate('local', {session: false})

app.get("/",(req, res) => {
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
