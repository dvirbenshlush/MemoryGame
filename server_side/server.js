const { request } = require("express");
const express = require("express");
const app = express();
const port = process.env.Port || 5000;
const connectDB = require("./DB/Connection");

connectDB();
app.use(express.json({ extanded: false }))
app.use('/api/userModel', require('./Api/User'));
app.listen(port, () => console.log("Server connected"));