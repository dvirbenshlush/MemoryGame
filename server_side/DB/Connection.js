const mongoose = require("mongoose");

const URI = "mongodb+srv://sdy2020:sdy2020@cluster0.zz8f2.mongodb.net/<dbname>?retryWrites=true&w=majority";

const connectDB = async() => {
    await mongoose.connect(URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });
    console.log("mongo connected")
}

module.exports = connectDB;