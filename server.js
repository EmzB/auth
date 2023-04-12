const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();

//const userRoutes= require('./routes/user')
console.log('MONGO_URI:', process.env.MONGO_URI);
console.log('MONGO_URI:', process.env.PORT);



mongoose.connect(process.env.MONGO_URI).then(()=> {
 app.listen(process.env.PORT, () =>{
 console.log("CONNECTED")})
    });