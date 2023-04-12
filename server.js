const express = require('express');
const app = express();

app.listen(4000,()=>{
console.log("CONNECTED");})
    
app.get('/', (req, res)=>{
  res.json("hey there welcome to auth")  
})