const mongoose = require("mongoose")

const connectDB = async()=>{
    try{
        await mongoose.connect('mongodb+srv://chavanseema121:12345@sample.moiscbw.mongodb.net/Hotels')
        console.log("database connected");
    }
    catch(error){
        console.log(error.message);

    }
}
connectDB();

module.exports = connectDB;