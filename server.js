const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();

const userRoutes= require('./routes/user')
console.log('MONGO_URI:', process.env.MONGO_URI);
console.log('PORT:', process.env.PORT);

app.use('/api', userRoutes)
mongoose.connect(process.env.MONGO_URI).then(()=> {
 app.listen(process.env.PORT, ()=>{
 console.log("CONNECTED")})
    })
    .catch((error)=>{
        console.log(error)
    })
