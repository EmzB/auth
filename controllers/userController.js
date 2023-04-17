const User = require('../models/userSchema');


//signup
const signup = async(req, res)=>{
const {email, password}= req.body;

try{
 const user = await User.signup(email, password);
 res.status(200).json(`${email} successfuly signed up`);
}

catch (error){
 res.status(400).json(error.message);
}}

//login
const login = async (req, res) =>  
{
res.json("hi you're logged in");
}
// dashboard
const home = async(req, res)=>{
    res.json("finally");
}



module.exports= {login, signup, home};