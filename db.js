const mongoose = require("mongoose")
require('dotenv').config();

const connectDB = async()=>{
    const DBURL=process.env.DB_URL
    try{
        await mongoose.connect(DBURL)
        console.log("database connected");
    }
    catch(error){
        console.log(error.message);

    }
}
connectDB();

module.exports = connectDB;